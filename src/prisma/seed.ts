import { prisma } from "./prisma-client";
import { hashSync } from "bcrypt";
import { categoriesMenu, catalog, variation, sizes } from "./constants";

async function upload() {
  await prisma.user.createMany({
    data: [
      {
        role: "ADMIN",
        fullName: "Alice",
        email: "alice@prisma.io",
        password: hashSync("12", 12),
        verified: new Date(),
      },

      {
        role: "USER",
        fullName: "Bob",
        email: "bob@prisma.io",
        password: hashSync("21", 12),
        verified: new Date(),
      },
    ],
  });

  await prisma.category.createMany({
    data: categoriesMenu,
  });

  await prisma.item.createMany({
    data: catalog,
  });

  await prisma.size.createMany({
    data: sizes,
  });

  await prisma.variation.createMany({
    data: variation,
  });
}

async function clear() {
  // "$executeRaw" - SQL request,
  // "TRUNCATE TABLE" - delete all users,
  // "RESTART IDENTITY" - reset ID to 1
  await prisma.$executeRaw`TRUNCATE TABLE "Variation" RESTART IDENTITY CASCADE;`;

  await prisma.$executeRaw`TRUNCATE TABLE "Item" RESTART IDENTITY CASCADE;`;

  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE;`;

  await prisma.$executeRaw`TRUNCATE TABLE "Size" RESTART IDENTITY CASCADE;`;

  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE;`;
}

async function main() {
  try {
    await clear();
    await upload();
  } catch (error) {
    console.log(error);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
