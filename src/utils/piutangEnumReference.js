// ENUM REFERENCE - PiutangCategories
// File ini berisi contoh penggunaan enum PiutangCategories setelah migration

const { PiutangCategories } = require("@prisma/client");

/**
 * Available Piutang Categories:
 * - toko: Piutang untuk pembelian di toko koperasi
 * - kredit: Piutang kredit umum/pinjaman reguler
 * - motor: Piutang untuk pembelian kendaraan motor
 */

// ✅ CARA PENGGUNAAN YANG BENAR:
console.log("Available categories:", Object.values(PiutangCategories));
// Output: ['toko', 'kredit', 'motor']

// ✅ Membuat piutang baru:
const createPiutangExample = {
  anggotaId: "anggota-id",
  jenis: PiutangCategories.toko, // atau langsung 'toko'
  besarPinjaman: 1000000,
  // ... field lainnya
};

// ✅ Filter berdasarkan jenis:
const filterByJenisExample = {
  where: {
    jenis: PiutangCategories.kredit, // atau 'kredit'
  },
};

// ✅ Validasi di handler:
const validateJenis = (jenis) => {
  const validJenis = Object.values(PiutangCategories);
  return validJenis.includes(jenis);
};

// ❌ YANG TIDAK BOLEH DILAKUKAN:
// jenis: "pinjaman"  // ❌ Tidak ada di enum
// jenis: "modal"     // ❌ Tidak ada di enum
// jenis: "konsumtif" // ❌ Tidak ada di enum

module.exports = {
  PiutangCategories,
  validateJenis,
  createPiutangExample,
  filterByJenisExample,
};
