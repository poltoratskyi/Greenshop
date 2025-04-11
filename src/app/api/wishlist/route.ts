import { NextResponse } from "next/server";
import { prisma } from "../../../prisma/prisma-client";
import { getUserSession, getUserWishlist } from "../../../lib/server";
import { redirect } from "next/navigation";

export async function GET() {
  try {
    const session = await getUserSession();

    if (!session) {
      return redirect("/not-auth");
    }

    const user = await prisma.user.findUnique({
      where: {
        email: session.email as string,
      },
    });

    if (!user) {
      return redirect("/not-auth");
    }

    // Get the wishlist items from the database
    const wishlist = await getUserWishlist(user.id);

    return NextResponse.json(wishlist);
  } catch (error) {
    console.error("Error fetching wishlist:", error);
    return NextResponse.json(
      { error: "Error fetching wishlist" },
      { status: 500 }
    );
  }
}
