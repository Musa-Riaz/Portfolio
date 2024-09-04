import React from "react";
import Panels from "./Panels";
import { useNavigate } from "react-router-dom";
import Reveal from "../../animations/Reveal";

const WhatIDo = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#F0F1F3] h-[800px] flex justify-evenly items-center">
      <div className="w-[600px] h-[350px]">
        <Reveal>
          {" "}
          <h1 className="text-6xl font-bold font-myfont ">What I Do?</h1>
        </Reveal>

        <div className="text-xl text-slate-700 my-10">
          <Reveal>
            <p className="font-roboto_condensed ">
              I am a Full stack web developer with expertise in the MERN Tech
              Stack.{" "}
            </p>
            <p className="font-roboto_condensed">
              Leveraging the power of ReactJs, NodeJs, Express and Mongo DB, I
              strive on creating wonderful UI experiences for clients along with
              working on the server side aspect of the application.
            </p>
          </Reveal>
        </div>
        <Reveal>
          <button
            onClick={() => navigate("/about-me")}
            className="mt-5 bg-[#A53DFF] text-white h-[48px] w-[126px] text-lg rounded-lg  hover:shadow-lg transition duration-200 ease-linear hover:opacity-95"
          >
            Say Hello!
          </button>
        </Reveal>
      </div>

      <div className="w-[650px] h-[570px] flex flex-col gap-4">
        <Reveal>
          <Panels title={"Front End Development"}>
            Using the power of React, MUI and Tailwind I can create beautiful
            Web Designs.
          </Panels>
        </Reveal>
        <Reveal>
          <Panels title={"Back End Development"}>
            Using Node and Express, I have experience in creating RESTful APIs.
          </Panels>
        </Reveal>
        <Reveal>
          <Panels title={"Full Stack Development"}>
            Combining all of these technologies, I can create full stack web
            applications using MongoDB as the Database.
          </Panels>
        </Reveal>
      </div>
    </div>
  );
};

export default WhatIDo;
