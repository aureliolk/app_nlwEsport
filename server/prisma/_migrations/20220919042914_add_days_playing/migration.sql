/*
  Warnings:

  - You are about to drop the column `dayForPlay` on the `Ads` table. All the data in the column will be lost.
  - You are about to drop the column `houerForPlay` on the `Ads` table. All the data in the column will be lost.
  - You are about to drop the column `longYouPlayed` on the `Ads` table. All the data in the column will be lost.
  - You are about to drop the column `nameAds` on the `Ads` table. All the data in the column will be lost.
  - Added the required column `chatVoice` to the `Ads` table without a default value. This is not possible if the table is not empty.
  - Added the required column `daysPlaying` to the `Ads` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endPlay` to the `Ads` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nickName` to the `Ads` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startPlay` to the `Ads` table without a default value. This is not possible if the table is not empty.
  - Added the required column `yearsPlaying` to the `Ads` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Ads" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "yearsPlaying" TEXT NOT NULL,
    "nickName" TEXT NOT NULL,
    "idDiscord" TEXT NOT NULL,
    "startPlay" TEXT NOT NULL,
    "endPlay" TEXT NOT NULL,
    "chatVoice" TEXT NOT NULL,
    "daysPlaying" TEXT NOT NULL,
    "CreatedDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ModifiedDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "gamesId" TEXT,
    CONSTRAINT "Ads_gamesId_fkey" FOREIGN KEY ("gamesId") REFERENCES "Games" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Ads" ("CreatedDate", "ModifiedDate", "gamesId", "id", "idDiscord") SELECT "CreatedDate", "ModifiedDate", "gamesId", "id", "idDiscord" FROM "Ads";
DROP TABLE "Ads";
ALTER TABLE "new_Ads" RENAME TO "Ads";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
