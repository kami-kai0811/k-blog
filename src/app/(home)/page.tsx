import Link from "next/link";
import { Logo } from "@/components/global/logo";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <section className="flex items-center justify-center">
      <div className="flex flex-col items-center gap-10 lg:gap-5">
        <h1 className="text-7xl drop-shadow-lg lg:text-8xl">
          <Logo />
        </h1>
        <div className="space-y-12 text-center text-xl font-extrabold text-gray-800 drop-shadow-lg sm:text-xl md:space-y-4 md:text-2xl lg:text-3xl">
          <p>{siteConfig.description}。 </p>
          <p> どんなアイデアも、すぐに形に。</p>
          <p>最高の執筆体験を。</p>
        </div>

        <Link
          href={"/login"}
          className={cn(buttonVariants({ variant: "default" }), "px-8 py-6")}
        >
          はじめる
        </Link>
      </div>
    </section>
  );
}
