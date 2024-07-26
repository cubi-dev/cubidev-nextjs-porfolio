"use client";
import React, { useState } from "react";
import Tag from "@/components/general/tag";
import Container from "@/components/layout/container";
import DialogEditContactTitle from "../../dialog/contact-section/dialog-edit-contact-title";
import DialogEditContactDetail from "../../dialog/contact-section/dialog-edit-contact-detail";
import { CONTACT_SECTION_DATA } from "@/lib/data";

const ContactSection = () => {
  const [title, setTitle] = useState(CONTACT_SECTION_DATA.titleProps.title);
  const [email, setEmail] = useState(CONTACT_SECTION_DATA.contactProps.email);
  const [phoneNumber, setPhoneNumber] = useState(
    CONTACT_SECTION_DATA.contactProps.phoneNumber
  );

  return (
    <Container id="contact">
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <Tag label="Get in touch" />
        </div>
        <DialogEditContactTitle title={title} setTitle={setTitle} />
      </div>

      <div className="flex flex-col items-center gap-6 md:gap-12">
        <div className="flex flex-col items-center md:gap-4">
          <DialogEditContactDetail
            email={email}
            setEmail={setEmail}
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
          />
        </div>
      </div>
    </Container>
  );
};

export default ContactSection;
