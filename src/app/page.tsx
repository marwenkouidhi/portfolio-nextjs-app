import HeroSection from "@/features/landing/hero-section";
import ServicesSection from "@/features/landing/services-section";

export default function Home() {
  return (
    <main className="space-y-24">
      <HeroSection />
      <ServicesSection />
    </main>
  );
}
