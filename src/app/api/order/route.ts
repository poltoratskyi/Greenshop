import { getUserCart } from "../../../lib/server";
import { sendOrderEmail } from "../../../lib/server";
import { prisma } from "../../../prisma/prisma-client";
import { NextResponse, NextRequest } from "next/server";
import { cookies } from "next/headers";
import { processOrderItems } from "../../../data";

export async function GET(request: NextRequest) {
  try {
    // Get the token
    const token = (await cookies()).get("cartToken")?.value;

    if (!token) {
      return NextResponse.json(
        { error: "Cart token not found" },
        { status: 400 }
      );
    }

    // Get the email
    const url = new URL(request.url);
    const email = url.searchParams.get("email");

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const userOrder = await prisma.order.findMany({
      where: {
        email: email,
      },
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
    } = await request.json();

    if (
      !firstName ||
      !lastName ||
      !city ||
      !email ||
      !phone ||
      !address ||
      !country ||
      !state
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { email: email },
    });

    const userCart = await getUserCart(token);

    if (!userCart || userCart.totalAmount === 0) {
      throw new Error("Cart is empty or not found.");
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
        totalAmount: userCart.totalAmount,
        userId: user?.id || userCart.userId,
        status: "SUCCEEDED",
      },
    });

    if (!order) {
      return NextResponse.json(
        { error: "Error creating order" },
        { status: 500 }
      );
    }

    await prisma.orderItem.createMany({
      data: userCart.items.map((item: any) => ({
        orderId: order.id,
        itemId: item.itemId,
        variationId: item.variationId,
        quantity: item.quantity,
      })),
    });

    if (user) {
      await prisma.user.update({
        where: { email: order.email },
        data: {
          firstName: user.firstName === null ? order.firstName : user.firstName,
          lastName: user.lastName === null ? order.lastName : user.lastName,
          email: user.email === null ? order.email : user.email,
          city: user.city === null ? order.city : user.city,
          address: user.address === null ? order.address : user.address,
          apartment: user.apartment === null ? order.apartment : user.apartment,
          country: user.country === null ? order.country : user.country,
          state: user.state === null ? order.state : user.state,
          zip: user.zip === null ? order.zip : user.zip,
          phone: user.phone === null ? order.phone : user.phone,
        },
      });
    }

    await prisma.cart.update({
      where: { id: userCart.id },
      data: { totalAmount: 0, subTotalAmount: 0 },
    });

    await prisma.cartItem.deleteMany({
      where: { cartId: userCart.id },
    });

    const { orderItems, totalAmount, subtotalAmount } =
      processOrderItems(userCart);

    await sendOrderEmail(
      order.email,
      order.firstName,
      order.lastName,
      order.id.toString(),

      orderItems,
      totalAmount,
      subtotalAmount
    );

    return NextResponse.json(order);
  } catch (error) {
    console.error("Error posting order:", error);
    return NextResponse.json({ error: "Error posting order" }, { status: 500 });
  }
}
