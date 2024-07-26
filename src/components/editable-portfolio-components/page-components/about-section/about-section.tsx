"use client";
import Container from "@/components/layout/container";
import React, { useState } from "react";
import Tag from "@/components/general/tag";
import Content from "@/components/editable-portfolio-components/page-components/about-section/content/content";
import DialogEditAboutImage from "../../dialog/about-section/dialog-edit-about-image";
import { ABOUT_SECTION_DATA } from "@/lib/data";

const AboutSection = () => {
  const [title, setTitle] = useState(ABOUT_SECTION_DATA.titleProps.title);
  const [infor, setInfor] = useState(ABOUT_SECTION_DATA.informationProps.infor);

  return (
    <Container className="bg-gray-50" id="about">
      <div className="self-center">
        <Tag label="About me" />
      </div>

      <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
        {/* Image */}
        <div className="flex justify-center md:order-first md:justify-end">
          <DialogEditAboutImage {...ABOUT_SECTION_DATA.imageProps} />
        </div>
        {/* Content */}
        <Content
          titleProps={{ title, setTitle }}
          informationProps={{ infor, setInfor }}
        />
      </div>
    </Container>
  );
};

export default AboutSection;
