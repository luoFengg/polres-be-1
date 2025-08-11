const prisma = require("../../../config/prisma");

// Handler untuk mendapatkan summary simpanan semua anggota (admin only)
const getAllMembersSimpananSummary = async (req, res) => {
  try {
    const { page = 1, limit = 20, search } = req.query;

    // Build where conditions
    const whereConditions = {};

    if (search) {
      whereConditions.OR = [
        { nama: { contains: search, mode: "insensitive" } },
        { nrp: { contains: search, mode: "insensitive" } },
      ];
    }

    // Calculate pagination
    const pageNum = parseInt(page);
    const limitNum = parseInt(limit);
    const skip = (pageNum - 1) * limitNum;

    // Get members with simpanan
    const [members, totalRecords] = await Promise.all([
      prisma.anggota.findMany({
        where: whereConditions,
        include: {
          simpanan: {
            include: {
              simpananTransactions: {
                orderBy: { createdAt: "desc" },
                take: 1,
              },
            },
          },
        },
        orderBy: { nama: "asc" },
        skip,
        take: limitNum,
      }),
      prisma.anggota.count({
        where: whereConditions,
      }),
    ]);

    // Calculate summary totals
    const summary = await prisma.simpanan.aggregate({
      _sum: {
        simpananPokok: true,
        simpananWajib: true,
        simpananSukarela: true,
        tabunganHariRaya: true,
      },
    });

    const totalPages = Math.ceil(totalRecords / limitNum);

    const membersData = members.map((member) => {
      const simpanan = member.simpanan;
      const totalSimpanan = simpanan
        ? parseFloat(simpanan.simpananPokok) +
          parseFloat(simpanan.simpananWajib) +
          parseFloat(simpanan.simpananSukarela) +
          parseFloat(simpanan.tabunganHariRaya)
        : 0;

      return {
        id: member.id,
        nrp: member.nrp,
        nama: member.nama,
        jabatan: member.jabatan,
        simpanan: simpanan
          ? {
              simpananPokok: simpanan.simpananPokok.toString(),
              simpananWajib: simpanan.simpananWajib.toString(),
              simpananSukarela: simpanan.simpananSukarela.toString(),
              tabunganHariRaya: simpanan.tabunganHariRaya.toString(),
              totalSimpanan: totalSimpanan.toString(),
            }
          : {
              simpananPokok: "0",
              simpananWajib: "0",
              simpananSukarela: "0",
              tabunganHariRaya: "0",
              totalSimpanan: "0",
            },
        lastActivity:
          simpanan?.transactions?.[0]?.createdAt || simpanan?.createdAt || null,
      };
    });

    // Calculate grand totals
    const grandTotal = {
      totalMembers: totalRecords,
      totalSimpananPokok: (summary._sum.simpananPokok || 0).toString(),
      totalSimpananWajib: (summary._sum.simpananWajib || 0).toString(),
      totalSimpananSukarela: (summary._sum.simpananSukarela || 0).toString(),
      totalTabunganHariRaya: (summary._sum.tabunganHariRaya || 0).toString(),
      grandTotal: (
        parseFloat(summary._sum.simpananPokok || 0) +
        parseFloat(summary._sum.simpananWajib || 0) +
        parseFloat(summary._sum.simpananSukarela || 0) +
        parseFloat(summary._sum.tabunganHariRaya || 0)
      ).toString(),
    };

    res.json({
      success: true,
      data: {
        members: membersData,
        summary: grandTotal,
        pagination: {
          currentPage: pageNum,
          totalPages,
          totalRecords,
          limit: limitNum,
          hasNext: pageNum < totalPages,
          hasPrev: pageNum > 1,
        },
      },
    });
  } catch (error) {
    console.error("Error in getAllMembersSimpananSummary:", error);
    res.status(500).json({
      success: false,
      message: "Gagal mengambil summary simpanan",
      error: error.message,
    });
  }
};

module.exports = {
  getAllMembersSimpananSummary,
};
