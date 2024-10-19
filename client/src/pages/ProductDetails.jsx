import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import { useParams } from "react-router-dom";
import Reveal from "../../animations/Reveal";
import { motion } from "framer-motion";
const ProductDetails = () => {
  const [project, setProject] = useState();
  const { id } = useParams();

  const handleGetProject = async () => {
    try {
      const res = await axios.get(
        `https://portfolio-backend-2-six.vercel.app/api/v1/project/get-project/${id}`
      );
      if (res) {
        setProject(res.data.project);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    handleGetProject();
  }, []);

  return (
    <Layout>
      <Reveal>
      <div className="flex justify-center my-20 ">
        <div className="bg-slate-100 rounded-xl h-[800px] w-[1400px] flex items-center justify-evenly shadow-lg ">
          <Reveal>
            <motion.div whileHover={{scale:0.9}}>
            <div
              className="bg-slate-100 h-[700px] w-[600px] rounded-3xl shadow-xl border "
              style={{
                backgroundImage: `url(${project?.imageUrl})`,
                backgroundSize: "cover",
              }}
            ></div>
            </motion.div>
          </Reveal>
          <div className=" flex flex-col gap-4 w-[600px]">
            <Reveal>
              <motion.div whileHover={{scale:0.9}}>
              <div className="text-6xl font-bold text-[#A53DFF] font-roboto_condensed">
                {project?.name} <span className="text-[black]">.</span>
              </div>
              </motion.div>
            </Reveal>
            <Reveal>
              <motion.div whileHover={{scale:0.9}}>
              <div className="text-xl">{project?.description}</div>
              </motion.div>
            </Reveal>
          </div>
        </div>
      </div>
      </Reveal>
    </Layout>
  );
};

export default ProductDetails;
