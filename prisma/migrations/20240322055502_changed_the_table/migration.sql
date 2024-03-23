/*
  Warnings:

  - You are about to drop the column `timestamp` on the `ConcatFourValues` table. All the data in the column will be lost.
  - You are about to drop the column `timestamp` on the `ConcatTwoValues` table. All the data in the column will be lost.
  - You are about to drop the column `timestamp` on the `FourDigitLetter` table. All the data in the column will be lost.
  - You are about to drop the column `timestamp` on the `FourDigitNumber` table. All the data in the column will be lost.
  - You are about to drop the column `timestamp` on the `ThreeDigitNumber` table. All the data in the column will be lost.
  - You are about to drop the column `timestamp` on the `TwoDigitLetter` table. All the data in the column will be lost.
  - You are about to drop the column `timestamp` on the `TwoDigitNumber` table. All the data in the column will be lost.
  - Added the required column `time` to the `ConcatFourValues` table without a default value. This is not possible if the table is not empty.
  - Added the required column `time` to the `ConcatTwoValues` table without a default value. This is not possible if the table is not empty.
  - Added the required column `time` to the `FourDigitLetter` table without a default value. This is not possible if the table is not empty.
  - Added the required column `time` to the `FourDigitNumber` table without a default value. This is not possible if the table is not empty.
  - Added the required column `time` to the `ThreeDigitNumber` table without a default value. This is not possible if the table is not empty.
  - Added the required column `time` to the `TwoDigitLetter` table without a default value. This is not possible if the table is not empty.
  - Added the required column `time` to the `TwoDigitNumber` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ConcatFourValues" DROP COLUMN "timestamp",
ADD COLUMN     "time" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ConcatTwoValues" DROP COLUMN "timestamp",
ADD COLUMN     "time" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "FourDigitLetter" DROP COLUMN "timestamp",
ADD COLUMN     "time" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "FourDigitNumber" DROP COLUMN "timestamp",
ADD COLUMN     "time" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ThreeDigitNumber" DROP COLUMN "timestamp",
ADD COLUMN     "time" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "TwoDigitLetter" DROP COLUMN "timestamp",
ADD COLUMN     "time" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "TwoDigitNumber" DROP COLUMN "timestamp",
ADD COLUMN     "time" TEXT NOT NULL;
