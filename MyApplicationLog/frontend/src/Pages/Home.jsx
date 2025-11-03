import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AppDetails from '../Components/AppDetails'
import AppForm from '../Components/AppForm'
function Home() {
  const[app,setapp]=useState(null)
  const[show,setShow]=useState(false)
const users=JSON.parse(localStorage.getItem('user'))
  useEffect(()=>{
    const fetchworkouts= async()=>{
      try {
        const response=await axios.get(import.meta.env.VITE_URI+'/api/mylogs',{
          headers:{'Authorization':`Bearer ${users.token}`}})
          console.log(response.data);
          setapp(response.data)
      } catch (error) {
         console.log(`ERROR! ${error.response.data.error}`);
      }
    }; if(users){
      fetchworkouts()
    }
  },[show])
  return (
    <div className='home' >
        <div>
{app && app.map((aa)=>( 
  <AppDetails show={show} setShow={setShow} aa={aa} key={aa._id}/>
))}
        </div>
        <AppForm show={show} setShow={setShow} />
        
    </div> 
  )
}

export default Home