import { prisma } from "../../../prisma/prisma-client";
import { NextResponse } from "next/server";

export async function GET() {
  const categories = await prisma.category.findMany({
    include: {
      items: true,
    },
  });

  return NextResponse.json(categories);
}
