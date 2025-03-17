"use client";

import { useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import { signInGithub, signInGoogle, signInResend } from "@/lib/action";
import { cn } from "@/lib/utils";
import { FcGoogle } from "react-icons/fc";

import { Icon } from "../global/icon";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export function UserAuthForm() {
  const [isGithubLoading, setIsGithubLoading] = useState<boolean>(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState<boolean>(false);
  const [isResendLoading, setIsResendLoading] = useState<boolean>(false);

  return (
    <div className="grid gap-6">
      <form action={signInResend}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label htmlFor="email">メールアドレス</Label>
            <Input
              id="email"
              placeholder="name@example.com"
              name="email"
              type="email"
            ></Input>
          </div>
          <button
            onClick={() => {
              setIsResendLoading(true);
            }}
            className={cn(buttonVariants(), "cursor-pointer")}
          >
            {isResendLoading ? (
              <Icon.spinner className="animate-spin" />
            ) : (
              "メールアドレスでログイン"
            )}
          </button>
        </div>
      </form>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t"></span>
        </div>
        <div className="relative flex justify-center text-xs">
          <span className="text-muted-foreground bg-background px-2">
            または
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <button
          className={cn(
            buttonVariants({ variant: "outline" }),
            "p3",
            "cursor-pointer",
          )}
          onClick={async () => {
            setIsGithubLoading(true);
            await signInGithub();
          }}
        >
          {isGithubLoading ? (
            <Icon.spinner className="animate-spin" />
          ) : (
            <Icon.github className="" />
          )}
          Github
        </button>
        <button
          className={cn(
            buttonVariants({ variant: "outline" }),
            "p3",
            "cursor-pointer",
          )}
          onClick={async () => {
            setIsGoogleLoading(true);
            await signInGoogle();
          }}
        >
          {isGoogleLoading ? (
            <Icon.spinner className="animate-spin" />
          ) : (
            <FcGoogle />
          )}
          Google
        </button>
      </div>
    </div>
  );
}
