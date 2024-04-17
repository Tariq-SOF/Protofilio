import React from "react";
import Nav from "./Nav";
import pichrt from "../Home.jpeg";
import photo from "../photo.avif";

export default function Homep() {
  return(<>
    <div className="w-full  bg-black ">
    <Nav/>
    <div className="h-auto w-full bg-black p-5">
    <div className="h-full w-full p-5 flex justify-center items-center" style={{ backgroundImage: `url(${pichrt})`,width: '100%', height: '100vh', backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div className="w-[50%] h-[50vh] bg-[#efefef9e] shadow-2xl shadow-cyan-100/50 border-solid border-2 border-sky-100 rounded-md">
    <div class="intro-container max-w-xl mx-auto px-4 py-6 ">
  <h2 class="intro-title text-2xl font-bold text-gray-800 mb-2 animate-bounce ">Hi there!</h2>
  <p class="intro-text text-black text-lg text-left font-medium">I'm an adept full-stack developer with a focus on frontend development. <br/>I have a flair for creating dynamic and engaging web applications using a wide array of languages, frameworks, and technologies. My aim is to deliver top-notch, user-friendly solutions that cater to the unique needs of my clients.</p>
</div>
 </div>
    </div>
    <div className="w-full mt-3 h-[100vh] rounded-xl bg-black"  >
      <div className="w-[50px] h- bg-slate-50 ">

      </div>
    </div>
    </div>
    </div>  
  
  
  </>)
}
