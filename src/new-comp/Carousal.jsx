// "use client";
// import React from "react";

// const carouselImages = [
//   { id: 1, src: "/home-page/digital-marketing.jpg" },
//   { id: 2, src: "/home-page/sc-marketing.jpg" },
//   { id: 3, src: "/home-page/sc-marketing2.jpg" },
//   { id: 4, src: "/home-page/Computer screen with  SEO.jpg" },
//   { id: 5, src: "/home-page/Fundo azul de mídia social _ Vetor Grátis.jpg" },
//   { id: 6, src: "/home-page/Email marketing.jpg" },
//   { id: 7, src: "/home-page/SmartPhone showing social media engagment.jpg" },
//   // { id: 8, src: "/home-page/ıllıllı⭐🌟 C͙R͙E͙A͙D͙O͙R͙ D͙I͙G͙I͙T͙A͙L͙.jpg" },
// ];

// const Carousel = () => {
//   const keyframes = `
//     @keyframes slide {
//       0% { transform: translateX(0); }
//       100% { transform: translateX(-50%); }
//     }
//   `;


//   return (
//     <>
//       <style>{keyframes}</style>

//       <div className="w-full text-center  bg-transparent">
//         <h2 className="text-white text-6xl font-bold tracking-widest">
//           WHAT WE DO!
//         </h2>
//       </div>

//       {/* --- Simple Horizontal Slider --- */}
//        <div className="w-full overflow-hidden py-12">
//         <div
//           className="flex gap-12 whitespace-nowrap"
//           style={{
//             display: "inline-flex",
//             animation: "slide 30s linear infinite",
//           }}
//         >
//           {[...carouselImages, ...carouselImages].map((img, index) => (
//             <div
//               key={index}
//               className="inline-block w-[350px] h-[250px] rounded-xl overflow-hidden shadow-lg"
//             >
//               <img src={img.src} alt="" className="w-full h-full object-cover" />
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Carousel;
"use client";
import React, { useState, useEffect } from "react";

const carouselImages = [
  { id: 1, src: "/home-page/digital-marketing.jpg" },
  { id: 2, src: "/home-page/sc-marketing.jpg" },
  { id: 3, src: "/home-page/sc-marketing2.jpg" },
  { id: 4, src: "/home-page/Computer screen with  SEO.jpg" },
  { id: 5, src: "/home-page/Fundo azul de mídia social _ Vetor Grátis.jpg" },
  { id: 6, src: "/home-page/Email marketing.jpg" },
  { id: 7, src: "/home-page/SmartPhone showing social media engagment.jpg" },
];

const Carousel = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('carousel-section');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const keyframes = `
    @keyframes slide {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(50px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;

  return (
    <>
      <style>{keyframes}</style>

      <section id="carousel-section" className="w-full bg-transparent py-20 overflow-hidden">
        {/* Animated Header */}
        <div className={`w-full text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-white text-2xl md:text-3xl lg:text-5xl font-black tracking-widest uppercase bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-pulse">
            WHAT WE DO!
          </h2>
       
        </div>

        {/* Enhanced Horizontal Slider */}
        <div className="relative w-full overflow-hidden py-6">
          <div className="flex gap-8 md:gap-12 whitespace-nowrap">
            {[...carouselImages, ...carouselImages].map((img, index) => (
              <div
                key={index}
                className="inline-flex flex-col items-center group"
              >
                <div className="relative w-[280px] h-[200px] md:w-[350px] md:h-[250px] rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-1">
                  <img 
                    src={img.src} 
                    alt="" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <div className="text-white text-sm font-semibold bg-black/50 backdrop-blur-sm p-2 rounded-lg">
                      Service {img.id}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0b1d4d] to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0b1d4d] to-transparent z-10"></div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transform transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg transform hover:scale-105 hover:shadow-2xl transition-all duration-300 animate-pulse">
            Explore Our Services
          </button>
        </div>
      </section>

      <style jsx>{`
        .flex {
          animation: slide 40s linear infinite;
        }
        .flex:hover {
          animation-play-state: paused;
        }
      `}</style>
    </>
  );
};

export default Carousel;