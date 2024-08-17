"use client";
import React, { useState } from "react";
import Container from "@/components/layout/container";
import DialogEditInformation from "@/components/editable-portfolio-lawyer-components/dialog/hero-section/dialog-edit-information";
import { HERO_SECTION_DATA_LAWYER } from "@/lib/data";
import DialogEditHeroImage from "@/components/editable-portfolio-lawyer-components/dialog/hero-section/dialog-edit-hero-image";

const HeroSection = () => {
  const [userName, setUserName] = useState(
    HERO_SECTION_DATA_LAWYER.informationProps.userName || ""
  );
  const [major, setMajor] = useState(
    HERO_SECTION_DATA_LAWYER.informationProps.major || ""
  );
  const [description, setDescription] = useState(
    HERO_SECTION_DATA_LAWYER.informationProps.description || ""
  );
  const [message, setMessage] = useState(
    HERO_SECTION_DATA_LAWYER.informationProps.message || ""
  );
  const [emailLink, setEmailLink] = useState(
    HERO_SECTION_DATA_LAWYER.informationProps.emailLink || ""
  );
  const [availableStatus, setAvailableStatus] = useState(
    HERO_SECTION_DATA_LAWYER.informationProps.availableStatus || ""
  );

  return (
    <Container id="about">
      <section className="relative flex flex-col items-start justify-center p-6 lg:flex-row lg:items-center lg:justify-between min-h-screen bg-[url('/portfolio-lawyer/hero-section/hero_section_background_img.svg')] bg-no-repeat bg-center">
        <DialogEditInformation
          availableStatus={availableStatus}
          setAvailableStatus={setAvailableStatus}
          message={message}
          setMessage={setMessage}
          description={description}
          setDescription={setDescription}
          emailLink={emailLink}
          setEmailLink={setEmailLink}
        />

        <div className="relative mt-8 lg:mt-0 lg:ml-8">
          <DialogEditHeroImage
            imageProps={HERO_SECTION_DATA_LAWYER.imageProps}
            informationProps={{
              userName: userName,
              setUserName: setUserName,
              major: major,
              setMajor: setMajor,
            }}
          />
        </div>
      </section>
    </Container>
  );
};

export default HeroSection;
