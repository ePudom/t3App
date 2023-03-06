import NextAuth from "next-auth";
import { authOptions } from "start/server/auth";

export default NextAuth(authOptions);
