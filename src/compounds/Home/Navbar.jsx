import React from 'react'
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
export default function Navbar() {
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
      <Link to ="./"
  <FaUser className="icon" />
   
      </div>
     </header>
    </div>
  )
}
