import React from "react";
import { testimonialsData } from "../lib/data";

const TestimonialsSection = () => {
  return (
    <section className="py-10 md:py-16">
      <div className="container max-w-screen-xl mx-auto px-4">
        <h1 className="font-medium text-gray-700 text-3xl mb-5 title-text">
          Testimonial
        </h1>

        <p className="font-normal text-gray-500 text-base mb-8">
          Below is a summary of Testimonials & Recommendations of me
        </p>
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-md">
              <p className="font-normal text-gray-500 text-base mb-4">
                {testimonial.description}
              </p>

              <h6 className="font-semibold text-gray-700">
                {testimonial.name}{" "}
                <span className="font-medium text-gray-500">
                  / {testimonial.title}
                </span>
              </h6>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
