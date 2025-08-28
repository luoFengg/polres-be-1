const prisma = require("../../../config/prisma");

/**
 * Get piutang detail with member info - separate endpoint untuk data lengkap
 */
const getPiutangDetail = async (req, res) => {
  try {
    const { piutangId } = req.params;

    if (!piutangId) {
      return res.status(400).json({
        success: false,
        message: "Piutang ID is required",
      });
    }

    const piutang = await prisma.piutang.findUnique({
      where: { id: piutangId },
      select: {
        id: true,
        anggotaId: true,
        jenis: true,
        besarPinjaman: true,
        totalPiutang: true,
        biayaAngsuran: true,
        sisaPiutang: true,
        sisaAngsuran: true,
        totalAngsuran: true,
        status: true,
        completedAt: true,
        createdAt: true,
        updatedAt: true,
        anggota: {
          select: {
            id: true,
            nama: true,
            nrp: true,
          },
        },
      },
    });

    if (!piutang) {
      return res.status(404).json({
        success: false,
        message: "Piutang tidak ditemukan",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Piutang detail retrieved successfully",
      data: { piutang },
    });
  } catch (error) {
    console.error("Get piutang detail error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

module.exports = { getPiutangDetail };
