import { cookies } from "next/headers";
import { prisma } from "@/prisma/prisma-client";
import Checkout from "../../../components/shared/checkout";
import { redirect } from "next/navigation";
import { getUserSession } from "@/lib/server";

export const dynamic = "force-dynamic";

export default async function CheckoutPage() {
  try {
    const cookieStore = cookies();
    const token = (await cookieStore).get("cartToken")?.value;

    if (!token) {
      return redirect("/not-found");
    }

    const userCart = await prisma.cart.findFirst({
      where: { token },
    });

    if (!userCart) {
      return redirect("/not-found");
    }

    const items = await prisma.cartItem.findMany({
      where: { cartId: userCart.id },
    });

    if (items.length === 0) {
      return redirect("/not-found");
    }

    const session = await getUserSession();

    let user = null;

    if (session?.email) {
      user = await prisma.user.findFirst({
        where: { email: session.email },
      });

      if (!user) {
        return redirect("/not-found");
      }
    }

    return user ? <Checkout user={user} /> : <Checkout />;
  } catch (error) {
    console.error("Error in CheckoutPage:", error);
    return redirect("/not-found");
  }
}
