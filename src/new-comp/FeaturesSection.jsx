'use client'
import React, { useState, useEffect, useRef } from 'react';

// --- Service Image (only image, larger size now) ---
const ServiceImage = ({ url }) => (
  <div className="relative w-full h-full flex items-center justify-center">
    <img
      src={url}
      alt="Service Illustration"
      className="relative w-full h-full object-contain max-w-[250px] max-h-[250px] z-10 transition-transform duration-500 hover:scale-110"
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = 'https://placehold.co/250x250/0d0d0d/00A8FF?text=ICON';
        e.target.className =
          'relative w-full h-full object-contain max-w-[250px] max-h-[250px] p-4 z-10';
      }}
    />
  </div>
);

// --- Timeline Item ---
const TimelineItem = ({ service, index, isVisible }) => {
  const isLeft = index % 2 !== 0;
  const containerClass = isLeft ? 'md:justify-start' : 'md:justify-end';
  const cardOrder = isLeft ? 'order-1' : 'order-2';
  const iconOrder = isLeft ? 'order-2' : 'order-1';

  const delay = index * 150;
  const animationClass = isVisible
    ? `opacity-100 translate-y-0 duration-700 delay-[${delay}ms]`
    : 'opacity-0 translate-y-10';

  return (
    <div
      className={`flex flex-col md:flex-row mb-12 md:mb-16 gap-40 last:mb-0 w-full ${containerClass} ${animationClass}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Left Side - Service Icon (no outer box, larger image) */}
      <div className={`relative flex items-center justify-center w-full md:w-1/3 ${iconOrder}`}>
        <ServiceImage url={service.imageUrl} />
      </div>

      {/* Right Side - Text Box with Video Background */}
      <div
        className={`relative w-full md:w-1/2 p-6 md:p-8 border border-gray-900 rounded-lg shadow-2xl hover:border-[#00A8FF] transition-all duration-500 transform hover:scale-[1.01] overflow-hidden ${cardOrder}`}
      >
        {/* 🎥 Background Video */}
        <video
          src="/feature-section/Aura.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover rounded-lg opacity-40 blur-[1px] z-0"
        />

        {/* Overlay to make text readable */}
        <div className="absolute inset-0 bg-black/40 z-0"></div>

        {/* Text Content */}
        <div className="relative z-10">
          <h3 className="text-sm font-extrabold tracking-[2px] mb-2 uppercase inline-block text-[#00A8FF] border-b border-[#00A8FF] pb-1">
            {service.title}
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            {service.description}
          </p>
        </div>
      </div>
    </div>
  );
};

// --- Main Section ---
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
      description:
        'Comprehensive digital marketing strategies that drive engagement, increase conversions, and build lasting customer relationships across all platforms.',
      imageUrl: '/feature-section/DigitalMarketing.png',
    },
    {
      title: 'EMAIL MARKETING',
      description:
        'Targeted email campaigns, personalized content delivery, and automation setup to nurture leads and maximize customer lifetime value.',
      imageUrl: '/feature-section/EmailMarketing.png',
    },
    {
      title: 'SEO OPTIMIZATION',
      description:
        'Advanced SEO techniques to improve your search rankings, increase organic traffic, and dominate your competition in search results.',
      imageUrl: '/feature-section/SEOoptimation.png',
    },
    {
      title: 'BRAND DESIGN',
      description:
        'Creative branding solutions that establish your unique visual identity, including logos, style guides, and memorable audience experiences.',
      imageUrl: '/feature-section/BrandDesign.png',
    },
    {
      title: 'ONLINE REPUTATION MARKETING',
      description:
        "Proactive monitoring, management, and strategic enhancement of your brand's digital reputation across review platforms and social channels.",
      imageUrl: '/feature-section/OnlineReputationMarketing.png',
    },
    {
      title: 'SOCIAL MEDIA MANAGEMENT',
      description:
        'Full-service management of social platforms, including content creation, scheduling, community engagement, and performance analytics.',
      imageUrl: '/feature-section/SocialMediaManagment.png',
    },
  ];

  return (
    <section id="services" className="py-20 px-6 md:px-16 bg-[#000000]">
      <div className="max-w-4xl mx-auto">
        <div ref={sectionRef} className="relative flex flex-col items-center">
          {services.map((service, index) => (
            <TimelineItem
              key={index}
              service={service}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
