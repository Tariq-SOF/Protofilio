import React from "react";
import { useState } from "react";
import { useLocation, Link } from "react-router-dom";

export default function Nav() {
  const [actev, setactev] = useState("");
  const [isrespon, setisrespon]= useState(false)

  const location = useLocation();

  React.useEffect(() => {
    setactev(location.pathname);
  }, [location.pathname]);

  const torespon=()=>{
    setisrespon(!isrespon)
  }

  return (
    <nav className="w-full h-[10vh] p-5 max-sm:p-4 max-sm:w-full max-sm:h-[12vh] flex flex-row-reverse md:justify-center ">
      <div className="md:hidden">
        <button className="text-white" onClick={torespon}>
                   <svg
                className="w-7 h-11"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  >  
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d ={ isrespon ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                  />
                </svg>
        </button>
      </div>
<ul 
  className={`w-[55%] h-[45vh] md:h-[1vh] md:bg-[#18181b00] max-sm:w-[100%] flex flex-col md:flex-row md:text-sm max-sm:text-[10px] md:justify-center justify-evenly font-semibold text-2xl items-center md:gap-12 cursor-pointer md:border-[1px] border-2 md:border-[#e0f2fe57] border-[#1378bc44] bg-[#252d32f1] p-5 rounded-2xl ${
    isrespon? " block " : " hidden "
  } md:flex`}
  style={{ position: 'relative', zIndex: 999 }}> <Link to="/" className={actev === "/" ? "border-b-2 text-[#f3f3f3] border-sky-100 text-sm" : "text-[#f3f3f3a8] text-sm"}>
          Home Page
        </Link>
        <Link to="/about" className={actev === "/about" ? "border-b-2 text-[#f3f3f3] border-sky-100 text-sm" : "text-[#f3f3f3a8] text-sm"}>
          About 
        </Link>
        <Link to="/projects" className={actev === "/projects" ? "border-b-2 text-[#f3f3f3] border-sky-100 text-sm" : "text-[#f3f3f3a8] text-sm"}>
          Projects 
        </Link>
          <Link to="/contents" className={actev === "/contents" ? "border-b-2 text-[#f3f3f3] border-sky-100 text-sm" : "text-[#f3f3f3a8] text-sm"}>
          Contents
        </Link>
       
      </ul>
    </nav>
  );
}

