// import React from 'react';
// import { Facebook, Linkedin, Instagram } from 'lucide-react';



// const Footer = () => {
//   return (
//     <>
 
//       <style>
//         {`
//           @keyframes svg-fluctuate-1 {
//             0% { transform: translate(0, 0px); }
//             33% { transform: translate(-1920px, -20px); }
//             66% { transform: translate(-3840px, 20px); }
//             100% { transform: translate(-5760px, 0px); }
//           }
//           @keyframes svg-fluctuate-2 {
//             0% { transform: translate(0, 0px); }
//             33% { transform: translate(-1920px, 20px); }
//             66% { transform: translate(-3840px, -20px); }
//             100% { transform: translate(-5760px, 0px); }
//           }
//           .svg-wave-path-1 {
//             animation: svg-fluctuate-1 40s linear infinite;
//           }
//           .svg-wave-path-2 {
//             animation: svg-fluctuate-2 35s linear infinite;
//           }
//         `}
//       </style>

//       {/* Main Footer Container */}
//       <footer className="bg-transparent text-white pt-10 px-4 md:px-8 relative overflow-hidden font-inter rounded-t-xl shadow-2xl">
        
//         {/* Top Slogan Section */}
//         <div className="text-center mb-12">
//           <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-2">
//             THINK SMART. THINK BOLD.
//           </h1>
//           <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-blue-500">
//             THINK US.
//           </h2>
//         </div>

//         {/* Statistics Section */}
//         <div className="flex flex-wrap justify-center max-w-4xl mx-auto mb-16 gap-y-10">
//           {/* Stat Item 1 */}
//           <div className="w-1/2 md:w-1/4 p-2 text-center">
//             <p className="text-5xl font-bold text-blue-500 mb-1">99 %</p>
//             <p className="text-sm uppercase opacity-80 tracking-widest">Client Satisfaction</p>
//           </div>
//           {/* Stat Item 2 */}
//           <div className="w-1/2 md:w-1/4 p-2 text-center">
//             <p className="text-5xl font-bold text-blue-500 mb-1">20 +</p>
//             <p className="text-sm uppercase opacity-80 tracking-widest">Project Completed</p>
//           </div>
//           {/* Stat Item 3 */}
//           <div className="w-1/2 md:w-1/4 p-2 text-center">
//             <p className="text-5xl font-bold text-blue-500 mb-1">1 +</p>
//             <p className="text-sm uppercase opacity-80 tracking-widest">Year Experience</p>
//           </div>
//           {/* Stat Item 4 */}
//           <div className="w-1/2 md:w-1/4 p-2 text-center">
//             <p className="text-5xl font-bold text-blue-500 mb-1">24/7</p>
//             <p className="text-sm uppercase opacity-80 tracking-widest">Support Available</p>
//           </div>
//         </div>

//        {/* Proud Associations Section */}
// <div className="py-8 border-t border-gray-800 overflow-hidden">
//   <h1 className="text-[48px] font-semibold uppercase tracking-widest mb-10 text-center text-gray-100">
//     Proud Associations
//   </h1>

//   {/* --- Continuous Scrolling Row --- */}
//   <div className="relative w-full overflow-hidden">
//     <style>{`
//       @keyframes scroll {
//         0% { transform: translateX(0); }
//         100% { transform: translateX(-50%); }
//       }
//       .scroll-container {
//         display: flex;
//         width: max-content;
//         animation: scroll 30s linear infinite;
//       }
//     `}</style>

