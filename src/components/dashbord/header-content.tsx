"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { dashbordNavList } from "@/config/dashbord-nav-config";
import { allSignOut } from "@/lib/action";

import { Logo } from "../global/logo";

export function DashbordHeaderContent() {
  const path = usePathname();
  return (
    <div className="flex items-center">
      <nav className="relative z-10 md:hidden">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="cursor-pointer">
                メニュー
              </NavigationMenuTrigger>
              <NavigationMenuContent className="">
                {dashbordNavList.map((navItem, index) => {
                  return navItem.title === "ログアウト" ? (
                    <NavigationMenuLink
                      key={index}
                      className="w-3xs cursor-pointer text-red-600"
                      onClick={async () => {
                        await allSignOut();
                      }}
                    >
                      {navItem.title}
                    </NavigationMenuLink>
                  ) : (
                    <NavigationMenuLink
                      key={index}
                      href={navItem.href}
                      className={`w-3xs ${navItem.href === path && "bg-black/30"}`}
                    >
                      {navItem.title}
                    </NavigationMenuLink>
                  );
                })}
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
      <div className="absolute top-4 right-0 left-0 z-0 text-center">
        <Link href={"/"} className="text-5xl font-bold">
          <Logo />
        </Link>
      </div>
      {/* <nav>
        <Link
          href={"/login"}
          className={cn(
            buttonVariants({ variant: "default" }),
            "px-4 py-2 lg:px-6 lg:py-4",
          )}
        >
          ログイン
        </Link>
      </nav> */}
    </div>
  );
}
