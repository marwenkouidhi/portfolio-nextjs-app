import HeroSection from "@/features/landing/hero-section/hero-section";
import ResumeSection from "@/features/landing/resume-section/resume-section";
import ServicesSection from "@/features/landing/services-section/services-section";
import WorkSection from "@/features/landing/work-section/work-section";

export default function Home() {
  return (
    <main className="scrollbar-hide space-y-24 h-[calc(100vh-8rem)] snap-y snap-mandatory overflow-y-scroll">
      <HeroSection />
      <ServicesSection />
      <ResumeSection />
      <WorkSection />
    </main>
  );
}
