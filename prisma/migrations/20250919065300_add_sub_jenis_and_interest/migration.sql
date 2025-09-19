-- AlterTable
ALTER TABLE "Piutang" ADD COLUMN     "subJenis" TEXT;

-- AlterTable
ALTER TABLE "PiutangTransaction" ADD COLUMN     "interest" DECIMAL(65,30) NOT NULL DEFAULT 0;
