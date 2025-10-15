import HeroSection from "./components/home/HeroSection";
import StatsSection from "./components/home/StatsSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <StatsSection />
    </main>
  );
}
