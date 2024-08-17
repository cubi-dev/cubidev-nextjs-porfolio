"use client";
import DialogEditContactDetail from "@/components/editable-portfolio-lawyer-components/dialog/contact-section/dialog-edit-contact-detail";
import DialogEditContactTitle from "@/components/editable-portfolio-lawyer-components/dialog/contact-section/dialog-edit-contact-title";
import CustomOutlineDiv from "@/components/general/custom-outline-div";
import Typography from "@/components/general/typography";
import Container from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { CONTACT_SECTION_DATA_LAWYER } from "@/lib/data";
import { Phone } from "lucide-react";
import { Playfair_Display } from "next/font/google";
import React, { useState } from "react";

const playFairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: "700",
});

const ContactSection = () => {
  const [title, setTitle] = useState(
    CONTACT_SECTION_DATA_LAWYER.titleProps.title
  );
  const [email, setEmail] = useState(
    CONTACT_SECTION_DATA_LAWYER.contactProps.email
  );
  return (
    <div
      id="contact"
      className="mx-auto flex w-full max-w-7xl flex-col justify-center gap-3 px-4 md:gap-6 md:px-8 my-20"
    >
      <Typography
        variant="h1"
        className={`${playFairDisplay.className} text-[#094B72] dark:text-white`}
      >
        Complex Questions?
      </Typography>
      <DialogEditContactTitle title={title} setTitle={setTitle} />
      <CustomOutlineDiv className="flex flex-col space-y-3">
        <DialogEditContactDetail email={email} setEmail={setEmail} />
        <Button
          size="lg"
          className="w-fit bg-[#094B72] text-white hover:bg-[#094B72]/90"
          onClick={() => window.open(`mailto:${email}`, "_blank")}
        >
          <Phone className="mr-3" />
          Call Now
        </Button>
      </CustomOutlineDiv>
    </div>
  );
};

export default ContactSection;
