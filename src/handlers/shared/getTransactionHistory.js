const prisma = require("../../config/prisma");

/**
 * Handler untuk mengambil history transaksi simpanan member
 */
const getSimpananHistory = async (req, res) => {
  try {
    const { memberId } = req.params;
    const {
      limit = "20",
      page = "1",
      type, // 'setoran', 'penarikan', 'koreksi'
      category, // 'simpanan_pokok', 'simpanan_wajib', etc
      startDate,
      endDate,
    } = req.query;

    if (!memberId) {
      return res.status(400).json({
        success: false,
        message: "Member ID diperlukan",
      });
    }

    // Cek apakah member ada
    const member = await prisma.anggota.findFirst({
      where: {
        OR: [{ id: memberId }, { nrp: memberId }],
      },
      select: { id: true, nama: true, nrp: true },
    });

    if (!member) {
      return res.status(404).json({
        success: false,
        message: "Member tidak ditemukan",
      });
    }

    // Build where clause untuk filtering
    let whereClause = {
      simpanan: {
        anggotaId: member.id,
      },
    };

    // Filter by type
    if (type) {
      whereClause.type = type;
    }

    // Filter by category
    if (category) {
      whereClause.category = category;
    }

    // Filter by date range
    if (startDate || endDate) {
      whereClause.createdAt = {};
      if (startDate) {
        whereClause.createdAt.gte = new Date(startDate);
      }
      if (endDate) {
        whereClause.createdAt.lte = new Date(endDate);
      }
    }

    // Pagination
    const pageNumber = parseInt(page);
    const limitNumber = parseInt(limit);
    const skip = (pageNumber - 1) * limitNumber;

    // Get transactions with count
    const [transactions, totalCount] = await Promise.all([
      prisma.simpananTransaction.findMany({
        where: whereClause,
        select: {
          id: true,
          type: true,
          category: true,
          amount: true,
          balanceBefore: true,
          balanceAfter: true,
          description: true,
          isSystemGenerated: true,
          createdAt: true,
          processor: {
            select: {
              id: true,
              nama: true,
              nrp: true,
            },
          },
        },
        orderBy: { createdAt: "desc" },
        skip,
        take: limitNumber,
      }),
      prisma.simpananTransaction.count({
        where: whereClause,
      }),
    ]);

    // Calculate statistics
    const stats = await prisma.simpananTransaction.aggregate({
      where: {
        simpanan: { anggotaId: member.id },
      },
      _sum: {
        amount: true,
      },
      _count: {
        id: true,
      },
    });

    const typeStats = await prisma.simpananTransaction.groupBy({
      by: ["type"],
      where: {
        simpanan: { anggotaId: member.id },
      },
      _sum: {
        amount: true,
      },
      _count: {
        id: true,
      },
    });

    return res.status(200).json({
      success: true,
      message: "History transaksi simpanan berhasil diambil",
      data: {
        member: {
          id: member.id,
          nama: member.nama,
          nrp: member.nrp,
        },
        transactions,
        pagination: {
          currentPage: pageNumber,
          totalPages: Math.ceil(totalCount / limitNumber),
          totalTransactions: totalCount,
          limit: limitNumber,
          hasNext: pageNumber * limitNumber < totalCount,
          hasPrev: pageNumber > 1,
        },
        statistics: {
          total: {
            transactions: stats._count.id,
            amount: stats._sum.amount?.toString() || "0",
          },
          byType: typeStats.map((stat) => ({
            type: stat.type,
            count: stat._count.id,
            amount: stat._sum.amount?.toString() || "0",
          })),
        },
      },
    });
  } catch (error) {
    console.error("Get simpanan history error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

/**
 * Handler untuk mengambil history transaksi piutang member
 */
const getPiutangHistory = async (req, res) => {
  try {
    const { memberId } = req.params;
    const {
      limit = "20",
      page = "1",
      type, // 'pembayaran', 'pinjaman', 'koreksi'
      piutangId, // filter by specific piutang
      startDate,
      endDate,
    } = req.query;

    if (!memberId) {
      return res.status(400).json({
        success: false,
        message: "Member ID diperlukan",
      });
    }

    // Cek apakah member ada
    const member = await prisma.anggota.findFirst({
      where: {
        OR: [{ id: memberId }, { nrp: memberId }],
      },
      select: { id: true, nama: true, nrp: true },
    });

    if (!member) {
      return res.status(404).json({
        success: false,
        message: "Member tidak ditemukan",
      });
    }

    // Build where clause
    let whereClause = {
      piutang: {
        anggotaId: member.id,
      },
    };

    // Filter by type
    if (type) {
      whereClause.type = type;
    }

    // Filter by specific piutang
    if (piutangId) {
      whereClause.piutangId = piutangId;
    }

    // Filter by date range
    if (startDate || endDate) {
      whereClause.createdAt = {};
      if (startDate) {
        whereClause.createdAt.gte = new Date(startDate);
      }
      if (endDate) {
        whereClause.createdAt.lte = new Date(endDate);
      }
    }

    // Pagination
    const pageNumber = parseInt(page);
    const limitNumber = parseInt(limit);
    const skip = (pageNumber - 1) * limitNumber;

    // Get transactions with count
    const [transactions, totalCount] = await Promise.all([
      prisma.piutangTransaction.findMany({
        where: whereClause,
        select: {
          id: true,
          type: true,
          amount: true,
          description: true,
          createdAt: true,
          processor: {
            select: {
              id: true,
              nama: true,
              nrp: true,
            },
          },
          piutang: {
            select: {
              id: true,
              jenis: true,
              besarPinjaman: true,
              status: true,
            },
          },
        },
        orderBy: { createdAt: "desc" },
        skip,
        take: limitNumber,
      }),
      prisma.piutangTransaction.count({
        where: whereClause,
      }),
    ]);

    // Calculate statistics
    const stats = await prisma.piutangTransaction.aggregate({
      where: {
        piutang: { anggotaId: member.id },
      },
      _sum: {
        amount: true,
      },
      _count: {
        id: true,
      },
    });

    const typeStats = await prisma.piutangTransaction.groupBy({
      by: ["type"],
      where: {
        piutang: { anggotaId: member.id },
      },
      _sum: {
        amount: true,
      },
      _count: {
        id: true,
      },
    });

    return res.status(200).json({
      success: true,
      message: "History transaksi piutang berhasil diambil",
      data: {
        member: {
          id: member.id,
          nama: member.nama,
          nrp: member.nrp,
        },
        transactions,
        pagination: {
          currentPage: pageNumber,
          totalPages: Math.ceil(totalCount / limitNumber),
          totalTransactions: totalCount,
          limit: limitNumber,
          hasNext: pageNumber * limitNumber < totalCount,
          hasPrev: pageNumber > 1,
        },
        statistics: {
          total: {
            transactions: stats._count.id,
            amount: stats._sum.amount?.toString() || "0",
          },
          byType: typeStats.map((stat) => ({
            type: stat.type,
            count: stat._count.id,
            amount: stat._sum.amount?.toString() || "0",
          })),
        },
      },
    });
  } catch (error) {
    console.error("Get piutang history error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

/**
 * Handler untuk mengambil history gabungan transaksi simpanan + piutang
 */
const getCombinedHistory = async (req, res) => {
  try {
    const { memberId } = req.params;
    const {
      limit = "20",
      page = "1",
      transactionType, // 'simpanan', 'piutang', 'all'
      startDate,
      endDate,
    } = req.query;

    if (!memberId) {
      return res.status(400).json({
        success: false,
        message: "Member ID diperlukan",
      });
    }

    // Cek apakah member ada
    const member = await prisma.anggota.findFirst({
      where: {
        OR: [{ id: memberId }, { nrp: memberId }],
      },
      select: { id: true, nama: true, nrp: true },
    });

    if (!member) {
      return res.status(404).json({
        success: false,
        message: "Member tidak ditemukan",
      });
    }

    // Date filter untuk kedua query
    let dateFilter = {};
    if (startDate || endDate) {
      dateFilter.createdAt = {};
      if (startDate) {
        dateFilter.createdAt.gte = new Date(startDate);
      }
      if (endDate) {
        dateFilter.createdAt.lte = new Date(endDate);
      }
    }

    let combinedTransactions = [];
    let totalSimpananCount = 0;
    let totalPiutangCount = 0;

    // Get simpanan transactions
    if (
      !transactionType ||
      transactionType === "all" ||
      transactionType === "simpanan"
    ) {
      const [simpananTransactions, simpananCount] = await Promise.all([
        prisma.simpananTransaction.findMany({
          where: {
            simpanan: { anggotaId: member.id },
            ...dateFilter,
          },
          select: {
            id: true,
            type: true,
            category: true,
            amount: true,
            balanceBefore: true,
            balanceAfter: true,
            description: true,
            isSystemGenerated: true,
            createdAt: true,
            processor: {
              select: {
                id: true,
                nama: true,
                nrp: true,
              },
            },
          },
          orderBy: { createdAt: "desc" },
        }),
        prisma.simpananTransaction.count({
          where: {
            simpanan: { anggotaId: member.id },
            ...dateFilter,
          },
        }),
      ]);

      // Transform simpanan transactions
      const transformedSimpanan = simpananTransactions.map((tx) => ({
        ...tx,
        transactionSource: "simpanan",
        amount: tx.amount.toString(),
        balanceBefore: tx.balanceBefore?.toString(),
        balanceAfter: tx.balanceAfter?.toString(),
      }));

      combinedTransactions.push(...transformedSimpanan);
      totalSimpananCount = simpananCount;
    }

    // Get piutang transactions
    if (
      !transactionType ||
      transactionType === "all" ||
      transactionType === "piutang"
    ) {
      const [piutangTransactions, piutangCount] = await Promise.all([
        prisma.piutangTransaction.findMany({
          where: {
            piutang: { anggotaId: member.id },
            ...dateFilter,
          },
          select: {
            id: true,
            type: true,
            amount: true,
            description: true,
            createdAt: true,
            processor: {
              select: {
                id: true,
                nama: true,
                nrp: true,
              },
            },
            piutang: {
              select: {
                id: true,
                jenis: true,
                besarPinjaman: true,
                status: true,
              },
            },
          },
          orderBy: { createdAt: "desc" },
        }),
        prisma.piutangTransaction.count({
          where: {
            piutang: { anggotaId: member.id },
            ...dateFilter,
          },
        }),
      ]);

      // Transform piutang transactions
      const transformedPiutang = piutangTransactions.map((tx) => ({
        ...tx,
        transactionSource: "piutang",
        amount: tx.amount.toString(),
        category: tx.piutang?.jenis || null,
        balanceBefore: null,
        balanceAfter: null,
        isSystemGenerated: false,
      }));

      combinedTransactions.push(...transformedPiutang);
      totalPiutangCount = piutangCount;
    }

    // Sort combined transactions by date (newest first)
    combinedTransactions.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );

    // Apply pagination to combined results
    const pageNumber = parseInt(page);
    const limitNumber = parseInt(limit);
    const totalCount = totalSimpananCount + totalPiutangCount;
    const skip = (pageNumber - 1) * limitNumber;
    const paginatedTransactions = combinedTransactions.slice(
      skip,
      skip + limitNumber
    );

    // Calculate summary statistics
    const simpananStats = await prisma.simpananTransaction.aggregate({
      where: {
        simpanan: { anggotaId: member.id },
        ...dateFilter,
      },
      _sum: { amount: true },
      _count: { id: true },
    });

    const piutangStats = await prisma.piutangTransaction.aggregate({
      where: {
        piutang: { anggotaId: member.id },
        ...dateFilter,
      },
      _sum: { amount: true },
      _count: { id: true },
    });

    return res.status(200).json({
      success: true,
      message: "History transaksi gabungan berhasil diambil",
      data: {
        member: {
          id: member.id,
          nama: member.nama,
          nrp: member.nrp,
        },
        transactions: paginatedTransactions,
        pagination: {
          currentPage: pageNumber,
          totalPages: Math.ceil(totalCount / limitNumber),
          totalTransactions: totalCount,
          limit: limitNumber,
          hasNext: pageNumber * limitNumber < totalCount,
          hasPrev: pageNumber > 1,
        },
        statistics: {
          simpanan: {
            totalTransactions: simpananStats._count.id,
            totalAmount: simpananStats._sum.amount?.toString() || "0",
          },
          piutang: {
            totalTransactions: piutangStats._count.id,
            totalAmount: piutangStats._sum.amount?.toString() || "0",
          },
          combined: {
            totalTransactions: totalCount,
            totalAmount: (
              (simpananStats._sum.amount || 0) + (piutangStats._sum.amount || 0)
            ).toString(),
          },
        },
      },
    });
  } catch (error) {
    console.error("Get combined history error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

module.exports = {
  getSimpananHistory,
  getPiutangHistory,
  getCombinedHistory,
};
