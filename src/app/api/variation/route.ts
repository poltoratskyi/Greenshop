import { prisma } from "../../../prisma/prisma-client";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Get the variations from the database
    const variations = await prisma.variation.findMany({
      select: {
        id: true,

        value: true,
        sizeId: true,
      },
    });

    return NextResponse.json(variations);
  } catch (error) {
    console.error("Error fetching variations:", error);

    return NextResponse.json(
      { error: "Error fetching variations" },
      { status: 500 }
    );
  }
}
