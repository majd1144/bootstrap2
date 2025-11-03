import axios from 'axios'
import React from 'react'
import {MdDelete} from "react-icons/md";
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

function AppDetails({ show, setShow, aa }) {
  const users= JSON.parse(localStorage.getItem('user'))
  const handleClick= async ()=>{
    const response= await axios.delete(import.meta.env.VITE_URI+'/api/mylogs/'+aa._id,{
    headers:{'Authorization':`Bearer ${users.token}`}
  }) 
  
 
  if(response){
    setShow(!show)
  }}
  return (
   <div className='app-details'>
    <h4>{aa.title}</h4>
    <p><strong>Company of job:</strong>{aa.company}</p>
    <p><strong>Location of job:</strong>{aa.location}</p>
    <p>{formatDistanceToNow((aa.createdAt), { addSuffix: true })}</p>
    <span><MdDelete onClick={handleClick} style={{ fontSize: '30px', color: 'red' }}/></span>
   </div>
  )
}

export default AppDetails