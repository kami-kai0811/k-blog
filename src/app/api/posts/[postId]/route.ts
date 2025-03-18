import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { postPatchSchema } from "@/lib/validations/post";
import { z } from "zod";

const routeContextSchema = z.object({
  params: z.promise(
    z.object({
      postId: z.string(),
    }),
  ),
});

export async function PATCH(
  req: NextRequest,
  context: z.infer<typeof routeContextSchema>,
) {
  try {
    const { params } = routeContextSchema.parse(context);
    const resolveParams = await params;
    if (!(await verifyCurrentUserHasAccessToPost(resolveParams.postId))) {
      return NextResponse.json(null, { status: 403 });
    }
    const json = (await req.json()) as object;
    const body = postPatchSchema.parse(json);
    await prisma.post.update({
      where: {
        id: resolveParams.postId,
      },
      data: {
        title: body.title,
        content: body.content as string,
      },
    });

    return NextResponse.json(null, { status: 200 });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(err.issues, { status: 422 });
    } else {
      return NextResponse.json(null, { status: 500 });
    }
  }
}

async function verifyCurrentUserHasAccessToPost(postId: string) {
  const session = await auth();
  const count = await prisma.post.count({
    where: {
      id: postId,
      authorId: session?.user?.id,
    },
  });
  return count > 0;
}

export async function DELETE(
  req: NextRequest,
  context: z.infer<typeof routeContextSchema>,
) {
  try {
    const { params } = routeContextSchema.parse(context);
    const resolveParams = await params;
    if (!(await verifyCurrentUserHasAccessToPost(resolveParams.postId))) {
      return NextResponse.json(null, { status: 403 });
    }

    await prisma.post.delete({
      where: {
        id: resolveParams.postId,
      },
    });
    return new Response(null, { status: 204 });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(err.issues, { status: 422 });
    } else {
      return NextResponse.json(null, { status: 500 });
    }
  }
}
