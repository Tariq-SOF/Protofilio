import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import ReactGA from 'react-ga4'; 
import Homep from "./Homep";
import About from "./About";
import Projects from "./Projects";
import Contents from "./Contents";

export default function Rout() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.initialize('G-X6JCGSSLX3');
  }, []);

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);

  return (
   
     
    <Routes>
      <Route path="/" element={<Homep />} />
      <Route path="/Homep" element={<Homep />} />
      <Route path="/About" element={<About />} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="/Contents" element={<Contents/>}/>
      
    </Routes>
 
  );
}