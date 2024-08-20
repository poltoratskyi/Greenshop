import { prisma } from "../../../prisma/prisma-client";
import { NextResponse } from "next/server";

export async function GET() {
  const variation = await prisma.variation.findMany();

  return NextResponse.json(variation);
}
