/* eslint-disable react/no-unescaped-entities */
import DialogEditAboutInformation from "@/components/editable-portfolio-components/dialog/about-section/dialog-edit-about-information";
import DialogEditAboutTitle from "@/components/editable-portfolio-components/dialog/about-section/dialog-edit-about-title";
import Typography from "@/components/general/typography";
import Link from "@/components/navigation/link";
import { EXTERNAL_LINKS } from "@/lib/data";
import React from "react";

const Content = () => {
  return (
    <div className="flex max-w-xl flex-col gap-6">
      <DialogEditAboutTitle />
      <DialogEditAboutInformation/>
    </div>
  );
};

export default Content;
