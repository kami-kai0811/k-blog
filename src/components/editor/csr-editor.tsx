"use client";

import type { Post } from "@prisma/client";
import dynamic from "next/dynamic";

const Editor = dynamic(
  () => import("@/components/editor/editor").then((mod) => mod.Editor),
  {
    ssr: false,
  },
);

export function CsrEditor({ post }: { post: Post | null }) {
  return (
    <>
      <Editor post={post} />
    </>
  );
}
