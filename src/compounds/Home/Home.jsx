import React from 'react'
import Navbar from './Navbar'
import Footer from './footer'

export default function Home() {
  return (
    <div>
    <Navbar/>
    <main class="bg-container">
     <div className='bg-image'></div>
    </main>
    <Footer/>
    </div>
  )
}
