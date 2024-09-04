import React from 'react'
import ProjectCards from './ProjectCards'
import Reveal from '../../animations/Reveal'
import { useNavigation } from 'react-router-dom'

const Projects = () => {
  return (
    <div className='h-[1500px] bg-white'>
        <div className='h-[128px]'>
            <Reveal>
            <h1 className='text-center font-bold text-6xl mt-20 font-myfont'>Projects</h1>
            <p className='text-center text-slate-600 mt-10 font-roboto_condensed text-lg'>These are some of my Projects that I have built.</p>
            </Reveal>
        </div>

        <div className='h-[976px] mt-10 flex gap-8 flex-wrap  justify-center'>
          <Reveal> <ProjectCards title={"MernMart"} image={'/test.jpg'}>This is a project that I made This is a project that I made This is a project that I made</ProjectCards></Reveal>
          <Reveal> <ProjectCards title={"MernMart"} image={'/test.jpg'}>This is a project that I made This is a project that I made This is a project that I made</ProjectCards></Reveal>
          <Reveal> <ProjectCards title={"MernMart"} image={'/test.jpg'}>This is a project that I made This is a project that I made This is a project that I made</ProjectCards></Reveal>
          <Reveal> <ProjectCards title={"MernMart"} image={'/test.jpg'}>This is a project that I made This is a project that I made This is a project that I made</ProjectCards></Reveal>
          <Reveal> <ProjectCards title={"MernMart"} image={'/test.jpg'}>This is a project that I made This is a project that I made This is a project that I made</ProjectCards></Reveal>
          <Reveal> <ProjectCards title={"MernMart"} image={'/test.jpg'}>This is a project that I made This is a project that I made This is a project that I made</ProjectCards></Reveal>
           
        </div>
      
    </div>
  )
}

export default Projects
