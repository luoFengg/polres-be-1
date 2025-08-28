const prisma = require("../../../config/prisma");

const getPiutangTransactions = async (req, res) => {
  try {
    const { piutangId } = req.params;
    const { page = 1, limit = 10 } = req.query;

    // Validasi input
    if (!piutangId) {
      return res.status(400).json({
        success: false,
        message: "Piutang ID is required",
      });
    }

    // Convert to numbers
    const pageNum = parseInt(page);
    const limitNum = parseInt(limit);
    const skip = (pageNum - 1) * limitNum;

    // Fetch transactions with pagination
    const [transactions, totalCount] = await Promise.all([
      prisma.piutangTransaction.findMany({
        where: { piutangId },
        orderBy: { createdAt: "desc" },
        skip,
        take: limitNum,
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
      }),
      prisma.piutangTransaction.count({
        where: { piutangId },
      }),
    ]);

    return res.status(200).json({
      success: true,
      message: "Transactions retrieved successfully",
      data: {
        transactions,
        pagination: {
          currentPage: pageNum,
          totalPages: Math.ceil(totalCount / limitNum),
          totalRecords: totalCount,
          hasNext: pageNum * limitNum < totalCount,
          hasPrev: pageNum > 1,
        },
      },
    });
  } catch (error) {
    console.error("Get piutang transactions error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

module.exports = { getPiutangTransactions };
