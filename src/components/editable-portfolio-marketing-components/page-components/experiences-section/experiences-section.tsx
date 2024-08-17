"use client";
import React, { useState } from "react";
import Tag from "@/components/general/tag";
import Container from "@/components/layout/container";
import { EXPERIENCE_SECTION_DATA_MARKETING } from "@/lib/data";
import ExperienceDetail from "./experience-detail/experience-detail";
import { ExperienceDetails } from "@/lib/types";
import CustomOutlineDiv from "@/components/general/custom-outline-div";
import DialogAddExperience from "../../dialog/experiences-section/dialog-add-experience";
import Typography from "@/components/general/typography";

const ExperiencesSection = () => {
  const [experiences, setExperiences] = useState(EXPERIENCE_SECTION_DATA_MARKETING.experiencesProps);

  const addExperience = (newExperience: ExperienceDetails) => {
    setExperiences([...experiences, newExperience]);
  };

  const editExperience = (updatedExperience: ExperienceDetails) => {
    const updatedExperiences = experiences.map((tech) =>
      tech.id === updatedExperience.id ? updatedExperience : tech
    );
    setExperiences(updatedExperiences);
  };

  const deleteExperience = (id: string) => {
    const filteredExperiences = experiences.filter((tech) => tech.id !== id);
    setExperiences(filteredExperiences);
  };

  return (
    <Container className="bg-gray-50">
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <Typography variant="h2">Experiences</Typography>
        </div>
      </div>
      <div className="gap-y-3 flex flex-col">
        <DialogAddExperience addExperience={addExperience} />
        <CustomOutlineDiv>
          <div className="space-y-10">
            {experiences?.map((experience, index) => (
              <ExperienceDetail
                {...experience}
                key={index}
                editExperience={editExperience}
                deleteExperience={deleteExperience}
              />
            ))}
          </div>
        </CustomOutlineDiv>
      </div>
    </Container>
  );
};

export default ExperiencesSection;
