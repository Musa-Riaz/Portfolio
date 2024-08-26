import React from 'react'

const ProjectCards = ({image, title, children}) => {
  return (
    <div className='h-[480px] w-[430]  rounded-xl shadow-2xl hover:cursor-pointer transform transition-transform duration-500 hover:-translate-y-2 hover:scale-105'>
        <div className='w-[480px] h-[248px] rounded-t-xl ' style={{backgroundImage:`url(${image})`, backgroundSize:'cover'}}></div>

        <div className = 'mx-10 h-[200px] w-[350px] '>
            <h2 className='text-2xl font-bold pt-10'>
                {title}
            </h2>
            <p className="mt-2 ">
                {children}
            </p>
            <button className="mt-5 bg-white border border-[#A53DFF] text-[#A53DFF] h-[48px] w-[173px] text-lg rounded-lg  hover:shadow-lg transition duration-200 ease-linear hover:opacity-95">View Details  &#x2192;</button>
        </div>
       
      
    </div>
  )
}

export default ProjectCards
