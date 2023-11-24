import React from "react";
import { projectsData } from "../lib/data";

const ProjectsSection = () => {
  return (
    <section className="py-10 md:py-16">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="mb-10">
          <h1 className="font-medium text-gray-900 text-3xl mb-5 title-text">
            Projects
          </h1>

          <p className="font-normal text-gray-700 text-base">
            My biggest and favorite projects
          </p>
        </div>
        {/* Projects Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 gap-y-16 grid-flow-row items-center justify-between">
          {projectsData.map((project, index) => (
            <div key={index} className="space-y-24">
              <div className="flex space-x-6">
                <h1 className="font-normal text-gray-700 text-2xl">
                  0{index + 1}
                </h1>

                <span className="w-28 h-0.5 bg-gray-300 mt-5"></span>

                <div>
                  <h1 className="font-normal text-gray-900 text-2xl mb-2">
                    {project.title}
                  </h1>

                  <p className="font-normal text-gray-700 text-base max-w-[60ch]">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
