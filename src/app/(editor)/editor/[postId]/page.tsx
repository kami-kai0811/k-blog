import type { Post, User } from "@prisma/client";
import { redirect } from "next/navigation";
import { CsrEditor } from "@/components/editor/csr-editor";
import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/session";

type EditorProps = {
  params: Promise<{ postId: string }>;
};

async function getPostForUser(postId: Post["id"], userId: User["id"]) {
  const post = await prisma.post.findFirst({
    where: {
      id: postId,
      authorId: userId,
    },
  });
  return post;
}

export default async function EditorPage({ params }: EditorProps) {
  const user = await getCurrentUser();
  if (!user) {
    redirect("/login");
  }
  const userId = user.id!;
  const resolveParams = await params;
  const postId = resolveParams.postId;

  const post = await getPostForUser(postId, userId);
  if (post === null) {
    redirect("/dashbord");
  }

  return (
    <div className="container mx-auto max-w-3xl">
      <CsrEditor post={post} />
    </div>
  );
}
