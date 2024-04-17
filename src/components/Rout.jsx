import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homep from "./Homep";

export default function Rout() {
  return (<>
  <Routes>
    <Route path="/" element = {<Homep/>}/>
    <Route path="/" element = {<sl/>}/>

    
  </Routes>

  </>)
}
