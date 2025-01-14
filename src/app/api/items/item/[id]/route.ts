import { NextResponse, NextRequest } from "next/server";
import { prisma } from "../../../../../prisma/prisma-client";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ id: string }>;
}

export async function GET(request: NextRequest, { params }: Props) {
  try {
    const { id } = await params;

    const item = await prisma.item.findFirst({
      where: { id: Number(id) },

      select: {
        id: true,
        imgUrl: true,
        name: true,
        shortDescription: true,
        extendedDescription: true,
        sku: true,
        tags: true,
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
                shortName: true,
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
        categoryId: true,
      },
    });

    if (!item) {
      return notFound();
    }

    return NextResponse.json([item]);
  } catch (error) {
    console.error("Error fetching item:", error);
    throw new Error("Error fetching item");
  }
}
