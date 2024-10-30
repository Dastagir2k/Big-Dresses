import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const HeroPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselImages = [
    "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/25156644/2023/9/25/d67a140f-7fec-4125-b724-f5c1ee7d61e01695651933175BitiyabyBhamaGirlsBluePinkPrintedMirrorWorkReadytoWearLeheng1.jpg",
    "https://cdn.shopify.com/s/files/1/0583/4820/8201/files/Spunkies3552.jpg?v=1721926960&width=362",
    "https://i.pinimg.com/736x/ca/45/cb/ca45cb40e33a77bb8009d1554394a0bc.jpg"
  ];
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <section id="home" className="container mx-auto px-8 py-16 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 pr-4 md:pr-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 ml-2 text-red-600">Dress Big, Play Big</h1>
          <p className="text-xl mb-8 text-gray-600">
            Discover the perfect outfits, shoes, and toys for your little ones. From playtime to party time, we've got you covered.
          </p>
          <a href='#contact' className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full text-lg">
            Contact Now
          </a>
        </div>
        
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center items-center relative">
          <div className="overflow-hidden rounded-lg shadow-lg w-full relative">
            {carouselImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Slide ${index + 1}`}
                className={`rounded-lg shadow-lg w-full md:h-[750px] object-cover transition-opacity duration-500 ease-in-out ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0 absolute top-0 left-0'
                }`}
              />
            ))}
            
            {/* Chevron Left Button */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all"
            >
              <ChevronLeft className="w-6 h-6 text-red-600" />
            </button>

            {/* Chevron Right Button */}
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all"
            >
              <ChevronRight className="w-6 h-6 text-red-600" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroPage;
