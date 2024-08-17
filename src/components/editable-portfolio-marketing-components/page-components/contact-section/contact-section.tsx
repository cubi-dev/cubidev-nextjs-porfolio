/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import CustomOutlineDiv from "@/components/general/custom-outline-div";
import Typography from "@/components/general/typography";
import Container from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import DialogEditContactTitle from "../../dialog/contact-section/dialog-edit-contact-title";
import DialogEditContactDetail from "../../dialog/contact-section/dialog-edit-contact-detail";
import { CONTACT_SECTION_DATA_MARKETING } from "@/lib/data";

const ContactSection = () => {
  const [title, setTitle] = useState(
    CONTACT_SECTION_DATA_MARKETING.titleProps.title
  );
  const [email, setEmail] = useState(
    CONTACT_SECTION_DATA_MARKETING.contactProps.email
  );

  return (
    <Container id="contact" className="bg-black">
      <Typography variant="h2" className="text-white">
        Let's Talk
      </Typography>
      <DialogEditContactTitle title={title} setTitle={setTitle} />
      <CustomOutlineDiv className="space-y-10">
        <DialogEditContactDetail email={email} setEmail={setEmail} />
        <Button
          className="rounded-full w-fit bg-transparent border border-white text-white"
          variant={"default"}
          onClick={() => window.open(`mailto:${email}`, "_blank")}
        >
          Contact me
        </Button>
      </CustomOutlineDiv>
    </Container>
  );
};

export default ContactSection;
