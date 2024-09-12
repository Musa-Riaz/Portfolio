import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios';
import Layout from '../components/Layout'
const ProductDetails = () => {
  const [projects, setProjects] = useState();
  
  const handleGetProjects = async ()=>{

    try{

      const res = await axios.get('http://localhost:3200/api/v1/project/get-all-projects');
      if(res){
        setProjects(res.data.projects);
        
      }
    }
    catch(err){
      console.log(err);
    }

  }
  useEffect(() => {
    
    
    handleGetProjects();
    
  }, []);

  return (

    <Layout>

      <div className='flex justify-center my-20'>
        
        <div className='bg-slate-300 rounded-xl h-[800px] w-[1400px] flex items-center '>
          <div className='bg-slate-100 h-[700px] w-[500px] rounded-xl' style={{backgroundImage:`url{}`, backgroundSize:'cover'}}>

          </div>

          <div>

            <div>{title}</div>
            <div></div>

          </div>
        </div>

      </div>
        
    </Layout>
  )
}

export default ProductDetails
