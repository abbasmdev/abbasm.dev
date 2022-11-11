import React from "react";
import Link from "next/link";
import GitlabIcon from "../assets/gitlab.svg";
import LinkedinIcon from "../assets/linkedin.svg";
const Footer = () => {
  return (
    <footer className="flex flex-col items-center gap-3">
      <div className="flex justify-center items-center gap-4">
        <Link href={"https://www.linkedin.com/in/abbas-moharami/"} passHref>
          {/* <a rel="noreferrer" title="Linkedin" target="_blank"> */}
          <LinkedinIcon />
          {/* </a> */}
        </Link>
        <Link href={"https://github.com/abbasmdev/"} passHref>
          {/* <a rel="noreferrer" title="Github" target="_blank"> */}
          <GitlabIcon />
          {/* </a> */}
        </Link>
      </div>
      <div className="text-base">
        <span>Built by Abbas Moharami. Inspired by </span>
        <Link
          target="_blank"
          rel="noreferrer"
          href="https://github.com/bchiang7/v4"
        >
          Brittany Chiang
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
