const prisma = require("../../../config/prisma");

const updatePiutangByUserId = async (req, res) => {
  try {
    const { memberId, piutangId } = req.params;
    const {
      type, // "payment", "adjustment", "pelunasan"
      amount,
      description,
      // Optional: untuk update data piutang langsung
      sisaPiutang,
      sisaAngsuran,
      status,
    } = req.body;

    // Validasi input
    if (!memberId) {
      return res.status(400).json({
        success: false,
        message: "Member ID is required",
      });
    }

    if (!piutangId) {
      return res.status(400).json({
        success: false,
        message: "Piutang ID is required",
      });
    }

    // Validasi type wajib ada
    if (!type) {
      return res.status(400).json({
        success: false,
        message: "Type wajib diisi",
      });
    }

    // Validasi type valid
    const validTypes = ["payment", "adjustment", "pelunasan"];
    if (!validTypes.includes(type)) {
      return res.status(400).json({
        success: false,
        message: "Type harus salah satu dari: payment, adjustment, pelunasan",
      });
    }

    // Validasi amount untuk type tertentu
    if (type === "payment" && !amount) {
      return res.status(400).json({
        success: false,
        message: "Amount wajib diisi untuk type 'payment'",
      });
    }

    // Validasi untuk adjustment - minimal salah satu field harus ada
    if (
      type === "adjustment" &&
      sisaPiutang === undefined &&
      sisaAngsuran === undefined
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Untuk adjustment, minimal sisaPiutang atau sisaAngsuran harus diisi",
      });
    }

    // Cari piutang yang akan diupdate dan validasi kepemilikan
    const existingPiutang = await prisma.piutang.findFirst({
      where: {
        id: piutangId,
        anggotaId: memberId, // Pastikan piutang ini milik member yang dimaksud
      },
      include: {
        anggota: {
          select: { nama: true, nrp: true },
        },
      },
    });

    if (!existingPiutang) {
      return res.status(404).json({
        success: false,
        message: "Piutang tidak ditemukan atau bukan milik anggota tersebut",
      });
    }

    // Cek apakah piutang masih aktif
    if (existingPiutang.status !== "active") {
      return res.status(400).json({
        success: false,
        message: `Piutang sudah ${existingPiutang.status}, tidak bisa diupdate`,
      });
    }

    // Validasi sisaAngsuran tidak boleh melebihi totalAngsuran
    if (
      sisaAngsuran !== undefined &&
      sisaAngsuran > existingPiutang.totalAngsuran
    ) {
      return res.status(400).json({
        success: false,
        message: `Sisa angsuran (${sisaAngsuran}) tidak boleh lebih besar dari total angsuran (${existingPiutang.totalAngsuran})`,
      });
    }

    // Hitung sisa piutang dan angsuran baru
    let newSisaPiutang = existingPiutang.sisaPiutang;
    let newSisaAngsuran = existingPiutang.sisaAngsuran;
    let newStatus = existingPiutang.status;
    let completedAt = existingPiutang.completedAt;

    // Logic berdasarkan type transaksi
    let calculatedAmount = amount; // Default amount untuk payment

    switch (type) {
      case "payment":
        newSisaPiutang = Math.max(0, newSisaPiutang - amount);
        if (newSisaAngsuran > 0) {
          newSisaAngsuran = Math.max(0, newSisaAngsuran - 1);
        }
        break;
      case "adjustment":
        // Manual adjustment - hitung amount otomatis HANYA jika sisaPiutang berubah
        if (sisaPiutang !== undefined) {
          // Hitung selisih antara sisa piutang baru dengan yang lama
          calculatedAmount = sisaPiutang - existingPiutang.sisaPiutang;
          newSisaPiutang = sisaPiutang;
        } else {
          // Jika sisaPiutang tidak diubah, amount = 0 (tidak ada perubahan finansial)
          calculatedAmount = 0;
        }

        // Update sisaAngsuran jika disediakan (terpisah dari sisaPiutang)
        if (sisaAngsuran !== undefined) {
          newSisaAngsuran = sisaAngsuran;
        }
        break;
      case "pelunasan":
        // Pelunasan langsung - amount pelunasan = sisa piutang saat ini
        const amountPelunasan = existingPiutang.sisaPiutang;
        newSisaPiutang = 0;
        newSisaAngsuran = 0;
        newStatus = "completed";
        completedAt = new Date();
        // Simpan amount pelunasan untuk dicatat di transaction
        calculatedAmount = -amountPelunasan; // Negatif karena mengurangi piutang
        break;
    }

    // Cek apakah piutang sudah lunas (kecuali untuk pelunasan yang sudah di-handle di switch)
    if (type !== "pelunasan" && (newSisaPiutang <= 0 || newSisaAngsuran <= 0)) {
      newStatus = "completed";
      completedAt = new Date();
      newSisaPiutang = 0;
      newSisaAngsuran = 0;
    }

    // Override manual jika admin set status
    if (status && ["active", "completed", "cancelled"].includes(status)) {
      newStatus = status;
      if (status === "completed") {
        completedAt = new Date();
        newSisaPiutang = 0;
        newSisaAngsuran = 0;
      }
    }

    // Gunakan transaction untuk atomicity
    const result = await prisma.$transaction(async (tx) => {
      // 1. Create transaction record
      const transaction = await tx.piutangTransaction.create({
        data: {
          piutangId: piutangId,
          type: type,
          amount:
            type === "pelunasan"
              ? calculatedAmount // Sudah negatif dari switch case
              : type === "payment"
              ? -Math.abs(amount) // Negatif karena mengurangi piutang
              : type === "adjustment"
              ? calculatedAmount // Bisa positif atau negatif tergantung apakah naik/turun
              : amount,
          description:
            description ||
            (type === "pelunasan"
              ? `Pelunasan piutang sebesar Rp ${Math.abs(
                  calculatedAmount
                ).toLocaleString("id-ID")}`
              : type === "adjustment"
              ? (() => {
                  // Generate deskripsi berdasarkan perubahan yang dilakukan
                  const changes = [];
                  if (sisaPiutang !== undefined) {
                    if (calculatedAmount > 0) {
                      changes.push(
                        `Penambahan sisa piutang sebesar Rp ${Math.abs(
                          calculatedAmount
                        ).toLocaleString("id-ID")}`
                      );
                    } else if (calculatedAmount < 0) {
                      changes.push(
                        `Pengurangan sisa piutang sebesar Rp ${Math.abs(
                          calculatedAmount
                        ).toLocaleString("id-ID")}`
                      );
                    } else {
                      changes.push(
                        `Sisa piutang tetap Rp ${sisaPiutang.toLocaleString(
                          "id-ID"
                        )}`
                      );
                    }
                  }
                  if (sisaAngsuran !== undefined) {
                    changes.push(
                      `Sisa angsuran diubah menjadi ${sisaAngsuran} kali`
                    );
                  }
                  return `Manual adjustment: ${changes.join(", ")}`;
                })()
              : `${type} sebesar Rp ${amount.toLocaleString("id-ID")}`),
          processedBy: req.authenticatedUser.id,
        },
      });

      // 2. Update piutang
      const updatedPiutang = await tx.piutang.update({
        where: { id: piutangId },
        data: {
          sisaPiutang: newSisaPiutang,
          sisaAngsuran: newSisaAngsuran,
          status: newStatus,
          completedAt: completedAt,
        },
        select: {
          id: true,
          anggotaId: true,
          jenis: true,
          besarPinjaman: true,
          totalPiutang: true, // Tambahkan field totalPiutang
          biayaAngsuran: true,
          sisaPiutang: true,
          sisaAngsuran: true,
          totalAngsuran: true,
          status: true,
          completedAt: true,
          createdAt: true,
          updatedAt: true,
          anggota: {
            select: { nama: true, nrp: true },
          },
          transactions: {
            orderBy: { createdAt: "desc" },
            take: 5,
            select: {
              id: true,
              type: true,
              amount: true,
              description: true,
              createdAt: true,
              processor: {
                select: { nama: true, nrp: true },
              },
            },
          },
        },
      });

      return { transaction, updatedPiutang };
    });

    return res.status(200).json({
      success: true,
      message: `Piutang berhasil diupdate - ${type}`,
      data: {
        piutang: result.updatedPiutang,
        latestTransaction: result.transaction,
      },
    });
  } catch (error) {
    console.error("Update piutang error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

module.exports = { updatePiutangByUserId };
