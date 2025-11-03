import React from 'react'
import { useNavigate , Link } from 'react-router-dom'
// import 'C:/Users/lenovo/Desktop/tra2025/MyApplicationLog/frontend/src/Components/style.css'
import './style.css'
function NavBar() {
  const navigate = useNavigate()
  const users= JSON.parse(localStorage.getItem('user'))
  const handleclick=()=>{
    localStorage.removeItem('user')
    navigate('/login')
    window.location.reload()
  }
  return (
    <header>
            <div className="container">
                <Link to="/">
                    <h3>My Applications</h3>
                </Link>
                <nav >
                    {users && (
                        <div className='inner'>
                            <span>{users.email}</span>
                          <a href="" onClick={handleclick}>Logout</a>
                        </div>
                    )}
                    {!users && (
                        <div className='inner'>
                            <Link to='/login'>Login</Link>
                            <Link to='/signup'>Signup</Link>
                        </div>
                    )}
                </nav>
            </div>
        </header>
  )
}

export default NavBar