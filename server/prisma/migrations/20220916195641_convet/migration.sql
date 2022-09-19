/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Ads` table. All the data in the column will be lost.
  - You are about to drop the column `adsId` on the `Games` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Games` table. All the data in the column will be lost.
  - Added the required column `gamesId` to the `Ads` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Ads" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nameAds" TEXT NOT NULL,
    "longYouPlayed" TEXT NOT NULL,
    "idDiscord" TEXT NOT NULL,
    "dayForPlay" TEXT NOT NULL,
    "houerForPlay" TEXT NOT NULL,
    "CreatedDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ModifiedDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "gamesId" TEXT NOT NULL,
    CONSTRAINT "Ads_gamesId_fkey" FOREIGN KEY ("gamesId") REFERENCES "Games" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Ads" ("dayForPlay", "houerForPlay", "id", "idDiscord", "longYouPlayed", "nameAds") SELECT "dayForPlay", "houerForPlay", "id", "idDiscord", "longYouPlayed", "nameAds" FROM "Ads";
DROP TABLE "Ads";
ALTER TABLE "new_Ads" RENAME TO "Ads";
CREATE TABLE "new_Games" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nameGame" TEXT NOT NULL,
    "CreatedDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ModifiedDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Games" ("id", "nameGame") SELECT "id", "nameGame" FROM "Games";
DROP TABLE "Games";
ALTER TABLE "new_Games" RENAME TO "Games";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
