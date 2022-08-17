import React, { useState } from "react";
import Application from "../application";
import { useMainStore } from "../../store/MainStore";
import { slugs } from "../../utils/types";
import {
  Sandesh,
  Mozofest,
  SupportPanel,
  Vital,
  EventsPortal,
  WebsiteBuilder,
} from "../../../public/assets/projects";
import { AiOutlineArrowLeft } from "react-icons/ai";

interface projectType {
  image: any;
  name: string;
  description?: string;
}

const Projects = () => {
  const { allApplications } = useMainStore()!;
  const [openProject, setOpenProject] = useState<null | projectType>(null);
  const currentId = allApplications.findIndex(
    (obj) => obj.slug == slugs.PROJECTS,
  );

  const allProjects: projectType[] = [
    { image: Sandesh, name: "Sandesh", description: "" },
    { image: Mozofest, name: "Mozofest" },
    { image: EventsPortal, name: "SRMKZILLA - Events Portal" },

    { image: SupportPanel, name: "Supprt Panel" },
    { image: WebsiteBuilder, name: "Website Builder" },

    { image: Vital, name: "Vital" },
  ];

  const Project = ({ project }: { project: projectType }) => {
    return (
      <div className="project" onClick={() => setOpenProject(project)}>
        <div className="image">
          <img src={project.image}></img>
        </div>
        <h5>{project.name}</h5>
      </div>
    );
  };

  return (
    <Application currentId={currentId}>
      {!openProject ? (
        <div className="projects main-section">
          <div className="text">
            <span>Here is a collection of my awesome</span>

            <h1>Projects</h1>
          </div>
          <div className="all-projects">
            {allProjects.map((proj, id) => (
              <React.Fragment key={id}>
                <Project project={proj} />
              </React.Fragment>
            ))}
          </div>
        </div>
      ) : (
        <div className="projects main-section single-project">
          <div className="heading">
            <AiOutlineArrowLeft
              onClick={() => setOpenProject(null)}
              size={32}
            />
            <h3>{openProject.name}</h3>
          </div>
          <div className="description">
            {openProject.description && <p>{openProject.description}</p>}

            <div className="image">
              <img src={openProject.image}></img>
            </div>
          </div>
        </div>
      )}
    </Application>
  );
};

export default Projects;
