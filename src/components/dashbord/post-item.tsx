import type { PostProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

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
          className="rounded-l-lg md:rounded-t-lg"
        />
        <div className="flex flex-col">
          <PostOperation />
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
