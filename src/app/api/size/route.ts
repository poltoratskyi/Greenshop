import { prisma } from "../../../prisma/prisma-client";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Get the sizes from the database
    const sizes = await prisma.size.findMany({
      select: {
        id: true,

        fullName: true,
      },
    });

    if (!sizes) {
      return NextResponse.json({ error: "Sizes not found" }, { status: 404 });
    }

    return NextResponse.json(sizes);
  } catch (error) {
    console.error("Error fetching sizes:", error);

    return NextResponse.json(
      { error: "Error fetching sizes" },
      { status: 500 }
    );
  }
}
