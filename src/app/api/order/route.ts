import { CartItemVariation } from "@/types";
import { getUserCart } from "../../../lib";
import { emailService } from "../../../lib/email-service";
import { prisma } from "../../../prisma/prisma-client";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  try {
    // Get the token
    const token = request.cookies.get("cartToken")?.value;

    if (!token) {
      return NextResponse.json(
        { error: "Cart token not found" },
        { status: 400 }
      );
    }

    const userOrder = await prisma.order.findFirst({
      where: { token },
    });

    if (!userOrder) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }

    return NextResponse.json(userOrder);
  } catch (error) {
    console.error("Error getting order :", error);
    return NextResponse.json({ error: "Error getting order" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    // Get the token
    let token = request.cookies.get("cartToken")?.value;

    if (!token) {
      return NextResponse.json(
        { error: "Cart token not found" },
        { status: 400 }
      );
    }

    const {
      id,
      firstName,
      lastName,
      city,
      email,
      phone,
      address,
      apartment,
      country,
      state,
      zip,
      notes,
      items,
    } = await request.json();

    if (
      !firstName ||
      !lastName ||
      !city ||
      !email ||
      !phone ||
      !address ||
      !country ||
      !state ||
      !items
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const userCart = await getUserCart(token);

    if (userCart?.totalAmount === 0) {
      return NextResponse.json({ error: "Cart is empty" }, { status: 404 });
    }

    if (!userCart) {
      return NextResponse.json({ error: "Cart not found" }, { status: 404 });
    }

    const order = await prisma.order.create({
      data: {
        id,
        token,
        firstName,
        lastName,
        city,
        email,
        phone,
        address,
        apartment,
        country,
        state,
        zip,
        notes,
        items: JSON.stringify(userCart.items),
      },
    });

    await prisma.cart.update({
      where: { id: userCart.id },
      data: { totalAmount: 0, subTotalAmount: 0 },
    });

    await prisma.cartItem.deleteMany({
      where: { cartId: userCart.id },
    });

    await emailService(
      order.email,
      order.firstName,
      order.lastName,
      order.id.toString(),

      userCart.items.map((item) => ({
        id: item.id,
        itemId: item.itemId,
        name: item.item.name,
        sku: item.item.sku,
        variationId: item.variationId - 1,
        quantity: item.quantity,

        variations: item.item.variations.map(
          (variation: CartItemVariation) => ({
            id: variation.id,
            price: variation.price,
            sale: variation.sale,
            onSale: variation.onSale,
            sizeId: variation.sizeId,

            size: {
              id: variation.size.id,
              shortName: variation.size.shortName,
              fullName: variation.size.fullName,
            },
          })
        ),
      })),

      userCart.totalAmount + 16,
      userCart.subTotalAmount
    );

    return NextResponse.json(order);
  } catch (error) {
    console.error("Error posting order:", error);
    return NextResponse.json({ error: "Error posting order" }, { status: 500 });
  }
}