//     {/* Scrolling Track */}
//     <div className="flex scroll-container">
//       {/* Duplicate logos twice for seamless flow */}
//       {[...Array(2)].map((_, setIndex) => (
//         <div key={setIndex} className="flex items-center gap-10 px-5">
//           {[
//             "/home-page/Frame 1618877593.jpg",
//             "/home-page/FarmFerry_logo-Photoroom_1_-removebg-preview (1).png",
//             "/home-page/SONAL LOGO.jpg",
//             "/home-page/Untitled Design - 1.jpg",
//             "/home-page/shiv_logo-removebg-preview (1).png",
//             "/home-page/Group 137.png",
//           ].map((src, i) => (
//             <div
//               key={`${setIndex}-${i}`}
//               className="w-40 h-40 flex items-center justify-center bg-white/10 rounded-2xl backdrop-blur-sm border border-gray-700 flex-shrink-0"
//             >
//               <img
//                 src={src}
//                 alt={`Logo ${i}`}
//                 className="object-contain w-28 h-28 hover:opacity-90 transition-opacity duration-300"
//               />
//             </div>
//           ))}
//         </div>
//       ))}
//     </div>
//   </div>
// </div>



//         {/* Contact and Newsletter Section */}
//         <div className="flex flex-col md:flex-row justify-between items-center md:items-end max-w-5xl mx-auto pt-12 pb-[430px] relative z-10 px-4">
          
//           {/* Contact Info (Left Side) */}
//         <div className="text-center md:text-left leading-relaxed text-[25px] mb-8 md:mb-0">
//   <p className="text-gray-300">info@synturesolutions.com</p>
//   <p className="text-gray-300">+91 8421539304</p>
// </div>

          
//           {/* Newsletter Form (Right Side) */}
//           <div className="text-center  md:text-right w-full md:w-auto">
//             <p className="text-base text-[25px]  font-bold text-gray-400 uppercase mb-2">
//               Fuel Your Inbox
//             </p>
//             <div className="inline-flex border-b-2 border-white focus-within:border-cyan-400 transition-colors duration-300">
//               <input
//                 type="email"
//                 placeholder="Email Address"
//                 aria-label="Email for newsletter"
//                 className="bg-transparent border-none text-white p-1 w-48 md:w-64 text-base outline-none placeholder:text-gray-500"
//               />
//               <button 
//                 aria-label="Submit email"
//                 className="bg-transparent border-none text-white text-2xl cursor-pointer px-3 transition-colors duration-300 hover:text-cyan-400"
//               >
//                 &rarr;
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Wave Layers and Content */}
        
//         {/* Animated SVG Wave */}
//         <svg
//           id="wave"
//           className="absolute bottom-0 left-0 w-full h-[250px] z-0"
//           style={{ transform: "rotate(0deg)", transition: "0.3s" }}
//           viewBox="0 0 1440 430"
//           version="1.1"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <defs>
//             {/* Gradient for front wave */}
//             <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="0" y2="1">
//               <stop stopColor="#a955cdff" offset="0%"></stop>
//               <stop stopColor="#233a4e" offset="100%"></stop>
//             </linearGradient>
//             <linearGradient id="sw-gradient-01" x1="0" x2="0" y1="0" y2="1">
//               <stop stopColor="#112D60" offset="0%"></stop>
//               <stop stopColor="#8f22bdff" offset="100%"></stop>
//             </linearGradient>
//           </defs>
//           <path
//             className="svg-wave-path-1"
//             style={{ transform: "translate(0, 0px)", opacity: 1 }}
//             fill="url(#sw-gradient-0)"
//             d="M0,43L80,64.5C160,86,320,129,480,172C640,215,800,258,960,236.5C1120,215,1280,129,1440,86C1600,43,1760,43,1920,43C2080,43,2240,43,2400,86C2560,129,2720,215,2880,250.8C3040,287,3200,272,3360,279.5C3520,287,3680,315,3840,308.2C4000,301,4160,258,4320,200.7C4480,143,4640,72,4800,100.3C4960,129,5120,258,5280,279.5C5440,301,5600,215,5760,172C5920,129,6080,129,6240,107.5C6400,86,6560,43,6720,43C6880,43,7040,86,7200,121.8C7360,158,7520,186,7680,215C7840,244,8000,272,8160,301C8320,330,8480,358,8640,308.2C8800,258,8960,129,9120,114.7C9280,100,9440,201,9600,222.2C9760,244,9920,186,10080,200.7C10240,215,10400,301,10560,315.3C10720,330,10880,272,11040,222.2C11200,172,11360,129,11440,107.5L11520,86L11520,430L11440,430C11360,430,11200,430,11040,430C10880,430,10720,430,10560,430C10400,430,10240,430,10080,430C9920,430,9760,430,9600,430C9440,430,9280,430,9120,430C8960,430,8800,430,8640,430C8480,430,8320,430,8160,430C8000,430,7840,430,7680,430C7520,430,7360,430,7200,430C7040,430,6880,430,6720,430C6560,430,6400,430,6240,430C6080,430,5920,430,5760,430C5600,430,5440,430,5280,430C5120,430,4960,430,4800,430C4640,430,4480,430,4320,430C4160,430,4000,430,3840,430C3680,430,3520,430,3360,430C3200,430,3040,430,2880,430C2720,430,2560,430,2400,430C2240,430,2080,430,1920,430C1760,430,1600,430,1440,430C1280,430,1120,430,960,430C800,430,640,430,480,430C320,430,160,430,80,430L0,430Z"
//           ></path>
          
