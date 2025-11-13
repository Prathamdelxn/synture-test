"use client"

import { use, useEffect } from "react";


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

export default ParticleBackground;