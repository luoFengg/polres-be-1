const prisma = require("../../../config/prisma");

const updateSimpananAnggota = async (req, res) => {
  try {
    const { memberId } = req.params;
    const {
      type, // "setoran", "penarikan", "koreksi"
      category, // "pokok", "wajib", "sukarela", "thr"
      amount,
      description,
    } = req.body;

    // Validasi input
    if (!type || !category || !amount) {
      return res.status(400).json({
        success: false,
        message: "Type, category, dan amount wajib diisi",
      });
    }

    // Validasi type
    const validTypes = ["setoran", "penarikan", "koreksi"];
    if (!validTypes.includes(type)) {
      return res.status(400).json({
        success: false,
        message: "Type harus salah satu dari: setoran, penarikan, koreksi",
      });
    }

    // Validasi category
    const validCategories = ["pokok", "wajib", "sukarela", "thr"];
    if (!validCategories.includes(category)) {
      return res.status(400).json({
        success: false,
        message: "Category harus salah satu dari: pokok, wajib, sukarela, thr",
      });
    }

    // Validasi amount berdasarkan type
    const numAmount = parseFloat(amount);
    if (isNaN(numAmount)) {
      return res.status(400).json({
        success: false,
        message: "Amount harus berupa angka yang valid",
      });
    }

    // Validasi amount berdasarkan type transaksi
    if (type === "koreksi") {
      // Koreksi bisa positif atau negatif, tapi tidak boleh 0
      if (numAmount === 0) {
        return res.status(400).json({
          success: false,
          message: "Amount koreksi tidak boleh 0",
        });
      }
    } else {
      // Setoran dan penarikan harus positif
      if (numAmount <= 0) {
        return res.status(400).json({
          success: false,
          message: "Amount harus berupa angka positif",
        });
      }
    }

    // Validasi khusus: simpanan pokok tidak bisa ditarik

    // Cek apakah member exists
    const member = await prisma.anggota.findUnique({
      where: { id: memberId },
      select: { id: true, nama: true, nrp: true, status: true },
    });

    if (!member) {
      return res.status(404).json({
        success: false,
        message: "Anggota tidak ditemukan",
      });
    }

    // Validasi penarikan simpanan pokok hanya bisa jika status anggota nonaktif
    // Tidak bisa penarikan apapun jika status suspend
    if (type === "penarikan" && member.status === "suspend") {
      return res.status(400).json({
        success: false,
        message:
          "Anggota dengan status suspend tidak dapat melakukan penarikan simpanan apapun.",
      });
    }
    // Tidak bisa penarikan simpanan pokok jika status aktif
    if (
      type === "penarikan" &&
      category === "pokok" &&
      member.status === "aktif"
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Simpanan pokok hanya dapat ditarik jika status anggota sudah nonaktif. Status saat ini: aktif",
      });
    }
    // Get atau create simpanan untuk member
    let simpanan = await prisma.simpanan.findUnique({
      where: { anggotaId: memberId },
    });

    if (!simpanan) {
      simpanan = await prisma.simpanan.create({
        data: {
          anggotaId: memberId,
          simpananPokok: 0,
          simpananWajib: 0,
          simpananSukarela: 0,
          tabunganHariRaya: 0,
          lastUpdatedBy: req.authenticatedUser.id,
        },
      });
    }

    // Mapping category ke field database
    const categoryFieldMap = {
      pokok: "simpananPokok",
      wajib: "simpananWajib",
      sukarela: "simpananSukarela",
      thr: "tabunganHariRaya",
    };

    const fieldName = categoryFieldMap[category];
    const currentBalance = parseFloat(simpanan[fieldName]);

    // Hitung balance baru berdasarkan type
    let newBalanceAmount;
    let transactionAmount;

    switch (type) {
      case "setoran":
        newBalanceAmount = currentBalance + numAmount;
        transactionAmount = numAmount; // Positif
        break;
      case "penarikan":
        if (currentBalance < numAmount) {
          return res.status(400).json({
            success: false,
            message: `Saldo ${category} tidak mencukupi. Saldo saat ini: Rp ${currentBalance.toLocaleString(
              "id-ID"
            )}`,
          });
        }
        newBalanceAmount = currentBalance - numAmount;
        transactionAmount = -numAmount; // Negatif
        break;
      case "koreksi":
        // Koreksi bisa positif atau negatif
        newBalanceAmount = currentBalance + numAmount;
        transactionAmount = numAmount;

        // Pastikan hasil koreksi tidak negatif
        if (newBalanceAmount < 0) {
          return res.status(400).json({
            success: false,
            message: `Koreksi akan menghasilkan saldo negatif. Saldo saat ini: Rp ${currentBalance.toLocaleString(
              "id-ID"
            )}`,
          });
        }
        break;
    }

    // Gunakan transaction untuk atomicity
    const result = await prisma.$transaction(async (tx) => {
      // 1. Create transaction record
      const transaction = await tx.simpananTransaction.create({
        data: {
          anggotaId: memberId,
          type: type,
          category: category,
          amount: transactionAmount,
          balanceBefore: currentBalance,
          balanceAfter: newBalanceAmount,
          description:
            description ||
            `${type} ${category} sebesar Rp ${numAmount.toLocaleString(
              "id-ID"
            )}`,
          processedBy: req.authenticatedUser.id,
          isSystemGenerated: false,
        },
      });

      // 2. Update simpanan balance
      const updateData = {
        [fieldName]: newBalanceAmount,
        lastUpdatedBy: req.authenticatedUser.id,
      };

      const updatedSimpanan = await tx.simpanan.update({
        where: { anggotaId: memberId },
        data: updateData,
        include: {
          anggota: {
            select: { nama: true, nrp: true },
          },
          updatedBy: {
            select: { nama: true, nrp: true },
          },
        },
      });

      return { transaction, updatedSimpanan };
    });

    // Format response
    const newBalance = {
      simpananPokok: result.updatedSimpanan.simpananPokok.toString(),
      simpananWajib: result.updatedSimpanan.simpananWajib.toString(),
      simpananSukarela: result.updatedSimpanan.simpananSukarela.toString(),
      tabunganHariRaya: result.updatedSimpanan.tabunganHariRaya.toString(),
    };

    const totalSimpanan = Object.values(newBalance).reduce(
      (sum, val) => sum + parseFloat(val),
      0
    );

    return res.status(201).json({
      success: true,
      message: `${
        type.charAt(0).toUpperCase() + type.slice(1)
      } simpanan ${category} berhasil`,
      data: {
        transaction: {
          id: result.transaction.id,
          anggotaId: result.transaction.anggotaId,
          type: result.transaction.type,
          category: result.transaction.category,
          amount: result.transaction.amount.toString(),
          balanceBefore: result.transaction.balanceBefore.toString(),
          balanceAfter: result.transaction.balanceAfter.toString(),
          description: result.transaction.description,
          processedBy: req.authenticatedUser.id,
          createdAt: result.transaction.createdAt,
        },
        member: {
          nama: result.updatedSimpanan.anggota.nama,
          nrp: result.updatedSimpanan.anggota.nrp,
        },
        newBalance: {
          ...newBalance,
          totalSimpanan: totalSimpanan.toString(),
        },
      },
    });
  } catch (error) {
    console.error("Error in updateSimpananAnggota:", error);
    return res.status(500).json({
      success: false,
      message: "Gagal memproses transaksi simpanan",
      error: error.message,
    });
  }
};

module.exports = {
  updateSimpananAnggota,
};
