import type { RootLayoutProps } from "@/types";
import { HeaderContent } from "@/components/homePage/header";

export default function HomePageLayout(props: RootLayoutProps) {
  return (
    <div className="min-h-screen bg-[url('/images/home-bg.png')] bg-cover bg-center">
      <div className="bg-background/50 min-h-screen">
        <div className="container mx-auto">
          <header className="z-40 px-8 py-6 md:px-10 lg:px-12">
            <HeaderContent />
          </header>
          <main className="px-4 pt-12 pb-16 sm:pt-20 md:pt-40 xl:pt-24">
            {props.children}
          </main>
        </div>
      </div>
    </div>
  );
}
