-- AlterTable
ALTER TABLE "TokoProduk" ADD COLUMN     "createdBy" TEXT,
ADD COLUMN     "updatedBy" TEXT;

-- AddForeignKey
ALTER TABLE "TokoProduk" ADD CONSTRAINT "TokoProduk_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "Anggota"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TokoProduk" ADD CONSTRAINT "TokoProduk_updatedBy_fkey" FOREIGN KEY ("updatedBy") REFERENCES "Anggota"("id") ON DELETE SET NULL ON UPDATE CASCADE;
