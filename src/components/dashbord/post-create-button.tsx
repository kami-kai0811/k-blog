"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

import { Icon } from "../global/icon";
import { Button, buttonVariants } from "../ui/button";

type responseProps = {
  id: string;
};

export function PostCreateButton() {
  const [isPostLoading, setIsPostLoading] = useState(false);
  const router = useRouter();
  async function onClick() {
    setIsPostLoading(true);

    const response = await fetch("api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "Undefined Post" }),
    });
    setIsPostLoading(false);
    if (!response.ok) {
      return toast("問題が発生しました", {
        description: "投稿が作成されませんでした。もう一度お試しください。",
        style: { background: "#ff6347" },
      });
    }

    const post = (await response.json()) as responseProps;
    router.refresh();
    router.push(`editor/${post.id}`);
  }
  return (
    <div>
      <Button
        className={cn(buttonVariants({ variant: "default" }), "cursor-pointer")}
        onClick={onClick}
      >
        {isPostLoading ? (
          <Icon.spinner className="animate-spin" />
        ) : (
          "＋ 新しい投稿"
        )}
      </Button>
    </div>
  );
}
