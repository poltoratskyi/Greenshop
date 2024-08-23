import { prisma } from "../../../prisma/prisma-client";
import { NextResponse } from "next/server";

export async function GET() {
  const size = await prisma.size.findMany({
    include: {
      variations: true,
    },
  });

  return NextResponse.json(size);
}
