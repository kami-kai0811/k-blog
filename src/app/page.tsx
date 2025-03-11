import { Hello } from '@/components/hello';

export default function Home() {
  return (
    <main>
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col items-center">
          <Hello />
        </div>
      </div>
    </main>
  );
}
