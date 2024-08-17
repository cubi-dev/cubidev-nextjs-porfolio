"use client";
import React, { useState } from "react";
import Typography from "@/components/general/typography";
import Container from "@/components/layout/container";
import { Playfair_Display } from "next/font/google";
import DialogEditAchievementInformation from "@/components/editable-portfolio-lawyer-components/dialog/achievement-section/dialog-edit-achievement-information";
import DialogEditAchievementTitle from "@/components/editable-portfolio-lawyer-components/dialog/achievement-section/dialog-edit-achievement-title";
import { ACHIEVEMENTS_DATA_LAWYER } from "@/lib/data";

const playFairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: "700",
});

const AchievementsSection = () => {
  const [message, setMessage] = useState(ACHIEVEMENTS_DATA_LAWYER.message);
  const [clients, setClients] = useState(ACHIEVEMENTS_DATA_LAWYER.clients);
  const [businessLegalities, setBusinessLegalities] = useState(
    ACHIEVEMENTS_DATA_LAWYER.businessLegalities
  );
  const [yearOfJourney, setYearOfJourney] = useState(
    ACHIEVEMENTS_DATA_LAWYER.yearOfJourney
  );
  return (
    <Container
      id="achievement"
      className="bg-[#094B72] dark:bg-gray-100 bg-[url('/portfolio-lawyer/achievements-section/achievement_section_bg_img.svg')] "
    >
      <Typography
        variant="h1"
        className={`${playFairDisplay.className} text-center text-white`}
      >
        Achievements
      </Typography>
      <DialogEditAchievementTitle
        message={message || ""}
        setMessage={setMessage}
      />
      <DialogEditAchievementInformation
        clients={clients || ""}
        setClients={setClients}
        businessLegalities={businessLegalities || ""}
        setBusinessLegalities={setBusinessLegalities}
        yearOfJourney={yearOfJourney || ""}
        setYearOfJourney={setYearOfJourney}
      />
    </Container>
  );
};

export default AchievementsSection;
