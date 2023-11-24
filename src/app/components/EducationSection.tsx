import React from "react";
import { educationData } from "../lib/data";

const EducationSection = () => {
  return (
    <section className="py-10 md:py-16">
      <div className="container max-w-screen-xl mx-auto px-4">
        <h1 className="font-medium text-gray-700 text-3xl mb-5 title-text">
          Education & Certificates
        </h1>

        <p className="font-normal text-gray-500 text-xs md:text-base mb-8">
          Below is a summary of my Education & Certificates
        </p>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {educationData.map((education, index) => (
            <div key={index} className="bg-white px-8 py-10 rounded-md">
              <h4 className="font-medium text-gray-700 text-lg mb-4">
                {education.title}{" "}
                <span className="text-gray-500">/ {education.date}</span>
              </h4>

              <p className="font-normal text-gray-500 text-md mb-4">
                {education.description}
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
