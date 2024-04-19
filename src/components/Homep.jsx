import React from "react";
import Nav from "./Nav";
import pichrt from "../Home.jpeg";
import photo from "../photo.avif";
import { Typewriter, Cursor } from "react-simple-typewriter";

export default function Homep() {




  return(<>

    <div className="w-full  bg-black ">
    <Nav/>
    <div className="h-auto w-full bg-black p-5">
    <div className="h-full w-full p-5 flex justify-center items-center" style={{ backgroundImage: `url(${pichrt})`,width: '100%', height: '100vh', backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div className="w-[50%] h-[50vh] bg-[#efefef9e] shadow-2xl shadow-cyan-100/50 border-solid border-2 border-sky-100 rounded-md">
    <div class="intro-container max-w-xl mx-auto px-4 py-6 ">
  <h2 class="intro-title text-2xl font-bold text-gray-800 mb-2 animate-bounce ">Hi there!</h2>
  <p class="intro-text text-black text-lg text-left font-normal">I'm an adept full-stack developer with a focus on frontend development. <br/>I have a flair for creating dynamic and engaging web applications using a wide array of languages, frameworks, and technologies. My aim is to deliver top-notch, user-friendly solutions that cater to the unique needs of my clients.</p>
</div>
 </div>
    </div>
    {/* Section no 2 */}
    
      <div className="w-full h-100vh rounded-xl " style={{ background: `url(${photo})` , width: '100%', height:'100vh', backgroundSize: 'cover', backgroundPosition:'center'}}>
        <div className="w-full mt-3 h-[100vh] rounded-xl bg-[#000000d0] pt-8">
          <div className="w-[37%] h-[16vh] shadow-2xl shadow-[#169494ad] rounded-3xl bg-[#efefef1a] pt-6 pl-4 " >
            <h1 className="text-white m-2 text-2xl ">
              MY Skills in {' '} 
                <span className="text-white text-2xl ml-1">
                <Typewriter 
                loop 
                delaySpeed={1500}
                words={['Devrloper', 'Qulity Assurance', 'UX UI']}   
                typeSpeed={70}
                deleteSpeed={50} 
                />
            </span>
              <span className="text-red-600 ml-2">
                 <Cursor cursorStyle='_'/>
              
            </span>
            </h1>
          
            
          </div>
        </div>
       </div>
    </div>
    </div>  
  
  
  </>)
}
