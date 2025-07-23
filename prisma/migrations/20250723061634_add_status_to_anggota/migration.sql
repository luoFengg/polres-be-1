-- CreateEnum
CREATE TYPE "StatusAnggota" AS ENUM ('aktif', 'nonaktif', 'suspend');

-- AlterTable
ALTER TABLE "Anggota" ADD COLUMN     "status" "StatusAnggota" NOT NULL DEFAULT 'aktif';
