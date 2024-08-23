import { Item } from "../../../../types";
import { prisma } from "../../../../prisma/prisma-client";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const items = await prisma.item.findMany({
      include: {
        variations: true,
      },
    });

    const itemsWithFirstVariation = items.map((item: Item) => {
      return {
        ...item,
        firstVariation: item.variations[0],
      };
    });

    return NextResponse.json(itemsWithFirstVariation);
  } catch (error) {
    console.error("Error", error);
    return NextResponse.json({ error: "Error" }, { status: 500 });
  }
}
