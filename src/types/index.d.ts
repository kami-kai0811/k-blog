import type { EmailConfig } from "next-auth/providers";

export type RootLayoutProps = {
  children: React.ReactNode;
};

export type homeNavItem = { title: string; href: string };

export type homeNavListType = homeNavItem[];

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
