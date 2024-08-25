import React from "react";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";


const Hero = () => {
  const navigte = useNavigate();
  return (
    <div className="  p-32 ">
        
      <div className="flex justify-evenly">
        <div className="h-[300px] w-[550px] ">
          <p className="text-6xl font-bold font-myfont">
            Hi, I am Musa Riaz <span className="text-[#A53DFF] ">.</span>
          </p>
          <p className="text-4xl mt-3">
            I am a{" "}
            <span className="text-[#A53DFF] font-bold">
              Full Stack Developer
            </span>
          </p>
          <p className="mt-5 text-lg ">
            {" "}
            I am a MERN stack developer from Multan, Pakistan. I strive to build
            immersive and beautiful applications through carefully crafted code
            and user-centric design.
          </p>
          <button onClick={()=>navigte('/about-me')} className="mt-5 bg-[#A53DFF] text-white h-[48px] w-[126px] text-lg rounded-lg  hover:shadow-lg transition duration-200 ease-linear hover:opacity-95">Say Hello</button>
        </div>

        <div
          className="h-[400px] w-[400px] rounded-xl bg-purple-100 shadow-[0_0_20px_10px_rgba(165,61,255,0.3)] "
          style={{backgroundImage:'url(/hero_pic.png)', backgroundSize:'cover'}}
        >
          {/* <img className="h-[500px]" src='/hero_pic_2.png' alt="" /> */}
        </div>
        
      </div>
      

      <div className="ml-40 flex gap-2 ">
            <Link to="https://www.instagram.com/" target="new" className="w-[180px] h-[50px] bg-[#A53DFF] rounded-xl hover:cursor-pointer hover:shadow-xl hover:opacity-95 flex items-center justify-center "><FaInstagram className="text-white text-4xl "/></Link>
            <Link to="" className="w-[180px] h-[50px] bg-[#A53DFF] rounded-xl hover:cursor-pointer hover:shadow-xl hover:opacity-95 flex items-center justify-center "><FaGithub className="text-white text-4xl "/></Link>
            <Link to="" className="w-[180px] h-[50px] bg-[#A53DFF] rounded-xl hover:cursor-pointer hover:shadow-xl  hover:opacity-95 flex items-center justify-center "><FaLinkedin className="text-white text-4xl "/></Link>
      </div>

    </div>
  );
};

export default Hero;
