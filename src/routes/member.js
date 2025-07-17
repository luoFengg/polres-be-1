const express = require("express");
const router = express.Router();
const { authenticate } = require("../middleware/auth");
const { getUserDetail } = require("../handlers/shared/getMemberDetail");

// Transaction history handlers (universal)
const {
  getSimpananHistory,
  getPiutangHistory,
  getCombinedHistory,
} = require("../handlers/shared/getTransactionHistory");

console.log("Loading userData routes...");

// Route untuk user melihat profile sendiri (authenticated)
router.get("/profile", authenticate, async (req, res) => {
  // Set context dan parameter untuk handler universal
  req.params.id = req.authenticatedUser.id;
  req.query.context = "profile";
  req.query.includeTransactions = req.query.includeTransactions || "true";

  await getUserDetail(req, res);
});

// Route untuk akses data user by ID/NRP
router.get("/:id", async (req, res) => {
  req.query.context = "general";
  await getUserDetail(req, res);
});

// ========== TRANSACTION HISTORY ENDPOINTS (User Self-Access Only) ==========

// Route untuk user melihat history transaksi simpanan sendiri
router.get("/me/transactions/simpanan", authenticate, async (req, res) => {
  req.params.memberId = req.authenticatedUser.id;
  await getSimpananHistory(req, res);
});

// Route untuk user melihat history transaksi piutang sendiri
router.get("/me/transactions/piutang", authenticate, async (req, res) => {
  req.params.memberId = req.authenticatedUser.id;
  await getPiutangHistory(req, res);
});

// Route untuk user melihat history gabungan transaksi sendiri
router.get("/me/transactions/combined", authenticate, async (req, res) => {
  req.params.memberId = req.authenticatedUser.id;
  await getCombinedHistory(req, res);
});

console.log("userData routes configured");

module.exports = router;
