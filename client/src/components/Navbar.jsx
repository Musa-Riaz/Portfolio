import React from 'react'

const Navbar = () => {
  return (
      <div className='flex items-center justify-around my-5 '>
        <div className=' flex gap-4 items-center'>
            <div className='h-4 w-4 bg-purple-500 rounded-xl'></div>
            <span className='text-2xl font-bold'>Portfolio</span>
        </div>
        <div >
            <ul className='flex gap-10 font-semibold text-lg'>
                <li className='hover:underline hover:cursor-pointer'>Home</li>
                <li className='hover:underline hover:cursor-pointer'>Home</li>
                <li className='hover:underline hover:cursor-pointer'>Home</li>
                <li className='hover:underline hover:cursor-pointer'>Home</li>
                <li className='hover:underline hover:cursor-pointer'>Home</li>
                <button className='bg-[#A53DFF] text-white rounded-md w-32 h-10 hover:opacity-95 hover:shadow-lg '>Contact</button>
            </ul>
        </div>
      </div>
    
  )
}

export default Navbar
