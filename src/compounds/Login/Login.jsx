import React from 'react'
import Navbar from '../Home/Navbar'
import Footer from '../Home/footer'
import { useNavigate } from 'react-router-dom';
export default function Login() {
  const navigate =useNavigate();
const handleHomeButton  =()=>{
 navigate("/Home")
}
  return (
    <div>
      <Navbar/>
      <div className='login-container'> Login</div>
      <div className='title-account'> Don't have an account yet ?
       <div className='account'>Create account</div>
       </div>
      <div className='form-container'>
        <form>
            <input
              type="email"
              placeholder='Email'
              required
            /><br/>
 <input type="password" placeholder='Password' required /><br/>
             <button type="submit">Login</button>
             <button type="submit" onClick={handleHomeButton}>Go to Store</button>
        </form>
      </div>
      <Footer/>
    </div>
  )
}
