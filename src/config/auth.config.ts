import type { NextAuthConfig } from "next-auth";
import { env } from "@/env";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";

export const authConfig = {
  providers: [
    Github({
      clientId: env.AUTH_GITHUB_ID,
      clientSecret: env.AUTH_GITHUB_SECRET,
    }),
    Google({
      clientId: env.AUTH_GOOGLE_ID,
      clientSecret: env.AUTH_GOOGLE_SECRET,
    }),
  ],
} satisfies NextAuthConfig;
