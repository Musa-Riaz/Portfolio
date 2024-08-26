import React from "react";
import Marquee from "react-fast-marquee";

const Technologies = () => {
  return (
    <div className=" border  bg-[#f0f1f3]">
      <div>
        <p className="text-center text-3xl my-5 font-bold">
          The Technologies that I use for my Projects
        </p>
      </div>

      <Marquee className="my-10 " autoFill="true" speed={80} pauseOnClick='true'>

        <div className="flex gap-20">
        <div className="h-[200px] w-[200px] ">
          <img src="/react.png" alt="react" />
        </div>
        <div className="h-[200px] w-[200px] ">
          <img height={200} width={200} src="/tailwind.png" alt="react" />
        </div>
        <div className="h-[200px] w-[200px] ">
          <img height={200} width={200} src="/js.png" alt="react" />
        </div>
        <div className="h-[200px] w-[200px] ">
          <img height={200} width={200} src="/node.png" alt="react" />
        </div>
        <div className="h-[200px] w-[200px] ">
          <img height={200} width={200} src="/bootstrap.png" alt="react" />
        </div>
        <div className="h-[200px] w-[200px] ">
          <img height={200} width={200} src="/mui.png" alt="react" />
        </div>
        <div className="h-[200px] w-[200px] ">
          <img height={200} width={200} src="/mongodb.png" alt="react" />
        </div>
        </div>

       
      </Marquee>
    </div>
  );
};

export default Technologies;
