 import React from "react";
import { useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import photo from "../photo.avif"
import Lottie from "lottie-react";
import Done from "../assets/animatione/AnimationDone.json"
import { useForm, ValidationError } from '@formspree/react';



export default function Contents() {
  const[email, setemail]= useState("");
  const[massageeror, setmassageeror]= useState("");
  const[massage, setmassage]= useState("")
  const[massagecorect, setmassagecorect]=useState(null)
  const [showEmoji, setShowEmoji] = useState(false);
   const [state, handleSubmit] = useForm("mjkblwlg");


  const handel=()=>{
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length <= 0 ) {
    setmassageeror(<span style={{ color: "#ff4d4d",fontFamily: "Arial, sans-serif",fontSize: "16px",backgroundColor: "#333",padding: "5px 10px",borderRadius: "5px", boxShadow: "0 0 5px rgba(0, 0, 0, 0.5)"}}
    >
      ⚠️ Please enter the email with a valid email includes'@'
    </span>)
  }else if (massage.length < 4 ) {
    setmassageeror(<span style={{ color: "#ff4d4d",fontFamily: "Arial, sans-serif",fontSize: "16px",backgroundColor: "#333",padding: "5px 10px",borderRadius: "5px", boxShadow: "0 0 5px rgba(0, 0, 0, 0.5)"}}
    >⚠️Youer message must be at least 4 characters</span>)
  }else{
    setShowEmoji(true)
    setmassageeror(null)
    setmassagecorect("Your message has been sent successfully! We will get back to you soon.")
    setTimeout(() => {
      setmassagecorect(null)
      setShowEmoji(false);
        
      window.location.reload();
    }, 3500);
  }
}
  

 

  return (
    <>
  <div className="w-full max-sm:w-[100%] bg-black flex justify-center">
    <div className="w-[90%] bg-[#18181b9d] border rounded-lg border-[#e0f2fe57]">
        <Nav/>
    <div className="Section1 w-full h-[100vh] relative"  style={{ background: `url(${photo})` , width: '100%',  backgroundSize: 'cover', backgroundPosition:'center'}}>
          <div className="SHADO h-full bg-[#000000da] flex flex-col md:justify-evenly max-sm:gap-12 w-full max-sm:w-full border-t border-[#e0f2fe57] ">
            <div className="w-full max-sm:w-[70%] flex flex-col max-sm:mt-9 md:gap-6 ml-12">
              <h1 className="text-[#fafafac4] font-bold text-4xl mb-2 pb-4 max-sm:text-lg">Contents us</h1>
              <p className="max-sm:text-sm text-lg font-medium text-[#f3f3f3a8]">Have questions or need further information?<br/> Don’t hesitate to reach out. We’re here to assist you with any inquiries. </p>
            </div>
            <div className="Section 2 w-full max-sm:ml-3">
              <form className="w-full Section 2 flex justify-evenly" onSubmit={handleSubmit}>
              <div className="Input w-[60%] max-sm:w-full text-white flex flex-col justify-evenly gap-5 ">
                <div className="w-full m-1  max-sm:flex max-sm:flex-col md:flex gap-2 md:items-center">
                  <label  htmlFor="email"  Email Address className=" max-sm:text-lg text-[#fafafac4] font-bold">
                    Emile Address:
                  </label>
                  <input  id="email" type="email" name="email" placeholder="Emile Address" className="bg-[#1b1b1fe8] shadow-sm max-sm:w-[80%] w-[80%] border border-[#e0f2fe57] rounded-md py-2 px-3 focus:outline-none focus:border-[#5ba3c7b3] text-white"
                  onChange={ (e)=>{setemail(e.target.value)}}
                  />
                  <ValidationError 
                  prefix="Email" 
                  field="email"
                  />
                </div>
                <div className="w-full max-sm:flex-col flex gap-2 md:items-center">
                 <label htmlFor="message" className="text-[#fafafac4] font-bold">
              Youer message:
            </label>
            <textarea 
              name="message"
              rows="3"
              className="bg-[#1b1b1fe8] shadow-sm  w-[80%] h-[20vh] max-sm:w-[80%] border border-[#e0f2fe57] rounded-md py-2 px-3 focus:outline-none focus:border-[#5ba3c7b3] text-white"
              placeholder="Message"
              onChange={(e)=>{setmassage(e.target.value)}}
            >
            </textarea>
              </div>
            <div className="w-auto">
              <div className=" w-auto flex justify-between">
                <div className=" w-auto flex gap-3 m-1 items-center  max-sm:w-full max-sm:h-[10vh]" >
            <button
            onClick={handel}
            type="submit"
            className="bg-[#27272c] hover:bg-[#31313b84] duration-500 cursor-pointer text-white font-bold py-2 px-4 rounded-md"
          >
            Submit
          </button>
             {massageeror} 
            <div className=" w-auto h-[10vh] text-sm flex items-center ">
              <div className="md:w-[14%] max-sm:w-[25%]"> 
                 {showEmoji && (<Lottie className="" animationData={Done}/>)}
              </div>
               <div className="text-[16px] text-[#fafafad3] font-sans ">
                {massagecorect}
              </div>
            </div>
            
          </div>
          
            </div>
                </div>
              </div>
              </form>
            </div>
          </div>
        </div>
            <Footer/>
      </div>
    </div>
    </>
  );
}
