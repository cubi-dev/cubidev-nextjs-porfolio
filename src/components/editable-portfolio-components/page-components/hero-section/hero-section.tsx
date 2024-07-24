"use client";
import React from "react";
import Container from "@/components/layout/container";
import DialogEditHeroImage from "../../dialog/hero-section/dialog-edit-hero-image";
import DialogEditHeroInformation from "../../dialog/hero-section/dialog-edit-hero-information";

const HeroSection = () => {
  return (
    <Container id="hero">
      <div className="flex flex-col gap-12 md:flex-row">
        {/* Image */}
        <DialogEditHeroImage />

        {/* Content */}
        <div className="flex max-w-3xl flex-grow flex-col justify-center gap-8 md:order-first md:items-start md:justify-center 2xl:gap-12">
          <DialogEditHeroInformation />
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
