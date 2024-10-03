/*
  Warnings:

  - You are about to drop the column `bio` on the `author` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[username]` on the table `author` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `avatar` to the `author` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `author` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "author" DROP COLUMN "bio",
ADD COLUMN     "avatar" TEXT NOT NULL,
ADD COLUMN     "username" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "author_username_key" ON "author"("username");
