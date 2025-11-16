// 'use client'
// import React, { useState, useEffect, useRef } from 'react';

// // --- Service Image (only image, larger size now) ---
// const ServiceImage = ({ url }) => (
//   <div className="relative w-full h-full flex items-center justify-center">
//     <img
//       src={url}
//       alt="Service Illustration"
//       className="relative w-full h-full object-contain max-w-[250px] max-h-[250px] z-10 transition-transform duration-500 hover:scale-110"
//       onError={(e) => {
//         e.target.onerror = null;
//         e.target.src = 'https://placehold.co/250x250/0d0d0d/00A8FF?text=ICON';
//         e.target.className =
//           'relative w-full h-full object-contain max-w-[250px] max-h-[250px] p-4 z-10';
//       }}
//     />
//   </div>
// );

// // --- Timeline Item ---
// const TimelineItem = ({ service, index, isVisible }) => {
//   const isLeft = index % 2 !== 0;
//   const containerClass = isLeft ? 'md:justify-start' : 'md:justify-end';
//   const cardOrder = isLeft ? 'order-1' : 'order-2';
//   const iconOrder = isLeft ? 'order-2' : 'order-1';

//   const delay = index * 150;
//   const animationClass = isVisible
//     ? `opacity-100 translate-y-0 duration-700 delay-[${delay}ms]`
//     : 'opacity-0 translate-y-10';

//   return (
//     <div
//       className={`flex flex-col md:flex-row mb-12 md:mb-16 gap-40 last:mb-0 w-full ${containerClass} ${animationClass}`}
//       style={{ transitionDelay: `${delay}ms` }}
//     >
//       {/* Left Side - Service Icon (no outer box, larger image) */}
//       <div className={`relative flex items-center justify-center w-full md:w-1/3 ${iconOrder}`}>
//         <ServiceImage url={service.imageUrl} />
//       </div>

//       {/* Right Side - Text Box with Video Background */}
//       <div
//         className={`relative w-full md:w-2/5 p-6 md:p-8 border border-gray-900 rounded-lg shadow-2xl hover:border-[#00A8FF] transition-all duration-500 transform hover:scale-[1.01] overflow-hidden ${cardOrder}`}
//       >
//         {/* 🎥 Background Video */}
//         <video
//           src="/feature-section/Aura.mp4"
//           autoPlay
//           loop
//           muted
//           playsInline
//           className="absolute inset-0 w-full h-full object-cover rounded-lg opacity-40 blur-[1px] z-0"
//         />

//         {/* Overlay to make text readable */}
//         <div className="absolute inset-0 bg-black/40 z-0"></div>

