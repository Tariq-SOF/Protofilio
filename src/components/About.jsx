import React from "react";
import Nav from "./Nav";
import photo from "../photo.avif"
import Lottie from 'lottie-react';
import timeline from "../assets/animatione/Animationtime.json";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import unif from "../assets/stam.jpg"
import semens from "../assets/aboutp/image.jpg"
import semensp from "../assets/aboutp/PTVZ5193.jpg"
import kacstp from "../assets/aboutp/kacst.jpg"
import kacst from "../assets/aboutp/65238.jpg"
import kacsthp from "../assets/aboutp/kacst2p.jpg"
import smartp from "../assets/aboutp/smart.jpg"
import smart from "../assets/aboutp/images.png"
import inf from "../assets/aboutp/inf.png"
import alinco from "../assets/aboutp/alinco.png"
import tuwaiqp from "../assets/aboutp/tuwaiq.jpg"
import tuwaiq from "../assets/aboutp/tuwaiqq.jpg"




export default function About() {
  return(<>
  <div className="w-full h-[481vh]  bg-black flex justify-center ">
    <div className="w-[90%] bg-[#18181b9d] border rounded-lg border-[#e0f2fe57]">
    <Nav/>
    <div className="w-full h-[468vh] bg-black">
    <div className="Section1 w-full h-[80vh] max-sm:w-full max-sm:h-[50vh] flex justify-evenly items-center"style={{ background: `url(${photo})` , width: '100%', height:'100vh', backgroundSize: 'cover', backgroundPosition:'center'}}>
      <div className="w-full h-full  bg-[#000000da] border-t border-[#e0f2fe57] flex items-center justify-evenly gap-4">
  <div className="Prograf w-[50%] max-sm:w-[90%] ">
    <div className="profile-header w-[45%] max-sm:w-[60%]">
      <h1 className="text-2xl font-bold text-[#fafafac4] pb-4 max-sm:text-lg ">My Professional Journey</h1>
    </div>
    <div className="profile-content intro-text text-lg font-medium text-[#f3f3f3a8] ">
      <p className="text-[#f3f3f34a] leading-6 text-base max-sm:text-sm ">
         My Professional path from university and developed into a full-stack software developer. Along the way, I gained diverse experiences through hackathons, volunteer projects, training programs at top tech companies, and building projects for private organizations. This continuous journey of learning and professional growth has led me to my current integrated software development role, which I am proud to have achieved.
      </p>
    </div>
  </div>
  <div className="Icon w-[35%] h-[50vh] max-sm:hidden ">
    <div className="Icon h-[50vh] ">
      <Lottie 
        animationData={timeline}
        loop={false}
      />
    </div>
  </div>
  </div>
</div>
<div className="w-full h-auto "style={{ background: `url(${photo})` , width: '100%', height:'100vh', backgroundSize: 'cover', backgroundPosition:'center'}}>
<div className="w-full h-auto bg-[#000000da]">
<VerticalTimeline>
 <VerticalTimelineElement
  contentStyle={{  
    color: '#fff', 
    backgroundColor: '#0000' ,
    
  }}
  contentArrowStyle={{ borderRight: '7px solid  ' }}
  date="2017 - 2022"
  iconStyle={{ background: 'rgb(33, 150, 243)',backgroundImage:`url(${unif})`, backgroundPosition:'center', backgroundSize:'cover', color: '#fff'  }}
>

<div 
  style={{ backgroundImage: `url(${unif})`,backgroundSize: `cover`, backgroundPosition: `center`,width: `100%`, height: `37vh`}}>
     <div className="bg-[#0000005f] w-full h-full  ">
  <div className="bg-[#000000c5] w-full h-full opacity-90 transition-opacity duration-500 cursor-pointer "> 
    <div className="w-full h-full flex flex-col justify-end gap-2 p-3 max-sm:p-3 max-sm:gap-1">
      <h3 className=" text-lg font-medium text-[#fafafae9] max-sm:text-sm ">Prince Sattam bin Abdulaziz University</h3>
      <h4 className="text-lg font-normal text-[#fafaface] max-sm:text-sm "> Computer Engineering</h4>
      <h className="text-[#f3f3f39a] max-sm:text-xs">
     I graduated in 2022 from Prince Sattam bin Abdulaziz University,this period, my studies focused on software development and computer hardware. I gained valuable experience in these fields, enabling me to develop my skills and complete several successful projects.
      </h>
    </div>
  </div>
</div>
</div>
</VerticalTimelineElement> 
 <VerticalTimelineElement
  className="vertical-timeline-element--work"
  contentStyle={{  
    color: '#fff', 
    backgroundColor: '#0000' ,
    
  }}
contentArrowStyle={{ borderRight: '7px solid  ' }}
  date="2018"
  iconStyle={{ background: 'rgb(33, 150, 243)',backgroundImage:`url(${kacst})`, backgroundPosition:'center', backgroundSize:'cover', color: '#fff' }}
>
   
  <div style={{backgroundImage: `url(${kacstp})` , backgroundSize:`cover`, backgroundPosition:`center` , width:`100%`, height: `37vh`}} >
    <div className="bg-[#000000ab] w-full h-full  ">
        <div className="bg-[#00000046] w-full h-full transition-opacity duration-500 cursor-pointer "> 
            <div className="w-full h-full flex flex-col justify-end gap-1 p-1 max-sm:p-2 max-sm:gap-1 ">
                <h3 className="text-lg font-medium text-[#fafafae9] max-sm:text-sm">King Abdulaziz City for Science and Technology.</h3>
                <h4 className="text-lg font-normal text-[#fafaface] max-sm:text-sm">As a participant and volunteer.</h4>
                <h5 className=" text-[#f3f3f39a] max-sm:text-xs"> 
In August, I participated in the KACST Summer Conference on Human-Computer Interaction (HCI) Research Methods. I attended as both a participant and a volunteer, which enhanced my knowledge and experience in this specialized field. Additionally, I collaborated with the university's Innovation Club and KACST on various projects.
 </h5>
  </div>
    </div>
        </div>
            </div>
</VerticalTimelineElement>
<div className="w-full h-auto bg-[#18181b65]"style={{ background: `url(${photo})` , width: '100%', height:'100vh', backgroundSize: 'cover', backgroundPosition:'center'}}>
<div className="w-full h-full bg-[#000000da]">
 <VerticalTimelineElement
  className="vertical-timeline-element--work"
  contentStyle={{  
    color: '#fff', 
    backgroundColor: '#0000' ,
    
  }}
contentArrowStyle={{ borderRight: '7px solid  ' }}
  date="2019"
  iconStyle={{ background: 'rgb(33, 150, 243)',backgroundImage:`url(${kacst})`, backgroundPosition:'center', backgroundSize:'contain', color: '#fff' }}
>
   
  <div style={{backgroundImage: `url(${kacsthp})` , backgroundSize:`contain`, backgroundPosition:`center` , width:`100%`, height: `37vh`,backgroundRepeat: `no-repeat`}} className="bg-[#ffffff]">
      <div className="bg-[#000000ab] w-full h-full  ">
  <div className="bg-[#00000046] w-full h-full opacity-90 transition-opacity duration-500 cursor-pointer "> 
    <div className="w-full h-full flex flex-col justify-end gap-1 p-1 max-sm:p-3 max-sm:gap-1 ">
      <h3 className=" text-lg font-medium text-[#fafafae9] max-sm:text-sm">MIT Hacking Medicine.</h3>
      <h4 className=" text-lg font-normal text-[#fafaface] max-sm:text-sm"> KACST, and the MIT-IBK Society.</h4>
      <h5 className=" text-[#f3f3f39a] max-sm:text-xs"> 
In January, I volunteered at the MIT Hacking Medicine hackathon, organized by the KACST in collaboration with MIT-IBK. I contributed to the event organization and explored innovative projects that aimed to address healthcare challenges. This experience was a great opportunity to develop my skills in innovation and collaborative work.      </h5>
    </div>
    </div>
    </div>
  </div>
  
</VerticalTimelineElement>

 <VerticalTimelineElement 
 
  className="vertical-timeline-element--work " 
  contentStyle={{  
    color: '#fff', 
    backgroundColor: '#0000' ,
    
  }}
contentArrowStyle={{ borderRight: '7px solid  ' }}
  date="2019"
  iconStyle={{ background: 'rgb(33, 150, 243)',backgroundImage:`url(${semens})`, backgroundPosition:'center', backgroundSize:'contain', color: '#fff' }}
>  
  <div style={{backgroundImage: `url(${semensp})` , backgroundSize:`cover`, backgroundPosition:`center` , width:`100%`, height: `37vh`}} >
    <div className="bg-[#000000ab] w-full h-full ">
  <div className="bg-[#00000046] w-full h-full opacity-90 transition-opacity duration-500 cursor-pointer "> 
    <div className="w-full h-full flex flex-col justify-end gap-2 p-2 max-sm:p-3 max-sm:gap-1">
      <h3 className="text-lg font-medium text-[#fafafae9] max-sm:text-sm">The Siemens Challenge.</h3>
      <h4 className="vtext-lg font-normal text-[#fafaface] max-sm:text-sm">3rd place award.</h4>
      <h5 className=" text-[#f3f3f39a] max-sm:text-xs"> 
I represented my college of engineering and computer science in the The Siemens Challenge hackathon organized by Siemens Germany. Working as part of a team with my peers, we achieved 3rd place, a major accomplishment reflecting our collaborative efforts. This experience enabled me to develop skills in innovation and problem-solving.      </h5>
    </div>
    </div>
    </div>
  </div>
  
</VerticalTimelineElement>
</div></div>
 <div className="w-full h-auto bg-[#18181b65]"style={{ background: `url(${photo})` , width: '100%', height:'100vh', backgroundSize: 'cover', backgroundPosition:'center'}}>
      <div className="w-full h-full bg-[#000000da]">
 <VerticalTimelineElement
  contentStyle={{  
    color: '#fff', 
    backgroundColor: '#0000' ,
    
  }}
  contentArrowStyle={{ borderRight: '7px solid  ' }}
  date="2019"
  iconStyle={{ background: 'rgb(33, 150, 243)',backgroundImage:`url(${smart})`, backgroundPosition:'center', backgroundSize:'cover', color: '#fff'  }}
>
<div 
  style={{ backgroundImage: `url(${smartp})`,backgroundSize: `cover`, backgroundPosition: `center`,width: `100%`, height: `37vh`}}>
      <div className="bg-[#000000ab] w-full h-full  ">
  <div className="bg-[#00000046] w-full h-full opacity-90 transition-opacity duration-500 cursor-pointer "> 
    <div className="w-full h-full flex flex-col justify-end gap-1 p-1 max-sm:p-2 max-sm:gap-1">
      <h3 className=" text-lg font-medium text-[#fafafae9] max-sm:text-sm">The Smart Cities Hackathon</h3>
      <h4 className=" text-lg font-normal text-[#fafaface] max-sm:text-sm">Prince Sattam University</h4>
      <h5 className="text-[#f3f3f39a] max-sm:text-xs">
I volunteered and represented my student council club in the Smart Cities Hackathon organized by PSAU College of Engineering and Computer Science. I helped coordinate the event logistics and activities. This opportunity allowed me to contribute to exploring innovative solutions for city smarter, more sustainable cities.      </h5>
    </div>
  </div>
  </div>
</div>

</VerticalTimelineElement> 
<VerticalTimelineElement
  contentStyle={{  
    color: '#fff', 
    backgroundColor: '#0000' ,
    
  }}
  contentArrowStyle={{ borderRight: '7px solid  ' }}
  date="2022"
  iconStyle={{ background: 'rgb(33, 150, 243)',backgroundImage:`url(${inf})`, backgroundPosition:'center', backgroundSize:'cover', color: '#fff'  }}
>
   
 
<div 
  style={{ backgroundImage: `url(${alinco})`,backgroundSize: `cover`, backgroundPosition: `center`,width: `100%`, height: `37vh`}}>
<div className="bg-[#000000ab] w-full h-full  ">
  <div className="bg-[#00000046] w-full h-full opacity-90 transition-opacity duration-500 cursor-pointer "> 
    <div className="w-full h-full flex flex-col justify-end gap-4 p-6 max-sm:p-3 max-sm:gap-2">
      <h3 className=" text-lg font-medium text-[#fafafae9] max-sm:text-sm">Alinco Group Company</h3>
      <h4 className=" text-lg font-normal text-[#fafaface] max-sm:text-sm">As Computer Engineer</h4>
      <h5 className="text-[#f3f3f39a] max-sm:text-sm">
Collaborate with cross-functional teams to develop and optimize website 
performance, user experience, and SEO.</h5>
    </div>
    </div>
  </div>
</div>
</VerticalTimelineElement> 
<div className="w-full "style={{ background: `url(${photo})` , width: '100%', height:'50vh', backgroundSize: 'cover', backgroundPosition:'center'}}>
<div className="w-full h-[50vh] bg-[#000000da]">
 <VerticalTimelineElement
  contentStyle={{  
    color: '#fff', 
    backgroundColor: '#0000' ,
    
  }}
  contentArrowStyle={{ borderRight: '7px solid  ' }}
  date="2023"
  iconStyle={{ background: 'rgb(33, 150, 243)',backgroundImage:`url(${tuwaiq})`, backgroundPosition:'center', backgroundSize:'cover', color: '#fff'  }}
>
   
<div 
  style={{ backgroundImage: `url(${tuwaiqp})`,backgroundSize: `contain`, backgroundPosition: `center`,width: `100%`, height: `37vh`}}>
<div className="bg-[#000000ab] w-full h-full  ">
  <div className="bg-[#00000046] w-full h-full opacity-90 transition-opacity duration-500 cursor-pointer "> 
    <div className="w-full h-full flex flex-col justify-end gap-1 p-2 max-sm:p-2 max-sm:gap-2">
      <h3 className=" text-lg font-medium text-[#fafafae9] max-sm:text-sm">Tuwaiq Bootcamp</h3>
      <h4 className=" text-lg font-normal text-[#fafaface] max-sm:text-sm">Web developer training</h4>
      <h5 className="text-[#f3f3f39a] max-sm:text-xs">
I completed an intensive front-end web developer training, becoming proficient in JavaScript, HTML, React.js, Tailwind framework, and AWS Cloud. During this program, I also Applying my newfound expertise in these cutting-edge technologies, I have been able to contribute to projects that showcase my comprehensive front-end development capabilities.</h5>
    </div>
    </div>
  </div>
</div>
</VerticalTimelineElement> 
</div></div> </div></div>
</VerticalTimeline>
    </div>
    </div>
    </div>
  </div>
  </div>
  
  
  </>);
}
