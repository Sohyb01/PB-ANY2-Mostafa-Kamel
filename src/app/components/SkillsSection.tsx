import React from "react";
import { skillsData } from "../lib/data";

const SkillsSection = () => {
  return (
    <section className="section__styles py-[72px]">
      <div className="max-w-container flex flex-col gap-6">
        {/* Title and Subheader */}
        <div className="flex flex-col gap-1 text-start">
          <h1 className="font-medium text-gray-700 text-2xl title-text">
            Skills
          </h1>
          <p className="font-normal text-gray-500 text-base">
            Things I am proficient at and have used before
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {skillsData.map((skill) => (
            <>
              <div className="grid place-items center text-center p-2 bg-slate-200 text-slate-800 font-bold rounded-[6px] border-b-[4px] border-cyan-600">
                {skill}
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
