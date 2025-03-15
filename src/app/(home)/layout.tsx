import type { RootLayoutProps } from "@/types";
import { HeaderContent } from "@/components/homePage/header";

export default function HomePageLayout(props: RootLayoutProps) {
  return (
    <div className="min-h-screen bg-[url('/images/home-bg.png')] bg-cover bg-center">
      <div className="bg-background/50 min-h-screen">
        <div className="container mx-auto">
          <header className="relative z-50 px-8 py-6 md:px-10 lg:px-12">
            <HeaderContent />
          </header>
          <main className="absolute inset-0 z-0 flex h-screen items-center justify-center px-4">
            {props.children}
          </main>
        </div>
      </div>
    </div>
  );
}
