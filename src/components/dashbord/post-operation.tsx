"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { type PostProps } from "@/types";
import { toast } from "sonner";

import { Icon } from "../global/icon";

async function deletePost(postId: string) {
  try {
    const response = await fetch(`/api/posts/${postId}`, { method: "DELETE" });
    if (!response.ok) {
      throw new Error("問題が発生しました");
    }
    toast("記事を削除しました");
    return true;
  } catch (error) {
    toast("問題が発生しました", {
      description: "記事の削除が出来ませんでした。もう一度お試しください。",
      style: { background: "#ff6347" },
    });
    return error;
  }
}

export function PostOperation({ post }: PostProps) {
  const route = useRouter();
  const [showDeleteAlert, setShowDeleteAlert] = useState<boolean>(false);
  const [isDeleteLoading, setIsDeleteLoading] = useState<boolean>(false);

  return (
    <div className="">
      <span
        onClick={(e) => {
          setShowDeleteAlert(true);
          // e.stopPropagation();
          e.preventDefault();
        }}
        className="text-destructive hover:text-destructive/60"
      >
        削除
      </span>
      <span
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        <AlertDialog open={showDeleteAlert} onOpenChange={setShowDeleteAlert}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                本当にこの記事を削除しますか？
              </AlertDialogTitle>
              <AlertDialogDescription>
                この操作を行うと記事は完全に削除されます。
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel className="cursor-pointer">
                キャンセル
              </AlertDialogCancel>
              <AlertDialogAction
                onClick={async () => {
                  setIsDeleteLoading(true);
                  const deleteResult = await deletePost(post.id);
                  if (deleteResult) {
                    setShowDeleteAlert(false);
                    route.refresh();
                  }
                }}
                className="cursor-pointer bg-red-600 focus:ring-red-600"
              >
                {isDeleteLoading ? (
                  <Icon.spinner className="h-4 w-4 animate-spin" />
                ) : (
                  <Icon.trash className="h-4 w-4" />
                )}
                削除
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </span>
    </div>
  );
}
