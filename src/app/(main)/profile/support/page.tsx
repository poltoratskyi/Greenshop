import Support from "../../../../components/shared/profile/support";
import { getUserSession } from "../../../../lib/server";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default function SupportPage() {
  try {
    const session = getUserSession();

    if (!session) {
      return redirect("/not-auth");
    }

    return <Support />;
  } catch (error) {
    console.error("Error in SupportPage:", error);
    return redirect("/not-auth");
  }
}
