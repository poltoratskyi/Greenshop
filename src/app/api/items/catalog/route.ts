import { NextResponse, NextRequest } from "next/server";
import { prisma } from "../../../../prisma/prisma-client";

const MIN_PRICE = 0;
const MAX_PRICE = 1000;

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const categoryParam = searchParams.get("category");
  const priceFromParam = searchParams.get("price_from");
  const priceToParam = searchParams.get("price_to");
  const sizeParam = searchParams.get("size");
  const sortParam = searchParams.get("sort");
  const directionParam = searchParams.get("direction");

  const categoryIds = categoryParam?.split(",").map(Number);
  const sizeIds = sizeParam?.split(",").map(Number);

  const priceFrom = priceFromParam ? Number(priceFromParam) : MIN_PRICE;
  const priceTo = priceToParam ? Number(priceToParam) : MAX_PRICE;

  let orderBy = {};

  if (sortParam === "name") {
    orderBy = { name: directionParam === "asc" && "asc" };
  } else if (sortParam === "data") {
    orderBy = { createdAt: directionParam === "asc" && "asc" };
  } else if (sortParam === "popularity") {
    orderBy = { popularity: directionParam === "asc" && "asc" };
  } else {
    orderBy = { createdAt: "asc" };
  }

  try {
    const items = await prisma.item.findMany({
      where: {
        categoryId: categoryIds ? { in: categoryIds } : undefined,
        variations: {
          some: {
            AND: [
              sizeIds
                ? {
                    sizeId: {
                      in: sizeIds,
                    },
                  }
                : {},
              {
                price: {
                  gte: priceFrom,
                  lte: priceTo,
                },
              },
            ],
          },
        },
      },

      orderBy: orderBy,

      select: {
        id: true,

        name: true,
        imgUrl: true,
        tags: true,
        sku: true,
        popularity: true,

        variations: {
          select: {
            id: true,

            price: true,
            sale: true,
            onSale: true,
            stock: true,
            isAvailable: true,

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
