import { Star } from 'lucide-react'
import React from 'react'



const Feedbacks = () => {
    const reviews = [
        { id: 1, name: 'Devaraj.', rating: 5, text: 'Great selection of kids clothing and toys. My children love everything we buy here!' },
        { id: 2, name: 'Balaji.', rating: 4, text: 'Excellent customer service and high-quality shoes for kids. Will shop here again.' },
        { id: 3, name: 'Akbar.', rating: 5, text: 'Found adorable outfits for both my son and daughter. Highly recommend!' },
      ]
  return (
    <section id="reviews" className="bg-gray-50 py-16">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center text-red-600 mb-8">What Our Customers Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white rounded-lg shadow-md p-6 border border-red-100">
            <div className="flex items-center mb-4">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-red-400 fill-current" />
              ))}
            </div>
            <p className="text-gray-600 mb-2">{review.text}</p>
            <p className="font-bold text-red-600">{review.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default Feedbacks