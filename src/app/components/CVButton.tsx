import React from "react";

const CVButton = () => {
  return (
    <a
      href="/CV.pdf"
      download
      target="_blank"
      className="px-6 py-3 border-slate-800 border-[2px] bg-slate-800 text-white text-base rounded-md hover:bg-slate-50 hover:text-slate-700 transition ease-linear duration-100"
    >
      My CV
    </a>
  );
};

export default CVButton;
