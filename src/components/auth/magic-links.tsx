import { signIn } from "@/lib/auth";

export function MagicLink() {
  return (
    <form
      action={async (formData) => {
        "use server";
        console.log("SignIn");
        const result = await signIn("resend", formData);
        console.log(result);
      }}
    >
      <input type="text" name="email" placeholder="Email" />
      <button type="submit">Signin with Resend</button>
    </form>
  );
}
