const prisma = require("../../../config/prisma");

const deleteMemberById = async (req, res) => {
  try {
    const { memberId } = req.params;

    // Validasi memberId
    if (!memberId) {
      return res.status(404).json({
        success: false,
        message: "Member ID wajib diisi",
      });
    }

    // Cek apakah anggota exists
    const existingMember = await prisma.anggota.findUnique({
      where: { id: memberId },
      select: {
        id: true,
        nrp: true,
        nama: true,
        jabatan: true,
        role: true,
        status: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!existingMember) {
      return res.status(404).json({
        success: false,
        message: "Member tidak ditemukan",
      });
    }

    // Cek apakah member masih aktif atau tidak
    if (existingMember.status === "aktif") {
      return res.status(400).json({
        success: false,
        message: "Member masih aktif dan tidak dapat dihapus",
      });
    }

    // Simpan data member yang akan dihapus untuk response
    const deletedMemberData = {
      id: existingMember.id,
      nrp: existingMember.nrp,
      nama: existingMember.nama,
      jabatan: existingMember.jabatan,
      role: existingMember.role,
      status: existingMember.status,
      createdAt: existingMember.createdAt,
      updatedAt: existingMember.updatedAt,
    };

    // Delete member dari database
    await prisma.anggota.delete({
      where: { id: memberId },
    });

    // Log aktivitas (opsional - bisa disimpan ke tabel audit)
    console.log(
      `Anggota ${memberId} (${deletedMemberData.nama}) berhasil dihapus`
    );

    return res.status(200).json({
      success: true,
      message: "Anggota berhasil dihapus",
      data: {
        deletedMember: deletedMemberData,
        deletedAt: new Date(),
      },
    });
  } catch (error) {
    console.error("Delete member error:", error);

    // Handle record not found (jika terjadi race condition)
    if (error.code === "P2025") {
      return res.status(404).json({
        success: false,
        message: "Anggota tidak ditemukan atau sudah dihapus",
      });
    }

    // Handle foreign key constraint (jika ada relasi dengan tabel lain)
    if (error.code === "P2003") {
      return res.status(409).json({
        success: false,
        message:
          "Anggota tidak dapat dihapus karena masih digunakan dalam transaksi atau data lain",
      });
    }

    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

module.exports = deleteMemberById;
