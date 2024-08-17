import React from "react";
import ContactSection from "@/components/editable-portfolio-marketing-components/page-components/contact-section/contact-section";
import ExperiencesSection from "@/components/editable-portfolio-marketing-components/page-components/experiences-section/experiences-section";
import HeroSection from "@/components/editable-portfolio-marketing-components/page-components/hero-section/hero-section";
import TestimonialSection from "@/components/editable-portfolio-marketing-components/page-components/testimonial-section/testimonial-section";
import ServicesSection from "@/components/editable-portfolio-marketing-components/page-components/services-section/services-section";

export default function EditablePortfolioMarketing() {
  return (
    <div>
      <HeroSection />
      <TestimonialSection />
      <ExperiencesSection />
      <ServicesSection />
      <ContactSection />
    </div>
  );
}
