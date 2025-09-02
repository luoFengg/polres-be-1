const prisma = require("../../../config/prisma");
const { PiutangCategories } = require("@prisma/client");

/**
 * Get all active piutang for a specific member
 * Menampilkan semua piutang yang masih aktif untuk anggota tertentu
 */
const getActivePiutangByMemberId = async (req, res) => {
  try {
    const { memberId } = req.params;

    if (!memberId) {
      return res.status(400).json({
        success: false,
        message: "Member ID is required",
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
      select: {
        id: true,
        nama: true,
        nrp: true,
        role: true,
        status: true,
      },
    });

    if (!anggota) {
      return res.status(404).json({
        success: false,
        message: `Anggota dengan ID/NRP ${memberId} tidak ditemukan`,
      });
    }

    // Get all active piutang for this member
    const activePiutang = await prisma.piutang.findMany({
      where: {
        anggotaId: anggota.id,
        status: "active",
      },
      select: {
        id: true,
        jenis: true,
        besarPinjaman: true,
        totalPiutang: true,
        biayaAngsuran: true,
        sisaPiutang: true,
        sisaAngsuran: true,
        totalAngsuran: true,
        status: true,
        createdAt: true,
        updatedAt: true,
      },
      orderBy: [
        { jenis: "asc" }, // Sort by jenis: kredit, motor, toko
        { createdAt: "desc" }, // Then by newest first
      ],
    });

    // Group piutang by jenis untuk summary
    const piutangByJenis = {
      kredit: activePiutang.filter((p) => p.jenis === PiutangCategories.kredit),
      motor: activePiutang.filter((p) => p.jenis === PiutangCategories.motor),
      toko: activePiutang.filter((p) => p.jenis === PiutangCategories.toko),
    };

    // Calculate summary
    const summary = {
      totalActivePiutang: activePiutang.length,
      totalSisaPiutang: activePiutang.reduce(
        (sum, p) => sum + parseFloat(p.sisaPiutang),
        0
      ),
      byJenis: {
        kredit: {
          count: piutangByJenis.kredit.length,
          totalSisa: piutangByJenis.kredit.reduce(
            (sum, p) => sum + parseFloat(p.sisaPiutang),
            0
          ),
        },
        motor: {
          count: piutangByJenis.motor.length,
          totalSisa: piutangByJenis.motor.reduce(
            (sum, p) => sum + parseFloat(p.sisaPiutang),
            0
          ),
        },
        toko: {
          count: piutangByJenis.toko.length,
          totalSisa: piutangByJenis.toko.reduce(
            (sum, p) => sum + parseFloat(p.sisaPiutang),
            0
          ),
        },
      },
    };

    return res.status(200).json({
      success: true,
      message: `Found ${activePiutang.length} active piutang for ${anggota.nama}`,
      data: {
        member: {
          id: anggota.id,
          nama: anggota.nama,
          nrp: anggota.nrp,
          role: anggota.role,
          status: anggota.status,
        },
        summary,
        activePiutang,
        piutangByJenis,
      },
    });
  } catch (error) {
    console.error("Get active piutang by member ID error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
};

module.exports = { getActivePiutangByMemberId };
