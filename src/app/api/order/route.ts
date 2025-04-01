import { getUserCart, getUserSession } from "../../../lib/server";
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

    const session = await getUserSession();

    if (!session) {
      return NextResponse.json(
        { error: "User session not found" },
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

    const session = await getUserSession();

    if (!session) {
      return NextResponse.json(
        { error: "User session not found" },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { email: session.email as string },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 400 });
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
        userId: session?.id || null,
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

    const findUser = await prisma.user.findFirst({
      where: { email: order.email },
    });

    if (findUser) {
      await prisma.user.update({
        where: { email: order.email },
        data: {
          firstName:
            findUser.firstName === null ? order.firstName : findUser.firstName,
          lastName:
            findUser.lastName === null ? order.lastName : findUser.lastName,
          email: findUser.email === null ? order.email : findUser.email,
          city: findUser.city === null ? order.city : findUser.city,
          address: findUser.address === null ? order.address : findUser.address,
          apartment:
            findUser.apartment === null ? order.apartment : findUser.apartment,
          country: findUser.country === null ? order.country : findUser.country,
          state: findUser.state === null ? order.state : findUser.state,
          zip: findUser.zip === null ? order.zip : findUser.zip,
          phone: findUser.phone === null ? order.phone : findUser.phone,
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
