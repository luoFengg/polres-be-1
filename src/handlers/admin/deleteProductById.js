const prisma = require("../../config/prisma");

/**
 * Delete product by ID
 * DELETE /admin/produk/:productId
 */
const deleteProductById = async (req, res) => {
  try {
    const { productId } = req.params;

    // Validasi productId
    if (!productId) {
      return res.status(400).json({
        success: false,
        message: "Product ID wajib diisi",
      });
    }

    // Cek apakah produk exist
    const existingProduct = await prisma.tokoProduk.findUnique({
      where: { id: productId },
      include: {
        kategori: {
          select: {
            id: true,
            namaKategori: true,
          },
        },
      },
    });

    if (!existingProduct) {
      return res.status(404).json({
        success: false,
        message: "Produk tidak ditemukan",
      });
    }

    // Simpan data produk yang akan dihapus untuk response
    const deletedProductData = {
      id: existingProduct.id,
      namaProduk: existingProduct.namaProduk,
      harga: existingProduct.harga,
      deskripsi: existingProduct.deskripsi,
      fotoProduk: existingProduct.fotoProduk,
      kategori: existingProduct.kategori,
      createdAt: existingProduct.createdAt,
      updatedAt: existingProduct.updatedAt,
    };

    // Delete produk dari database
    await prisma.tokoProduk.delete({
      where: { id: productId },
    });

    // Log aktivitas (opsional - bisa disimpan ke tabel audit)
    console.log(`Product ${productId} (${existingProduct.namaProduk}) deleted successfully`);

    return res.status(200).json({
      success: true,
      message: "Produk berhasil dihapus",
      data: {
        deletedProduct: deletedProductData,
        deletedAt: new Date(),
      },
    });
  } catch (error) {
    console.error("Delete product error:", error);

    // Handle record not found (jika terjadi race condition)
    if (error.code === "P2025") {
      return res.status(404).json({
        success: false,
        message: "Produk tidak ditemukan atau sudah dihapus",
      });
    }

    // Handle foreign key constraint (jika ada relasi dengan tabel lain)
    if (error.code === "P2003") {
      return res.status(409).json({
        success: false,
        message: "Produk tidak dapat dihapus karena masih digunakan dalam transaksi atau data lain",
      });
    }

    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

module.exports = { deleteProductById };
