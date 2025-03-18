import { z } from "zod";

export const postPatchSchema = z.object({
  title: z
    .string()
    .min(3, { message: "記事のタイトルは3文字以上で記述してください。" })
    .max(128, {
      message: "記事のタイトルは128文字以内で記述してください",
    }),
  content: z.any().optional(),
});

export type postPatchSchemaType = z.infer<typeof postPatchSchema>;
