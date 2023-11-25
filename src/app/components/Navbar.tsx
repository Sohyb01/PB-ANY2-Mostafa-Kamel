import React from "react";
import Image from "next/image";
import CVButton from "./CVButton";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-4 py-8">
      <a href="#intro">
        <Image src="/navbar-logo.png" width={61} height={41} alt="Logo" />
      </a>

      <CVButton />
    </nav>
  );
};

export default Navbar;
