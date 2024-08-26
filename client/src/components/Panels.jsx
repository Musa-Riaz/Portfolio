import React from 'react'

const Panels = ({title, children}) => {
  return (
    <div className='w-[650px] h-[180px] bg-white rounded-xl border-l-8  p-8 transform transition-transform duration-700 hover:-translate-y-2 hover:scale-105      hover:border-[#A53DFF]'>
      <h2 className='text-2xl font-semibold '>{title}</h2>
      <p className='mt-3 text-slate-600 font-roboto_condensed text-xl'>{children}</p>
    </div>
  )
}

export default Panels
