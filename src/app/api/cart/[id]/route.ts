import { prisma } from "../../../../prisma/prisma-client";
import { NextResponse, NextRequest } from "next/server";
import { updateTotalAmounts } from "../../../../hooks/get-update-total-prices";

interface Props {
  params: Promise<{ id: string }>;
}

// Update the cart item
export async function PATCH(
  request: NextRequest,
  { params }: Props
): Promise<NextResponse> {
  try {
    // Get the params id
    const { id } = await params;

    // Get the cart item quantity
    const data = await request.json();
    const { quantity } = data;

    // Get the token
    const token = request.cookies.get("cartToken")?.value;

    if (!token) {
      return NextResponse.json(
        { error: "Cart token not found" },
        { status: 401 }
      );
    }

    // Get the cart item from the database
    const cartItem = await prisma.cartItem.findFirst({
      where: { id: Number(id) },
    });

    if (!cartItem) {
      return NextResponse.json(
        { error: "Cart item not found" },
        { status: 404 }
      );
    }

    // Update the cart item quantity
    await prisma.cartItem.update({
      where: { id: Number(id) },
      data: { quantity },
    });

    // Update the total amounts
    const updatedTotalAmounts = await updateTotalAmounts(token);

    if (!updatedTotalAmounts) {
      return NextResponse.json(
        { error: "Error updating total amounts" },
        { status: 404 }
      );
    }

    return NextResponse.json(updatedTotalAmounts);
  } catch (error) {
    console.error("Error updating cart item:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}

// Delete the cart item
export async function DELETE(
  request: NextRequest,
  { params }: Props
): Promise<NextResponse> {
  try {
    // Get the params id
    const { id } = await params;

    // Get the token
    const token = request.cookies.get("cartToken")?.value;

    if (!token) {
      return NextResponse.json(
        { error: "Cart token not found" },
        { status: 401 }
      );
    }

    // Get the cart item from the database
    const cartItem = await prisma.cartItem.findFirst({
      where: {
        id: Number(id),
      },
    });

    if (!cartItem) {
      return NextResponse.json(
        { error: "Cart item not found" },
        { status: 404 }
      );
    }

    // Delete the cart item from the database
    await prisma.cartItem.delete({
      where: { id: Number(id) },
    });

    // Update the total amounts
    const updatedTotalAmounts = await updateTotalAmounts(token);

    if (!updatedTotalAmounts) {
      return NextResponse.json(
        { error: "Error updating total amounts" },
        { status: 404 }
      );
    }

    return NextResponse.json(updatedTotalAmounts);
  } catch (error) {
    console.error("Error deleting cart item:", error);
    return NextResponse.json(
      { error: "Error deleting cart item" },
      { status: 500 }
    );
  }
}
