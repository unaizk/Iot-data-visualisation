-- CreateTable
CREATE TABLE "TwoDigitNumber" (
    "id" SERIAL NOT NULL,
    "data" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TwoDigitNumber_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ThreeDigitNumber" (
    "id" SERIAL NOT NULL,
    "data" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ThreeDigitNumber_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FourDigitNumber" (
    "id" SERIAL NOT NULL,
    "data" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FourDigitNumber_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TwoDigitLetter" (
    "id" SERIAL NOT NULL,
    "data" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TwoDigitLetter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FourDigitLetter" (
    "id" SERIAL NOT NULL,
    "data" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FourDigitLetter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ConcatTwoValues" (
    "id" SERIAL NOT NULL,
    "data" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ConcatTwoValues_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ConcatFourValues" (
    "id" SERIAL NOT NULL,
    "data" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ConcatFourValues_pkey" PRIMARY KEY ("id")
);
