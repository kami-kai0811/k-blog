import type { RootLayoutProps } from "@/types";

export default function EditorPageLayout(props: RootLayoutProps) {
  return (
    <div className="container mx-auto grid items-center gap-10 py-8">
      {props.children}
    </div>
  );
}
