import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homep from "./Homep";
import About from "./About";
import Projects from "./Projects"
export default function Rout() {
  return (<>
  <Routes>
    <Route path="/" element = {<Homep/>}/>
     <Route path="/Homep" element = {<Homep/>}/>
    <Route path="/" element = {<sl/>}/>
    <Route path="/About" element = {<About/>}/>
    <Route path="/Projects" element = {<Projects/>}/>
    

    
  </Routes>

  </>)
}
