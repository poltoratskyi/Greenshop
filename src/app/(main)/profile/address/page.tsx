import { Address } from "../../../../components/shared/profile";
import { getUserSession } from "../../../../lib/server";
import { prisma } from "../../../../prisma/prisma-client";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function AddressPage() {
  try {
    const session = await getUserSession();

    if (!session) {
      return redirect("/not-auth");
    }

    const user = await prisma.user.findUnique({
      where: {
        email: session.email as string,
      },
    });

    if (!user) {
      return redirect("/not-auth");
    }

    return <Address data={user} />;
  } catch (error) {
    console.error("Error in AddressPage:", error);
    return redirect("/not-auth");
  }
}
