"use client";
import React, { useState } from "react";
import Container from "@/components/layout/container";
import { HERO_SECTION_DATA_MARKETING } from "@/lib/data";
import DialogEditHeroImage from "@/components/editable-portfolio-marketing-components/dialog/hero-section/dialog-edit-hero-image";
import DialogEditHeroInformation from "@/components/editable-portfolio-marketing-components/dialog/hero-section/dialog-edit-hero-information";

export default function HeroSection() {
  const [userName, setUserName] = useState(
    HERO_SECTION_DATA_MARKETING.informationProps.userName || ""
  );
  const [description, setDescription] = useState(
    HERO_SECTION_DATA_MARKETING.informationProps.description || ""
  );

  const [facebookLink, setFacebookLink] = useState(
    HERO_SECTION_DATA_MARKETING.informationProps.facebookLink || ""
  );
  const [instagramLink, setInstagramLink] = useState(
    HERO_SECTION_DATA_MARKETING.informationProps.instagramLink || ""
  );
  const [phoneLink, setPhoneLink] = useState(
    HERO_SECTION_DATA_MARKETING.informationProps.phoneLink || ""
  );
  const [twitterLink, setTwitterLink] = useState(
    HERO_SECTION_DATA_MARKETING.informationProps.twitterLink || ""
  );

  return (
    <Container id="about" className="bg-black">
      <div className="flex items-center justify-center flex-col gap-12 space-y-6 md:flex-row md:space-y-0">
        <DialogEditHeroImage
          imageProps={HERO_SECTION_DATA_MARKETING.imageProps}
          informationProps={{
            userName: userName,
            setUserName: setUserName,
          }}
        />
        <DialogEditHeroInformation
          description={description}
          setDescription={setDescription}
          facebookLink={facebookLink}
          setFacebookLink={setFacebookLink}
          instagramLink={instagramLink}
          setInstagramLink={setInstagramLink}
          phoneLink={phoneLink}
          setPhoneLink={setPhoneLink}
          twitterLink={twitterLink}
          setTwitterLink={setTwitterLink}
        />
      </div>
    </Container>
  );
}
