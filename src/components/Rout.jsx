import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import ReactGA from 'react-ga';
import Homep from "./Homep";
import About from "./About";
import Projects from "./Projects";

export default function Rout() {
  ReactGA.initialize('G-X6JCGSSLX3', {
    gaOptions: {
      userId: '8572916208',
      customDimensions: {
        dimension1: 'premium'
      }
    }
  });

  const Viewuser = () => {
    const location = useLocation();
    useEffect(() => {
      ReactGA.set({ page: location.pathname });
      ReactGA.pageview(location.pathname);
    }, [location]);
  };

  return (
    <>
      <Viewuser />
      <Routes>
        <Route path="/" element={<Homep />} />
        <Route path="/Homep" element={<Homep />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
    </>
  );
}
