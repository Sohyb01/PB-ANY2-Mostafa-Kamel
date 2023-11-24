import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-4 py-8">
      <Image src="/navbar-logo.png" width={61} height={41} alt="Logo" />

      <button className="px-7 py-3 md:px-9 md:py-4 bg-white font-medium md:font-semibold text-gray-700 text-md rounded-md hover:bg-gray-700 hover:text-white transition ease-linear duration-100">
        Get my CV
      </button>
    </nav>
  );
};

export default Navbar;
