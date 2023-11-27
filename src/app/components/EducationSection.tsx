import React from "react";
import { educationData } from "../lib/data";

const EducationSection = () => {
  return (
    <section className="section__styles py-[72px] bg-slate-100">
      <div className="max-w-container flex flex-col gap-6">
        {/* Title and Subheader */}
        <div className="flex flex-col gap-1 text-start">
          <h1 className="font-medium text-gray-700 text-2xl title-text">
            Education & Certificates
          </h1>
          <p className="font-normal text-gray-500 text-base md:text-base">
            Below is a summary of my Education & Certificates
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {educationData.map((education, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-[6px] shadow-lg flex flex-col gap-2 border-b-[4px] border-blue-800"
            >
              <h4 className="text-slate-700 font-bold">{education.title} </h4>

              <p className="font-normal text-slate-500">
                {education.description}
              </p>
              <p className="text-end text-lg w-full font-bold tracking-[3px] text-slate-400">
                {education.date}
              </p>

              {education.url && (
                <div className="relative">
                  <a
                    href="#"
                    className="font-semibold text-blue-500 text-md relative z-10 underline"
                  >
                    See the place here
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
