import { Orders } from "../../../../components/shared/profile";
import { getOrderItems, getUserSession } from "../../../../lib/server";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function OrdersPage() {
  try {
    const session = await getUserSession();

    if (!session) {
      return redirect("/not-auth");
    }

    const orders = await getOrderItems(session.email as string);

    if (!orders) {
      console.log("No orders found");
    }

    return <Orders data={orders} />;
  } catch (error) {
    console.error("Error in OrdersPage:", error);
    return redirect("/not-auth");
  }
}
