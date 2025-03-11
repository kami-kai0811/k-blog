import { HelloUniverse } from "@/components/hello-universe";

export default function Home() {
  return (
    <main>
      <div className="flex h-screen items-center justify-center">
        <div className="flex flex-col items-center">
          <HelloUniverse />
        </div>
      </div>
    </main>
  );
}
