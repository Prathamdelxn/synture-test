'use client'
import React, { useState, useEffect, useRef } from 'react';

// --- Global Style ---
const GlobalStyles = () => (
  <style>{`
    @keyframes scroll {
      from { transform: translateX(0); }
      to { transform: translateX(-50%); }
    }
    .animate-scroll {
      animation: scroll 40s linear infinite;
    }
    .animate-scroll-slow {
      animation: scroll 25s linear infinite;
    }
    html, body, #root {
      height: 100%;
    }
    /* Ensure particle canvas is behind everything */
    #particles-js canvas {
      position: fixed !important;
      top: 0;
      left: 0;
      z-index: 99px;
    }
  `}</style>
);

// --- Fade In Component ---
const FadeIn = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.unobserve(targetRef.current);
        }
      },
      { threshold: 0.1 }
    );

    if (targetRef.current) observer.observe(targetRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={targetRef}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// --- Header Component ---
const Header = () => (
  <header className="col-span-12 flex flex-col md:flex-row justify-between items-center py-4 bg-black sticky top-0 z-20 gap-4 md:gap-0">
    <div className="flex items-center text-2xl font-bold tracking-wider">
      <img
        src="https://placehold.co/40x40/00c6ff/ffffff?text=S"
        alt="Synture Logo Icon"
        className="w-6 h-6 mr-2.5 rounded-full align-middle"
      />
      SYNTURE
    </div>
    <nav>
      <ul className="flex flex-wrap justify-center gap-5 md:gap-7">
        <li><a href="#" className="uppercase text-lg font-normal py-1 transition-colors hover:text-gray-300">Home</a></li>
        <li><a href="#" className="uppercase text-lg font-normal py-1 transition-colors hover:text-gray-300">Inside Synture</a></li>
        <li><a href="#" className="uppercase text-lg font-normal py-1 transition-colors hover:text-gray-300">Contact</a></li>
        <li><a href="#" className="uppercase text-lg font-normal py-1 transition-colors hover:text-gray-300">Enquiry Form</a></li>
      </ul>
    </nav>
    <a href="#" className="uppercase text-lg font-bold py-2 px-5 border border-white rounded-md whitespace-nowrap transition-colors hover:bg-white hover:text-black">
      {/* Sign In */}
    </a>
  </header>
);

// --- Hero Card Component ---
// --- Hero Card Component ---
const HeroCard = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => setIsLoaded(true), []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.play().catch(() => {
      setIsPlaying(false);
      const resume = () => {
        video.play().catch(() => {});
        setIsPlaying(true);
        window.removeEventListener('touchstart', resume);
        window.removeEventListener('click', resume);
      };
      window.addEventListener('touchstart', resume, { passive: true });
      window.addEventListener('click', resume, { passive: true });
    });
  }, []);

  const animClass = (delay) =>
    `transition-all duration-700 ease-[cubic-bezier(.2,.9,.2,1)] ${
      isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
    }`;

  return (
    <div className="col-span-12 flex justify-center items-center py-12">
      <div className="relative w-11/12 md:w-3/4 max-w-6xl min-h-[500px] rounded-2xl shadow-2xl shadow-black/50 overflow-hidden">
        
        {/* Background Video */}
        <video
          ref={videoRef}
          id="bgVideo"
          className="absolute inset-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
          poster="https://placehold.co/1200x800/000000/333333?text=Loading+Video..."
        >
          <source src="/home-page/NavbottomVideo.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 z-10 bg-black/20 mix-blend-overlay pointer-events-none"></div>

        {/* Images */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full gap-6 p-5 sm:p-8">
          
          {/* Top two images side by side */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-8">
            <div className={animClass(0)} style={{ transitionDelay: '0ms' }}>
              <img
                src="/home-page/Empowering.png"
                alt="Empowering"
                className="w-32 h-32 sm:w-44 sm:h-44 md:w-52 md:h-52 object-contain"
              />
            </div>
            <div className={animClass(120)} style={{ transitionDelay: '120ms' }}>
              <img
                src="/home-page/brands.png"
                alt="Brands"
                className="w-32 h-32 sm:w-44 sm:h-44 md:w-48 md:h-48 object-contain"
              />
            </div>
          </div>

          {/* Bottom image */}
          <div className={animClass(240)} style={{ transitionDelay: '240ms' }}>
            <img
              src="/home-page/demo.png"
              alt="In the digital era"
              className="w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};


// --- Info Section ---
const InfoSection = () => (
  <section className="col-span-12 md:col-start-3 md:col-span-8 text-center py-10 md:py-20">
    <p className="text-2xl md:text-4xl leading-normal">
      At Synture, we combine 
      <span className="text-fuchsia-500"> strategy</span>, 
      <span className="text-blue-600"> creativity</span>, and 
      <span className="text-green-500"> technology</span> to craft
      digital marketing solutions that not only attract
      attention but drive measurable growth and lasting
      brand impact
    </p>
  </section>
);

// --- Particle Background Setup ---
const ParticleBackground = () => {
  useEffect(() => {
    const loadParticles = () => {
      if (window.particlesJS) {
        window.particlesJS('particles-js', {
          particles: {
            number: { value: 120, density: { enable: true, value_area: 800 } },
            color: { value: '#00b0ff' },
            shape: { type: 'circle' },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            line_linked: {
              enable: true,
              distance: 150,
              color: '#00b0ff',
              opacity: 0.6,
              width: 1,
            },
            move: {
              enable: true,
              speed: 5,
              direction: 'none',
              out_mode: 'out',
            },
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: { enable: true, mode: 'grab' },
              onclick: { enable: true, mode: 'repulse' },
              resize: true,
            },
            modes: {
              grab: { distance: 250, line_linked: { opacity: 1 } },
              repulse: { distance: 250, duration: 1.0 },
            },
          },
          retina_detect: true,
        });
      }
    };

    // If particles.js not loaded yet, dynamically load it
    if (!window.particlesJS) {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
      script.async = true;
      script.onload = loadParticles;
      document.body.appendChild(script);
    } else {
      loadParticles();
    }
  }, []);

  return <div id="particles-js" className="fixed top-0 left-0 w-full h-full z-0" />;
};

// --- Main HeroSection ---
export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });

  const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });

  return (
    <>
      <GlobalStyles />
      <ParticleBackground />

      <div
        className="bg-black text-white font-['Inter'] overflow-x-hidden min-h-screen relative z-10"
        onMouseMove={handleMouseMove}
      >
        {/* Cursor light effect */}
        <div
          className="pointer-events-none fixed inset-0 z-30 transition duration-300"
          style={{
            background: `radial-gradient(500px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.2), rgba(0, 198, 255, 0.1), transparent 80%)`
          }}
        />

        {/* Content */}
        <div className="mx-[20px] md:mx-[50px] lg:mx-[100px] grid grid-cols-12 gap-5 relative z-20">
          <Header />
          <HeroCard />
          <InfoSection />
        </div>
      </div>
    </>
  );
}
