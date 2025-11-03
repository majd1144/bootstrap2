import React from 'react'
import { useState } from 'react'
import axios from 'axios'

function AppForm({show, setShow}) {
  const[title,setTitle]=useState('')
  const[company,setCompany]=useState('')
  const[desc,setDesc]=useState('')
  const[location,setLocation]=useState('')
  const[error,setError]=useState(null)
 const handleSubmit= async (e)=>{
  e.preventDefault()
  const users= JSON.parse(localStorage.getItem('user'))

  if(!users || !users.token){
  setError("User not logged in")
  return;
  }
  if(!title || !company || !desc || !location){
    setError("please make sure you add all fields")
    return;
  }
  const aa={title,company,location,desc};
  try {
    const response = await axios.post(
      import.meta.env.VITE_URI+'/api/mylogs',aa,{
        headers:{'Authorization':`Bearer ${users.token}`}
      }
    );
    setError(null);
    setCompany('');
    setTitle('');
      setDesc('');
      setLocation('');
      setShow(!show);
      console.log('new application added',response.data)
    
  } catch (error) {
    console.log(error);
    if(error.response && error.response.data && error.response.data.error){
      setError(error.response.data.error);
    } else if(error.request){
       setError("No response from server");
  } else{
    setError(error.message);
  }
}}
 
  
  return (
        <form className="create" onSubmit={handleSubmit}>
            <h3 style={{color:"orange"}}>Add a New Application</h3>
            <label>job Title:</label>
            <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />
            <label>Company name:</label>
            <input
                type="text"
                onChange={(e) => setCompany(e.target.value)}
                value={company}
            />
            <label>Location of job:</label>
            <input
                type="text"
                onChange={(e) => setLocation(e.target.value)}
                value={location}
            />
            <label>Description of job:</label>
            <input
                type="text"
                onChange={(e) => setDesc(e.target.value)}
                value={desc}
            />
            <button>Add Application</button>
            {error && <div className="error">{error}</div>}
        </form>
  )
}

export default AppForm
