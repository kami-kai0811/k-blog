"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { dashbordNavList } from "@/config/dashbord-nav-config";
import { allSignOut } from "@/lib/action";

import { Icon as Icons } from "../global/icon";

export function DashbordNav() {
  const [isDeleteLoading, setIsDeleteLoading] = useState<boolean>(false);
  const path = usePathname();
  return (
    <nav className="flex w-full flex-col">
      {" "}
      {dashbordNavList.map((navItem, index) => {
        const Icon =
          navItem.icon && navItem.icon in Icons
            ? Icons[navItem.icon as keyof typeof Icons]
            : Icons.arrowRight;

        return navItem.title === "ログアウト" ? (
          <Link
            key={index}
            href={"."}
            className={`hover:bg-accent flex cursor-pointer gap-2 rounded-md py-3 pl-5 font-medium text-red-600`}
            onClick={async () => {
              setIsDeleteLoading(true);
              await allSignOut();
            }}
          >
            {isDeleteLoading ? (
              <Icons.spinner className="animate-spin" />
            ) : (
              <Icon />
            )}

            {navItem.title}
          </Link>
        ) : (
          <Link
            key={index}
            href={navItem.href}
            className={`hover:bg-accent flex gap-2 rounded-md py-3 pl-5 font-medium ${navItem.href === path && "bg-accent"} `}
          >
            <Icon />
            {navItem.title}
          </Link>
        );
      })}
    </nav>
  );
}
