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


const App = () => {
  return (
    <div>
      <Navbar/>
      <HeroPage/>
      <About/>
      <Services/>
      <Feedbacks/>
      <Achivements/>
      <Contact/>
      <Footer/>
      <Analytics/>
    </div>
  )
}

export default App