//           <path
//             className="svg-wave-path-2"
//             style={{ transform: "translate(0, 50px)", opacity: 0.9 }}
//             fill="url(#sw-gradient-01)"
//             d="M0,301L80,301C160,301,320,301,480,265.2C640,229,800,158,960,157.7C1120,158,1280,229,1440,229.3C1600,229,1760,158,1920,121.8C2080,86,2240,86,2400,121.8C2560,158,2720,229,2880,250.8C3040,272,3200,244,3360,215C3520,186,3680,158,3840,186.3C4000,215,4160,301,4320,301C4480,301,4640,215,4800,215C4960,215,5120,301,5280,301C5440,301,5600,215,5760,172C5920,129,6080,129,6240,157.7C6400,186,6560,244,6720,258C6880,272,7040,244,7200,229.3C7360,215,7520,215,7680,222.2C7840,229,8000,244,8160,229.3C8320,215,8480,172,8640,143.3C8800,115,8960,100,9120,121.8C9280,143,9440,201,9600,215C9760,229,9920,201,10080,215C10240,229,10400,287,10560,279.5C10720,272,10880,201,11040,150.5C11200,100,11360,72,11440,57.3L11520,43L11520,430L11440,430C11360,430,11200,430,11040,430C10880,430,10720,430,10560,430C10400,430,10240,430,10080,430C9920,430,9760,430,9600,430C9440,430,9280,430,9120,430C8960,430,8800,430,8640,430C8480,430,8320,430,8160,430C8000,430,7840,430,7680,430C7520,430,7360,430,7200,430C7040,430,6880,430,6720,430C6560,430,6400,430,6240,430C6080,430,5920,430,5760,430C5600,430,5440,430,5280,430C5120,430,4960,430,4800,430C4640,430,4480,430,4320,430C4160,430,4000,430,3840,430C3680,430,3520,430,3360,430C3200,430,3040,430,2880,430C2720,430,2560,430,2400,430C2240,430,2080,430,1920,430C1760,430,1600,430,1440,430C1280,430,1120,430,960,430C800,430,640,430,480,430C320,430,160,430,80,430L0,430Z"
//           ></path>
//         </svg>

//         {/* Bottom Content Bar */}
//        {/* Bottom Content Bar */}
// <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 max-w-6xl w-full flex flex-col md:flex-row justify-between items-center text-xs text-gray-300 p-4 md:p-8 z-10 bg-transparent">
  
//   <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 mb-4 md:mb-0 text-center md:text-left">
//     {/* Copyright */}
//     <p className="whitespace-nowrap text-sm">&copy; Synture. All rights reserved.</p>
    
