import React, { useState } from "react";
import Nav from "./Nav";
import photo from "../photo.avif";
import Lottie from 'lottie-react';
import computerIcon from "../assets/animatione/Animation.json";
import FreshGoods from "../assets/photo_MyProgects/FreshGoods.png";
import youtube_Html_Css from "../assets/photo_MyProgects/youtube_html.png";
import BookesjavaSecript from "../assets/photo_MyProgects/BookesjavaSecript.png";
import Calculaitin from "../assets/photo_MyProgects/CalculaitingJavaSecript.png";
import moviesJavaSecript from "../assets/photo_MyProgects/MoviesJavaSecript.png";
import youtube_react from "../assets/photo_MyProgects/youtube_react.png";
import BokesReact from "../assets/photo_MyProgects/Bokes.png"
import Net from "../assets/photo_MyProgects/Net.png";
import Parking from "../assets/photo_MyProgects/Parking_.png";


export default function Projects() {
  const [active, setactive] = useState("1");
  const myprojects = [
    {titel : "YouTube website to using Reactjs", category:"reactJs & TelweaindCss", prograf:"This website was built using React.js, the YouTube API, and Tailwind CSS for the user interface design." , ImagePath : youtube_react , url:"https://youtube-react-sandy.vercel.app/"},
    {titel : "Books website ", category:"reactJs & TelweaindCss", prograf:"This website was built using React.js, a book API, and Tailwind CSS to showcase our extensive collection of books and provide user registration and login functionality." , ImagePath : BokesReact, url:"https://books-website-kappa.vercel.app/"},
    {titel : "Raknah website", category:"reactJs & TelweaindCss", prograf:" This website was built using React.js, a Googel maps API, and Tailwind CSS to managing and reserving parking." , ImagePath : Parking, url:"https://roknah-pp2h.vercel.app/"},
    {titel : "YouTube website to using HTML&CSS ", category:"html & css", prograf:" This website was built using HTML&CSS to show the YouTube platform." , ImagePath : youtube_Html_Css, url:"https://youtubedesign.vercel.app"},
    {titel : "FreshGoods advertisement website", category:"html & css", prograf:" This website was built using HTML&CSS This HTML&CSS landing page for FreshGoods features key product details and customer testimonials to drive conversions." , ImagePath :FreshGoods, url:"https://tariq-sof.github.io/FreshGoodshtmlcss--/"},
    {titel : "Books website Java Script", category:"java Secrpt", prograf:" This website was built using Java Script, a book API, showcase our extensive collection of books and provide user registration and login functionality." , ImagePath : BookesjavaSecript, url:"https://bookeswebsite-javascript.vercel.app"},
    {titel : "VAT calculation website", category:"java Secrpt", prograf:" This JavaScript-powered website provides a user-friendly VAT calculation tool to help customers quickly determine the total cost inclusive of value-added tax." , ImagePath : Calculaitin, url:"https://tariq-sof.github.io/W5-D2-lab4/"},
    {titel : "movie website", category:"java Secrpt", prograf:" JavaScript-based movie website offers a simple, interface for users to browse and discover a selection of films to watch. " , ImagePath : moviesJavaSecript, url:"https://movies-ashy-one.vercel.app/"},
    {titel : "nature photography website",category:"reactJs & TelweaindCss", prograf:"A visually stunning ReactJS-powered website that showcases breathtaking nature photography." , ImagePath : Net, url:"https://react-nature.vercel.app/"},
   ] 
  const [allprojects , setallprojects] = useState(myprojects);
  const handelactive=((z) => { 
    setactive(z)
   })
   
  return<>
  <div className="w-full h-auto bg-black flex justify-center">
    <div className="w-[90%] h-auto bg-[#18181b9d] border rounded-lg border-[#e0f2fe57]">
  <Nav/>
   <div className="w-full h-auto">
                {/* Section1 icon - prograf */}
    <div className="Section1 w-full h-screen max-sm:h-[70vh] flex justify-evenly items-center"  style={{ background: `url(${photo})` , width: '100%',  backgroundSize: 'cover', backgroundPosition:'center'}}>
      <div className="w-full h-full flex justify-evenly items-center  bg-[#000000da] pt-16 border-t  border-[#e0f2fe57]">
      <div className="Prograf w-[50%] max-sm:w-full max-sm:p-6 flex flex-col gap-4  ">
        <div className="profile-header w-[45%]">
          <h1 className="text-2xl font-bold text-[#fafafac4] max-sm:text-base">Full-Stack Developer with a Proven Track </h1>
        </div>
        <div className="profile-content ">
          <p className="  text-[#f3f3f34a] leading-6 text-base max-sm:text-sm">
            My past projects have created a rich record of challenges and achievements that have contributed to my professional development. As a full-stack developer, I have built a variety of software projects that focused on meeting client needs. This experience in end-to-end software development and user-centric design has allowed me to develop new skills and deliver impactful solutions.
          </p>
        </div>
    </div>
<div className="Icon w-[35%] h-[50vh] m-5 max-sm:hidden">
  <Lottie 
    animationData={computerIcon}
     />
</div>
</div>
    </div>
              {/* Section2 button - progects */}
    <div className="Section2 w-full h-auto border-t border-t-[#e0f2fe57] ">
      <div className="Button w-full h-[20vh] rounded-xl flex items-center justify-center gap-8 max-sm:gap-2">
        <button className={`max-sm:text-xs text-sm bg-[#3d3d4a] hover:shadow-2xl hover:shadow-cyan-100/50  w-24 h-10 rounded-xl duration-500 font-semibold
        ${active === "1"

          ? "border border-sky-100 text-[#f3f3f3de] text-[15px] font-bold"
          : "text-[#f3f3f34a]"
}`}
        onClick={()=>{

           handelactive("1")
          setallprojects(myprojects)
        
        }}
        >All projects</button>
        <button className={` max-sm:text-xs text-sm bg-[#3d3d4a] w-24 h-10 rounded-xl hover:shadow-2xl hover:shadow-cyan-100/50 duration-500 font-semibold  
            ${active==="2"
              ? "border border-sky-100 text-[#f3f3f3de] text-[15px] font-bold"
              : "text-[#f3f3f34a]"
            }
        `}
        onClick={()=>{
          
          handelactive("2")
          const Arrhtmlcss = myprojects.filter((item) => { 
            return item.category === "html & css"
           }) 
          setallprojects(Arrhtmlcss);
        }}
        >HTML & CSS</button>
        <button className={`max-sm:text-xs text-sm bg-[#3d3d4a]  w-24 h-10 rounded-xl hover:shadow-2xl hover:shadow-cyan-100/50 duration-500 font-semibold
        ${active === "3"
          ? "border border-sky-100 text-[#f3f3f3de] text-[15px] font-bold"
          : "text-[#f3f3f34a]"
        }
        `}
        onClick={()=>{
          handelactive("3")
          const Arrjava = myprojects.filter((item) => { 
          return item.category === "java Secrpt"
           })
          setallprojects(Arrjava)
        }}
        >Java Script</button>
        <button className={`max-sm:text-xs text-sm bg-[#3d3d4a]  w-24 h-10 rounded-xl  hover:shadow-2xl hover:shadow-cyan-100/50 duration-500 font-semibold 
        ${active==="4"
          ? "border border-sky-100 text-[#f3f3f3de] text-[15px] font-bold"
          : "text-[#f3f3f34a]"
        }
        `}
        onClick={()=>{
          setactive("4")
          const ArrReact = myprojects.filter((item) => { 
            return item.category==="reactJs & TelweaindCss"
           })
           setallprojects(ArrReact)
        }}
        >ReactJs & TCss</button>
      </div>
        <div className="w-full h-auto flex justify-center">
      <div className="Projects w-[90%] h-auto mb-4 rounded-xl bg-[#18181B] flex justify-evenly flex-wrap">
           {allprojects.map((item) => { 
            return( <div key={item} className="bg-[#f4f4f409] w-[30%] h-[45vh] max-sm:h-[40vh] max-sm:w-[45%] mt-6 flex flex-col justify-between border-2 border-[#1379bc57] hover:border-4 hover:border-[#e0f2fe] duration-500 rounded-2xl cursor-pointer hover:shadow-cyan-100/50 hover:rotate-1 hover:scale-105 ">
          <a href={item.url} target="_blank"><div className=" w-full text-center bg-cover bg-center ">
            <img className="rounded-xl rounded-b-none" src={item.ImagePath} alt="youtube react" />
          </div></a>
         <div className="h-[35vh] flex flex-col justify-center ml-1 gap-1 max-sm:p-1  "> 
          <a href={item.url} target="_blank"><div className=" text-left  text-xl font-bold max-sm:text-xs max-sm:font-medium text-[#fafafac4]">{item.titel}</div>
          <div className=" text-left  text-[#f3f3f34a] leading-6 text-sm font-semibold max-sm:text-xs ">{item.prograf}</div></a>
          </div>
        </div>)
            })}     
      </div>
      </div>

    </div>
  </div>
  </div>
  </div>
  </>
}
