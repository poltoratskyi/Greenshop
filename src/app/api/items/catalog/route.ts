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
        tags: true,
        sku: true,

        variations: {
          select: {
            id: true,

            price: true,
            sale: true,
            onSale: true,

            sizeId: true,

            size: {
              select: {
                id: true,
                fullName: true,
              },
            },
          },
        },

        category: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    if (!items) {
      return NextResponse.json({ error: "Items not found" }, { status: 404 });
    }

    return NextResponse.json(items);
  } catch (error) {
    console.error("Error fetching items:", error);

    return NextResponse.json(
      { error: "Failed to fetch items" },
      { status: 500 }
    );
  }
}
