import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const postCreateScheme = z.object({
  title: z.string(),
  content: z.string().optional(),
});

type postCreateSchemeType = z.infer<typeof postCreateScheme>;

export async function POST(req: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json("Unauthorized", { status: 403 });
    }

    const json = (await req.json()) as postCreateSchemeType;
    const body = postCreateScheme.parse(json);
    const { title, content } = body;

    const post = await prisma.post.create({
      data: {
        title,
        content,
        authorId: session.user.id,
      },
      select: { id: true },
    });

    return NextResponse.json(post);
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(err.issues, { status: 422 });
    }
    return NextResponse.json(null, { status: 500 });
  }
}
