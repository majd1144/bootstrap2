import { BrowserRouter as Router , Routes , Route, Navigate } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import NavBar from './Components/NavBar'
function App() {
 const users= JSON.parse(localStorage.getItem('user'))
console.log(users);
  return (
    <>
    <div className='App'>
      <Router>
        <NavBar/>
        <div className='pages'>
          <Routes>
      <Route path='/' element={users? <Home/>:<Navigate to='/login'/>}/>
      <Route path='/login' element={!users? <Login/>:<Navigate to='/'/>}/>
      <Route path='/signup' element={!users? <SignUp/>:<Navigate to='/'/>}/>
    </Routes>
   
        </div>
    </Router>
    </div>
   
    </>
  )
}

export default App
