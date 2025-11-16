// // "use client";

// // import React, { useEffect, useState } from "react";

// // const Home = () => {
// //     const [isScrolled, setIsScrolled] = useState(false);

// //     // Handle scroll effect for navbar
// //     useEffect(() => {
// //         const handleScroll = () => {
// //             setIsScrolled(window.scrollY > 10);
// //         };
// //         window.addEventListener("scroll", handleScroll);
// //         return () => window.removeEventListener("scroll", handleScroll);
// //     }, []);
// //     // --- Load particles.js background ---
// //     useEffect(() => {
// //         const loadParticles = () => {
// //             window.particlesJS("particles-background", {
// //                 particles: {
// //                     number: {
// //                         value: 120,
// //                         density: {
// //                             enable: true,
// //                             value_area: 800
// //                         }
// //                     },
// //                     color: {
// //                         value: "#00b0ff"
// //                     },
// //                     shape: {
// //                         type: "circle"
// //                     },
// //                     opacity: {
// //                         value: 0.5,
// //                         random: true
// //                     },
// //                     size: {
// //                         value: 3,
// //                         random: true
// //                     },
// //                     line_linked: {
// //                         enable: true,
// //                         distance: 150,
// //                         color: "#00b0ff",
// //                         opacity: 0.6,
// //                         width: 1,
// //                     },
// //                     move: {
// //                         enable: true,
// //                         speed: 3,
// //                         direction: "none",
// //                         out_mode: "out",
// //                     },
// //                 },
// //                 interactivity: {
// //                     detect_on: "canvas",
// //                     events: {
// //                         onhover: {
// //                             enable: true,
// //                             mode: "grab"
// //                         },
// //                         onclick: {
// //                             enable: true,
// //                             mode: "repulse"
// //                         },
// //                         resize: true,
// //                     },
// //                     modes: {
// //                         grab: {
// //                             distance: 200,
// //                             line_linked: {
// //                                 opacity: 1
// //                             }
// //                         },
// //                         repulse: {
// //                             distance: 200,
// //                             duration: 0.4
// //                         },
// //                     },
// //                 },
// //                 retina_detect: true,
// //             });
// //         };

// //         // Load script if not already
// //         if (!window.particlesJS) {
// //             const script = document.createElement("script");
// //             script.src = "https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js";
// //             script.async = true;
// //             script.onload = loadParticles;
// //             document.body.appendChild(script);
// //         } else {
// //             loadParticles();
// //         }

// //         // Cleanup function
// //         return () => {
// //             if (window.pJSDom && window.pJSDom.length > 0) {
// //                 window.pJSDom[0].pJS.fn.vendors.destroypJS();
// //                 window.pJSDom = [];
// //             }
// //         };
// //     }, []);

// //     return (
// //         <div className="relative w-full h-screen flex items-center justify-center bg-gradient-to-b from-black to-blue-800 overflow-hidden">
// //             {/* Particles container - REMOVED pointer-events-none */}
// //             <div
// //                 id="particles-background"
// //                 className="absolute inset-0 w-full h-full"
// //             />

// //             <div className="relative z-10 text-white text-4xl font-bold">
// //                 <nav
// //                     className={`fixed top-0 left-0 right-0 z-50  transition-all duration-300 ${isScrolled
// //                         ? "bg-black/80 backdrop-blur-md py-3 shadow-lg"
// //                         : "bg-transparent py-5"
// //                         }`}
// //                 >
// //                     <div className="container mx-auto  px-20 flex justify-between items-center">

// //                         <div className="text-white flex items-center gap-4 text-2xl font-bold">
// //                             <img src="/logo.png" alt="" className="h-14" />
// //                             Synture
// //                         </div>

// //                         <div className="hidden md:flex space-x-8">
// //                             {["Home", "About Us", "Digital Marketing", "Training", "Contact Us"].map(
// //                                 (item) => (
// //                                     <a
// //                                         key={item}
// //                                         href="#"
// //                                         className="text-white/80 text-lg  hover:text-blue-400 transition-colors duration-300 font-semibold cursor-pointer"
// //                                     >
// //                                         {item}
// //                                     </a>
// //                                 )
// //                             )}
// //                         </div>



// //                         <button className="md:hidden text-white cursor-pointer">
// //                             <svg
// //                                 className="w-6 h-6"
// //                                 fill="none"
// //                                 stroke="currentColor"
// //                                 viewBox="0 0 24 24"
// //                             >
// //                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
// //                             </svg>
// //                         </button>
// //                     </div>
// //                 </nav>
// //                 <div className="relative h-[550px] w-[1000px] overflow-hidden rounded-xl">

