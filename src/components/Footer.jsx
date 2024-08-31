import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {

  return <>
<footer className="w-full text-[#fafafac4] p-2 border-y border-[#e0f2fe57]">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left mb-4 md:mb-0 md:m-4 ">
          <h1 className="text-lg font-semibold">Tariq's Portfolio</h1>
          <p className="text-sm">© 2024 All Rights Reserved</p>
        </div>
        <div className="flex justify-center md:justify-end gap-4 md:m-4">
          <a href="https://github.com/Tariq-SOF" target="_blank" rel="noopener noreferrer" className="text-[#fafafac4] hover:text-[#fafafa97]">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/tariq-almutairi-80/" target="_blank" rel="noopener noreferrer" className="text-[#fafafac4] hover:text-[#fafafa97]">
            LinkedIn
          </a>
          <Link to="/Contents"  className="text-[#fafafac4] hover:text-[#fafafa97]">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  
  </>
}
