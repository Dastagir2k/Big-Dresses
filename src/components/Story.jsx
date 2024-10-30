import React from 'react'
import pic from "./dad.png";
import akbar from "./Anna.png"
import { useNavigate } from 'react-router-dom';
const Story = () => {
  const navigate=useNavigate()
  const navtoHome=()=>{
    navigate("/")
  }
  return (
    <div className="min-h-screen bg-white">
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-red-600 text-center ">Our Journey</h1>
      
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-4 text-red-500">The Big Dresses Journey</h2>
        <p className="text-gray-600 mb-4">
          Big Dresses was founded by Abdul Majeed with a vision to create a one-stop shop for all children's clothing and toy needs. Since its beginnings in 2009, Big Dresses has expanded from a small storefront in downtown Toytown to a well-known name across the country.
        </p>
        <p className="text-gray-600 mb-4">
          Over the years, the company has grown thanks to the dedication and hard work of Shahul Hameed, who now serves as the CEO, and Hajul Akbar, the young and talented Co-CEO. Together, they have made Big Dresses a beloved choice for families, known for quality and affordability.
        </p>
        <p className="text-gray-600 mb-4">
          Today, Big Dresses is proud to serve families across the chennai, both through our expanded physical stores and our online platform. Our mission remains the same: to dress and entertain children while bringing joy to families everywhere.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div className="bg-gray-50 rounded-lg p-6 shadow-md">
          <img src={pic} alt="Shahul Hameed" className="w-48 h-48 rounded-full mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2 text-red-600 text-center">Shahul Hameed</h3>
          <p className="text-xl mb-2 text-gray-500 text-center">CEO</p>
          <p className="text-gray-600 mb-4">
            Shahul's dedication and hard work have been instrumental in expanding Big Dresses' reach and ensuring that the company stays true to its values. His leadership has played a crucial role in our journey.
          </p>
        </div>
        <div className="bg-gray-50 rounded-lg p-6 shadow-md">
          <img src={akbar}alt="Hajul Akbar" className="w-48 h-48 rounded-full mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2 text-red-600 text-center">Hajul Akbar</h3>
          <p className="text-xl mb-2 text-gray-500 text-center">Co-CEO</p>
          <p className="text-gray-600 mb-4">
            As the young and talented Co-CEO, Hajul brings innovative ideas and energy to Big Dresses. His contribution ensures we continue to offer a unique and enjoyable shopping experience.
          </p>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4 text-red-500">Join Us on Our Journey</h2>
        <p className="text-gray-600 mb-6">
          As we continue to grow and evolve, we invite you to be a part of our story. Every purchase, every visit, and every smile contributes to the Big Dresses tale.
        </p>
        <button 
        onClick={navtoHome}
        className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full text-lg">
         Visit Us
        </button>
      </div>
    </div>
  </div>
  )
}

export default Story
