"use client";
import Tag from "@/components/general/tag";
import Container from "@/components/layout/container";
import { SKILLS_SECTION_DATA } from "@/lib/data";
import React, { useState } from "react";
import TechDetails from "@/components/editable-portfolio-components/page-components/skills-section/tech-details/tech-details";
import DialogEditSkillTitle from "../../dialog/skills-section/dialog-edit-skill-title";
import DialogAddSkill from "../../dialog/skills-section/dialog-add-skills";
import CustomOutlineDiv from "@/components/general/custom-outline-div";

const SkillsSection = () => {
  const [technologies, setTechnologies] = useState(SKILLS_SECTION_DATA.skillsProps);
  const [title, setTitle] = useState(SKILLS_SECTION_DATA.titleProps.title);

  const addTechnology = (newTechnology: TechDetails) => {
    setTechnologies([...technologies, newTechnology]);
  };

  const editTechnology = (updatedTechnology: TechDetails) => {
    const updatedTechnologies = technologies.map((tech) =>
      tech.id === updatedTechnology.id ? updatedTechnology : tech
    );
    setTechnologies(updatedTechnologies);
  };

  const deleteTechnology = (label: string) => {
    const filteredTechnologies = technologies.filter(
      (tech) => tech.label !== label
    );
    setTechnologies(filteredTechnologies);
  };

  return (
    <Container>
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <Tag label="Skills" />
        </div>
        <DialogEditSkillTitle title={title} setTitle={setTitle} />
      </div>
      <div className="gap-y-3 flex flex-col">
        <DialogAddSkill addTechnology={addTechnology} />
        <CustomOutlineDiv>
          <div className="grid grid-cols-3 gap-y-4 md:grid-cols-6 md:gap-y-8 lg:grid-cols-8 lg:gap-y-12">
            {technologies.map((technology, index) => (
              <TechDetails
                {...technology}
                key={index}
                editTechnology={editTechnology}
                deleteTechnology={deleteTechnology}
              />
            ))}
          </div>
        </CustomOutlineDiv>
      </div>
    </Container>
  );
};

export default SkillsSection;
