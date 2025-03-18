"use client";

import type { postPatchSchemaType } from "@/lib/validations/post";
import type {
  OutputData,
  ToolConstructable,
  ToolSettings,
} from "@editorjs/editorjs";
import type { Post } from "@prisma/client";
import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { postPatchSchema } from "@/lib/validations/post";
import CodeTool from "@editorjs/code";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import LinkTool from "@editorjs/Link";
import EditorjsList from "@editorjs/list";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import TextareaAutosize from "react-textarea-autosize";
import { toast } from "sonner";

import { Icon } from "../global/icon";
import { buttonVariants } from "../ui/button";

export function Editor({ post }: { post: Post | null }) {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const ref = useRef<EditorJS | undefined>(undefined);
  const [isSaving, setIsSaving] = useState<boolean>(false);

  const initializeEditor = useCallback(() => {
    const body = postPatchSchema.parse(post);

    const editor = new EditorJS({
      holder: "editor",
      onReady() {
        ref.current = editor;
      },
      data: body.content as OutputData,
      placeholder: "ここに記事を書く",
      inlineToolbar: true,
      tools: {
        header: Header as ToolConstructable | ToolSettings,
        linkTool: LinkTool as ToolConstructable | ToolSettings,
        list: EditorjsList as ToolConstructable | ToolSettings,
        code: CodeTool as ToolConstructable | ToolSettings,
      },
    });
  }, [post]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMounted(true);
    }
  }, []);

  useEffect(() => {
    if (isMounted) {
      initializeEditor();
    }
    return () => {
      ref.current?.destroy();
      ref.current = undefined;
    };
  }, [isMounted, initializeEditor]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<postPatchSchemaType>({ resolver: zodResolver(postPatchSchema) });

  useEffect(() => {
    if (errors.title) {
      toast("保存できませんでした", {
        description: errors.title.message,
        style: { background: "#ff6347" },
      });
    }
  }, [errors]);

  async function onSubmit(data: postPatchSchemaType) {
    setIsSaving(true);
    const blocks = await ref.current?.save();
    const response = await fetch(`/api/posts/${post?.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: data.title,
        content: blocks,
      }),
    });
    setIsSaving(false);
    if (!response.ok) {
      return toast("問題が発生しました。", {
        description: "あなたの記事は保存されませんでした",
        style: { background: "#ff6347" },
      });
    }
    router.refresh();
    return toast("正常に保存されました。");
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid w-full gap-10">
        <div className="flex justify-between px-5">
          <div className="flex items-center space-x-10">
            {" "}
            <Link
              href={"/dashbord"}
              className={cn(buttonVariants({ variant: "ghost" }))}
            >
              戻る
            </Link>
          </div>
          <button
            className={cn(buttonVariants(), "cursor-pointer")}
            type="submit"
          >
            {isSaving ? (
              <Icon.spinner className="animate-spin" />
            ) : (
              <span>保存</span>
            )}
          </button>
        </div>
        <div className="container mx-auto">
          <TextareaAutosize
            id="title"
            autoFocus
            defaultValue={post?.title}
            placeholder="Post Title"
            className="w-full resize-none overflow-hidden bg-transparent text-5xl font-bold focus:outline-none md:ml-14"
            {...register("title")}
          />
        </div>
        <div className="min-h-[200px]" id="editor" />
        <p className="text-sm text-gray-500">
          Use
          <kbd className="bg-muted mx-2 rounded-md border px-1 text-xs uppercase">
            Tab
          </kbd>
          to open the command menu
        </p>
      </div>
    </form>
  );
}
