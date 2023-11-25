import React from "react";
import { projectsData } from "../lib/data";

const ProjectsSection = () => {
  return (
    <section className="section__styles py-[72px] flex flex-col gap-6">
      {/* Title and Subheader */}
      <div className="flex flex-col gap-1 text-start">
        <h1 className="font-medium text-slate-700 text-2xl title-text">
          Portfolio / Projects
        </h1>
        <p className="font-normal text-slate-500 text-base">
          My biggest and most impressive works
        </p>
      </div>
      {/* Projects Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 grid-flow-row items-center justify-between">
        {projectsData.map((project, index) => (
          <div key={index} className="flex flex-col gap-1">
            <div className="flex items-center gap-2 text-xl">
              <h1 className="font-normal text-slate-800">0{index + 1}</h1>

              <span className="w-16 h-0.5 bg-slate-500"></span>

              <h1 className="font-normal text-slate-800">{project.title}</h1>
            </div>

            <p className="font-normal text-slate-500 text-base max-w-[60ch]">
              {project.description}
            </p>
            {project.url && (
              <a
                className="text-slate-700 underline font-bold"
                href={project.url}
              >
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
