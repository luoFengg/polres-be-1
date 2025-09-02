/*
  Safe migration: Change jenis field from String to Enum
  Steps:
  1. Create enum type
  2. Add new column with enum type
  3. Copy data from old column to new column with proper mapping
  4. Drop old column
  5. Rename new column to original name
*/

-- Step 1: Create enum type
CREATE TYPE "PiutangCategories" AS ENUM ('toko', 'kredit', 'motor');

-- Step 2: Add new column with enum type (nullable for now)
ALTER TABLE "Piutang" ADD COLUMN "jenis_new" "PiutangCategories";

-- Step 3: Update data - map existing string values to enum values
-- Default semua ke 'kredit' jika ada nilai NULL atau tidak valid
UPDATE "Piutang" SET "jenis_new" = 
  CASE 
    WHEN "jenis" = 'toko' THEN 'toko'::"PiutangCategories"
    WHEN "jenis" = 'kredit' THEN 'kredit'::"PiutangCategories"
    WHEN "jenis" = 'motor' THEN 'motor'::"PiutangCategories"
    ELSE 'kredit'::"PiutangCategories"  -- Default value untuk data yang tidak valid
  END;

-- Step 4: Make the new column NOT NULL (now that all rows have values)
ALTER TABLE "Piutang" ALTER COLUMN "jenis_new" SET NOT NULL;

-- Step 5: Drop old column
ALTER TABLE "Piutang" DROP COLUMN "jenis";

-- Step 6: Rename new column to original name
ALTER TABLE "Piutang" RENAME COLUMN "jenis_new" TO "jenis";
