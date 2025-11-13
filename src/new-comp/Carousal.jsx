"use client";
import React from "react";

// --- All images use the same local file ---
const carouselImages = [
  { id: 1, src: "/home-page/digital-marketing.jpg", alt: "Digital marketing strategy session" },
  { id: 2, src: "/home-page/sc-marketing.jpg", alt: "Smartphone showing social media engagement" },
  { id: 3, src: "/home-page/sc-marketing2.jpg", alt: "Person typing on a laptop" },
  { id: 4, src: "/home-page/Computer screen with  SEO.jpg", alt: "Computer screen with SEO data" },
  { id: 5, src: "/home-page/Fundo azul de mídia social _ Vetor Grátis.jpg", alt: "Diverse team collaborating" },
  { id: 6, src: "/home-page/Email marketing.jpg", alt: "Inbox with email icons" },
  { id: 7, src: "/home-page/SmartPhone showing social media engagment.jpg", alt: "Graph showing ad spend and conversions" },
  { id: 8, src: "/home-page/ıllıllı⭐🌟 C͙R͙E͙A͙D͙O͙R͙ D͙I͙G͙I͙T͙A͙L͙ ✅️ D͙I͙S͙E͙ÑA͙D͙O͙R͙ G͙R͙ÁF͙I͙C͙O͙ ➡️ I͙N͙T͙E͙L͙I͙G͙E͙N͙C͙I͙A͙ A͙R͙T͙I͙F͙I͙C͙I͙A͙L͙ 🧠 🌟⭐ıllıllı @destacar Yooel Olmos.jpg", alt: "Company logo and branding guide" },
];

// --- Constants ---
const SLIDE_WIDTH = 800;
const SLIDE_HEIGHT = 400;
const IMAGE_COUNT = carouselImages.length;
const RADIUS = Math.round((SLIDE_WIDTH / 2) / Math.tan(Math.PI / IMAGE_COUNT));
const EFFECTIVE_RADIUS = RADIUS * 1.05;
const ANIMATION_DURATION = 8; // seconds

const Carousal = () => {
  const slideAngle = 360 / IMAGE_COUNT;

  const keyframes = `
    @keyframes fluctuate {
      0% { transform: translateZ(-${EFFECTIVE_RADIUS}px) rotateY(-100deg); }
      100% { transform: translateZ(-${EFFECTIVE_RADIUS}px) rotateY(100deg); }
    }
  `;

  return (
    <>
      <style>{keyframes}</style>

      {/* --- Title --- */}
      <div className="w-full text-center py-12 bg-black">
        <h2
          className="text-white text-5xl md:text-6xl font-bold tracking-[0.4em] uppercase font-['Inter']"
          style={{
            letterSpacing: "0.1em",
            textShadow: "0 0 20px rgba(255,255,255,0.25)",
          }}
        >
          WHAT WE DO!
        </h2>
      </div>

      {/* --- Carousel Container --- */}
      <div className="w-full h-[40vh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="relative w-full h-full flex items-center justify-center"
          style={{ perspective: "1200px" }}
        >
          <div
            className="absolute w-full h-full"
            style={{
              transformStyle: "preserve-3d",
              animation: `fluctuate ${ANIMATION_DURATION}s linear infinite alternate`,
            }}
          >
            {carouselImages.map((image, index) => (
              <div
                key={image.id}
                className="absolute top-1/2 left-1/2 rounded-lg overflow-hidden shadow-2xl shadow-black/60"
                style={{
                  width: `${SLIDE_WIDTH}px`,
                  height: `${SLIDE_HEIGHT}px`,
                  marginTop: `-${SLIDE_HEIGHT / 2}px`,
                  marginLeft: `-${SLIDE_WIDTH / 2}px`,
                  transform: `
                    rotateY(${index * slideAngle}deg)
                    translateZ(${EFFECTIVE_RADIUS}px)
                    rotateY(180deg)
                  `,
                  backfaceVisibility: "hidden",
                }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousal;
