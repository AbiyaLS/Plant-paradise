import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter } from "react-router";
import './App.css'
import Home from './compounds/Home/Home'
import "./compounds/Home/style/HomeStyle.css"
import "./compounds/Home/style/Footer.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
        <Home/>
        </BrowserRouter>
    </>
  )
}

export default App
