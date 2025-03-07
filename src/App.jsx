import { useState } from 'react'
import { BrowserRouter } from "react-router";
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './compounds/Home/Home'
import "./compounds/Home/style/HomeStyle.css"
import "./compounds/Home/style/Footer.css"
import "./compounds/Login/LoginStyle.css"
import "./compounds/Home/style/PlantsStyle.css"
// import "./compounds/Home/style/OutdoorPlants.css"
import Login from './compounds/Login/Login';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Router>
  <Routes>
<Route path='/' element={<Home/>}></Route>
<Route path='/Home' element={<Home/>}></Route>
<Route path='/Login' element={<Login/>}></Route>
  </Routes>
</Router>
     

    </>
  )
}

export default App
