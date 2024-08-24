import React from 'react'
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-[#2B384C] h-[330px] w-full flex items-center justify-around'>
      <div className='flex gap-4 items-center '>
        <div className='w-5 h-5 bg-[#A53DFF] rounded-xl  '>
        <img src="" alt="" />
        </div>
        <p className='text-white text-3xl font-semibold'>Created By Musa Riaz</p>
      </div>
      <div className='flex gap-8 text-white text-2xl'>
        <Link  to=''><FaFacebook className='' /></Link>
        <Link to=''><FaLinkedin /></Link>
        <Link to=''> <FaInstagram /></Link>
        <Link to=''><FaGithub /></Link>
      </div>
      <div>
        <p className='text-white '>
            Copyright &copy; of Musa Riaz
        </p>
      </div>
    </div>
  )
}

export default Footer
