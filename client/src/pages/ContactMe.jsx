import React from 'react'
import Layout from '../components/Layout'
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaL, FaLocationDot } from "react-icons/fa6";
import DottedButton from "../components/Button";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import
{ message }
from
"antd"
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {useState} from 'react'
const ContactMe = () => {
    const [name, setName] = useState('');
    const[email,setEmail] = useState('');
    const [formmessage, setFormMessage] = useState('');
    const [sent, setSent] = useState(false);
    
    const form = useRef();

    const sendEmail = (e) => {

        e.preventDefault();
        
        if(name !== '' && email !== '' && formmessage !== '' ){
            setSent(true);
            emailjs
            .sendForm('service_0zaedcq', 'template_fr0o4nj', form.current, {
              publicKey: 'ZJw84Jq18SPjAzI0X',
            })
            .then(
              () => {
                console.log('SUCCESS!');
              message.success("Email sent successfully")
                setName('')
                setEmail('')
                setFormMessage('')
                setSent(false);
  
  
              },
              (error) => {
                console.log('FAILED...', error.text);
              },
            );
        }
        else{
            message.error("Please fill in all the fields!")
        }
       
      };
  return (
    <Layout>

        <div className='flex gap-10 justify-center border-4 shadow-2xl w-[1320px] h-[760px] mx-auto items-center my-24 rounded-2xl   '>

            <div className='w-[480px] h-[544px] '>
                <h1 className='text-4xl font-bold'>Let&apos;s discuss your Project!</h1>
                <p className='text-slate-500 my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>

                <div className='w-[336px] flex flex-col gap-8'>
                <div className='flex  w-[336px] h-[96px]  items-center gap-4 rounded-lg transform transition-transform duration-700 hover:-translate-y-2 hover:scale-105 hover:shadow-lg'>
                    <div className=''>
                        <FaLocationDot className='bg-[#a53dff] text-white h-12 w-12 ml-6 p-2 rounded-xl' />
                    </div>
                    <div>
                        <p className='text-lg font-semibold '>Address</p>
                        <p className='mt-2 text-xl'>Islamabad, Pakistan</p>
                    </div>
                </div>
                <div className='flex gap-4 w-[336px] h-[96px] items-center  rounded-lg transform transition-transform duration-700 hover:-translate-y-2 hover:scale-105 hover:shadow-lg'>
                    <div className=''>
                        <MdOutlineMail className='bg-[#a53dff] text-white h-12 w-12 ml-6 p-2 rounded-xl' />
                    </div>
                    <div>
                        <p className='text-lg font-semibold '>My email</p>
                        <p className='mt-2 text-xl'>musariaz520@gmail.com</p>
                    </div>
                </div>
                <div className='flex gap-4 w-[336px] h-[96px] items-center  rounded-lg transform transition-transform duration-700 hover:-translate-y-2 hover:scale-105 hover:shadow-lg'>
                    <div className=''>
                        <IoCall className='bg-[#a53dff] text-white h-12 w-12 ml-6 p-2 rounded-xl' />
                    </div>
                    <div>
                        <p className='text-lg font-semibold '>Call me now</p>
                        <p className='mt-2 text-xl'>0334-6086261</p>
                    </div>
                </div>

                </div>

               

            </div>


            <div className='w-[560px] h-[492px]'>
                <p className='text-slate-500 my-4' >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, dolor.</p>
                <form ref={form} onSubmit={sendEmail}  className='my-10'>
                    <div className='flex flex-col gap-2 my-5'>
                        <label className='block text-lg font-bold' >Name</label>
                        <input  name="user_name" type="text" width={'560px'} className='border-b-2 focus:outline-none border-[#a53dff]' placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className='flex flex-col gap-2 my-5'>
                        <label className='block text-lg font-bold'>Email</label>
                        <input type="text"  name="user_email" width={'560px'} className='border-b-2 focus:outline-none border-[#a53dff]' placeholder='Enter your email'  value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='flex flex-col gap-2 my-5'>
                        <label className='block text-lg font-bold'>Message</label>
                        <textarea name="message" className=' h-[150px] border-b-2 focus:outline-none border-[#a53dff]' placeholder='Enter your message'  value={formmessage} onChange={(e) => setFormMessage(e.target.value)} />
                    </div>
                    {!sent ? <>
                    <DottedButton>Send</DottedButton>
                                </> : <p>Sending...</p>}
                   
                </form>
            </div>

        </div>
      
    </Layout>
  )
}

export default ContactMe
