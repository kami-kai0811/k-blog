import type { EmailConfig } from "next-auth/providers";

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
