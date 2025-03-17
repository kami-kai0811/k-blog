"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { homeNavList } from "@/config/home-nav";
import { cn } from "@/lib/utils";

import { Logo } from "../global/logo";
import { buttonVariants } from "../ui/button";

export function HeaderContent() {
  return (
    <div className="flex items-center justify-between">
      <div className="hidden gap-7 md:flex lg:gap-9">
        <Link href={"/"} className="text-3xl font-bold md:text-4xl lg:text-5xl">
          <Logo />
        </Link>
        <nav className="flex items-center md:text-xl">
          <div className="flex gap-6">
            {homeNavList.map((navItem, index) => (
              <Link
                key={index}
                href={navItem.href}
                className="hover:text-foreground/60 font-bold"
              >
                {navItem.title}
              </Link>
            ))}
          </div>
        </nav>
      </div>
      <div className="md:hidden">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="cursor-pointer">
                メニュー
              </NavigationMenuTrigger>
              <NavigationMenuContent className="">
                {homeNavList.map((navItem, index) => (
                  <NavigationMenuLink
                    key={index}
                    href={navItem.href}
                    className="w-3xs"
                  >
                    {navItem.title}
                  </NavigationMenuLink>
                ))}
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <nav>
        <Link
          href={"/login"}
          className={cn(
            buttonVariants({ variant: "default" }),
            "px-4 py-2 lg:px-6 lg:py-4",
          )}
        >
          ログイン
        </Link>
      </nav>
    </div>
  );
}
