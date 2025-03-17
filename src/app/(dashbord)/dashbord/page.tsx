import { redirect } from "next/navigation";
import { PostItem } from "@/components/dashbord/post-item";
import { Button, buttonVariants } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/session";
import { cn } from "@/lib/utils";

export default async function Dashbord() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  const posts = await prisma.post.findMany({
    where: {
      authorId: user?.id,
    },
    select: {
      id: true,
      title: true,
      published: true,
      createdAt: true,
    },
    orderBy: {
      updatedAt: "desc",
    },
  });

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-extrabold md:text-4xl">記事投稿</h1>
          <p className="text-muted-foreground">記事の投稿と管理</p>
        </div>
        <Button
          className={cn(
            buttonVariants({ variant: "default" }),
            "cursor-pointer",
          )}
        >
          ＋ 新しい投稿
        </Button>
      </div>

      {posts.length ? (
        <div className="auto-rows-1fr mx-auto grid grid-cols-1 items-center gap-8 pt-14 md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr]">
          {posts.map((post) => (
            <PostItem key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-muted-foreground mt-36 flex justify-center">
          投稿がありません
        </div>
      )}
    </div>
  );
}
