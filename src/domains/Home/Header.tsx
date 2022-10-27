import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="px-6 fixed top-0  w-full">
      <nav className="h-20 flex items-center justify-between">
        <div className="text-abGreen hover:opacity-95 text-lg font-semibold">
          <Link href={"/"} passHref>
            Abbas Moharami
          </Link>
        </div>
        <div className="flex gap-3">
          <a href="#about">About</a>
          <a href="#about">Experience</a>
          <a href="#about">Work</a>
          <a href="#about">Contact</a>
          <a href="#about">Resume</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
