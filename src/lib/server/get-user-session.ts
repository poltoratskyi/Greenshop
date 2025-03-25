import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/server";

export const getUserSession = async () => {
  try {
    const session = await getServerSession(authOptions);
    return session?.user || null;
  } catch (error) {
    console.error("Error in getUserSession:", error);
    return null;
  }
};
