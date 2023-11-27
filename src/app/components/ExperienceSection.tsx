import React from "react";
import { experienceData } from "../lib/data";

const ExperienceSection = () => {
  return (
    <section className="section__styles py-[72px]">
      <div className="max-w-container">
        {/* Title and Subheader */}
        <div className="flex flex-col gap-1 text-start">
          <h1 className="font-medium text-gray-700 text-2xl title-text">
            Experience & Activities
          </h1>
          <p className="font-normal text-gray-500 text-base md:text-base mb-8">
            Below is a summary of my Experience, Activities, and Participation
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3 grid-flow-row w-full gap-4">
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
              {experience.description.length > 0 && (
                <div className="col-span-3 flex flex-col gap-4 text-slate-500 pb-12">
                  {experience.description.map((point, index) => (
                    <p className="max-w-[640px]" key={index}>
                      {point}
                    </p>
                  ))}
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
