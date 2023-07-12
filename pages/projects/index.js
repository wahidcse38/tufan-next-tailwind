import React, { useState } from "react";

import UpcomingProjects from "@/components/projects/UpcomingProjects";
import CompletedProjects from "../../components/projects/CompletedProjects";
import ProjectBanner from "@/components/projects/ProjectBanner";

const ProjectPage = () => {
  const [state, sateState] = useState("upcoming");

  return (
    <>
      <ProjectBanner state={state} sateState={sateState} />
      {state === "upcoming" && <UpcomingProjects />}
      {state === "completed" && <CompletedProjects />}
      
    </>
  );
};

export default ProjectPage;
