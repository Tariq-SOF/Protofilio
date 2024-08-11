import React from "react";
import Nav from "./Nav";
import github from "../assets/Icone/github.png"
import linkedin from "../assets/Icone/linkedin.png";
import descored from "../assets/Icone/descord.png"
import photo from "../photo.avif";
import { Typewriter, Cursor } from "react-simple-typewriter";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cssp from "../assets/css.png"
import figmap from "../assets/figma.png"
import htmlp from "../assets/html.png"
import jsp from "../assets/js.png"
import junitP from "../assets/Junit-1.png"
import bootstrap from "../assets/bootstrap.png"
import maxresdefault from "../assets/maxresdefault.jpg"
import Reactp from "../assets/React.png"
import Seleniump from "../assets/Selenium_logo.svg.png"
import taliwindp from "../assets/tailwind.png"

export default function Homep() {
  

const settings = {
    infinite: true,
    dots: false, 
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    prevArrow: <></>, 
    nextArrow: <></>,

  };


  return(<> 

    <div className="w-full bg-black flex justify-center  ">
      <div className="w-[90%] bg-[#18181b9d] border rounded-lg border-[#e0f2fe57] ">
        
    <Nav/>
<div
  className="h-full w-full relative"
  style={{
    background: `url(${photo})`,
    width: '100%',
    height: '100vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  <div className="w-full max-sm:w-full max-sm:h-[100vh] h-[100vh] bg-[#000000da] pt-16 border-t border-[#e0f2fe57]">
    <div className=" h-full w-full max-md:h-[70vh] max-sm:w-full p-5 flex items-center justify-center bg-[#00000042]">
      <div className="w-full max-w-[90%] h-[65vh]  max-sm:h-[64vh] bg-[#18181b24] shadow-2xl shadow-[#16949477] border-solid border-2 border-[#e0f2fe57] rounded-3xl flex flex-col justify-evenly items-center">
        <div className="intro-container max-w-3xl mx-auto  text-center text-[#fafafac4]">
          <h2 className="intro-title text-4xl font-bold mb-2 animate-bounce max-sm:text-lg">Hi there!</h2>
          <p className="intro-text text-lg font-medium text-[#f3f3f3a8] max-sm:text-sm max-sm:p-5">
            I'm an adept full-stack developer with a focus on frontend development. <br />
            I have a flair for creating dynamic and engaging web applications using <br />a wide array of
            languages, frameworks, and technologies.<br /> My aim is to deliver top-notch, user-friendly
            solutions<br /> that cater to the unique needs of my clients.
          </p>
        </div>
  <div className="rounded-lg text-white w-[60%] max-sm:w-[90%] max-sm:h-[6vh] h-[6vh] bg-[#9965a856] flex max-sm:text-xs ">
<div className="  w-full flex items-center justify-center gap-1  ">
  <img className=" w-[14%] max-sm:w-[20%] bg-[#fdfafaf5] rounded-lg" src={github} alt="" />
  <p >github</p>
 </div>
  <div className="  w-full flex items-center justify-center gap-2 ">
  <img className=" w-[14%] max-sm:w-[20%] bg-[#fffffff5] rounded-lg " src={linkedin} alt="" />
  <p>linkedin</p>
  </div>
  <div className=" w-full flex items-center justify-center gap-1 ">
  <img className=" w-[14%] max-sm:w-[20%] bg-[#fffffff5] rounded-lg" src={descored} alt="" />
  <p>discord</p>
  </div>
</div>
      </div>
    </div>
  </div>
</div>
    {/* Section no 2 */}
      <div className="w-full h-auto max-sm:w-full max-sm:h-full rounded-xl " style={{ background: `url(${photo})` , width: '100%', height:'100vh', backgroundSize: 'cover', backgroundPosition:'center'}}>
        <div className="w-full h-full max-sm:w-full max-sm:h-full rounded-xl bg-[#000000da]  flex flex-col justify-evenly max-sm:justify-around">
          <div className="w-full h-auto max-sm:w-full  max-sm:h-[34vh] flex flex-col justify-evenly items-center  ">
          <div className="w-[47%] h-[45vh] max-sm:w-[80%] max-sm:h-[30vh] shadow-2xl shadow-[#16949477] intro-text text-left font-medium border border-[#e0f2fe57] rounded-3xl bg-[#18181b24] text-[#f3f3f3a8] flex flex-col justify-center items-center gap-4 p-4 max-sm:p-5" >
            <h1 className="text-[#fafafac4] m-2 text-xl  max-sm:text-sm ">
              MY Skills in {' '} 
                <span className="text-white text-xl max-sm:text-base ">
                <Typewriter 
                loop 
                delaySpeed={1500}
                words={['Devrloper', 'Qulity Assurance', 'UX UI']}   
                typeSpeed={70}
                deleteSpeed={50} 
                />
            </span>
              <span className="text-red-600 ">
                 <Cursor cursorStyle='_'/> 
            </span>
            </h1>
                 
            <p className="text-center max-sm:text-sm"> In this section, I showcase MY Skills in software development and maintenance, with the latest technologies and tools I'm proficient in.</p>
            </div>
          </div>
          {/* Section img */}
<div className="w-[99%] max-sm:w-[99%] text-white ">
  <div className="w-full h-[22vh] max-sm:w-full max-sm:h-[16vh] slider-container border border-r-0 border-l-0 p-2  border-[#e0f2fe57] rounded-x flex flex-col justify-center ">
    <Slider {...settings} >
      <div className=" w-full h-full max-sm:w-full ">
          <div className="w-28 h-28 max-sm:w-10 max-sm:h-10 border rounded-full cursor-pointer bg-cover bg-center ease-in duration-300 hover:border-1 hover:border-[#e0f2fefb] shadow-2xl items-center shadow-[#16949477] border-solid border-1 border-[#e0f2fe57] " style={{ backgroundImage: `url(${cssp})`}}> </div>
      </div>
      <div className=" w-full h-full  ">
         <div className="w-28 h-28 max-sm:w-10 max-sm:h-10 border rounded-full cursor-pointer bg-cover bg-center ease-in duration-300 hover:border-1 hover:border-[#e0f2fefb] shadow-2xl items-center shadow-[#16949477] border-solid border-1 border-[#e0f2fe57] " style={{ backgroundImage: `url(${figmap})`}}> </div>
      </div>
      <div className=" w-full h-full  ">
         <div className=" w-28 h-28 max-sm:w-10 max-sm:h-10  border rounded-full cursor-pointer bg-cover bg-center ease-in duration-300 hover:border-1 hover:border-[#e0f2fefb] shadow-2xl items-center shadow-[#16949477] border-solid border-1 border-[#e0f2fe57] " style={{ backgroundImage: `url(${htmlp})`}}> </div>
      </div>
      <div className=" w-full h-full  ">
         <div className=" w-28 h-28 max-sm:w-10 max-sm:h-10 border rounded-full cursor-pointer bg-cover bg-center ease-in duration-300 hover:border-1 hover:border-[#e0f2fefb] shadow-2xl items-center shadow-[#16949477] border-solid border-1 border-[#e0f2fe57] " style={{ backgroundImage: `url(${jsp})` }}> </div>
      </div>
      <div className=" w-full h-full  ">
         <div className="w-28 h-28 max-sm:w-10 max-sm:h-10  border rounded-full cursor-pointer bg-cover bg-center ease-in duration-300 hover:border-1 hover:border-[#e0f2fefb] shadow-2xl items-center shadow-[#16949477] border-solid border-1 border-[#e0f2fe57] " style={{ backgroundImage: `url(${junitP})` }}> </div>
      </div>
      <div className=" w-full h-full  ">
         <div className="w-28 h-28 max-sm:w-10 max-sm:h-10 border rounded-full cursor-pointer bg-cover bg-center ease-in duration-300 hover:border-1 hover:border-[#e0f2fefb] shadow-2xl items-center shadow-[#16949477] border-solid border-1 border-[#e0f2fe57]" style={{ backgroundImage: `url(${bootstrap})` }}> </div>
      </div>
      <div className=" w-full h-full ">
         <div className="w-28 h-28 max-sm:w-10 max-sm:h-10 border rounded-full cursor-pointer bg-cover bg-center ease-in duration-300 hover:border-1 hover:border-[#e0f2fefb] shadow-2xl items-center shadow-[#16949477] border-solid border-1 border-[#e0f2fe57]" style={{ backgroundImage: `url(${maxresdefault})` }}>
         </div>
      </div>
      <div className=" w-full h-full  ">
         <div className="w-28 h-28 max-sm:w-10 max-sm:h-10 border rounded-full cursor-pointer bg-cover bg-center ease-in duration-300 hover:border-1 hover:border-[#e0f2fefb] shadow-2xl items-center shadow-[#16949477] border-solid border-1 border-[#e0f2fe57]" style={{ backgroundImage: `url(${Reactp})` }}> </div>
         </div>
      <div className=" w-full h-full  ">
         <div  className="w-28 h-28 max-sm:w-10 max-sm:h-10 border rounded-full cursor-pointer bg-cover bg-center ease-in duration-300 hover:border-1 hover:border-[#e0f2fefb] shadow-2xl items-center shadow-[#16949477] border-solid border-1 border-[#e0f2fe57]" style={{ backgroundImage: `url(${Seleniump})` }}> </div>
      </div>
      <div className=" w-full h-full ">
         <div className=" w-28 h-28 max-sm:w-10 max-sm:h-10 border rounded-full cursor-pointer bg-cover bg-center ease-in duration-300 hover:border-1 hover:border-[#e0f2fefb] shadow-2xl items-center shadow-[#16949477] border-solid border-1 border-[#e0f2fe57]" style={{ backgroundImage: `url(${taliwindp})` }}>   </div>
      </div>
    </Slider>
  </div>
</div>
        </div>
       </div>
    </div>
    </div> 
  
  
  </>)
}
