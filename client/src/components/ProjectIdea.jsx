import React from "react";
import { useNavigate } from "react-router-dom";
import DottedButton from "./Button";
const ProjectIdea = () => {
  const navigate = useNavigate();

  return (
    <div className="h-[472px] bg-[#132238] flex items-center flex-col">
      <h1 className="text-6xl text-white font-roboto_condensed text-center p-10">
        Do you have a Project Idea? <br />
        Let&apos;s discuss your project!
      </h1>
      <p className="text-xl text-white text-center my-10">
        An idea without execution is always a wasted potential. Click the button
        below so that we can discuss your idea
      </p>
      <button onClick={()=>navigate('/contact-me')} className="bg-[#A53DFF] h-[48px] w-[180px] rounded-lg text-white text-lg hover:opacity-95 ">
        Lets work together!
      </button>
    </div>
  );
};

export default ProjectIdea;
