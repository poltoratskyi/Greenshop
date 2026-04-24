import "dotenv/config";
import { defineConfig, env } from "@prisma/config";

export default defineConfig({
  schema: "src/prisma/schema.prisma",
  migrations: {
    seed: "tsx src/prisma/seed.ts",
  },
  datasource: {
    // url - Multi Connection (Recommended)

    // Url link -> Database
    url: env("DATABASE_URL"),

    shadowDatabaseUrl: env("POSTGRES_URL_NON_POOLING"),
  },
});
