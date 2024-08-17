"use client";
import Tag from "@/components/general/tag";
import Container from "@/components/layout/container";
import { PROJECTS, WORK_SECTION_DATA } from "@/lib/data";
import React, { useState } from "react";
import ProjectDetail from "./project-detail/project-detail";
import DialogEditWorkTitle from "../../dialog/work-section/dialog-edit-work-title";
import CustomOutlineDiv from "@/components/general/custom-outline-div";
import { ProjectDetails } from "@/lib/types";
import DialogAddProject from "../../dialog/work-section/dialog-add-project";

const WorkSection = () => {
  const [projects, setProjects] = useState(WORK_SECTION_DATA.projectsProps);
  const [title, setTitle] = useState(WORK_SECTION_DATA.titleProps.title);

  const addProject = (newProject: ProjectDetails) => {
    setProjects([...projects, newProject]);
  };

  const editProject = (updatedProject: ProjectDetails) => {
    const updatedProjects = projects.map((project) =>
      project.id === updatedProject.id ? updatedProject : project
    );
    setProjects(updatedProjects);
  };

  const deleteProject = (id: string) => {
    const filteredProjects = projects.filter((project) => project.id !== id);
    setProjects(filteredProjects);
  };

  return (
    <Container id="work">
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <Tag label="Work" />
        </div>
        <DialogEditWorkTitle title={title} setTitle={setTitle} />
      </div>
      <div className="gap-y-3 flex flex-col">
        <DialogAddProject addProject={addProject} />
        <CustomOutlineDiv>
          <div className="space-y-10">
            {projects?.map((project, index) => (
              <ProjectDetail
                key={index}
                {...project}
                layoutType={index % 2 === 0 ? "default" : "reverse"}
                editProject={editProject}
                deleteProject={deleteProject}
              />
            ))}
          </div>
        </CustomOutlineDiv>
      </div>
    </Container>
  );
};

export default WorkSection;
