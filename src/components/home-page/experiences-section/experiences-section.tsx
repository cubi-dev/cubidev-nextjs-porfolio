import Tag from "@/components/general/tag";
import Typography from "@/components/general/typography";
import Container from "@/components/layout/container";
import { EXPERIENCES } from "@/lib/data";
import React from "react";
import ExperienceDetail from "./experience-detail/experience-detail";

const ExperiencesSection = () => {
  return (
    <Container className="bg-gray-50">
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <Tag label="Experience" />
        </div>
        <Typography variant="subtitle" className="max-w-xl text-center">
          Here is a quick summary of my most recent experiences:
        </Typography>
      </div>

      {EXPERIENCES?.map((experience, index) => (
        <ExperienceDetail {...experience} key={index} />
      ))}
    </Container>
  );
};

export default ExperiencesSection;
