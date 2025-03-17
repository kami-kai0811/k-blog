import type { EmailConfig } from "next-auth/providers";
import { type Post } from "@prisma/client";

export type RootLayoutProps = {
  children: React.ReactNode;
};

export type NavItem = { title: string; href: string; icon?: string };

export type NavListType = NavItem[];

export type SendRequestParams = {
  identifier: string;
  url: string;
  provider: EmailConfig;
  theme: Theme;
};

export type Theme = {
  brandColor?: string;
  buttonText?: string;
};

export type PostProps = {
  post: Pick<Post, "id" | "title" | "published" | "createdAt">;
};
