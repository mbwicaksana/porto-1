import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient({
  errorFormat: "pretty",
  log: ["error", "info", "warn", "query"],
});
