import { siteConfig } from "@/config/site";
import { fontPlayball } from "@/fonts";

export function Logo() {
  return <span className={fontPlayball.className}>{siteConfig.name}</span>;
}
