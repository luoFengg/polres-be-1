const bcrypt = require("bcrypt");
const prisma = require("../../config/prisma");

/**
 * Handler untuk admin mengupdate password member berdasarkan ID
 */
const updateMemberPasswordById = async (req, res) => {
  try {
    const { memberId } = req.params;
    const { newPassword, confirmPassword } = req.body;
    const adminId = req.authenticatedUser.id;

    // Validasi input
    if (!memberId) {
      return res.status(400).json({
        success: false,
        message: "Member ID diperlukan",
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

    // Validasi password match
    if (newPassword !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Password baru dan konfirmasi password tidak cocok",
      });
    }

    // Validasi panjang password
    if (newPassword.length < 6) {
      return res.status(400).json({
        success: false,
        message: "Password minimal 6 karakter",
      });
    }

    // Cek apakah member exists
    const member = await prisma.anggota.findFirst({
      where: {
        OR: [{ id: memberId }, { nrp: memberId }],
      },
      select: {
        id: true,
        nrp: true,
        nama: true,
        role: true,
      },
    });

    if (!member) {
      return res.status(404).json({
        success: false,
        message: "Member tidak ditemukan",
      });
    }

    // Admin tidak bisa mengubah password admin lain (kecuali super admin)
    if (
      member.role === "admin" &&
      req.authenticatedUser.role !== "super_admin"
    ) {
      return res.status(403).json({
        success: false,
        message: "Anda tidak memiliki izin untuk mengubah password admin lain",
      });
    }

    // Hash password baru
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(newPassword, saltRounds);

    // Update password di database
    const updatedMember = await prisma.anggota.update({
      where: { id: member.id },
      data: {
        password: hashedPassword,
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

    // Log aktivitas admin (opsional - bisa disimpan ke tabel audit)
    console.log(
      `Admin ${adminId} updated password for member ${member.id} (${member.nrp})`
    );

    return res.status(200).json({
      success: true,
      message: `Password untuk ${member.nama} (${member.nrp}) berhasil diupdate`,
      data: {
        member: updatedMember,
        updatedBy: {
          id: adminId,
          nama: req.authenticatedUser.nama,
          nrp: req.authenticatedUser.nrp,
        },
        updatedAt: updatedMember.updatedAt,
      },
    });
  } catch (error) {
    console.error("Update member password error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

module.exports = { updateMemberPasswordById };
