import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate=useNavigate();
  const navToStory=()=>{
    navigate("/story")
  }
  return (
    <section id="about" className="bg-gray-50 py-16">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img src="https://content3.jdmagicbox.com/v2/comp/chennai/w5/044pxx44.xx44.151212095509.t9w5/catalogue/big-dresses-old-washermanpet-chennai-readymade-garment-retailers-49uwmp7.jpg" alt="Big Dresses Kids Store" className="rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-bold text-red-600 mb-4">About Big Dresses</h2>
            <p className="text-gray-600 mb-4">
              At Big Dresses, we've been dressing and entertaining kids for over 15 years. Our passion for children's fashion and play has made us a trusted name for families across the country.
            </p>
            <h3 className="text-2xl font-bold text-red-500 mb-2">Why Choose Us?</h3>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>Wide range of sizes for all ages</li>
              <li>High-quality, durable products</li>
              <li>Friendly and knowledgeable staff</li>
              <li>Safe and educational toy selection</li>
              <li>Loyalty program for regular customers</li>
            </ul>
            <button onClick={navToStory} className='bg-red-500 mt-2 px-2 py-2 text-white'>Learn About Our Journey</button>
          </div>
        </div>
      </section>
  )
}

export default About