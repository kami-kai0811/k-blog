import { siteConfig } from "@/config/site";
import { fontPlayball } from "@/fonts";
import { cn } from "@/lib/utils";

export function Logo() {
  return (
    <span className={cn(fontPlayball.className, "inline")}>
      {siteConfig.name}
    </span>
  );
}
