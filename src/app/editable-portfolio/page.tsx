import React from "react";
import HeroSection from "@/components/editable-portfolio-components/page-components/hero-section/hero-section";
import AboutSection from "@/components/editable-portfolio-components/page-components/about-section/about-section";
import SkillsSection from "@/components/editable-portfolio-components/page-components/skills-section/skills-section";
import ExperiencesSection from "@/components/editable-portfolio-components/page-components/experiences-section/experiences-section";
import WorkSection from "@/components/editable-portfolio-components/page-components/work-section/work-section";
import TestimonialSection from "@/components/editable-portfolio-components/page-components/testimonial-section/testimonial-section";
import ContactSection from "@/components/editable-portfolio-components/page-components/contact-section/contact-section";

export default function EditablePortfolio() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperiencesSection />
      <WorkSection />
      <TestimonialSection />
      <ContactSection />
    </>
  );
}
