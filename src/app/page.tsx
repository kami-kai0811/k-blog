import { Hello } from "@/components/hello";

export default function Home() {
  return (
    <main>
      <div className="flex h-screen items-center justify-center">
        <div className="flex flex-col items-center">
          <Hello />
        </div>
      </div>
    </main>
  );
}
