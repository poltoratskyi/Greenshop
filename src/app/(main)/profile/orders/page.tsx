import { Orders } from "@/components/shared/profile";
import { processProfileOrderItems } from "@/data/process-profile-order-items";
import { getOrderItems, getUserSession } from "@/lib/server";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function OrdersPage() {
  try {
    const session = await getUserSession();

    if (!session) {
      return redirect("/not-auth");
    }

    const rawOrders = await getOrderItems(session.email as string);

    const processedOrders = processProfileOrderItems(rawOrders);

    return <Orders data={processedOrders} />;
  } catch (error) {
    console.error("Error in OrdersPage:", error);
  }
}
