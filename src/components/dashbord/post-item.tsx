import type { PostProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";

import { PostOperation } from "./post-operation";

export function PostItem({ post }: PostProps) {
  return (
    <div className="h-full rounded-lg shadow-lg transition-all duration-300 hover:scale-110">
      <Link
        href={`/editor/${post.id}`}
        className="flex items-center md:flex-col md:items-start"
      >
        <Image
          src="/images/post-image.jpeg"
          alt="post image"
          width={300}
          height={30}
          className="hidden h-auto w-auto rounded-l-lg sm:flex md:rounded-t-lg"
          priority
        />
        <div className="flex w-full flex-col pt-2">
          <div className="flex items-center justify-between px-4">
            <span className="text-muted-foreground">
              {format(new Date(post.createdAt), "yyyy/MM/dd")}
            </span>
            <PostOperation post={post} />
          </div>

          <p className="max-w-full px-4 py-3 text-xl font-bold break-words whitespace-normal">
            {post.title.length > 40
              ? post.title.substring(0, 37) + "..."
              : post.title}
          </p>
        </div>
      </Link>
    </div>
  );
}
