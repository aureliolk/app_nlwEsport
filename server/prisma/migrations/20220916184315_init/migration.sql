-- CreateTable
CREATE TABLE "Ads" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nameAds" TEXT NOT NULL,
    "longYouPlayed" INTEGER NOT NULL,
    "idDiscord" TEXT NOT NULL,
    "dayForPlay" TEXT NOT NULL,
    "houerForPlay" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Games" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nameGame" TEXT NOT NULL,
    "adsId" TEXT NOT NULL,
    CONSTRAINT "Games_adsId_fkey" FOREIGN KEY ("adsId") REFERENCES "Ads" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
