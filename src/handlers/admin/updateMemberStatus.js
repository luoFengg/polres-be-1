const prisma = require("../../config/prisma");

/**
 * Update member status (aktif, nonaktif, suspend)
 * PUT /admin/anggota/:id/status
 */
const updateMemberStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    // Validation untuk status
    const validStatuses = ["aktif", "nonaktif", "suspend"];
    if (!status) {
      return res.status(400).json({
        success: false,
        message: "Status wajib diisi",
      });
    }

    if (!validStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: `Status harus salah satu dari: ${validStatuses.join(", ")}`,
      });
    }

    // Validation untuk ID
    if (!id || typeof id !== "string") {
      return res.status(400).json({
        success: false,
        message: "ID anggota tidak valid",
      });
    }

    // Cek apakah anggota exists
    const existingMember = await prisma.anggota.findUnique({
      where: { id },
      select: {
        id: true,
        nama: true,
        nrp: true,
        status: true,
        role: true,
      },
    });

    if (!existingMember) {
      return res.status(404).json({
        success: false,
        message: "Anggota tidak ditemukan",
      });
    }

    // Prevent admin from changing their own status to nonaktif/suspend
    if (req.authenticatedUser.id === id && status !== "aktif") {
      return res.status(403).json({
        success: false,
        message:
          "Tidak dapat mengubah status diri sendiri menjadi nonaktif/suspend",
      });
    }

    // Check if status is already the same
    if (existingMember.status === status) {
      return res.status(400).json({
        success: false,
        message: `Status anggota sudah ${status}`,
      });
    }

    // Update status
    const updatedMember = await prisma.anggota.update({
      where: { id },
      data: {
        status,
        updatedAt: new Date(),
      },
      select: {
        id: true,
        nama: true,
        nrp: true,
        jabatan: true,
        role: true,
        status: true,
        updatedAt: true,
      },
    });

    // Log activity
    console.log(
      `✅ Member status updated by admin ${req.authenticatedUser.id}:`,
      {
        memberId: id,
        memberName: existingMember.nama,
        oldStatus: existingMember.status,
        newStatus: status,
        updatedBy: req.authenticatedUser.nama || req.authenticatedUser.nrp,
        timestamp: new Date().toISOString(),
      }
    );

    return res.status(200).json({
      success: true,
      message: `Status anggota berhasil diubah menjadi ${status}`,
      data: {
        member: updatedMember,
        changes: {
          previousStatus: existingMember.status,
          newStatus: status,
          updatedBy: {
            id: req.authenticatedUser.id,
            nama: req.authenticatedUser.nama,
            nrp: req.authenticatedUser.nrp,
          },
          timestamp: updatedMember.updatedAt,
        },
      },
    });
  } catch (error) {
    console.error("❌ Update member status error:", error);

    // Handle Prisma-specific errors
    if (error.code === "P2002") {
      return res.status(400).json({
        success: false,
        message: "Terjadi konflik data",
      });
    }

    if (error.code === "P2025") {
      return res.status(404).json({
        success: false,
        message: "Anggota tidak ditemukan",
      });
    }

    return res.status(500).json({
      success: false,
      message: "Gagal mengubah status anggota",
      error:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Internal server error",
    });
  }
};

module.exports = updateMemberStatus;
