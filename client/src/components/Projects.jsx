import React from "react";
import ProjectCards from "./ProjectCards";
import Reveal from "../../animations/Reveal";
import { useNavigation } from "react-router-dom";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { storage } from "../services/firebase";

const Projects = () => {
  const uploadImage = (file) => {
    const storageRef = ref(storage, file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {},
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          // POST REQUEST TO CREATE PROJECT
        });
      }
    );
  };

  return (
    <div className="h-[1500px] bg-white">
      <div className="h-[128px]">
        <Reveal>
          <h1 className="text-center font-bold text-6xl mt-20 font-myfont">
            Projects
          </h1>
          <p className="text-center text-slate-600 mt-10 font-roboto_condensed text-lg">
            These are some of my Projects that I have built.
          </p>
        </Reveal>
      </div>

      <div className="h-[976px] mt-10 flex gap-8 flex-wrap  justify-center">
        <Reveal>
          {" "}
          <ProjectCards title={"MernMart"} image={"/test.jpg"}>
            This is a project that I made This is a project that I made This is
            a project that I made
          </ProjectCards>
        </Reveal>
        <Reveal>
          {" "}
          <ProjectCards title={"MernMart"} image={"/test.jpg"}>
            This is a project that I made This is a project that I made This is
            a project that I made
          </ProjectCards>
        </Reveal>
        <Reveal>
          {" "}
          <ProjectCards title={"MernMart"} image={"/test.jpg"}>
            This is a project that I made This is a project that I made This is
            a project that I made
          </ProjectCards>
        </Reveal>
        <Reveal>
          {" "}
          <ProjectCards title={"MernMart"} image={"/test.jpg"}>
            This is a project that I made This is a project that I made This is
            a project that I made
          </ProjectCards>
        </Reveal>
        <Reveal>
          {" "}
          <ProjectCards title={"MernMart"} image={"/test.jpg"}>
            This is a project that I made This is a project that I made This is
            a project that I made
          </ProjectCards>
        </Reveal>
        <Reveal>
          {" "}
          <ProjectCards title={"MernMart"} image={"/test.jpg"}>
            This is a project that I made This is a project that I made This is
            a project that I made
          </ProjectCards>
        </Reveal>
      </div>
    </div>
  );
};

export default Projects;
