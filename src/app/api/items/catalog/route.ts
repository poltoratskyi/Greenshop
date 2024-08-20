import { prisma } from "../../../../prisma/prisma-client";
import { NextResponse } from "next/server";

type Variation = {
  price: number;
  sailPrice: number;
  onSale: boolean;
};

type Item = {
  id: number;
  imgUrl: string;
  name: string;
  description: string;
  tags: string;
  sku: string;
  categoryId: number;
  createdAt: Date;
  updatedAt: Date;
  variations: Variation[];
};

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
