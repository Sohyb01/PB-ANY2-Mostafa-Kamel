import React from "react";
import { testimonialsData } from "../lib/data";

const TestimonialsSection = () => {
  return (
    <section className="section__styles py-[72px] bg-slate-100">
      <div className="max-w-container flex flex-col gap-6">
        {/* Title and Subheader */}
        <div className="flex flex-col gap-1 text-start">
          <h1 className="font-medium text-gray-700 text-2xl title-text">
            Awards & Recommendations
          </h1>
          <p className="font-normal text-gray-500 text-base">
            Below are some of my Awards & Recommendations
          </p>
        </div>
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-[6px] shadow-lg flex flex-col gap-2 border-b-[4px] border-orange-300"
            >
              <p className="text-slate-700 font-bold">{testimonial.name}</p>
              <p className="font-normal text-slate-500">
                {testimonial.description}
              </p>
              <p className="text-end text-lg w-full font-bold tracking-[3px] text-slate-400">
                {testimonial.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
