"use client";
import Container from "@/components/layout/container";
import React from "react";
import Tag from "@/components/general/tag";
import Content from "@/components/editable-portfolio-components/page-components/about-section/content/content";
import DialogEditAboutImage from "../../dialog/about-section/dialog-edit-about-image";

const AboutSection = () => {
  return (
    <Container className="bg-gray-50" id="about">
      <div className="self-center">
        <Tag label="About me" />
      </div>

      <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
        {/* Image */}
        <div className="flex justify-center md:order-first md:justify-end">
          <DialogEditAboutImage/>
        </div>
        {/* Content */}
        <Content />
      </div>
    </Container>
  );
};

export default AboutSection;