// //                     {/* Background Video */}
// //                     <video
// //                         className="absolute top-0 left-0 w-full h-full object-cover"
// //                         autoPlay
// //                         loop
// //                         muted
// //                         playsInline
// //                     >
// //                         <source src="/videos/hero.webm" type="video/webm" />
// //                     </video>

// //                     {/* Dark overlay */}
// //                     <div className="absolute inset-0 bg-black/20"></div>

// //                     {/* Left Image */}
// //                     <div className="absolute top-30 left-30 z-10">
// //                           <img src="/home-page/Empowering.png" alt="" className="h-24" />

// //                     </div>

// //                     {/* Right Image */}
// //                     <div className="absolute top-30 right-30 z-10">
// //                         <img src="/home-page/brands.png" alt="" className="h-24" />
// //                     </div>
// //                     <div className="absolute bottom-30 left-1/2 -translate-x-1/2 z-10">
// //                       <img src="/home-page/demo.png" alt="" className="h-24" />

// // </div>


// //                     {/* Center Text */}
// //                     {/* <div className="relative z-10 flex items-center justify-center h-full">
// //                         <h1 className="text-white text-3xl font-bold">
// //                             Your Text Goes Here
// //                         </h1>
// //                     </div> */}

// //                 </div>


// //             </div>
// //         </div>
// //     );
// // };

// // export default Home;

// "use client";

// import Carousel from "@/new-comp/Carousal";
// import ServicesSection from "@/new-comp/FeaturesSection";
// import Footer from "@/new-comp/Footer";
// import React, { useEffect, useState } from "react";

// const Home = () => {
//     const [isScrolled, setIsScrolled] = useState(false);
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//     // Handle scroll effect for navbar
//     useEffect(() => {
//         const handleScroll = () => {
//             setIsScrolled(window.scrollY > 10);
//         };
//         window.addEventListener("scroll", handleScroll);
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, []);

//     // Close mobile menu when clicking on a link
//     const handleNavClick = () => {
//         setIsMobileMenuOpen(false);
//     };

//     // --- Load particles.js background ---
//     useEffect(() => {
//         const loadParticles = () => {
//             window.particlesJS("particles-background", {
//                 particles: {
//                     number: {
//                         value: 120,
//                         density: {
//                             enable: true,
//                             value_area: 800
//                         }
//                     },
//                     color: {
//                         value: "#00b0ff"
//                     },
//                     shape: {
//                         type: "circle"
//                     },
//                     opacity: {
//                         value: 0.5,
//                         random: true
//                     },
//                     size: {
//                         value: 3,
//                         random: true
//                     },
//                     line_linked: {
//                         enable: true,
//                         distance: 150,
//                         color: "#00b0ff",
//                         opacity: 0.6,
//                         width: 1,
//                     },
//                     move: {
//                         enable: true,
//                         speed: 3,
//                         direction: "none",
//                         out_mode: "out",
//                     },
//                 },
//                 interactivity: {
//                     detect_on: "canvas",
//                     events: {
//                         onhover: {
//                             enable: true,
//                             mode: "grab"
//                         },
//                         onclick: {
//                             enable: true,
//                             mode: "repulse"
//                         },
//                         resize: true,
//                     },
//                     modes: {
//                         grab: {
//                             distance: 200,
//                             line_linked: {
//                                 opacity: 1
//                             }
//                         },
//                         repulse: {
//                             distance: 200,
//                             duration: 0.4
//                         },
//                     },
//                 },
//                 retina_detect: true,
//             });
//         };

//         // Load script if not already
//         if (!window.particlesJS) {
//             const script = document.createElement("script");
//             script.src = "https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js";
//             script.async = true;
//             script.onload = loadParticles;
//             document.body.appendChild(script);
//         } else {
//             loadParticles();
//         }

//         // Cleanup function
//         return () => {
//             if (window.pJSDom && window.pJSDom.length > 0) {
//                 window.pJSDom[0].pJS.fn.vendors.destroypJS();
//                 window.pJSDom = [];
//             }
//         };
//     }, []);

//     return (
//         <div
//             className="
//     relative w-full h-full overflow-y-auto flex items-center justify-center 
// bg-[linear-gradient(to_bottom,black,#102866,#12348a,#102866,#0c224f,black)]


//     overflow-hidden font-sans
//   "
//         >

//             {/* Particles container */}
//             <div
//                 id="particles-background"
//                 className="absolute inset-0 w-full h-full"
//             />

