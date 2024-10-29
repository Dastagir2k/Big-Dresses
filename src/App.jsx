import React from 'react'

import Navbar from './components/Navbar'
import About from './components/About'
import Services from './components/Services'
import Feedbacks from './components/Feedbacks'
import Achivements from './components/Achivements'
import Contact from './components/Contact'
import Footer from './components/Footer'
import HeroPage from './components/HeroPage'
import { Analytics } from '@vercel/analytics/react'
import Hero from './components/hero'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Story from './components/Story'


const App = () => {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<HeroPage/>}/>
      <Route path='/story' element={<Story/>}/>
     </Routes>
      {/* <Analytics/> */}
     </BrowserRouter>
      
    </div>
  )
}

export default App