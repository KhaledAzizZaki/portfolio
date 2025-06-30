import React from "react";
import logo from "../assets/original-logo1.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="" className="w-7" />
      </div>
      <div className="my-8 flex items-center justify-center gap-4 text-2xl ">
        <a
          href="https://www.linkedin.com/in/khaledazizzaki/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="hover:text-green-500" />
        </a>
        <a
          href="https://github.com/KhaledAzizZaki"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="hover:text-green-500" />
        </a>
        <a
          href="https://x.com/khaledazizzaki"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSquareXTwitter className="hover:text-green-500" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
