import { NextResponse, NextRequest } from "next/server";
import { prisma } from "../../../../prisma/prisma-client";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ id: string }>;
}

export async function GET(
  request: NextRequest,
  { params }: Props
): Promise<NextResponse> {
  try {
    const { id } = await params;

    if (!id) {
      return NextResponse.json(
        { error: "Blog ID is required" },
        { status: 401 }
      );
    }

    const blog = await prisma.blog.findFirst({
      where: { id: Number(id) },

      select: {
        id: true,

        imgUrl: true,
        date: true,
        year: true,
        heading: true,
        title: true,
        subtitle: true,
        descr: true,
      },
    });

    if (!blog) {
      return notFound();
    }

    return NextResponse.json([blog]);
  } catch (error) {
    console.error("Error fetching blog:", error);
    throw new Error("Error fetching blog");
  }
}
