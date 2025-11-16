// 'use client'
// import React, { useState, useEffect, useRef } from 'react';

// export default function HeroSection() {

//   return (
//     <>
//       <div className="relative mt-28 h-[300px] sm:h-[400px] md:h-[550px] w-full max-w-[90vw] sm:max-w-[800px] md:max-w-[1000px] mx-auto mt-20 overflow-hidden rounded-xl font-sans">

//         {/* Background Video */}
//         <video
//           className="absolute top-0 left-0 w-full h-full object-cover"
//           autoPlay
//           loop
//           muted
//           playsInline
//         >
//           <source src="/videos/hero.webm" type="video/webm" />
//         </video>

//         {/* Dark overlay */}
//         <div className="absolute inset-0 bg-black/20"></div>

//         {/* Top Left Image */}
//         <div className="absolute top-14 left-6 sm:top-12 sm:left-8 md:top-26 md:left-30 z-10">
//           <img
//             src="/home-page/Empowering.png"
//             alt="Empowering"
//             className="h-12 sm:h-16 md:h-22 w-auto"
//           />
//         </div>

//         {/* Top Right Image */}
//         <div className="absolute top-14 right-6 sm:top-12 sm:right-8 md:top-30 md:right-30 z-10">
//           <img
//             src="/home-page/brands.png"
//             alt="Brands"
//             className="h-12 sm:h-16 md:h-24 w-auto"
//           />
//         </div>

//         {/* Bottom Center Image */}
//         <div className="absolute bottom-14 left-1/2 -translate-x-1/2 z-10">
//           <img
//             src="/home-page/demo.png"
//             alt="Demo"
//             className="h-12 sm:h-16 md:h-24 w-auto"
//           />
//         </div>

//       </div>
//       <div className="col-span-12 bg-transparent md:col-start-3 md:col-span-8 text-center px-40 py-10 md:py-20 font-sans">
//         <p className="text-2xl md:text-4xl leading-normal font-sans">
//           At Synture, we combine
//           <span className="text-fuchsia-500 font-sans"> strategy</span>,
//           <span className="text-blue-600 font-sans"> creativity</span>, and
//           <span className="text-green-500 font-sans"> technology</span> to craft
//           digital marketing solutions that not only attract
//           attention but drive measurable growth and lasting
//           brand impact
//         </p>
//       </div>

//     </>
//   );
// }
'use client'
import React from 'react';

export default function HeroSection() {
  return (
    <>
      {/* Hero Video Section */}
      <div className="relative mt-28 h-[250px] xs:h-[300px] sm:h-[350px] md:h-[450px] lg:h-[550px] w-full max-w-[95vw] xs:max-w-[90vw] sm:max-w-[700px] md:max-w-[800px] lg:max-w-[1000px] mx-auto overflow-hidden rounded-xl md:rounded-2xl font-sans">

        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/hero.webm" type="video/webm" />
          {/* Fallback for browsers that don't support webm */}
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30"></div>

        {/* Top Left Image - Empowering */}
        <div className="absolute top-4 left-3 xs:top-6 xs:left-4 sm:top-8 sm:left-6 md:top-12 md:left-8 lg:top-16 lg:left-12 xl:top-20 xl:left-16 z-10">
          <img
            src="/home-page/Empowering.png"
            alt="Empowering"
            className="h-8 xs:h-10 sm:h-12 md:h-16 lg:h-20 xl:h-24 w-auto max-w-[120px] xs:max-w-[140px] sm:max-w-[160px] md:max-w-[200px] lg:max-w-none"
          />
        </div>

        {/* Top Right Image - Brands */}
        <div className="absolute top-4 right-3 xs:top-6 xs:right-4 sm:top-8 sm:right-6 md:top-12 md:right-8 lg:top-16 lg:right-12 xl:top-20 xl:right-16 z-10">
          <img
            src="/home-page/brands.png"
            alt="Brands"
            className="h-8 xs:h-10 sm:h-12 md:h-16 lg:h-20 xl:h-24 w-auto max-w-[120px] xs:max-w-[140px] sm:max-w-[160px] md:max-w-[200px] lg:max-w-none"
          />
        </div>

        {/* Bottom Center Image - Demo */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
          <img
            src="/home-page/demo.png"
            alt="Demo"
            className="h-8 xs:h-10 sm:h-12 md:h-16 lg:h-20 xl:h-24 w-auto max-w-[120px] xs:max-w-[140px] sm:max-w-[160px] md:max-w-[200px] lg:max-w-none"
          />
        </div>

      </div>

      {/* Mission Statement Section */}
      <div className="w-full bg-transparent px-4 xs:px-6 sm:px-8 md:px-12 lg:px-20 xl:px-40 py-8 sm:py-12 md:py-16 lg:py-20 font-sans">
        <div className="max-w-7xl mx-auto">
          <p className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight sm:leading-snug md:leading-normal lg:leading-relaxed text-center font-sans">
            At Synture, we combine
            <span className="text-fuchsia-500 font-semibold mx-1">strategy</span>,
            <span className="text-blue-500 font-semibold mx-1">creativity</span>, and
            <span className="text-green-500 font-semibold mx-1">technology</span> 
            to craft digital marketing solutions that not only attract attention but drive measurable growth and lasting brand impact
          </p>
        </div>
      </div>
    </>
  );
}