const express = require("express");
const router = express.Router();
const { requireAdminAuth } = require("../middleware/adminAuth");

// ============= For Member Action ================
const { addMember } = require("../handlers/admin/member/addMember");
const { getAllMembers } = require("../handlers/admin/member/getAllMembers");
const {
  getMembersPaginated,
} = require("../handlers/admin/member/getMembersPaginated");
const { getUserDetail } = require("../handlers/shared/getMemberDetail"); // Universal handler
const {
  addPiutangByUserId,
} = require("../handlers/admin/piutang/addPiutangbyUserId");
const {
  updatePiutangByUserId,
} = require("../handlers/admin/piutang/updatePiutangbyUserId");
const {
  getPiutangDetail,
} = require("../handlers/admin/piutang/getPiutangDetail");
const {
  getActivePiutangByMemberId,
} = require("../handlers/admin/piutang/getActivePiutangByMemberId");
const {
  updateMemberPasswordById,
} = require("../handlers/admin/member/updateMemberPasswordById");
const updateMemberStatus = require("../handlers/admin/member/updateMemberStatus");
const updateMemberById = require("../handlers/admin/member/updateMemberById");
const deleteMemberById = require("../handlers/admin/member/deleteMemberById");

// Simpanan handlers (unified approach like piutang)
const {
  updateSimpananAnggota,
} = require("../handlers/admin/simpanan/updateSimpananAnggota");

// Summary simpanan anggota
const {
  getAllMembersSimpananSummary,
} = require("../handlers/admin/simpanan/getAllMembersSimpananSummary");

// Transaction history handlers (admin access) - unified approach
const {
  getSimpananHistory,
  getPiutangHistory,
  getCombinedHistory,
} = require("../handlers/shared/getTransactionHistory");

// Produk handlers dan storage config
const { addProduct } = require("../handlers/admin/product/addProduct");
const {
  updateProductById,
} = require("../handlers/admin/product/updateProductById");
const {
  deleteProductById,
} = require("../handlers/admin/product/deleteProductById");
const { getCategories } = require("../handlers/admin/getCategories");
const { upload } = require("../config/storage");

// ========== MEMBER ACTION ENDPOINTS (Admin Only) ==========

// Route untuk mendapatkan SEMUA anggota (admin only) - tanpa pagination
router.get("/members/all", requireAdminAuth, getAllMembers);

// Route untuk mendapatkan anggota dengan pagination (admin only)
router.get("/members", requireAdminAuth, getMembersPaginated);

// Route untuk mendapatkan detail anggota + piutang (admin only)
router.get("/members/:memberId", requireAdminAuth, async (req, res) => {
  // Set context untuk admin view
  req.query.context = "admin";
  req.query.includeTransactions = req.query.includeTransactions || "true";

  await getUserDetail(req, res);
});

// route untuk menghapus member
router.delete("/members/:memberId", requireAdminAuth, deleteMemberById);

// Route untuk menambah member baru (admin only)
router.post("/members", requireAdminAuth, addMember);

// Route untuk menambah piutang baru untuk member tertentu (admin only)
router.post("/members/:memberId/piutang", requireAdminAuth, addPiutangByUserId);

// Route untuk mendapatkan semua piutang aktif dari member tertentu (admin only)
router.get(
  "/members/:memberId/piutang",
  requireAdminAuth,
  getActivePiutangByMemberId
);

// Route untuk update piutang (admin only)
router.patch(
  "/members/:memberId/piutang/:piutangId",
  requireAdminAuth,
  updatePiutangByUserId
);

// Route untuk mendapatkan detail piutang lengkap (admin only)
router.get("/piutang/:piutangId/detail", requireAdminAuth, getPiutangDetail);

// Route untuk update password member (admin only)
router.patch(
  "/members/:memberId/password",
  requireAdminAuth,
  updateMemberPasswordById
);

// Route untuk update status member (admin only)
router.put("/members/:id/status", requireAdminAuth, updateMemberStatus);

// Route untuk update general member data (admin only)
router.put("/members/:id", requireAdminAuth, updateMemberById);

// ========== SIMPANAN ENDPOINTS (Admin Only) ==========

// Route untuk update simpanan (setoran, penarikan, koreksi) - mirip dengan piutang
router.patch(
  "/members/:memberId/simpanan",
  requireAdminAuth,
  updateSimpananAnggota
);

// Route untuk mendapatkan history transaksi simpanan member tertentu (unified endpoint)
router.get(
  "/members/:memberId/simpanan/histories",
  requireAdminAuth,
  getSimpananHistory
);

// Route untuk mendapatkan summary simpanan semua anggota
router.get(
  "/simpanan/summaries",
  requireAdminAuth,
  getAllMembersSimpananSummary
);

// ========== TRANSACTION HISTORY ENDPOINTS (Admin Only) ==========

// Route untuk admin melihat history transaksi simpanan member tertentu (alternative endpoint)
router.get(
  "/members/:memberId/transactions/simpanan",
  requireAdminAuth,
  getSimpananHistory
);

// Route untuk admin melihat history transaksi piutang member tertentu
router.get(
  "/members/:memberId/transactions/piutang",
  requireAdminAuth,
  getPiutangHistory
);

// Route untuk admin melihat history gabungan transaksi member tertentu
router.get(
  "/members/:memberId/transactions/combined",
  requireAdminAuth,
  getCombinedHistory
);

// ========== PRODUK ENDPOINTS (Admin Only) ==========

// Route untuk menambah produk baru dengan foto optional (admin only)
router.post(
  "/products",
  requireAdminAuth, // Middleware admin auth
  upload.single("foto"), // Middleware multer untuk upload foto
  addProduct // Handler add product - error handling inside
);

// Route untuk update produk berdasarkan ID dengan foto optional (admin only)
router.put(
  "/products/:productId",
  requireAdminAuth, // Middleware admin auth
  upload.single("foto"), // Middleware multer untuk upload foto
  updateProductById // Handler update product - error handling inside
);

// Route untuk menghapus produk berdasarkan ID (admin only)
router.delete(
  "/products/:productId",
  requireAdminAuth, // Middleware admin auth
  deleteProductById // Handler delete product
);

// Route untuk mendapatkan semua kategori produk (admin only)
router.get("/categories", requireAdminAuth, getCategories);

module.exports = router;
