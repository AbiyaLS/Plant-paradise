import React from 'react'
import Navbar from './Navbar'
import Footer from './footer'
import IndoorPlants from './Plants/IndoorPlants'
import OutdoorPlants from './Plants/OutdoorPlants'

export default function Home() {
  return (
    <div>
    <Navbar/>
    <main class="bg-container">
     <div className='bg-image'></div>
     <IndoorPlants/>
     <OutdoorPlants/>
    </main>
    <Footer/>
    </div>
  )
}
