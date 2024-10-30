import { Calendar, ShoppingBag, Users } from 'lucide-react'
import React from 'react'

const Achivements = () => {

    const accomplishments = [
        { icon: Users, value: '100k+', label: 'Happy Families' },
        { icon: Calendar, value: '30+', label: 'Years of Joy' },
        { icon: ShoppingBag, value: '1M+', label: 'Items Sold Annually' },
      ]
  return (
    <section className="bg-red-600 text-white py-16">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-8">Our Achievements</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {accomplishments.map((item, index) => (
          <div key={index} className="text-center">
            <item.icon className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-4xl font-bold mb-2">{item.value}</h3>
            <p className="text-xl">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default Achivements