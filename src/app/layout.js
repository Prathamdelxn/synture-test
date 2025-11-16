// "use client";

// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import { Toaster } from "react-hot-toast";
// import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import Footer from "@/new-comp/Footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export default function RootLayout({ children }) {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   // Navbar scroll effect
//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 10);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleNavClick = () => setIsMobileMenuOpen(false);

//   // Particles.js loader
//   useEffect(() => {
//     const loadParticles = () => {
//       window.particlesJS("particles-background", {
//         particles: {
//           number: { value: 120, density: { enable: true, value_area: 800 } },
//           color: { value: "#00b0ff" },
//           shape: { type: "circle" },
//           opacity: { value: 0.5, random: true },
//           size: { value: 3, random: true },
//           line_linked: {
//             enable: true,
//             distance: 150,
//             color: "#00b0ff",
//             opacity: 0.6,
//             width: 1,
//           },
//           move: { enable: true, speed: 3, out_mode: "out" },
//         },
//         interactivity: {
//           events: {
//             onhover: { enable: true, mode: "grab" },
//             onclick: { enable: true, mode: "repulse" },
//           },
//         },
//         retina_detect: true,
//       });
//     };

//     if (!window.particlesJS) {
//       const script = document.createElement("script");
//       script.src =
//         "https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js";
//       script.async = true;
//       script.onload = loadParticles;
//       document.body.appendChild(script);
//     } else {
//       loadParticles();
//     }

//     return () => {
//       if (window.pJSDom?.length > 0) {
//         window.pJSDom[0].pJS.fn.vendors.destroypJS();
//         window.pJSDom = [];
//       }
//     };
//   }, []);

//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased relative overflow-x-hidden`}
//       >
//         <Toaster position="top-center" reverseOrder={false} />

//         {/* GLOBAL PARTICLES BACKGROUND */}
//         <div
//           id="particles-background"
//           className="fixed inset-0 w-full h-full -z-10"
//         />

//         {/* NAVBAR */}
//         <nav
//           className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//             isScrolled
//               ? "bg-black/80 backdrop-blur-md py-3 shadow-lg"
//               : "bg-transparent py-5"
//           }`}
//         >
//           <div className="container mx-auto px-4 sm:px-6 lg:px-20 flex justify-between items-center">
//             <div className="text-white flex items-center gap-2 sm:gap-4 text-xl sm:text-2xl font-bold">
//               <img src="/logo.png" alt="Synture Logo" className="h-10 sm:h-14" />
//               Synture
//             </div>

// <div className="hidden md:flex space-x-8">
//   <Link href="/" className="text-white/80 text-lg hover:text-blue-400 font-semibold">Home</Link>
//   <Link href="/about" className="text-white/80 text-lg hover:text-blue-400 font-semibold">About Us</Link>
//   <Link href="/digital-marketing" className="text-white/80 text-lg hover:text-blue-400 font-semibold">Digital Marketing</Link>
//   <Link href="/training" className="text-white/80 text-lg hover:text-blue-400 font-semibold">Training</Link>
//   <Link href="/contact" className="text-white/80 text-lg hover:text-blue-400 font-semibold">Contact Us</Link>
// </div>

//             {/* Mobile Menu Button */}
//             <button
//               className="md:hidden text-white text-2xl"
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             >
//               {isMobileMenuOpen ? "✖" : "☰"}
//             </button>
//           </div>

//           {/* Mobile Dropdown */}
//           <div
//             className={`md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md transition-all duration-300 ${
//               isMobileMenuOpen
//                 ? "max-h-96 opacity-100"
//                 : "max-h-0 opacity-0 overflow-hidden"
//             }`}
//           >
//           <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
//   <Link href="/" onClick={handleNavClick} className="text-white/80 text-lg hover:text-blue-400">Home</Link>
//   <Link href="/about" onClick={handleNavClick} className="text-white/80 text-lg hover:text-blue-400">About Us</Link>
//   <Link href="/digital-marketing" onClick={handleNavClick} className="text-white/80 text-lg hover:text-blue-400">Digital Marketing</Link>
//   <Link href="/training" onClick={handleNavClick} className="text-white/80 text-lg hover:text-blue-400">Training</Link>
//   <Link href="/contact" onClick={handleNavClick} className="text-white/80 text-lg hover:text-blue-400">Contact Us</Link>
// </div>

//           </div>
//         </nav>

