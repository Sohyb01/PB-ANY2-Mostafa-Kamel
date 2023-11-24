import React from "react";
import { experienceData } from "../lib/data";

const ExperienceSection = () => {
  return (
    <section className="py-10 md:py-16">
      <div className="container max-w-screen-xl mx-auto px-4">
        <h1 className="font-medium text-gray-700 text-3xl mb-5 title-text">
          Experience
        </h1>

        <p className="font-normal text-gray-500 text-base mb-8">
          8 Below is a summary of my experience across different teams, events,
          projects, etc
        </p>

        {/* Grid */}
        <div className="grid grid-cols-3 grid-flow-row w-full gap-4 gap-x-8">
          {/* Title Row */}
          <h6 className="font-medium text-gray-400 text-base uppercase">
            Company
          </h6>
          <h6 className="font-medium text-gray-400 text-base uppercase">
            Position
          </h6>
          <h6 className="font-medium text-gray-400 text-base uppercase">
            Year
          </h6>

          {/* Experience Row */}
          {experienceData.map((experience) => (
            <>
              <p className="font-semibold text-gray-600 text-base">
                {experience.title}
                <span className="font-normal text-gray-600">
                  / {experience.city}
                </span>
              </p>
              <p className="font-normal text-gray-600 text-base">
                {experience.position}
              </p>
              <p className="font-normal text-gray-600 text-base">
                {experience.year}
              </p>
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
