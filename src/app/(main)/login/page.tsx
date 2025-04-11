import { getUserSession } from "../../../lib/server";
import Registration from "../../../components/shared/registration";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function RegistrationPage() {
  const session = await getUserSession();

  if (!session) {
    return <Registration />;
  }

  return redirect("/profile");
}
