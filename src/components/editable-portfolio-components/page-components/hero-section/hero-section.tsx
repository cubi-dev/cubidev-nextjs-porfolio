"use client";
import React, { useState } from "react";
import Container from "@/components/layout/container";
import DialogEditHeroImage from "../../dialog/hero-section/dialog-edit-hero-image";
import DialogEditHeroInformation from "../../dialog/hero-section/dialog-edit-hero-information";
import HeroSecionImage from "@/../public/hero-section/hero_section_image.png";
import { HERO_SECTION_DATA } from "@/lib/data";

const HeroSection = () => {
  const [userName, setUserName] = useState(
    HERO_SECTION_DATA.informationProps.userName
  );
  const [description, setDescription] = useState(
    HERO_SECTION_DATA.informationProps.description
  );
  const [country, setCountry] = useState(
    HERO_SECTION_DATA.informationProps.country
  );
  const [city, setCity] = useState(HERO_SECTION_DATA.informationProps.city);
  const [availableStatus, setAvailableStatus] = useState(
    HERO_SECTION_DATA.informationProps.availableStatus
  );
  const [githubLink, setGithubLink] = useState(
    HERO_SECTION_DATA.informationProps.githubLink
  );
  const [twitterLink, setTwitterLink] = useState(
    HERO_SECTION_DATA.informationProps.twitterLink
  );
  const [figmaLink, setFigmaLink] = useState(
    HERO_SECTION_DATA.informationProps.figmaLink
  );
  const heroSectionData = {
    ...HERO_SECTION_DATA,
    informationProps: {
      ...HERO_SECTION_DATA.informationProps,
      userName,
      description,
      country,
      city,
      availableStatus,
      githubLink,
      twitterLink,
      figmaLink,
      setUserName,
      setDescription,
      setCountry,
      setCity,
      setAvailableStatus,
      setGithubLink,
      setTwitterLink,
      setFigmaLink,
    },
  };
  return (
    <Container id="hero">
      <div className="flex flex-col gap-12 md:flex-row">
        {/* Image */}
        <DialogEditHeroImage imageUrl={heroSectionData.imageProps.imageUrl} />

        {/* Content */}
        <div className="flex max-w-3xl flex-grow flex-col justify-center gap-8 md:order-first md:items-start md:justify-center 2xl:gap-12">
          <DialogEditHeroInformation {...heroSectionData.informationProps} />
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
