import crypto from "crypto";
import { prisma } from "../../../prisma/prisma-client";
import { NextResponse, NextRequest } from "next/server";

import { getOrCreateUserCart } from "../../../lib/server";
import { updateCartTotalAmount } from "../../../lib/server";
import { cookies } from "next/headers";

export async function GET() {
  try {
    // Get the token
    const token = (await cookies()).get("cartToken")?.value;

    if (!token) {
      return NextResponse.json(
        { error: "Cart token not found" },
        { status: 400 }
      );
    }

    // Update the total amounts
    const updatedTotalAmounts = await updateCartTotalAmount(token);

    if (!updatedTotalAmounts) {
      return NextResponse.json(
        { error: "Error updating total amounts" },
        { status: 404 }
      );
    }

    return NextResponse.json(updatedTotalAmounts);
  } catch (error) {
    console.error("Error fetching cart:", error);
    return NextResponse.json({ error: "Error fetching cart" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    // Get the token
    let token = request.cookies.get("cartToken")?.value;

    // If the token is not found, generate a random token
    if (!token) {
      token = crypto.randomUUID();
    }

    // Create the new user cart
    const createUserCartToken = await getOrCreateUserCart(token);

    // Get the data from the request
    const data = await request.json();

    // Check if the cart item is already in the cart
    const searchCartItemInTheCart = await prisma.cartItem.findFirst({
      where: {
        cartId: createUserCartToken.id,
        itemId: data.itemId,
        variationId: data.variationId,
      },
    });

    // If the cart item is already in the cart, update the quantity
    if (searchCartItemInTheCart) {
      await prisma.cartItem.update({
        where: {
          id: searchCartItemInTheCart.id,
        },

        data: {
          quantity: searchCartItemInTheCart.quantity + 1,
        },
      });
    } else {
      // If the cart item is not in the cart, create a new cart item
      await prisma.cartItem.create({
        data: {
          cartId: createUserCartToken.id,
          itemId: data.itemId,
          variationId: data.variationId,
        },
      });
    }

    // Update the total amounts
    const updatedTotalAmounts = await updateCartTotalAmount(token);

    // Return the updated total amounts
    const response = NextResponse.json(updatedTotalAmounts);

    // Set the cookie
    response.cookies.set("cartToken", token, {
      path: "/",
      httpOnly: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7,
    });

    return response;
  } catch (error) {
    console.error("Error fetching cart:", error);
    return NextResponse.json({ error: "Error fetching cart" }, { status: 500 });
  }
}
