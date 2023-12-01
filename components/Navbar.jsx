import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <header className="self-stretch bg-midnightblue-600 flex flex-row items-center justify-between py-[0.63rem] px-[2.63rem] md:px-4 ">
        <Link href="/" className="[text-decoration:none]">
          <img
            className="relative w-[5.13rem] h-[3.06rem] object-cover md:w-[3.5rem] md:h-[2.5rem]"
            alt=""
            src="/slice-1-1@2x.png"
          />
        </Link>
        <nav className="m-0 flex flex-row items-start justify-start gap-[1.88rem] md:gap-2 text-left text-[1.06rem] text-cornsilk-500 font-fredoka-one">
          <Link
            href="/about"
            className="[text-decoration:none] relative leading-[1.69rem] text-[inherit] flex items-center w-[3.25rem] shrink-0"
          >
            About
          </Link>
          <Link
            href="#projects"
            className="[text-decoration:none] relative leading-[1.69rem] text-cornsilk-700 flex items-center w-[4.19rem] shrink-0"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="[text-decoration:none] relative leading-[1.69rem] text-cornsilk-100 flex items-center w-[4.13rem] shrink-0"
          >
            Contact
          </Link>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
