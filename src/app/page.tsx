import { HelloUniverse } from "@/components/hello-universe";
import { Button } from "@/components/ui/button";
import { env } from "@/env";

export default function Home() {
  const url = env.DEBUG_URL;

  return (
    <main>
      <div className="flex h-screen items-center justify-center">
        <div className="flex flex-col items-center">
          <Button variant={"outline"}>click</Button>
          <HelloUniverse />
          <p className="text-sm text-gray-500">{url}</p>
        </div>
      </div>
    </main>
  );
}