//             <div className="relative z-10 text-white w-full">
//                 <nav
//                     className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
//                         ? "bg-black/80 backdrop-blur-md py-3 shadow-lg"
//                         : "bg-transparent py-5"
//                         }`}
//                 >
//                     <div className="container mx-auto px-4 sm:px-6 lg:px-20 flex justify-between items-center">
//                         <div className="text-white flex items-center gap-2 sm:gap-4 text-xl sm:text-2xl font-bold">
//                             <img src="/logo.png" alt="Synture Logo" className="h-10 sm:h-14" />
//                             Synture
//                         </div>

//                         {/* Desktop Navigation */}
//                         <div className="hidden md:flex space-x-8">
//                             {["Home", "About Us", "Digital Marketing", "Training", "Contact Us"].map(
//                                 (item) => (
//                                     <a
//                                         key={item}
//                                         href="#"
//                                         className="text-white/80 text-lg hover:text-blue-400 transition-colors duration-300 font-semibold cursor-pointer"
//                                     >
//                                         {item}
//                                     </a>
//                                 )
//                             )}
//                         </div>

//                         {/* Mobile Menu Button */}
//                         <button
//                             className="md:hidden text-white cursor-pointer z-50 p-2"
//                             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//                         >
//                             {isMobileMenuOpen ? (
//                                 <svg
//                                     className="w-6 h-6"
//                                     fill="none"
//                                     stroke="currentColor"
//                                     viewBox="0 0 24 24"
//                                 >
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                                 </svg>
//                             ) : (
//                                 <svg
//                                     className="w-6 h-6"
//                                     fill="none"
//                                     stroke="currentColor"
//                                     viewBox="0 0 24 24"
//                                 >
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                                 </svg>
//                             )}
//                         </button>
//                     </div>

//                     {/* Mobile Navigation Menu */}
//                     <div className={`md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md transition-all duration-300 ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
//                         }`}>
//                         <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
//                             {["Home", "About Us", "Digital Marketing", "Training", "Contact Us"].map(
//                                 (item) => (
//                                     <a
//                                         key={item}
//                                         href="#"
//                                         className="text-white/80 text-lg hover:text-blue-400 transition-colors duration-300 font-semibold cursor-pointer py-2"
//                                         onClick={handleNavClick}
//                                     >
//                                         {item}
//                                     </a>
//                                 )
//                             )}
//                         </div>
//                     </div>
//                 </nav>

//                 {/* Main Content */}
//                 <div className="relative mt-28 h-[300px] sm:h-[400px] md:h-[550px] w-full max-w-[90vw] sm:max-w-[800px] md:max-w-[1000px] mx-auto mt-20 overflow-hidden rounded-xl">

//                     {/* Background Video */}
//                     <video
//                         className="absolute top-0 left-0 w-full h-full object-cover"
//                         autoPlay
//                         loop
//                         muted
//                         playsInline
//                     >
//                         <source src="/videos/hero.webm" type="video/webm" />
//                     </video>

//                     {/* Dark overlay */}
//                     <div className="absolute inset-0 bg-black/20"></div>

//                     {/* Top Left Image */}
//                     <div className="absolute top-14 left-6 sm:top-12 sm:left-8 md:top-26 md:left-30 z-10">
//                         <img
//                             src="/home-page/Empowering.png"
//                             alt="Empowering"
//                             className="h-12 sm:h-16 md:h-22 w-auto"
//                         />
//                     </div>

//                     {/* Top Right Image */}
//                     <div className="absolute top-14 right-6 sm:top-12 sm:right-8 md:top-30 md:right-30 z-10">
//                         <img
//                             src="/home-page/brands.png"
//                             alt="Brands"
//                             className="h-12 sm:h-16 md:h-24 w-auto"
//                         />
//                     </div>

//                     {/* Bottom Center Image */}
//                     <div className="absolute bottom-14 left-1/2 -translate-x-1/2 z-10">
//                         <img
//                             src="/home-page/demo.png"
//                             alt="Demo"
//                             className="h-12 sm:h-16 md:h-24 w-auto"
//                         />
//                     </div>

//                 </div>
//                 <div className="col-span-12 md:col-start-3 md:col-span-8 text-center px-40 py-10 md:py-20">
//                     <p className="text-2xl md:text-4xl leading-normal">
//                         At Synture, we combine
//                         <span className="text-fuchsia-500"> strategy</span>,
//                         <span className="text-blue-600"> creativity</span>, and
//                         <span className="text-green-500"> technology</span> to craft
//                         digital marketing solutions that not only attract
//                         attention but drive measurable growth and lasting
//                         brand impact
//                     </p>
//                 </div>
//                 <Carousel />
//                 <ServicesSection />
//                 <Footer />
//             </div>
//         </div>
//     );
// };

