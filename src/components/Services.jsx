


import { Gamepad, Shirt } from 'lucide-react'
import React from 'react'
import { FaShoePrints } from 'react-icons/fa'; // Make sure the import path is correct

const services = [
  { icon: Shirt, name: "Kids Clothing", description: "Stylish and comfortable clothing for boys and girls" },
  { icon: Gamepad, name: "Toys", description: "Educational and fun toys for all ages" },
  { icon: FaShoePrints, name: "Kids Shoes", description: "Durable and fashionable footwear for children" },
]

const Services = () => {
  return (
    <section id="services" className="container mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center text-red-600 mb-8">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="group relative bg-white rounded-lg shadow-md p-6 border border-red-100 transition-colors duration-500 hover:bg-red-600"
          >
            <div className="relative z-10 text-center group-hover:text-white">
              <service.icon className="w-12 h-12 mb-4 text-red-500 group-hover:text-white" />
              <h3 className="text-xl font-bold text-red-600 group-hover:text-white mb-2">{service.name}</h3>
              <p className="text-gray-600 group-hover:text-white">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
