import Tag from "@/components/general/tag";
import Typography from "@/components/general/typography";
import Container from "@/components/layout/container";
import { PROJECTS } from "@/lib/data";
import React from "react";
import ProjectDetail from "./project-detail/project-detail";


const WorkSection = () => {
  return (
    <Container id="work">
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <Tag label="Work" />
        </div>
        <Typography variant="subtitle" className="max-w-xl text-center">
          Some of the noteworthy projects I have built:
        </Typography>
      </div>

      {PROJECTS?.map((project, index) => (
        <ProjectDetail
          key={index}
          {...project}
          layoutType={index % 2 === 0 ? "default" : "reverse"}
        />
      ))}
    </Container>
  );
};

export default WorkSection;
