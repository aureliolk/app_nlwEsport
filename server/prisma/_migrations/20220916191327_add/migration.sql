/*
  Warnings:

  - You are about to drop the column `createdat` on the `Ads` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Games" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nameGame" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "adsId" TEXT NOT NULL,
    CONSTRAINT "Games_adsId_fkey" FOREIGN KEY ("adsId") REFERENCES "Ads" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Games" ("adsId", "id", "nameGame") SELECT "adsId", "id", "nameGame" FROM "Games";
DROP TABLE "Games";
ALTER TABLE "new_Games" RENAME TO "Games";
CREATE TABLE "new_Ads" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nameAds" TEXT NOT NULL,
    "longYouPlayed" INTEGER NOT NULL,
    "idDiscord" TEXT NOT NULL,
    "dayForPlay" TEXT NOT NULL,
    "houerForPlay" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Ads" ("dayForPlay", "houerForPlay", "id", "idDiscord", "longYouPlayed", "nameAds") SELECT "dayForPlay", "houerForPlay", "id", "idDiscord", "longYouPlayed", "nameAds" FROM "Ads";
DROP TABLE "Ads";
ALTER TABLE "new_Ads" RENAME TO "Ads";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
