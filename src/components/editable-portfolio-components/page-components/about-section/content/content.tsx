/* eslint-disable react/no-unescaped-entities */
import DialogEditAboutInformation from "@/components/editable-portfolio-components/dialog/about-section/dialog-edit-about-information";
import DialogEditAboutTitle from "@/components/editable-portfolio-components/dialog/about-section/dialog-edit-about-title";
import { ContentProps } from "@/lib/types";
import React from "react";

const Content: React.FC<ContentProps> = ({ informationProps, titleProps }) => {
  return (
    <div className="flex max-w-xl flex-col gap-6">
      <DialogEditAboutTitle
        title={titleProps.title}
        setTitle={titleProps.setTitle}
      />
      <DialogEditAboutInformation
        infor={informationProps.infor}
        setInfor={informationProps.setInfor}
      />
    </div>
  );
};

export default Content;
