import { IntroPage } from "@/components/IntroPage";
import { IntroSection } from "@/components/IntroSection";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col bg-graphite">
      <IntroPage />
      <IntroSection />
    </main>
  );
}
