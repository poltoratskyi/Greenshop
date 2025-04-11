import { Favorites } from "../../../../components/shared/profile";
import { getUserSession } from "../../../../lib/server";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function WishlistPage() {
  try {
    const session = await getUserSession();

    if (!session) {
      return redirect("/not-auth");
    }

    return <Favorites />;
  } catch (error) {
    console.error("Error in WishlistPage:", error);
    return redirect("/not-auth");
  }
}
