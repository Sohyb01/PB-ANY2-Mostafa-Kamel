import React from "react";
import Image from "next/image";
import { introData } from "../lib/data";
import CVButton from "./CVButton";
import ContactModal from "./ContactModal";

const IntroSection = () => {
  return (
    <section
      id="intro"
      className="section__styles pt-8 pb-[72px] max-w-[680px]"
    >
      <div className="text-center flex flex-col items-center justify-center gap-4">
        {/* Image and Name */}
        <div className="flex flex-col items-center gap gap-4">
          <Image
            className="rounded-[16px]"
            src={introData.imageUrl}
            width={224}
            height={224}
            alt="Image"
          />
          <h6 className="text-slate-500 text-base uppercase font-bold">
            {introData.name}
          </h6>
        </div>

        <div className="flex flex-col items-center gap-4">
          {/* Title */}
          <h1 className="font-bold text-gray-900 text-3xl title-text">
            {introData.title}
          </h1>
          {/* Description and CTA */}
          <div className="flex flex-col items-center gap-8">
            <p className="font-normal text-gray-600 text-lg">
              {introData.description}
            </p>
            {/* CTA Buttons */}
            <div className="flex items-center justify-center gap-8">
              <CVButton />
              <ContactModal />
              {/* <a
                href="#contact"
                className="px-6 py-3 border-slate-800 border-[2px] text-slate-800 text-base rounded-md hover:bg-slate-800 hover:text-white transition ease-linear duration-100"
              >
                Contact Me
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
