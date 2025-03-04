import React from 'react'
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
export default function Navbar() {
  return (
    <div>
     <header className='navbar'>
      <div className='nav-left'>Plant Paradise</div>
      <div >
        <ul className='nav-link'>
          <li>Home</li>
          <li>Plants</li>
          <li>About</li>
          <li>Contact Us</li>
          <button className="button">Login</button>
        </ul>
        {/* <button className="button">Login</button> */}
      </div>
      <div className='nav-right'>
      {/* <button className="button">Login</button> */}
        <div className='search-container'>
          <input type='text' placeholder='Search...'/>
          <FaSearch className="search-icon"/>
        </div>
        <FaShoppingCart className="icon" />
        <FaUser className="icon" />
      </div>
     </header>
    </div>
  )
}