//         {/* PAGE CONTENT (always above particles) */}
//         <div className="relative z-10 ">{children}</div>
//         <Footer/>
//       </body>
//     </html>
//   );
// }
"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Footer from "@/new-comp/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => setIsMobileMenuOpen(false);

  // Particles.js loader
  useEffect(() => {
    const loadParticles = () => {
      window.particlesJS("particles-background", {
        particles: {
          number: { value: 120, density: { enable: true, value_area: 800 } },
          color: { value: "#00b0ff" },
          shape: { type: "circle" },
          opacity: { value: 0.5, random: true },
          size: { value: 3, random: true },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#00b0ff",
            opacity: 0.6,
            width: 1,
          },
          move: { enable: true, speed: 3, out_mode: "out" },
        },
        interactivity: {
          events: {
            onhover: { enable: true, mode: "grab" },
            onclick: { enable: true, mode: "repulse" },
          },
        },
        retina_detect: true,
      });
    };

    if (!window.particlesJS) {
      const script = document.createElement("script");
      script.src =
        "https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js";
      script.async = true;
      script.onload = loadParticles;
      document.body.appendChild(script);
    } else {
      loadParticles();
    }

    return () => {
      if (window.pJSDom?.length > 0) {
        window.pJSDom[0].pJS.fn.vendors.destroypJS();
        window.pJSDom = [];
      }
    };
  }, []);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative overflow-x-hidden`}
      >
        <Toaster position="top-center" reverseOrder={false} />

        {/* GLOBAL PARTICLES BACKGROUND */}
        <div
          id="particles-background"
          className="fixed inset-0 w-full h-full -z-10"
        />

        {/* NAVBAR */}
        <nav
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled
              ? "bg-black/80 backdrop-blur-md py-3 shadow-lg"
              : "bg-transparent py-5"
          }`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-20 flex justify-between items-center">
            <div className="text-white flex items-center gap-2 sm:gap-4 text-xl sm:text-2xl font-bold">
              <img src="/logo.png" alt="Synture Logo" className="h-10 sm:h-14" />
              Synture
            </div>

            {/* Desktop Navigation with Hover Underline Animation */}
            <div className="hidden md:flex space-x-8">
              <Link 
                href="/" 
                className="relative text-white/80 text-lg font-semibold transition-colors duration-300 hover:text-blue-400 group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              
              <Link 
                href="/about" 
                className="relative text-white/80 text-lg font-semibold transition-colors duration-300 hover:text-blue-400 group"
              >
                About Us
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              
              <Link 
                href="/digital-marketing" 
                className="relative text-white/80 text-lg font-semibold transition-colors duration-300 hover:text-blue-400 group"
              >
                Digital Marketing
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              
              <Link 
                href="/training" 
                className="relative text-white/80 text-lg font-semibold transition-colors duration-300 hover:text-blue-400 group"
              >
                Training
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              
              <Link 
                href="/contact" 
                className="relative text-white/80 text-lg font-semibold transition-colors duration-300 hover:text-blue-400 group"
              >
                Contact Us
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white text-2xl z-50 p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? "✖" : "☰"}
            </button>
          </div>

          {/* Mobile Dropdown with Hover Animation */}
          <div
            className={`md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md transition-all duration-300 ${
              isMobileMenuOpen
                ? "max-h-96 opacity-100"
                : "max-h-0 opacity-0 overflow-hidden"
            }`}
          >
            <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
              <Link 
                href="/" 
                onClick={handleNavClick}
                className="relative text-white/80 text-lg hover:text-blue-400 transition-colors duration-300 py-2 group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              
              <Link 
                href="/about" 
                onClick={handleNavClick}
                className="relative text-white/80 text-lg hover:text-blue-400 transition-colors duration-300 py-2 group"
              >
                About Us
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              
              <Link 
                href="/digital-marketing" 
                onClick={handleNavClick}
                className="relative text-white/80 text-lg hover:text-blue-400 transition-colors duration-300 py-2 group"
              >
                Digital Marketing
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              
              <Link 
                href="/training" 
                onClick={handleNavClick}
                className="relative text-white/80 text-lg hover:text-blue-400 transition-colors duration-300 py-2 group"
              >
                Training
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              
              <Link 
                href="/contact" 
                onClick={handleNavClick}
                className="relative text-white/80 text-lg hover:text-blue-400 transition-colors duration-300 py-2 group"
              >
                Contact Us
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
          </div>
        </nav>

        {/* PAGE CONTENT (always above particles) */}
        <div className="relative z-10">{children}</div>
        <Footer/>
      </body>
    </html>
  );
}