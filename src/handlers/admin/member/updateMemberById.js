const prisma = require("../../../config/prisma");

/**
 * Update member data (nrp, nama, jabatan, status)
 * PUT /admin/members/:id
 */
const updateMemberById = async (req, res) => {
  try {
    const { id } = req.params;
    const { nrp, nama, jabatan, status } = req.body;

    // Validation untuk ID
    if (!id || typeof id !== "string") {
      return res.status(400).json({
        success: false,
        message: "ID anggota tidak valid",
      });
    }

    // Check if at least one field is provided
    const fieldsToUpdate = { nrp, nama, jabatan, status };
    const providedFields = Object.entries(fieldsToUpdate).filter(
      ([key, value]) => value !== undefined
    );

    if (providedFields.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Minimal satu field harus diisi untuk update",
      });
    }

    // Validation untuk fields yang diberikan
    const errors = [];

    // Validate status
    if (status !== undefined) {
      const validStatuses = ["aktif", "nonaktif", "suspend"];
      if (!validStatuses.includes(status)) {
        errors.push(
          `Status harus salah satu dari: ${validStatuses.join(", ")}`
        );
      }
    }

    // Validate nama
    if (nama !== undefined && (!nama || nama.trim().length < 2)) {
      errors.push("Nama harus minimal 2 karakter");
    }

    // Validate jabatan
    if (jabatan !== undefined && (!jabatan || jabatan.trim().length < 2)) {
      errors.push("Jabatan harus minimal 2 karakter");
    }

    if (errors.length > 0) {
      return res.status(400).json({
        success: false,
        message: "Validation error",
        errors: errors,
      });
    }

    // Cek apakah anggota exists
    const existingMember = await prisma.anggota.findUnique({
      where: { id },
      select: {
        id: true,
        nama: true,
        nrp: true,
        jabatan: true,
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

    // Security checks
    // Prevent admin from changing their own status to nonaktif/suspend
    if (req.authenticatedUser.id === id && status && status !== "aktif") {
      return res.status(403).json({
        success: false,
        message:
          "Tidak dapat mengubah status diri sendiri menjadi nonaktif/suspend",
      });
    }

    // Check NRP uniqueness if NRP is being updated
    if (nrp && nrp !== existingMember.nrp) {
      const existingNrp = await prisma.anggota.findUnique({
        where: { nrp },
        select: { id: true },
      });

      if (existingNrp) {
        return res.status(400).json({
          success: false,
          message: "NRP sudah digunakan oleh anggota lain",
        });
      }
    }

    // Build update data object (only include fields that are provided)
    const updateData = {
      updatedAt: new Date(),
    };

    if (nrp !== undefined) updateData.nrp = nrp;
    if (nama !== undefined) updateData.nama = nama.trim();
    if (jabatan !== undefined) updateData.jabatan = jabatan.trim();
    if (status !== undefined) updateData.status = status;

    // Update member
    const updatedMember = await prisma.anggota.update({
      where: { id },
      data: updateData,
      select: {
        id: true,
        nama: true,
        nrp: true,
        jabatan: true,
        role: true,
        status: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    // Determine what changed
    const changes = {};
    if (nrp !== undefined && nrp !== existingMember.nrp) {
      changes.nrp = { from: existingMember.nrp, to: nrp };
    }
    if (nama !== undefined && nama.trim() !== existingMember.nama) {
      changes.nama = { from: existingMember.nama, to: nama.trim() };
    }
    if (jabatan !== undefined && jabatan.trim() !== existingMember.jabatan) {
      changes.jabatan = { from: existingMember.jabatan, to: jabatan.trim() };
    }
    if (status !== undefined && status !== existingMember.status) {
      changes.status = { from: existingMember.status, to: status };
    }

    // Log activity
    console.log(`✅ Member updated by admin ${req.authenticatedUser.id}:`, {
      memberId: id,
      memberName: existingMember.nama,
      changes: changes,
      updatedBy: req.authenticatedUser.nama || req.authenticatedUser.nrp,
      timestamp: new Date().toISOString(),
    });

    return res.status(200).json({
      success: true,
      message: "Data anggota berhasil diupdate",
      data: {
        member: updatedMember,
        changes: {
          fieldsUpdated: Object.keys(changes),
          details: changes,
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
    console.error("❌ Update member error:", error);

    // Handle Prisma-specific errors
    if (error.code === "P2002") {
      // Unique constraint violation
      const field = error.meta?.target?.[0] || "field";
      return res.status(400).json({
        success: false,
        message: `${field.toUpperCase()} sudah digunakan oleh anggota lain`,
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
      message: "Gagal mengupdate data anggota",
      error:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Internal server error",
    });
  }
};

module.exports = updateMemberById;
