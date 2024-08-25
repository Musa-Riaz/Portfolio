import React from 'react'
import WorkSpaceCards from './WorkSpaceCards'
import { BiNotepad } from "react-icons/bi";

const WorkProcess = () => {
  return (
    <div className='bg-[#F0F1F3]'>
      
      <div className='w-[1320px] h-[600px] bg-[#F0F1F3] flex gap-4 items-center '>
            <div >
                <h1 className='text-4xl font-myfont'>Work Process</h1>
                <p className='text-slate-700 text-lg mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente laboriosam delectus odio dolor eos.<br/> Reprehenderit eveniet deserunt libero quis odio sint magnam sequi. Aperiam architecto amet doloremque eius, error in?</p>
                <p className='text-slate-700 text-lg mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, amet officiis! Nisi harum quod quos iste,<br/> rerum molestias! Repudiandae unde sapiente fuga error optio quia numquam, fugit consequatur quis similique!</p>
            </div>

            <div>
                <div><WorkSpaceCards  icon={<BiNotepad className='text-2xl text-white  '/>} title={'Analyze'} >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, totam?</WorkSpaceCards></div>
                <div>card2</div>
            </div>
      </div>

    </div>
  )
}

export default WorkProcess
