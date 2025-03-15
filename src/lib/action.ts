"use server";

import { signIn } from "./auth";

export async function signInGithub() {
  await signIn("github");
  return;
}
export async function signInGoogle() {
  await signIn("google");
  return;
}

export async function signInResend(formData: FormData) {
  await signIn("resend", { email: formData.get("email") });
}
