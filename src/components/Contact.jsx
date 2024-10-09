import { Mail, MapPin, Phone } from 'lucide-react'
import React, { useState } from 'react'
import map from "./map.jpg"
const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', { name, email, message })
  }

  return (
    <section id="contact" className="container mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center text-red-600 mb-8">Contact Us</h2>
      <div className="flex flex-col md:flex-row gap-16">
        <div className="md:w-1/2">
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-3 border border-red-300 rounded focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 border border-red-300 rounded focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500"
            />
            <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full p-3 border border-red-300 rounded focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500"
              rows="5"
            />
            <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded">
              Send Message
            </button>
          </form>
        </div>
        <div className="md:w-1/2">
          <h3 className="text-2xl font-bold text-red-600 mb-4">Visit Our Shop</h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <MapPin className="w-6 h-6 text-red-600 mr-3" />
              <p>81 G.A road old Washermenpet , Chennai - 21</p>
            </div>
            <div className="flex items-center">
              <Phone className="w-6 h-6 text-red-600 mr-3" />
              <p>8072089002</p>
            </div>
            <div className="flex items-center">
              <Mail className="w-6 h-6 text-red-600 mr-3" />
              <p>info@bigdresses.com</p>
            </div>
          </div>
          <div className="mt-8">
            <a 
              href="https://www.google.com/maps/place/123+Kids+Fashion+Street,+Toytown,+TT+12345" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img 
                src={map}
                alt="Big Dresses Store Location" 
                className="rounded-lg shadow-lg w-full h-auto hover:opacity-90 transition-opacity duration-300"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
