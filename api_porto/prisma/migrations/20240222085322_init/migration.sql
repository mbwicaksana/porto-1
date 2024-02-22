/*
  Warnings:

  - You are about to drop the column `access_token` on the `session` table. All the data in the column will be lost.
  - You are about to drop the column `refresh_token` on the `session` table. All the data in the column will be lost.
  - You are about to drop the column `access_token` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `refresh_token` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `session` DROP COLUMN `access_token`,
    DROP COLUMN `refresh_token`,
    ADD COLUMN `accessToken` VARCHAR(191) NULL,
    ADD COLUMN `refreshToken` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `access_token`,
    DROP COLUMN `refresh_token`,
    ADD COLUMN `accessToken` VARCHAR(191) NULL,
    ADD COLUMN `refreshToken` VARCHAR(191) NULL;
