import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './assets/templates/Header'
import Home from './assets/templates/Home'
import Contact from './assets/templates/Contact'
import About from './assets/templates/About'
import Login from './assets/templates/Login'
import Dashboard from './assets/Dashboard/Dashboard'

import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
        {/* <h1>React Dashbord</h1> */}
        <BrowserRouter>

      <Header/>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/dashboard/*' element={<Dashboard/>}></Route>
      </Routes>

      </BrowserRouter>
           
   </div>
  )
}

export default App
