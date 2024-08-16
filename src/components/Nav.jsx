import React from "react";
import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import ReactGA from 'react-ga';

export default function Nav() {
  const [actev, setactev] = useState("");
  const location = useLocation();

  React.useEffect(() => {
    setactev(location.pathname);
    trackPageView(location.pathname);
  }, [location.pathname]);

  const trackPageView = (pagePath) => {
    ReactGA.pageview(pagePath);
  }

  const handleLinkClick = (linkPath) => {
    ReactGA.event({
      category: "Navigation",
      action: `Clicked on ${linkPath}`,
    });
  }

  return (
    <nav className="w-full h-[10vh] p-5 max-sm:p-4 max-sm:w-full max-sm:h-[12vh] flex justify-center">
      <ul className="w-[55%] h-full max-sm:w-[100%] flex text-sm max-sm:text-[10px] justify-center items-center gap-12 cursor-pointer border-[1px] border-[#e0f2fe57] p-5 rounded-2xl">
        <Link to="/" className={actev === "/" ? "border-b-2 text-[#f3f3f3] border-sky-100" : "text-[#f3f3f3a8]"} onClick={() => handleLinkClick('Home Page')}>
          Home Page
        </Link>
        <Link to="/about" className={actev === "/about" ? "border-b-2 text-[#f3f3f3] border-sky-100" : "text-[#f3f3f3a8]"} onClick={() => handleLinkClick('About Page')}>
          About Page
        </Link>
        <Link to="/projects" className={actev === "/projects" ? "border-b-2 text-[#f3f3f3] border-sky-100" : "text-[#f3f3f3a8]"} onClick={() => handleLinkClick('Projects Page')}>
          Projects Page
        </Link>
      </ul>
    </nav>
  );
}