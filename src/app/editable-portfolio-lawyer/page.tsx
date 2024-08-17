import AchievementsSection from "@/components/editable-portfolio-lawyer-components/page-components/achievements-section/achievements-section";
import ContactSection from "@/components/editable-portfolio-lawyer-components/page-components/contact-section/contact-section";
import HeroSection from "@/components/editable-portfolio-lawyer-components/page-components/hero-section/hero-section";
import ServicesSection from "@/components/editable-portfolio-lawyer-components/page-components/services-section/services-section";
import TestimonialSection from "@/components/editable-portfolio-lawyer-components/page-components/testimonial-section/testimonial-section";
import React from "react";

export default function EditablePortfolioLawyer() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AchievementsSection />
      <TestimonialSection />
      <ContactSection />
    </>
  );
}
