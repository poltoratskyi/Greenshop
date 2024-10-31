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

      // Limiting the items -> 4
      take: 4,
    });

    return NextResponse.json(items);
  } catch (error) {
    console.error("Error", error);
    return NextResponse.json({ error: "Error" }, { status: 500 });
  }
}
