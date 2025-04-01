import { getUserSession } from "@/lib/server";
import StatusPages from "../../../components/shared/status-pages";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function NotAuthPage() {
  const session = await getUserSession();

  if (!session) {
    return (
      <StatusPages
        title="Sorry you are not authorized"
        subtitle="Please sing in to your account"
        page="Not Auth"
      />
    );
  }

  return redirect("/");
}
