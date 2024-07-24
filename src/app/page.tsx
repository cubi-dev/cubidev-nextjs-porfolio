import AboutSection from "@/components/home-page/about-section/about-section";
import ContactSection from "@/components/home-page/contact-section/contact-section";
import ExperiencesSection from "@/components/home-page/experiences-section/experiences-section";
import HeroSection from "@/components/home-page/hero-section/hero-section";
import SkillsSection from "@/components/home-page/skills-section/skills-section";
import TestimonialSection from "@/components/home-page/testimonial-section/testimonial-section";
import WorkSection from "@/components/home-page/work-section/work-section";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { ThemeProviders } from "@/lib/theme-providers";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperiencesSection />
      <WorkSection />
      <TestimonialSection />
      <ContactSection />
      <Footer />
    </>
  );
}
