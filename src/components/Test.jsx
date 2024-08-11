import React from "react";
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








export default function Test() {
  const settings = {
    infinite: true,
    dots: false, // تم تعطيل النقاط هنا
    slidesToShow: 9,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  return (
    <div className="w-[99%] text-white ">
      <div className="slider-container ">
        <Slider {...settings}>
          <div className="h-[20vh] border-white border-2 ">
            <img className="w-full p-6" src={cssp} alt="" />
          </div>
          <div className="h-[20vh] border-white border-2 ">
            <img className="w-full p-6" src={figmap} alt="" />
          </div>
          <div className="h-[20vh] border-white border-2 ">
            <img className="w-full p-6" src={htmlp} alt="" />
          </div>
          <div className=" h-[20vh] border-white border-2 ">
            <img className="w-full p-6" src={jsp} alt="" />
          </div>
          <div className=" h-[20vh] border-white border-2 ">
            <img className="w-full p-6" src={junitP} alt="" />
          </div>
          <div className=" h-[20vh] border-white border-2 ">
            <img className="w-full p-6" src={bootstrap} alt="" />
          </div>
              <div className="h-[20vh] border-white border-2 ">
            <img className="w-full p-6" src={maxresdefault} alt="" />
          </div>
          <div className=" h-[20vh] border-white border-2 ">
            <img className="w-full p-8" src={Reactp} alt="" />
          </div>
          <div className="h-[20vh] border-white border-2 ">
            <img className="w-full pt-12" src={Seleniump} alt="" />
          </div>
          <div className=" h-[35vh] border-white border-2 ">
            <img className="w-full pt-11" src={taliwindp} alt="" />
          </div>
        </Slider>
      </div>
    </div>
  );
}



// Backe grund



<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3 bg-gray-200 p-8">
              <h2 className="text-lg font-bold text-gray-800 text-center mb-2">
                Full-Stack Developer
              </h2>
              <p className="text-gray-600 text-center">
                with a Proven Track Record
              </p>
            </div>
            <div className="md:w-2/3 p-8">
              <p className="text-gray-600 leading-relaxed">
                My past projects have created a rich record of challenges and achievements that have contributed to my professional development. As a full-stack developer, I have built a variety of software projects that focused on meeting client needs. This experience in end-to-end software development and user-centric design has allowed me to develop new skills and deliver impactful solutions.
              </p>
            </div>
          </div>
        </div>
    </div>
