import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
// import 'C:/Users/lenovo/Desktop/tra2025/MyApplicationLog/frontend/src/Pages/regestration.css'
import './regestration.css'

function SignUp() {
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const[error,setError]=useState(null)
  const[loading,setLoading]=useState(null)
  const navigate=useNavigate()

  const handsubmit= async (e) =>{
    e.preventDefault();
    try {
      setLoading(true)
      setError(null)
      const response= await axios.post(import.meta.env.VITE_URI+'/api/users/signup',{email,password})
      localStorage.setItem('user',JSON.stringify(response.data))
      setLoading(false) 
      navigate('/')
            window.location.reload();//تاكيد للنافيقيت الي ضفتها فووق

    } catch (error) {
      setLoading(false)
      console.log(error.response.data.error);
    }
  }
  return (
    <>
    <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
    </div>
    <form onSubmit={handsubmit} className='form'>
        <h3>Sign up Here</h3>

        <label >Username</label>
        <input type="text" placeholder=" Enter your Email... " id="username"
        onChange={(e)=>setEmail(e.target.value)}
        value={email}/>

        <label >Password</label>
        <input type="password" placeholder="Enter your password..." id="password"
        onChange={(e)=>setPassword(e.target.value)}
        value={password}/>

        <button disabled={loading}>Sign UP</button>
        {error && <div >{error}</div>}
       
    </form>
    </>
    
  )
}

export default SignUp