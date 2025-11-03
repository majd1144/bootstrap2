import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './regestration.css'
function Login() {
    const[email,setEmail]=useState('')
        const[password,setPassword]=useState('')
        const navigate=useNavigate()
        const[error,setError]=useState(null)
        const[isLoading,setIsLoading]=useState(null)

        const handsubmit = async(e)=>{
          e.preventDefault();
          try {
            setIsLoading(true)
            setError(null)
            const response=await axios.post(import.meta.env.VITE_URI+'/api/users/login',{email,password})
          localStorage.setItem('user',JSON.stringify(response.data))
          setIsLoading(false)
navigate('/')
window.location.reload();//تاكيد للنافيقيت الي ضفتها فووق
        } catch (error) {
            setIsLoading(false)
            setError(error.response.data.error)
          }
        }
  return (
    <>
    <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
    </div>
    <form onSubmit={handsubmit} className='form'>
        <h3>Login Here</h3>

        <label >Username</label>
        <input type="text" placeholder=" Enter your Email... " id="username"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}/>

        <label >Password</label>
        <input type="password" placeholder="Password" id=" Enter your password..."
        value={password}
        onChange={(e)=>setPassword(e.target.value)}/>

        <button disabled={isLoading}>Log In</button>
          {error && <div>{error}</div>}
    </form>
    </>
    
  )
}

export default Login