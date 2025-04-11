import { redirect } from "next/navigation";
import { Window } from "../../../../components/shared/auth";
import { getUserSession } from "../../../../lib/server";

export const dynamic = "force-dynamic";

export default async function Modal() {
  const session = await getUserSession();

  if (!session) {
    return <Window />;
  }

  return redirect("/profile");
}
