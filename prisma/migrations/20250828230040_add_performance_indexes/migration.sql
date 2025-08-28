-- CreateIndex
CREATE INDEX "Piutang_anggotaId_idx" ON "Piutang"("anggotaId");

-- CreateIndex
CREATE INDEX "Piutang_status_idx" ON "Piutang"("status");

-- CreateIndex
CREATE INDEX "Piutang_anggotaId_status_idx" ON "Piutang"("anggotaId", "status");

-- CreateIndex
CREATE INDEX "PiutangTransaction_piutangId_idx" ON "PiutangTransaction"("piutangId");

-- CreateIndex
CREATE INDEX "PiutangTransaction_piutangId_createdAt_idx" ON "PiutangTransaction"("piutangId", "createdAt");

-- CreateIndex
CREATE INDEX "PiutangTransaction_type_idx" ON "PiutangTransaction"("type");
