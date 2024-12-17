import { prisma } from "../../../prisma/prisma-client";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Get the category from the database
    const category = await prisma.category.findMany({
      select: {
        id: true,

        name: true,
        items: {
          select: {
            id: true,

            name: true,
            categoryId: true,
          },
        },
      },
    });

    return NextResponse.json(category);
  } catch (error) {
    console.error("Error fetching category:", error);

    return NextResponse.json(
      { error: "Error fetching category" },
      { status: 500 }
    );
  }
}
