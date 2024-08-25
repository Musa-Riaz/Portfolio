import React from 'react'

const WorkSpaceCards = ({icon, title, children}) => {
  return (
    <div className='w-[312px] h-[276px] rounded-xl bg-white shadow-lg  hover:shadow-2xl transform transition-transform duration-300 hover:-translate-y-2 hover:scale-105'>

      <div className='p-8'>
      <div className='h-[50px] w-[50px] rounded-lg bg-[#A53DFF] flex items-center justify-center'>{icon}</div>
      </div>

        <div className='mx-10 flex gap-2 flex-col'>
        <div className='text-2xl font-bold'>{title}</div>
        <div className='text-slate-600 font-normal'>{children}</div>
        </div>        
        
    </div>
  )
}

export default WorkSpaceCards
