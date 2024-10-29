import React from 'react'

import About from './About';
import Services from './Services';
import Feedbacks from './Feedbacks';
import Achivements from './Achivements';
import Contact from './Contact';
import Footer from './Footer';
import Navbar from './Navbar';
import HeroPage from './HeroPage';
const Homepage = () => {
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
    </div>
  )
}

export default Homepage