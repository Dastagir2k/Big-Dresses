import React from 'react'
import Hero from './components/hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Services from './components/Services'
import Feedbacks from './components/Feedbacks'
import Achivements from './components/Achivements'
import Contact from './components/Contact'
import Footer from './components/Footer'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Feedbacks/>
      <Achivements/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App