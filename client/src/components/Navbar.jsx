import React from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
const Navbar = () => {
  const navigate = useNavigate();
  return (
      <div className='flex items-center justify-around my-5 '>
        <div className=' flex gap-4 items-center'>
            <div className='h-4 w-4 bg-purple-500 rounded-xl'></div>
            
            <span className='text-2xl font-bold'><motion.div  whileHover={{ scale: 1.2 }} >Portfolio</motion.div></span>
        </div>
        <div >
            <ul className='flex gap-10 font-semibold text-lg'>
                <NavLink to='/' className='hover:underline hover:cursor-pointer'><motion.div whileHover={{scale: 1.2}}>Home</motion.div></NavLink>
                <NavLink to='/about-me' className='hover:underline hover:cursor-pointer '><motion.div whileHover={{scale:1.2}}>About Me</motion.div></NavLink>
                <motion.div whileHover={{scale:1.2}}><button onClick={()=>navigate('/contact-me')} className='bg-[#A53DFF] text-white rounded-md w-32 h-10 hover:opacity-95 hover:shadow-lg'>Contact</button></motion.div>
            </ul>
        </div>
      </div>
    
  )
}

export default Navbar
