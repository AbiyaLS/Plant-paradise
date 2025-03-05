import React from 'react'
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
export default function Navbar() {
  const navigate =useNavigate();
  const handleUserIconClick  =()=>{
   navigate("/Login")
  }
  return (
    <div>
     <header className='navbar'>
      <div className='nav-left'>Plant Paradise</div>
      <div >
        <ul className='nav-link'>
        <li><a href="/">Home</a></li>
        <li><a href="/plants">Plants</a></li>
        <li><a href="/about">About</a></li>
       <li><a href="/contact">Contact Us</a></li>
        
        </ul>
      </div>
      <div className='nav-right'>
     
        <div className='search-container'>
          <input type='text' placeholder='Search...'/>
         <FaSearch className="search-icon"/>
        </div>
        <FaShoppingCart className="icon"  />
      
  <FaUser className="icon" onClick={handleUserIconClick} />
      </div>
     </header>
    </div>
  )
}
