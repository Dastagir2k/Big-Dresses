// import React from 'react'

// const Hero = () => {
//   return (
//     <section id="home" className="container mx- px-8 py-16 flex flex-col md:flex-row items-center">
//     <div className="md:w-1/2 pr-8">
//       <h1 className="text-4xl md:text-6xl font-bold mb-4 text-red-600">Dress Big, Play Big</h1>
//       <p className="text-xl mb-8 text-gray-600">Discover the perfect outfits, shoes, and toys for your little ones. From playtime to party time, we've got you covered.</p>
//       <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full text-lg">
//         Contact us 
//       </button>
//     </div>
//     <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center px-10">
//       <img src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/25156644/2023/9/25/d67a140f-7fec-4125-b724-f5c1ee7d61e01695651933175BitiyabyBhamaGirlsBluePinkPrintedMirrorWorkReadytoWearLeheng1.jpg" alt="Happy Kids in Stylish Clothes" className="rounded-lg shadow-lg w-full h-[700px] flex items-center justify-center p ml-20" />
//     </div>
//   </section>
//   )
// }

// export default Hero


import React from 'react';

const Hero = () => {
  return (
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
      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center items-center">
        <img
          src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/25156644/2023/9/25/d67a140f-7fec-4125-b724-f5c1ee7d61e01695651933175BitiyabyBhamaGirlsBluePinkPrintedMirrorWorkReadytoWearLeheng1.jpg"
          alt="Happy Kids in Stylish Clothes"
          className="rounded-lg shadow-lg w-full max-w-md h-auto"
        />
      </div>
    </section>
  );
};

export default Hero;
