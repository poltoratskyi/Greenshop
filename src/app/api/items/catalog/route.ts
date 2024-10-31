import { NextResponse } from "next/server";
import { prisma } from "../../../../prisma/prisma-client";

export async function GET() {
  try {
    const items = await prisma.item.findMany({
      include: {
        variations: true,
      },
    });

    return NextResponse.json(items);
  } catch (error) {
    console.error("Error", error);
    return NextResponse.json({ error: "Error" }, { status: 500 });
  }
}
