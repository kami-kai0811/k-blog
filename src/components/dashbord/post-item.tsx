import Image from "next/image";
import Link from "next/link";
import { type Post } from "@prisma/client";

type PostProps = {
  post: Pick<Post, "id" | "title" | "published" | "createdAt">;
};

export function PostItem({ post }: PostProps) {
  return (
    <Link
      href={`/editor/${post.id}`}
      className="flex items-center rounded-lg shadow-lg transition-all duration-300 hover:scale-110 md:flex-col md:items-start"
    >
      <Image
        src="/images/post-image.jpeg"
        alt="post image"
        width={300}
        height={30}
        className="rounded-l-lg md:rounded-t-lg"
      />
      <p className="max-w-full px-4 py-3 text-xl font-bold break-words whitespace-normal">
        {post.title.length > 40
          ? post.title.substring(0, 37) + "..."
          : post.title}
      </p>
    </Link>
  );
}
