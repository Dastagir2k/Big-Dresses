

import React from 'react';
import Hero from './hero';
import About from './About';
import Services from './Services';
import Feedbacks from './Feedbacks';
import Achivements from './Achivements';
import Contact from './Contact';
import Footer from './Footer';
import Navbar from './Navbar';

const HeroPage = () => {
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
  );
};

export default HeroPage;
