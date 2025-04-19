import { prisma } from "../../../prisma/prisma-client";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Get the variations from the database
    const variations = await prisma.variation.findMany({
      select: {
        id: true,
        price: true,

        stock: true,
        sizeId: true,
      },
    });

    if (!variations) {
      return NextResponse.json(
        { error: "Variations not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(variations);
  } catch (error) {
    console.error("Error fetching variations:", error);

    return NextResponse.json(
      { error: "Error fetching variations" },
      { status: 500 }
    );
  }
}
