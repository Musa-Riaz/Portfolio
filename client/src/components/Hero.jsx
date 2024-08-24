import React from "react";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom'


const Hero = () => {
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
        </div>

        <div
          className="h-[400px] w-[400px] rounded-xl bg-slate-400"
          style={{ background: "", backgroundSize: "cover" }}
        >
          <img src="" alt="" />
        </div>
      </div>

      <div className="ml-40 flex gap-2 ">
            <Link to="" className="w-[180px] h-[50px] bg-[#A53DFF] rounded-xl hover:cursor-pointer hover:shadow-xl hover:opacity-95 flex items-center justify-center "><FaInstagram className="text-white text-4xl "/></Link>
            <Link to="" className="w-[180px] h-[50px] bg-[#A53DFF] rounded-xl hover:cursor-pointer hover:shadow-xl hover:opacity-95 flex items-center justify-center "><FaFacebook className="text-white text-4xl "/></Link>
            <Link to="" className="w-[180px] h-[50px] bg-[#A53DFF] rounded-xl hover:cursor-pointer hover:shadow-xl  hover:opacity-95 flex items-center justify-center "><FaLinkedin className="text-white text-4xl "/></Link>
      </div>

    </div>
  );
};

export default Hero;
