import React from "react";
import WorkSpaceCards from "./WorkSpaceCards";
import { BiNotepad } from "react-icons/bi";
import { GoPencil } from "react-icons/go";
import { SlGraph } from "react-icons/sl";
import { CiLaptop } from "react-icons/ci";

const WorkProcess = () => {
  return (
    <div className=" h-[1000px] p-32 bg-[#F0F1F3] ">
      <div className=" w-[1400px] h-[650px] bg-[#F0F1F3] flex  justify-evenly  ">
        <div className="py-40 px-10 ml-10">
          <h1 className="text-6xl font-myfont">Work Process</h1>
          <p className="text-slate-700 text-lg mt-5">
            I believe that every task should be executed with perfect planning and dedication. To make my workspace productive and more enjoyable, I apply four principles in my work life. 
          </p>
          <p className="text-slate-700 text-lg mt-2">
            These are the principles of Research, Design, Development and Finalization. I learned these rules in my journey of web development, which help me make user-friendly and robust web applications.
          </p>
        </div>

        <div className="w-[648px] h-[600px] flex gap-8 ">
          <div className="mt-16 flex flex-col gap-8">
            <WorkSpaceCards
              icon={<BiNotepad className="text-2xl text-white  " />}
              title={"(1) Research"}
            >
              I begin my work by doing some research about the project , the technologies and pacakges that will be needed.
            </WorkSpaceCards>
            <WorkSpaceCards
              icon={<GoPencil className="text-2xl text-white  " />}
              title={"(2) Design"}
            >
              Then I start looking at the design/wireframes to get a good idea of what the client actually desires.
            </WorkSpaceCards>
          </div>
          <div className="mt-20 flex flex-col gap-8">
            <WorkSpaceCards
              icon={<SlGraph className="text-2xl text-white  " />}
              title={"(3) Development"}
            >
              Finally, with all this information I can start working on the intial development phase of the project.
            </WorkSpaceCards>
            <WorkSpaceCards
              icon={<CiLaptop className="text-2xl text-white  " />}
              title={"(4) Finalize"}
            >
              Once development is finished, I begin to optimize my code and make it cleaner for the client to understand. 
            </WorkSpaceCards>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;
