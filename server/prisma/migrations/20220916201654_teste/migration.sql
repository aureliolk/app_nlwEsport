/*
  Warnings:

  - You are about to drop the column `gamesId` on the `Ads` table. All the data in the column will be lost.

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
    "ModifiedDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Ads" ("CreatedDate", "ModifiedDate", "dayForPlay", "houerForPlay", "id", "idDiscord", "longYouPlayed", "nameAds") SELECT "CreatedDate", "ModifiedDate", "dayForPlay", "houerForPlay", "id", "idDiscord", "longYouPlayed", "nameAds" FROM "Ads";
DROP TABLE "Ads";
ALTER TABLE "new_Ads" RENAME TO "Ads";
CREATE TABLE "new_Games" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nameGame" TEXT NOT NULL,
    "CreatedDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ModifiedDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "adsId" TEXT,
    CONSTRAINT "Games_adsId_fkey" FOREIGN KEY ("adsId") REFERENCES "Ads" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Games" ("CreatedDate", "ModifiedDate", "id", "nameGame") SELECT "CreatedDate", "ModifiedDate", "id", "nameGame" FROM "Games";
DROP TABLE "Games";
ALTER TABLE "new_Games" RENAME TO "Games";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
