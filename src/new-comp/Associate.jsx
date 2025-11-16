import React from 'react'

export default function Associate() {
    return (
        <div>   {/* Top Slogan Section */}
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-2">
                    THINK SMART. THINK BOLD.
                </h1>
                <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-blue-500">
                    THINK US.
                </h2>
            </div>

            {/* Statistics Section */}
            <div className="flex flex-wrap justify-center max-w-4xl mx-auto mb-16 gap-y-10">
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
            </div>

            {/* Proud Associations Section */}
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
            </div></div>
    )
}
