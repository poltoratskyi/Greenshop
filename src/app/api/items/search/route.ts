import { prisma } from "../../../../prisma/prisma-client";
import { NextResponse, NextRequest } from "next/server";

// Get the request -> URL
export async function GET(request: NextRequest) {
  try {
    // Get the query parameter
    const query = request.nextUrl.searchParams.get("query") || "";

    if (!query) {
      return NextResponse.json(
        { error: "Query parameter is required" },
        { status: 401 }
      );
    }

    // Get the items from the database
    const items = await prisma.item.findMany({
      where: {
        // Item name
        name: {
          // 'query' === 'name'
          contains: query,
          // Search unregistered
          mode: "insensitive",
        },
      },

      orderBy: {
        name: "asc",
      },

      select: {
        id: true,

        name: true,
        imgUrl: true,

        variations: {
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
      { error: "Error fetching items" },
      { status: 500 }
    );
  }
}