// export default Home;


"use client";

import Carousel from "@/new-comp/Carousal";
import ServicesSection from "@/new-comp/FeaturesSection";
import Footer from "@/new-comp/Footer";
import HeroSection from "@/new-comp/HeroSection";
import React, { useEffect, useState } from "react";

const Home = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Handle scroll effect for navbar
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu when clicking on a link
    const handleNavClick = () => {
        setIsMobileMenuOpen(false);
    };

    // --- Load particles.js background ---
    useEffect(() => {
        const loadParticles = () => {
            window.particlesJS("particles-background", {
                particles: {
                    number: {
                        value: 120,
                        density: {
                            enable: true,
                            value_area: 800
                        }
                    },
                    color: {
                        value: "#00b0ff"
                    },
                    shape: {
                        type: "circle"
                    },
                    opacity: {
                        value: 0.5,
                        random: true
                    },
                    size: {
                        value: 3,
                        random: true
                    },
                    line_linked: {
                        enable: true,
                        distance: 150,
                        color: "#00b0ff",
                        opacity: 0.6,
                        width: 1,
                    },
                    move: {
                        enable: true,
                        speed: 3,
                        direction: "none",
                        out_mode: "out",
                    },
                },
                interactivity: {
                    detect_on: "canvas",
                    events: {
                        onhover: {
                            enable: true,
                            mode: "grab"
                        },
                        onclick: {
                            enable: true,
                            mode: "repulse"
                        },
                        resize: true,
                    },
                    modes: {
                        grab: {
                            distance: 200,
                            line_linked: {
                                opacity: 1
                            }
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4
                        },
                    },
                },
                retina_detect: true,
            });
        };

        // Load script if not already
        if (!window.particlesJS) {
            const script = document.createElement("script");
            script.src = "https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js";
            script.async = true;
            script.onload = loadParticles;
            document.body.appendChild(script);
        } else {
            loadParticles();
        }

        // Cleanup function
        return () => {
            if (window.pJSDom && window.pJSDom.length > 0) {
                window.pJSDom[0].pJS.fn.vendors.destroypJS();
                window.pJSDom = [];
            }
        };
    }, []);

    return (
        <div
            className="
                relative w-full h-full overflow-y-auto flex items-center justify-center 
                bg-[linear-gradient(to_bottom,black,#102866,#12348a,#102866,#0c224f,black)]
                overflow-hidden
                font-sans
            "
        >

            {/* Particles container */}
            <div
                id="particles-background"
                className="absolute inset-0 w-full h-full"
            />

            <div className="relative z-10 text-white w-full font-sans">
                <nav
                    className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                        ? "bg-black/80 backdrop-blur-md py-3 shadow-lg"
                        : "bg-transparent py-5"
                        } font-sans`}
                >
                    <div className="container mx-auto px-4 sm:px-6 lg:px-20 flex justify-between items-center">
                        <div className="text-white flex items-center gap-2 sm:gap-4 text-xl sm:text-2xl font-bold font-sans">
                            <img src="/logo.png" alt="Synture Logo" className="h-10 sm:h-14" />
                            Synture
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex space-x-8 font-sans">
                            {["Home", "About Us", "Digital Marketing", "Training", "Contact Us"].map(
                                (item) => (
                                    <a
                                        key={item}
                                        href="#"
                                        className="text-white/80 text-lg hover:text-blue-400 transition-colors duration-300 font-semibold cursor-pointer font-sans"
                                    >
                                        {item}
                                    </a>
                                )
                            )}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-white cursor-pointer z-50 p-2 font-sans"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? (
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>

                    {/* Mobile Navigation Menu */}
                    <div className={`md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md transition-all duration-300 ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                        } font-sans`}>
                        <div className="container mx-auto px-4 py-6 flex flex-col space-y-4 font-sans">
                            {["Home", "About Us", "Digital Marketing", "Training", "Contact Us"].map(
                                (item) => (
                                    <a
                                        key={item}
                                        href="#"
                                        className="text-white/80 text-lg hover:text-blue-400 transition-colors duration-300 font-semibold cursor-pointer py-2 font-sans"
                                        onClick={handleNavClick}
                                    >
                                        {item}
                                    </a>
                                )
                            )}
                        </div>
                    </div>
                </nav>

                
                <HeroSection/>
                <Carousel />
                <ServicesSection />
                <Footer />
            </div>
        </div>
    );
};

export default Home;