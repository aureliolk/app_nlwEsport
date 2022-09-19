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
    "gamesId" TEXT,
    CONSTRAINT "Ads_gamesId_fkey" FOREIGN KEY ("gamesId") REFERENCES "Games" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Ads" ("CreatedDate", "ModifiedDate", "dayForPlay", "gamesId", "houerForPlay", "id", "idDiscord", "longYouPlayed", "nameAds") SELECT "CreatedDate", "ModifiedDate", "dayForPlay", "gamesId", "houerForPlay", "id", "idDiscord", "longYouPlayed", "nameAds" FROM "Ads";
DROP TABLE "Ads";
ALTER TABLE "new_Ads" RENAME TO "Ads";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
