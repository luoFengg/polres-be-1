const bcrypt = require("bcrypt");
const prisma = require("../../config/prisma");

/**
 * Handler untuk member mengupdate password sendiri
 */
const updatePasswordByMemberItSelf = async (req, res) => {
  try {
    const { oldPassword, newPassword, confirmPassword } = req.body;
    const userId = req.authenticatedUser.id;

    // Validasi input
    if (!oldPassword) {
      return res.status(400).json({
        success: false,
        message: "Password lama diperlukan",
      });
    }

    if (!newPassword) {
      return res.status(400).json({
        success: false,
        message: "Password baru diperlukan",
      });
    }

    if (!confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Konfirmasi password diperlukan",
      });
    }

    // Validasi password baru dan konfirmasi cocok
    if (newPassword !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Password baru dan konfirmasi password tidak cocok",
      });
    }

    // Validasi panjang password baru
    if (newPassword.length < 6) {
      return res.status(400).json({
        success: false,
        message: "Password baru minimal 6 karakter",
      });
    }

    // Validasi password lama tidak sama dengan password baru
    if (oldPassword === newPassword) {
      return res.status(400).json({
        success: false,
        message: "Password baru harus berbeda dengan password lama",
      });
    }

    // Ambil data user dari database untuk mendapatkan password hash
    const user = await prisma.anggota.findUnique({
      where: { id: userId },
      select: {
        id: true,
        nrp: true,
        nama: true,
        password: true,
        role: true,
      },
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User tidak ditemukan",
      });
    }

    // Verifikasi password lama
    const isOldPasswordValid = await bcrypt.compare(oldPassword, user.password);
    if (!isOldPasswordValid) {
      return res.status(400).json({
        success: false,
        message: "Password lama tidak benar",
      });
    }

    // Hash password baru
    const saltRounds = 10;
    const hashedNewPassword = await bcrypt.hash(newPassword, saltRounds);

    // Update password di database
    const updatedUser = await prisma.anggota.update({
      where: { id: userId },
      data: {
        password: hashedNewPassword,
        updatedAt: new Date(),
      },
      select: {
        id: true,
        nrp: true,
        nama: true,
        jabatan: true,
        role: true,
        updatedAt: true,
      },
    });

    // Log aktivitas (opsional - bisa disimpan ke tabel audit)
    console.log(`Member ${userId} (${user.nrp}) updated their own password`);

    return res.status(200).json({
      success: true,
      message: "Password berhasil diubah",
      data: {
        user: updatedUser,
        updatedAt: updatedUser.updatedAt,
        message: "Silakan login kembali dengan password baru Anda",
      },
    });
  } catch (error) {
    console.error("Update password by member error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

module.exports = { updatePasswordByMemberItSelf };
