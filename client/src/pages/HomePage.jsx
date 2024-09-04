import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import WorkProcess from '../components/WorkProcess'
import WhatIDo from '../components/WhatIDo'
import Projects from '../components/Projects'
import Technologies from '../components/Technologies'
import ProjectIdea from '../components/ProjectIdea'
import { motion } from "framer-motion"
const HomePage = () => {
  return (
    <Layout>
        <Hero />
        <WhatIDo />
        <Projects />
        <Technologies />
        <WorkProcess />
        <ProjectIdea />
    </Layout>
  )
}

export default HomePage
