import { NextResponse } from "next/server";
import { prisma } from "../../../../prisma/prisma-client";

export async function GET() {
  try {
    const items = await prisma.item.findMany({
      orderBy: {
        name: "asc",
      },

      select: {
        id: true,

        name: true,
        imgUrl: true,

        variations: {
          take: 1,

          select: {
            id: true,
            sizeId: true,

            price: true,
            sale: true,
            onSale: true,
          },
        },
      },
    });

    return NextResponse.json(items);
  } catch (error) {
    console.error("Error fetching items:", error);

    return NextResponse.json(
      { error: "Failed to fetch items" },
      { status: 500 }
    );
  }
}