//     {/* Legal Links */}
//     <div className="flex flex-wrap justify-center gap-3 text-sm">
//       <a href="#" className="hover:text-cyan-400 transition">Privacy Policy</a>
//       <a href="#" className="hover:text-cyan-400 transition">Terms & Services</a>
//       <a href="#" className="hover:text-cyan-400 transition">Cookie Policy</a>
//     </div>
//   </div>
  
//   {/* Social Media Group (Right) */}
//   <div className="flex items-center gap-3">
//     <span className="uppercase font-bold tracking-wider text-sm">Follow Us</span>
//     <a href="#" aria-label="Facebook" className="text-white transition duration-300 hover:text-cyan-400">
//       <Facebook size={24} />
//     </a>
//     <a href="#" aria-label="LinkedIn" className="text-white transition duration-300 hover:text-cyan-400">
//       <Linkedin size={24} />
//     </a>
//     <a href="#" aria-label="Instagram" className="text-white transition duration-300 hover:text-cyan-400">
//       <Instagram size={24} />
//     </a>
//   </div>
// </div>

//       </footer>
//     </>
//   );
// };

// export default Footer;
import React from 'react';
import { Facebook, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <>
      <style>
        {`
          @keyframes svg-fluctuate-1 {
            0% { transform: translateX(0); }
            100% { transform: translateX(-2880px); }
          }
          @keyframes svg-fluctuate-2 {
            0% { transform: translateX(0); }
            100% { transform: translateX(-2880px); }
          }
          .svg-wave-path-1 {
            animation: svg-fluctuate-1 40s linear infinite;
          }
          .svg-wave-path-2 {
            animation: svg-fluctuate-2 35s linear infinite;
          }
        `}
      </style>

      {/* Main Footer Container */}
      <footer className="bg-transparent text-white pt-10 px-4 md:px-8 relative overflow-hidden font-inter rounded-t-xl shadow-2xl">
        
        {/* Top Slogan Section */}
        {/* <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-2">
            THINK SMART. THINK BOLD.
          </h1>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-blue-500">
            THINK US.
          </h2>
        </div> */}

        {/* Statistics Section */}
        {/* <div className="flex flex-wrap justify-center max-w-4xl mx-auto mb-16 gap-y-10">
          <div className="w-1/2 md:w-1/4 p-2 text-center">
            <p className="text-5xl font-bold text-blue-500 mb-1">99 %</p>
            <p className="text-sm uppercase opacity-80 tracking-widest">Client Satisfaction</p>
          </div>
          <div className="w-1/2 md:w-1/4 p-2 text-center">
            <p className="text-5xl font-bold text-blue-500 mb-1">20 +</p>
            <p className="text-sm uppercase opacity-80 tracking-widest">Project Completed</p>
          </div>
          <div className="w-1/2 md:w-1/4 p-2 text-center">
            <p className="text-5xl font-bold text-blue-500 mb-1">1 +</p>
            <p className="text-sm uppercase opacity-80 tracking-widest">Year Experience</p>
          </div>
          <div className="w-1/2 md:w-1/4 p-2 text-center">
            <p className="text-5xl font-bold text-blue-500 mb-1">24/7</p>
            <p className="text-sm uppercase opacity-80 tracking-widest">Support Available</p>
          </div>
        </div> */}

{/*    
        <div className="py-8 border-t border-gray-800 overflow-hidden">
          <h1 className="text-[48px] font-semibold uppercase tracking-widest mb-10 text-center text-gray-100">
            Proud Associations
          </h1>
          <div className="relative w-full overflow-hidden">
            <style>{`
              @keyframes scroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .scroll-container {
                display: flex;
                width: max-content;
                animation: scroll 30s linear infinite;
              }
            `}</style>
            <div className="flex scroll-container">
              {[...Array(2)].map((_, setIndex) => (
                <div key={setIndex} className="flex items-center gap-10 px-5">
                  {[
                    "/home-page/Frame 1618877593.jpg",
                    "/home-page/FarmFerry_logo-Photoroom_1_-removebg-preview (1).png",
                    "/home-page/SONAL LOGO.jpg",
                    "/home-page/Untitled Design - 1.jpg",
                    "/home-page/shiv_logo-removebg-preview (1).png",
                    "/home-page/Group 137.png",
                  ].map((src, i) => (
                    <div
                      key={`${setIndex}-${i}`}
                      className="w-40 h-40 flex items-center justify-center bg-white/10 rounded-2xl backdrop-blur-sm border border-gray-700 flex-shrink-0"
                    >
                      <img
                        src={src}
                        alt={`Logo ${i}`}
                        className="object-contain w-28 h-28 hover:opacity-90 transition-opacity duration-300"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div> */}

        {/* Contact and Newsletter Section */}
       <div className="flex flex-col md:flex-row justify-between items-center md:items-end 
max-w-6xl mx-auto pt-12 pb-[280px] relative z-10 px-4">

          <div className="text-center md:text-left leading-relaxed text-[22px] mb-8 md:mb-0">
            <p className="text-gray-300">info@synturesolutions.com</p>
            <p className="text-gray-300">+91 8421539304</p>
          </div>
          <div className="text-center md:text-right w-full md:w-auto">
            <p className="text-base text-[22px] font-bold text-gray-400 uppercase mb-2">
              Fuel Your Inbox
            </p>
            <div className="inline-flex border-b-2 border-white focus-within:border-cyan-400 transition-colors duration-300">
              <input
                type="email"
                placeholder="Email Address"
                aria-label="Email for newsletter"
                className="bg-transparent border-none text-white p-1 w-48 md:w-64 text-base outline-none placeholder:text-gray-500"
              />
              <button
                aria-label="Submit email"
                className="bg-transparent border-none text-white text-2xl cursor-pointer px-3 transition-colors duration-300 hover:text-cyan-400"
              >
                &rarr;
              </button>
            </div>
          </div>
        </div>

        {/* Animated SVG Wave */}
        <svg
          id="wave"
          className="absolute bottom-0 left-0 w-full h-[250px] z-0"
          style={{ transform: "rotate(0deg)", transition: "0.3s" }}
          viewBox="0 0 2880 430"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="0" y2="1">
              <stop stopColor="#a955cdff" offset="0%"></stop>
              <stop stopColor="#233a4e" offset="100%"></stop>
            </linearGradient>
            <linearGradient id="sw-gradient-01" x1="0" x2="0" y1="0" y2="1">
              <stop stopColor="#112D60" offset="0%"></stop>
              <stop stopColor="#8f22bdff" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path
            className="svg-wave-path-1"
            style={{ transform: "translate(0, 0px)", opacity: 1 }}
            fill="url(#sw-gradient-0)"
            d="M0,43L160,64.5C320,86,640,129,960,172C1280,215,1600,258,1920,236.5C2240,215,2560,129,2880,86C3200,43,3520,43,3840,43C4160,43,4480,43,4800,86C5120,129,5440,215,5760,250.8C6080,287,6400,272,6720,279.5C7040,287,7360,315,7680,308.2C8000,301,8320,258,8640,200.7C8960,143,9280,72,9600,100.3C9920,129,10240,258,10560,279.5C10880,301,11200,215,11520,172C11840,129,12160,129,12480,107.5C12800,86,13120,43,13440,43C13760,43,14080,86,14400,121.8C14720,158,15040,186,15360,215C15680,244,16000,272,16320,301C16640,330,16960,358,17280,308.2C17600,258,17920,129,18240,114.7C18560,100,18880,201,19200,222.2C19520,244,19840,186,20160,200.7C20480,215,20800,301,21120,315.3C21440,330,21760,272,22080,222.2C22400,172,22720,129,22880,107.5L23040,86L23040,430L22880,430C22720,430,22400,430,22080,430C21760,430,21440,430,21120,430C20800,430,20480,430,20160,430C19840,430,19520,430,19200,430C18880,430,18560,430,18240,430C17920,430,17600,430,17280,430C16960,430,16640,430,16320,430C16000,430,15680,430,15360,430C15040,430,14720,430,14400,430C14080,430,13760,430,13440,430C13120,430,12800,430,12480,430C12160,430,11840,430,11520,430C11200,430,10880,430,10560,430C10240,430,9920,430,9600,430C9280,430,8960,430,8640,430C8320,430,8000,430,7680,430C7360,430,7040,430,6720,430C6400,430,6080,430,5760,430C5440,430,5120,430,4800,430C4480,430,4160,430,3840,430C3520,430,3200,430,2880,430C2560,430,2240,430,1920,430C1600,430,1280,430,960,430C640,430,320,430,160,430L0,430Z"
          ></path>
          <path
            className="svg-wave-path-2"
            style={{ transform: "translate(0, 50px)", opacity: 0.9 }}
            fill="url(#sw-gradient-01)"
            d="M0,301L160,301C320,301,640,301,960,265.2C1280,229,1600,158,1920,157.7C2240,158,2560,229,2880,229.3C3200,229,3520,158,3840,121.8C4160,86,4480,86,4800,121.8C5120,158,5440,229,5760,250.8C6080,272,6400,244,6720,215C7040,186,7360,158,7680,186.3C8000,215,8320,301,8640,301C8960,301,9280,215,9600,215C9920,215,10240,301,10560,301C10880,301,11200,215,11520,172C11840,129,12160,129,12480,157.7C12800,186,13120,244,13440,258C13760,272,14080,244,14400,229.3C14720,215,15040,215,15360,222.2C15680,229,16000,244,16320,229.3C16640,215,16960,172,17280,143.3C17600,115,17920,100,18240,121.8C18560,143,18880,201,19200,215C19520,229,19840,201,20160,215C20480,229,20800,287,21120,279.5C21440,272,21760,201,22080,150.5C22400,100,22720,72,22880,57.3L23040,43L23040,430L22880,430C22720,430,22400,430,22080,430C21760,430,21440,430,21120,430C20800,430,20480,430,20160,430C19840,430,19520,430,19200,430C18880,430,18560,430,18240,430C17920,430,17600,430,17280,430C16960,430,16640,430,16320,430C16000,430,15680,430,15360,430C15040,430,14720,430,14400,430C14080,430,13760,430,13440,430C13120,430,12800,430,12480,430C12160,430,11840,430,11520,430C11200,430,10880,430,10560,430C10240,430,9920,430,9600,430C9280,430,8960,430,8640,430C8320,430,8000,430,7680,430C7360,430,7040,430,6720,430C6400,430,6080,430,5760,430C5440,430,5120,430,4800,430C4480,430,4160,430,3840,430C3520,430,3200,430,2880,430C2560,430,2240,430,1920,430C1600,430,1280,430,960,430C640,430,320,430,160,430L0,430Z"
          ></path>
        </svg>

        {/* Bottom Content Bar */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 max-w-6xl w-full flex flex-col md:flex-row justify-between items-center text-xs text-gray-300 p-4 md:p-8 z-10 bg-transparent">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 mb-4 md:mb-0 text-center md:text-left">
            <p className="whitespace-nowrap text-base">&copy; Synture. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-3 text-base">
              <a href="#" className="hover:text-cyan-400 transition">Privacy Policy</a>
              <a href="#" className="hover:text-cyan-400 transition">Terms & Services</a>
              <a href="#" className="hover:text-cyan-400 transition">Cookie Policy</a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="uppercase font-bold tracking-wider text-base">Follow Us</span>
            <a href="#" aria-label="Facebook" className="text-white transition duration-300 hover:text-cyan-400">
              <Facebook size={24} />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-white transition duration-300 hover:text-cyan-400">
              <Linkedin size={24} />
            </a>
            <a href="#" aria-label="Instagram" className="text-white transition duration-300 hover:text-cyan-400">
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;