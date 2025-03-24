import HeroSection from "@/features/landing/hero-section/hero-section";
import ResumeSection from "@/features/landing/resume-section/resume-section";
import ServicesSection from "@/features/landing/services-section/services-section";
import WorkSection from "@/features/landing/work-section/work-section";

export default function Home() {
  return (
    <main className="space-y-24">
      <HeroSection />
      <ServicesSection />
      <ResumeSection />
      <WorkSection />
    </main>
  );
}
