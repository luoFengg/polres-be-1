const prisma = require("../../../config/prisma");
const { PiutangCategories } = require("@prisma/client");
const { nanoid } = require("nanoid");

const addPiutangByUserId = async (req, res) => {
  try {
    const { memberId } = req.params; // Ambil dari URL parameter
    const {
      jenis,
      besarPinjaman,
      totalPiutang, // Total yang harus dibayar (pokok + bunga)
      biayaAngsuran,
      totalAngsuran,
      description,
    } = req.body;

    // Validasi input
    if (
      !memberId ||
      !jenis ||
      !besarPinjaman ||
      !totalPiutang ||
      !biayaAngsuran ||
      !totalAngsuran
    ) {
      return res.status(400).json({
        success: false,
        message:
          "jenis, besarPinjaman, totalPiutang, biayaAngsuran, dan totalAngsuran wajib diisi",
      });
    }

    // Validasi jenis piutang harus sesuai enum
    const validJenis = Object.values(PiutangCategories);
    if (!validJenis.includes(jenis)) {
      return res.status(400).json({
        success: false,
        message: `Jenis piutang harus salah satu dari: ${validJenis.join(
          ", "
        )}`,
      });
    }

    // Validasi angka
    if (
      besarPinjaman <= 0 ||
      totalPiutang <= 0 ||
      biayaAngsuran <= 0 ||
      totalAngsuran <= 0
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Nilai pinjaman, total piutang, angsuran, dan total angsuran harus lebih dari 0",
      });
    }

    // Validasi logika: totalPiutang harus >= besarPinjaman
    if (totalPiutang < besarPinjaman) {
      return res.status(400).json({
        success: false,
        message: "Total piutang tidak boleh kurang dari besar pinjaman",
      });
    }

    // Cek apakah anggota exists berdasarkan ID atau NRP (smart detection)
    let whereClause;
    if (memberId.length < 10) {
      // Kemungkinan NRP
      whereClause = { nrp: memberId };
    } else {
      // Kemungkinan ID
      whereClause = { id: memberId };
    }

    const anggota = await prisma.anggota.findUnique({
      where: whereClause,
      select: { id: true, nama: true, nrp: true, role: true },
    });

    if (!anggota) {
      return res.status(404).json({
        success: false,
        message: `Anggota dengan ID/NRP ${memberId} tidak ditemukan`,
      });
    }

    // Business rule: Cek piutang aktif berdasarkan jenis
    // - KREDIT: Harus lunas dulu sebelum bisa kredit lagi
    // - TOKO: Boleh utang lagi meskipun utang toko sebelumnya belum lunas
    // - MOTOR: Harus lunas dulu sebelum bisa motor lagi (sama seperti kredit)

    if (jenis === PiutangCategories.kredit) {
      // Untuk kredit: cek apakah ada piutang kredit yang masih aktif
      const activeKreditPiutang = await prisma.piutang.findFirst({
        where: {
          anggotaId: anggota.id,
          jenis: PiutangCategories.kredit,
          status: "active",
        },
        select: { id: true, jenis: true, sisaPiutang: true },
      });

      if (activeKreditPiutang) {
        return res.status(400).json({
          success: false,
          message:
            "Anggota masih memiliki piutang kredit aktif. Lunasi piutang kredit terlebih dahulu sebelum mengajukan kredit baru.",
          data: {
            activePiutang: {
              id: activeKreditPiutang.id,
              jenis: activeKreditPiutang.jenis,
              sisaPiutang: activeKreditPiutang.sisaPiutang,
            },
          },
        });
      }
    } else if (jenis === PiutangCategories.motor) {
      // Untuk motor: cek apakah ada piutang motor yang masih aktif
      const activeMotorPiutang = await prisma.piutang.findFirst({
        where: {
          anggotaId: anggota.id,
          jenis: PiutangCategories.motor,
          status: "active",
        },
        select: { id: true, jenis: true, sisaPiutang: true },
      });

      if (activeMotorPiutang) {
        return res.status(400).json({
          success: false,
          message:
            "Anggota masih memiliki piutang motor aktif. Lunasi piutang motor terlebih dahulu sebelum mengajukan kredit motor baru.",
          data: {
            activePiutang: {
              id: activeMotorPiutang.id,
              jenis: activeMotorPiutang.jenis,
              sisaPiutang: activeMotorPiutang.sisaPiutang,
            },
          },
        });
      }
    }
    // Untuk jenis TOKO: tidak ada pembatasan, boleh multiple piutang toko aktif

    // Hitung sisa piutang dan angsuran
    const sisaPiutang = parseFloat(totalPiutang); // Gunakan totalPiutang yang sudah termasuk bunga
    const sisaAngsuran = parseInt(totalAngsuran);

    // customId pake nanoid
    const customId = "piutang-" + nanoid(16);

    // Gunakan transaction untuk atomicity
    const result = await prisma.$transaction(async (tx) => {
      // 1. Buat piutang baru
      const newPiutang = await tx.piutang.create({
        data: {
          id: customId,
          anggotaId: anggota.id,
          jenis: jenis, // Menggunakan enum PiutangCategories
          besarPinjaman: parseFloat(besarPinjaman),
          totalPiutang: parseFloat(totalPiutang), // Total yang harus dibayar
          biayaAngsuran: parseFloat(biayaAngsuran),
          sisaPiutang,
          sisaAngsuran,
          totalAngsuran: parseInt(totalAngsuran),
          status: "active",
        },
        include: {
          anggota: {
            select: { nama: true, nrp: true },
          },
        },
      });

      // 2. Buat transaction record untuk pencatatan
      const transaction = await tx.piutangTransaction.create({
        data: {
          piutangId: newPiutang.id,
          type: "adjustment",
          amount: parseFloat(totalPiutang), // Catat total piutang yang harus dibayar
          description:
            description ||
            `Piutang baru dibuat - ${jenis} (Pokok: ${besarPinjaman}, Total: ${totalPiutang})`,
          processedBy: req.authenticatedUser.id,
        },
      });

      return { newPiutang, transaction };
    });

    return res.status(201).json({
      success: true,
      message: "Piutang berhasil ditambahkan",
      data: {
        piutang: result.newPiutang,
        initialTransaction: result.transaction,
      },
    });
  } catch (error) {
    console.error("Add piutang error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

module.exports = { addPiutangByUserId };