//         {/* Text Content */}
//         <div className="relative z-10">
//           <h3 className="text-sm font-extrabold tracking-[2px] mb-2 uppercase inline-block text-[#00A8FF] border-b border-[#00A8FF] pb-1">
//             {service.title}
//           </h3>
//           <p className="text-gray-300 text-sm leading-relaxed">
//             {service.description}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// // --- Main Section ---
// export default function ServicesSection() {
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           observer.unobserve(entry.target);
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => {
//       if (sectionRef.current) observer.unobserve(sectionRef.current);
//     };
//   }, []);

//   const services = [
//     {
//       title: 'DIGITAL MARKETING',
//       description:
//         'Comprehensive digital marketing strategies that drive engagement, increase conversions, and build lasting customer relationships across all platforms.',
//       imageUrl: '/feature-section/DigitalMarketing.png',
//     },
//     {
//       title: 'EMAIL MARKETING',
//       description:
//         'Targeted email campaigns, personalized content delivery, and automation setup to nurture leads and maximize customer lifetime value.',
//       imageUrl: '/feature-section/EmailMarketing.png',
//     },
//     {
//       title: 'SEO OPTIMIZATION',
//       description:
//         'Advanced SEO techniques to improve your search rankings, increase organic traffic, and dominate your competition in search results.',
//       imageUrl: '/feature-section/SEOoptimation.png',
//     },
//     {
//       title: 'BRAND DESIGN',
//       description:
//         'Creative branding solutions that establish your unique visual identity, including logos, style guides, and memorable audience experiences.',
//       imageUrl: '/feature-section/BrandDesign.png',
//     },
//     {
//       title: 'ONLINE REPUTATION MARKETING',
//       description:
//         "Proactive monitoring, management, and strategic enhancement of your brand's digital reputation across review platforms and social channels.",
//       imageUrl: '/feature-section/OnlineReputationMarketing.png',
//     },
//     {
//       title: 'SOCIAL MEDIA MANAGEMENT',
//       description:
//         'Full-service management of social platforms, including content creation, scheduling, community engagement, and performance analytics.',
//       imageUrl: '/feature-section/SocialMediaManagment.png',
//     },
//   ];

//   return (
//     <section id="services" className="py-20 px-6 md:px-30 bg-transparent">
//       <div className=" mx-auto">
//         <div ref={sectionRef} className="relative flex flex-col items-center">
//           {services.map((service, index) => (
//             <TimelineItem
//               key={index}
//               service={service}
//               index={index}
//               isVisible={isVisible}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
'use client'
import React, { useState, useEffect, useRef } from 'react';

// --- Service Image with enhanced animation ---
const ServiceImage = ({ url, isVisible, index }) => (
  <div className="relative w-full h-full flex items-center justify-center group">
    {/* Floating background orb */}
    <div className={`absolute w-48 h-48 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl transition-all duration-1000 ${
      isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
    }`} style={{ transitionDelay: `${index * 150 + 300}ms` }}></div>
    
    <img
      src={url}
      alt="Service Illustration"
      className={`relative w-full h-full object-contain max-w-[200px] max-h-[200px] md:max-w-[280px] md:max-h-[280px] z-10 transition-all duration-700 group-hover:scale-110 group-hover:rotate-3 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = 'https://placehold.co/250x250/0d0d0d/00A8FF?text=ICON';
        e.target.className =
          'relative w-full h-full object-contain max-w-[250px] max-h-[250px] p-4 z-10';
      }}
    />
    
    {/* Hover glow effect */}
    <div className="absolute inset-0 bg-blue-500/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 blur-md"></div>
  </div>
);

// --- Enhanced Timeline Item ---
const TimelineItem = ({ service, index, isVisible }) => {
  const isLeft = index % 2 !== 0;
  const [isHovered, setIsHovered] = useState(false);

  const delay = index * 200;
  const animationClass = isVisible
    ? `opacity-100 translate-y-0 duration-1000 delay-[${delay}ms]`
    : 'opacity-0 translate-y-20';

  return (
    <div
      className={`flex flex-col md:flex-row mb-20 md:mb-24 gap-8 md:gap-20 lg:gap-40 last:mb-0 w-full items-center ${
        isLeft ? 'md:flex-row-reverse' : ''
      } ${animationClass}`}
      style={{ transitionDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Service Icon with Connection Line */}
      <div className={`relative flex items-center justify-center w-full md:w-2/5`}>
        <ServiceImage url={service.imageUrl} isVisible={isVisible} index={index} />
        
        {/* Animated connection line for desktop */}
        <div className="hidden md:block absolute top-1/2 w-20 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform -translate-y-1/2 z-0 
          transition-all duration-500"
          style={{
            left: isLeft ? 'auto' : '100%',
            right: isLeft ? '100%' : 'auto',
            opacity: isVisible ? 1 : 0,
            transform: `translateY(-50%) ${isHovered ? 'scaleX(1.2)' : 'scaleX(1)'}`
          }}
        ></div>
      </div>

      {/* Enhanced Text Box with Video Background */}
      <div
        className={`relative w-full md:w-2/5 p-8 md:p-10 border-2 border-gray-800 rounded-2xl shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden group ${
          isHovered ? 'border-[#00A8FF] shadow-blue-500/25' : 'hover:border-gray-700'
        }`}
      >
        {/* Animated gradient border */}
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}></div>
        
        {/* Background Video with enhanced overlay */}
        <video
          src="/feature-section/Aura.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover rounded-2xl opacity-30 blur-sm z-0 transition-transform duration-700 group-hover:scale-110"
        />

        {/* Dynamic overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-purple-900/20 to-blue-900/30 z-0 transition-opacity duration-500 group-hover:opacity-80"></div>

        {/* Text Content */}
        <div className="relative z-10">
          {/* Animated title with icon */}
          <div className="flex items-center gap-3 mb-4">
            <div className={`w-3 h-3 rounded-full bg-[#00A8FF] animate-pulse transition-all duration-500 ${
              isHovered ? 'scale-150' : ''
            }`}></div>
            <h3 className="text-lg font-black tracking-[3px] uppercase inline-block text-transparent bg-gradient-to-r from-[#00A8FF] to-purple-400 bg-clip-text border-b-2 border-[#00A8FF] pb-2 transition-all duration-500 group-hover:tracking-[4px]">
              {service.title}
            </h3>
          </div>
          
          {/* Enhanced description */}
          <p className="text-gray-300 text-base leading-relaxed font-light transition-all duration-500 group-hover:text-white">
            {service.description}
          </p>
          
          {/* Hover action button */}
          <button className="mt-6 px-6 py-2 bg-transparent border border-[#00A8FF] text-[#00A8FF] rounded-full text-sm font-semibold transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 hover:bg-[#00A8FF] hover:text-white">
            Learn More →
          </button>
        </div>
      </div>
    </div>
  );
};

// --- Main Section with enhanced typography ---
export default function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const services = [
    {
      title: 'DIGITAL MARKETING',
      description: 'Comprehensive digital marketing strategies that drive engagement, increase conversions, and build lasting customer relationships across all platforms. We create data-driven campaigns that deliver real results.',
      imageUrl: '/feature-section/DigitalMarketing.png',
    },
    {
      title: 'EMAIL MARKETING',
      description: 'Targeted email campaigns, personalized content delivery, and automation setup to nurture leads and maximize customer lifetime value. Convert subscribers into loyal customers.',
      imageUrl: '/feature-section/EmailMarketing.png',
    },
    {
      title: 'SEO OPTIMIZATION',
      description: 'Advanced SEO techniques to improve your search rankings, increase organic traffic, and dominate your competition in search results. Sustainable growth through technical excellence.',
      imageUrl: '/feature-section/SEOoptimation.png',
    },
    {
      title: 'BRAND DESIGN',
      description: 'Creative branding solutions that establish your unique visual identity, including logos, style guides, and memorable audience experiences. Build a brand that stands out.',
      imageUrl: '/feature-section/BrandDesign.png',
    },
    {
      title: 'ONLINE REPUTATION MARKETING',
      description: "Proactive monitoring, management, and strategic enhancement of your brand's digital reputation across review platforms and social channels. Protect and elevate your brand's image.",
      imageUrl: '/feature-section/OnlineReputationMarketing.png',
    },
    {
      title: 'SOCIAL MEDIA MANAGEMENT',
      description: 'Full-service management of social platforms, including content creation, scheduling, community engagement, and performance analytics. Grow your presence authentically.',
      imageUrl: '/feature-section/SocialMediaManagment.png',
    },
  ];

  return (
    <section id="services" className="py-24 px-6 md:px-20 lg:px-30 bg-transparent relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-1/4 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -right-20 bottom-1/4 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div ref={sectionRef} className="text-center mb-20">
          <h2 className={`text-5xl md:text-7xl font-black uppercase mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Our Services
          </h2>
          <p className={`text-xl text-gray-400 max-w-2xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Transforming businesses with cutting-edge digital solutions that drive growth and innovation
          </p>
          <div className={`w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}></div>
        </div>

        {/* Timeline Items */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500/30 to-purple-500/30 hidden md:block"></div>
          
          {services.map((service, index) => (
            <TimelineItem
              key={index}
              service={service}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-20 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
         
        </div>
      </div>
    </section>
  );
}