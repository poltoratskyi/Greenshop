import { getUserSession, getUserWishlist } from "../../../../lib/server";
import { prisma } from "../../../../prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

interface Props {
  params: Promise<{ id: string }>;
}

export async function DELETE(
  request: NextRequest,
  { params }: Props
): Promise<NextResponse> {
  try {
    const session = await getUserSession();

    if (!session) {
      return NextResponse.redirect("/not-auth");
    }

    const { id } = await params;

    if (!id) {
      return NextResponse.json(
        { error: "Wishlist item ID is required" },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({
      where: {
        email: session.email as string,
      },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const wishlist = await getUserWishlist(user.id);

    if (!wishlist) {
      return NextResponse.json(
        { error: "Wishlist not found" },
        { status: 404 }
      );
    }

    const item = await prisma.wishlistItem.findFirst({
      where: {
        wishlistId: wishlist.id,
        itemId: Number(id),
      },
    });

    if (!item) {
      return NextResponse.json(
        { error: "Wishlist item not found" },
        { status: 404 }
      );
    }

    await prisma.wishlistItem.delete({
      where: {
        id: item.id,
      },
    });

    const updatedWishlist = await getUserWishlist(user.id);

    return NextResponse.json(updatedWishlist);
  } catch (error) {
    console.error("Error deleting wishlist item:", error);
    return NextResponse.json(
      { error: "Error deleting wishlist item" },
      { status: 500 }
    );
  }
}
