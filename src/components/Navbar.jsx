import React, { useState } from 'react'
import logo from "./logo.png"
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <div className="w-full">
         {/* Navigation */}
         <nav className="bg-white shadow-md relative z-20">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <img className="w-16 h-16 font-bold text-red-600" src={logo} />
          <div className="hidden md:flex space-x-4">
            <a className="text-gray-600 hover:text-red-600" href="#home">Home</a>
            <a className="text-gray-600 hover:text-red-600" href="#about">About</a>
            <a className="text-gray-600 hover:text-red-600" href="#services">Services</a>
            <a className="text-gray-600 hover:text-red-600" href="#reviews">Reviews</a>
            <a className="text-gray-600 hover:text-red-600" href="#contact">Contact</a>
          </div>
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6 text-red-600" /> : <Menu className="h-6 w-6 text-red-600" />}
          </button>
        </div>
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md">
            <div className="container mx-auto px-6 py-3 flex flex-col space-y-2">
              <a className="text-gray-600 hover:text-red-600 py-2" href="#home" onClick={toggleMenu}>Home</a>
              <a className="text-gray-600 hover:text-red-600 py-2" href="#about" onClick={toggleMenu}>About</a>
              <a className="text-gray-600 hover:text-red-600 py-2" href="#services" onClick={toggleMenu}>Services</a>
              <a className="text-gray-600 hover:text-red-600 py-2" href="#reviews" onClick={toggleMenu}>Reviews</a>
              <a className="text-gray-600 hover:text-red-600 py-2" href="#contact" onClick={toggleMenu}>Contact</a>
            </div>
          </div>
        )}
      </nav>
    </div>
  )
}

export default Navbar