import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactGA from 'react-ga';
import Homep from "./Homep";
import About from "./About";
import Projects from "./Projects"
export default function Rout() {

  ReactGA.initialize('G-X6JCGSSLX3', {
  gaOptions: {
    userId: '8572916208',
    customDimensions: {
    dimension1: 'premium'
    }
  }
})

const Viewuser = (location) => {
  ReactGA.set({ page: location.pathname }); 
  ReactGA.pageview(location.pathname); 
};

  return (<>
  <Routes>
    <Route path="/" element = {<Homep/>} 
    render={(props) => {
            Viewuser(props.location);
            return <Homep />
          }}/>
     <Route path="/Homep" element = {<Homep/>}
     render={(props) => {
            Viewuser(props.location);
            return <Homep />
          }}/>
    <Route path="/About" element = {<About/>}
    render={(props) => {
            Viewuser(props.location);
            return <About />
          }}/>
    <Route path="/Projects" element = {<Projects/>}
    render={(props) => {
            Viewuser(props.location);
            return <Projects />
          }}/>
  </Routes>

  </>)
}
