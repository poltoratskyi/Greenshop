import { prisma } from "./prisma-client";
import { category, item, variation, size, blog } from "./constants";

async function upload() {
  await prisma.category.createMany({
    data: category,
  });

  await prisma.item.createMany({
    data: item,
  });

  await prisma.size.createMany({
    data: size,
  });

  await prisma.variation.createMany({
    data: variation,
  });

  await prisma.blog.createMany({
    data: blog,
  });
}

async function clear() {
  // "$executeRaw" - SQL request,
  // "TRUNCATE TABLE" - delete all users,
  // "RESTART IDENTITY" - reset ID to 1

  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "Item" RESTART IDENTITY CASCADE;`;

  await prisma.$executeRaw`TRUNCATE TABLE "Size" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "Variation" RESTART IDENTITY CASCADE;`;

  await prisma.$executeRaw`TRUNCATE TABLE "Order" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "OrderItem" RESTART IDENTITY CASCADE;`;

  await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE;`;

  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "Wishlist" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "WishlistItem" RESTART IDENTITY CASCADE;`;

  await prisma.$executeRaw`TRUNCATE TABLE "Blog" RESTART IDENTITY CASCADE;`;
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
