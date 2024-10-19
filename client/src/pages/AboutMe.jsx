import React from "react";
import Layout from "../components/Layout";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { LiaDownloadSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { GrProjects } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import Reveal from "../../animations/Reveal";
const AboutMe = () => {
  const navigate = useNavigate();

    const CV_PDF_FILE = 'http://localhost:5173/Musa_Riaz_CV_2024.pdf';

    const handleDownloadCV = () => {
        try{
            const link = document.createElement("a");
            link.href = CV_PDF_FILE;
            link.download = "Musa_Riaz_CV.pdf"; // specify the filename
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
        catch(err){
            console.log(err);
        }
    }

  return (
    <Layout>
      <Reveal>
      <div className="flex p-32 justify-evenly gap-4">
        <div
          style={{
            backgroundImage: "url(/hero_pic.png)",
            backgroundSize: "cover",
          }}
          className="w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-slate-200 rounded-lg"
        >
          <div className="md:h-[72px] md:w-[260px] bg-slate-50 relative top-[350px]  left-20 z-auto shadow-xl rounded-md flex items-center justify-evenly text-3xl text-[#a532ff]">
            <Link
              to=""
              className="hover:shadow-xl transition-shadow rounded-lg"
            >
              {" "}
              <FaFacebook />
            </Link>
            <Link
              to="https://github.com/Musa-Riaz"
              className="hover:shadow-xl transition-shadow rounded-lg"
            >
              {" "}
              <FaGithub />
            </Link>
            <Link
              to="www.linkedin.com/in/musariaz"
              className="hover:shadow-xl transition-shadow rounded-lg"
            >
              {" "}
              <FaLinkedin />
            </Link>
            <Link
              to=""
              className="hover:shadow-xl transition-shadow rounded-lg"
            >
              {" "}
              <SiGmail />
            </Link>
          </div>
        </div>

        <div className="h-[350px] w-[540px]">
          <h1 className="font-myfont font-bold text-4xl">
            I am a MERN Stack developer
          </h1>
          <p className="mt-4 text-slate-500 font-roboto_condensed text-lg">
            I am a passionate and driven MERN Stack developer currently pursuing
            a degree in Software Engineering at the National University of
            Sciences and Technology (NUST) Islamabad, Pakistan. I thrive on
            building innovative web applications and enjoy tackling new
            challenges in the field of software development.
          </p>
          <p className="mt-4 text-slate-500 font-roboto_condensed text-lg">
            With a strong foundation in web development and a deep understanding
            of modern technologies, I specialize in building dynamic,
            user-friendly web applications.{" "}
          </p>
          <div className="flex gap-4 mt-3">
            <button onClick={()=>navigate('/')} className="w-[130px] h-[45px] hover:shadow-xl duration-500  bg-[#A53DFF] rounded-lg text-white flex items-center justify-center gap-4">
              {" "}
              <GrProjects />
              My Projects
            </button>
            <button className="w-[190px] h-[45px] hover:shadow-xl duration-500  text-[#A53DFF] border border-[#A53DFF] rounded-lg flex items-center justify-center  gap-4"
            onClick={()=> handleDownloadCV()}>
              {" "}
              <LiaDownloadSolid className="text-xl" /> Download CV
            </button>
          </div>
        </div>
      </div>
      </Reveal>
    </Layout>
  );
};

export default AboutMe;
