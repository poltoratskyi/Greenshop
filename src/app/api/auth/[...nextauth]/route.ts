import NextAuth from "next-auth";
import { authOptions } from "../../../../lib/server";

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
