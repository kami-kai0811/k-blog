import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import "@/styles/globals.css";

import type { RootLayoutProps } from "@/types";
import type { Metadata } from "next";
import { fontNotoSansJP } from "@/fonts";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s|${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["ブログ"],
  authors: {
    name: "kamiya",
    url: siteConfig.url,
  },
  openGraph: {
    type: "website",
    locale: "ja",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
};

export default function RootLayout(props: RootLayoutProps) {
  return (
    <html lang="ja">
      <body
        className={cn(
          "bg-background min-h-screen antialiased",
          fontNotoSansJP.className,
        )}
      >
        {props.children}
        <Toaster />
      </body>
    </html>
  );
}
