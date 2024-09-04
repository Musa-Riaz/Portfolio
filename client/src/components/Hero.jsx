import React from "react";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Reveal from "../../animations/Reveal";
import DottedButton from "./Button";

const Hero = () => {
  const navigte = useNavigate();
  return (
    <div className=" h-[800px]  p-32 ">
      <div className="flex justify-evenly">
        <div className="h-[300px] w-[550px] ">
          <Reveal>
            <p className="text-6xl font-bold font-myfont">
              Hi, I am Musa Riaz <span className="text-[#A53DFF] ">.</span>
            </p>
          </Reveal>

          <Reveal>
            <p className="text-4xl mt-3">
              I am a{" "}
              <span className="text-[#A53DFF] font-bold">
                Full Stack Developer
              </span>
            </p>
          </Reveal>
          <Reveal>
            <p className="mt-5 text-lg ">
              {" "}
              I am a MERN stack developer from Multan, Pakistan. I strive to
              build immersive and beautiful applications through carefully
              crafted code and user-centric design.
            </p>
          </Reveal>

          <div onClick={() => navigte("/about-me")} className="mt-4">
            <Reveal>
              <DottedButton>Say Hello!</DottedButton>
            </Reveal>
          </div>
        </div>

        <Reveal>
          <div
            className="h-[400px] w-[400px] rounded-xl bg-purple-100 shadow-[0_0_20px_10px_rgba(165,61,255,0.3)] "
            style={{
              backgroundImage: "url(/hero_pic.png)",
              backgroundSize: "cover",
            }}
          >
            {/* <img className="h-[500px]" src='/hero_pic_2.png' alt="" /> */}
          </div>
        </Reveal>
      </div>

      <div className="ml-40 flex gap-2 ">
        <Reveal>
          {" "}
          <motion.div whileHover={{ scale: 1.2 }}>
            <Link
              to="https://www.instagram.com/"
              target="new"
              className="w-[180px] h-[50px] bg-[#A53DFF] rounded-xl hover:cursor-pointer hover:shadow-xl hover:opacity-95 flex items-center justify-center "
            >
              <FaInstagram className="text-white text-4xl " />
            </Link>
          </motion.div>
        </Reveal>
        <Reveal>
          {" "}
          <motion.div whileHover={{ scale: 1.2 }}>
            <Link
              to=""
              className="w-[180px] h-[50px] bg-[#A53DFF] rounded-xl hover:cursor-pointer hover:shadow-xl hover:opacity-95 flex items-center justify-center "
            >
              <FaGithub className="text-white text-4xl " />
            </Link>
          </motion.div>
        </Reveal>
        <Reveal>
          {" "}
          <motion.div whileHover={{ scale: 1.2 }}>
            <Link
              to=""
              className="w-[180px] h-[50px] bg-[#A53DFF] rounded-xl hover:cursor-pointer hover:shadow-xl  hover:opacity-95 flex items-center justify-center "
            >
              <FaLinkedin className="text-white text-4xl " />
            </Link>
          </motion.div>
        </Reveal>
      </div>
    </div>
  );
};

export default Hero;
