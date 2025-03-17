import { DashbordHeaderContent } from "@/components/dashbord/header-content";
import { cn } from "@/lib/utils";

import "@/styles/globals.css";

import type { RootLayoutProps } from "@/types";
import { DashbordNav } from "@/components/dashbord/dashbord-nav";
import { fontNotoSansJP } from "@/fonts";

export default function RootLayout(props: RootLayoutProps) {
  return (
    <div
      className={cn(
        "bg-background flex min-h-screen flex-col pb-14 antialiased",
        fontNotoSansJP.className,
      )}
    >
      <header className="px-8 py-6 md:px-10 lg:px-12">
        <DashbordHeaderContent />
      </header>
      <div className="absolute top-20 right-0 left-0 border-t-2" />
      <div className="mt-2 grid pt-3 md:mt-9 md:grid-cols-[200px_1fr]">
        <aside className="hidden w-[200px] md:flex">
          <DashbordNav />
        </aside>
        <div className="px-12">{props.children}</div>
      </div>
    </div>
  );
}
