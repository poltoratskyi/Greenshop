import { Item } from "../../../../types";
import { prisma } from "../../../../prisma/prisma-client";
import { NextResponse, NextRequest } from "next/server";

// Get the request -> URL
export async function GET(request: NextRequest) {
  try {
    const query = request.nextUrl.searchParams.get("query") || "";

    // Search items
    const items = await prisma.item.findMany({
      where: {
        // item name
        name: {
          // 'query' === 'name'
          contains: query,
          // Search unregistered
          mode: "insensitive",
        },
      },

      include: {
        variations: true,
      },

      // Limiting the items -> 5
      take: 6,
    });

    const itemsWithFirstVariation = items.map((item: Item) => {
      return {
        ...item,
        // First variation
        firstVariation: item.variations[0],
      };
    });

    return NextResponse.json(itemsWithFirstVariation);
  } catch (error) {
    console.error("Error", error);
    return NextResponse.json({ error: "Error" }, { status: 500 });
  }
}
