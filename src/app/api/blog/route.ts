import { prisma } from "../../../prisma/prisma-client";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Get the sizes from the database
    const blogs = await prisma.blog.findMany({
      select: {
        id: true,

        imgUrl: true,
        date: true,
        heading: true,
        title: true,
        descr: true,
      },
    });

    if (!blogs) {
      return NextResponse.json({ error: "Blogs not found" }, { status: 404 });
    }

    return NextResponse.json(blogs);
  } catch (error) {
    console.error("Error fetching blogs:", error);

    return NextResponse.json(
      { error: "Error fetching blogs" },
      { status: 500 }
    );
  }
}
