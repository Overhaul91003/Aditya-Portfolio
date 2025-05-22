import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-10 flex items-center justify-between gap-10 bg-transparent text-[#ccd6f6] text-sm md:text-base">
      
      {/* GitHub */}
      <a
        href="https://github.com/Overhaul91003"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#a762fc] hover:text-white text-2xl drop-shadow-md hover:drop-shadow-[0_0_10px_#a762fc] transition duration-300"
      >
        <FaGithub />
      </a>

      {/* Center Text */}
      <span>
        Made with <span className="text-red-500">❤️</span> by Aditya
      </span>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/aditya-bhattacharyya-38aa70237/?originalSubdomain=in"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#64a2ff] hover:text-white text-2xl drop-shadow-md hover:drop-shadow-[0_0_10px_#64a2ff] transition duration-300"
      >
        <FaLinkedin />
      </a>
    </div>
  );
};

export default Footer;


