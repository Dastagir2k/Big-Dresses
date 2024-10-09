import React from 'react'
import logo from "./logo.png"

const Navbar = () => {
  
  return (
    <div className="w-full">
         {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          {/* <a className="text-3xl font-bold text-red-600" href="#">Big Dresses</a> */}
          <img src={logo} className='w-16 h-16'/>
          <div className="hidden md:flex space-x-6 text-xl">
            <a className="text-gray-600 hover:text-red-600" href="#home">Home</a>
            <a className="text-gray-600 hover:text-red-600" href="#about">About</a>
            <a className="text-gray-600 hover:text-red-600" href="#services">Services</a>
            <a className="text-gray-600 hover:text-red-600" href="#reviews">Reviews</a>
            <a className="text-gray-600 hover:text-red-600" href="#contact">Contact</a>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar