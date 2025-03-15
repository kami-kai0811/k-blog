"use client";

import { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { UserAuthForm } from "@/components/auth/user-auth-form";

function LoginContent() {
  const [authError, setAuthErrorMessage] = useState<boolean>(false);

  const searchParams = useSearchParams();
  console.log(searchParams);
  const errorMessage = searchParams.get("error");

  useEffect(() => {
    if (errorMessage === "OAuthAccountNotLinked") {
      setAuthErrorMessage(true);
    } else {
      setAuthErrorMessage(false);
    }
  }, [errorMessage]);

  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="space-y-2 text-center">
          {authError ? (
            <h1 className="text-2xl font-semibold tracking-tight text-red-600">
              他の認証でそのメールアドレスは使用されています。以前に登録した方法でログインしてください。
            </h1>
          ) : (
            <h1 className="text-2xl font-semibold tracking-tight">
              Welcome Back
            </h1>
          )}
          <p className="text-muted-foreground text-sm">
            メールアドレスを入力してログインできます
          </p>
        </div>
        <UserAuthForm />
        <p className="text-muted-foreground px-8 text-center text-sm">
          <Link href={"/register"} className="underline underline-offset-4">
            アカウントを持っていますか？
          </Link>
        </p>
      </div>
    </div>
  );
}

export default function Login() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginContent />
    </Suspense>
  );
}
