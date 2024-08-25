import React from "react";
import WorkSpaceCards from "./WorkSpaceCards";
import { BiNotepad } from "react-icons/bi";
import { GoPencil } from "react-icons/go";
import { SlGraph } from "react-icons/sl";
import { CiLaptop } from "react-icons/ci";

const WorkProcess = () => {
  return (
    <div className="bg-[#F0F1F3] ">
      <div className=" w-[1400px] h-[650px] bg-[#F0F1F3] flex  justify-evenly  ">
        <div className="p-32">
          <h1 className="text-6xl font-myfont">Work Process</h1>
          <p className="text-slate-700 text-lg mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            laboriosam delectus odio dolor eos.
            <br /> Reprehenderit eveniet deserunt libero quis odio sint magnam
            sequi. Aperiam architecto amet doloremque eius, error in?
          </p>
          <p className="text-slate-700 text-lg mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, amet
            officiis! Nisi harum quod quos iste,
            <br /> rerum molestias! Repudiandae unde sapiente fuga error optio
            quia numquam, fugit consequatur quis similique!
          </p>
        </div>

        <div className="w-[648px] h-[600px] flex gap-8 ">
          <div className="mt-5 flex flex-col gap-8">
            <WorkSpaceCards
              icon={<BiNotepad className="text-2xl text-white  " />}
              title={"Analyze"}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum,
              totam?
            </WorkSpaceCards>
            <WorkSpaceCards
              icon={<GoPencil className="text-2xl text-white  " />}
              title={"Action"}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum,
              totam?
            </WorkSpaceCards>
          </div>
          <div className="mt-10 flex flex-col gap-8">
            <WorkSpaceCards
              icon={<SlGraph className="text-2xl text-white  " />}
              title={"Action"}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum,
              totam?
            </WorkSpaceCards>
            <WorkSpaceCards
              icon={<CiLaptop className="text-2xl text-white  " />}
              title={"Action"}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum,
              totam?
            </WorkSpaceCards>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;
