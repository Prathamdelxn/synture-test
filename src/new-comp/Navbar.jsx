'use client'
 
import React from 'react'; // Added explicit React import for best practice
import { useRouter } from 'next/navigation';
 
const Navbar = () =>{
  const router = useRouter();
  // Since 'next/navigation'
  //  (useRouter) is unavailable, we use standard window methods.
  const navigateToHome = () => {
    window.location.href = '/';
  }
 
  const menuItems = [
    { name: 'HOME', id: 'home' },
    { name: 'INSIDE SYNTURE', id: 'inside-synture' },
    { name: 'CONTACT', id: '/contact' },
    // { name: 'ENQUIRY FORM', id: 'enquiry-form' }
  ]
 
  const scrollToSection = (id) => {
    // Ensure the function is only executed on the client side (where document is available)
    if (typeof document !== 'undefined') {
      const element = document.getElementById(id)
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80,
          behavior: 'smooth'
        })
      }
    }
  }
 
  return (
    <header className="fixed top-0 h-20 w-full z-50 bg-black border-b border-gray-800">
      <nav className="max-w-7xl mx-auto flex items-center justify-between p-5 relative h-full">
        {/* Left: Logo */}
        <div
          className="flex items-center gap-0 cursor-pointer"
          onClick={navigateToHome} // Use standard navigation function
        >
          {/* Replaced Next.js <Image> with standard <img> tag */}
          <img src="/home-page/logo.png" alt="Logo" className="w-[110px] h-[110px] object-contain" />
          <span className="text-white text-xl font-semibold tracking-wide">
            SYNTURE
          </span>
        </div>

        {/* Right: Menu (Now correctly aligned to the right side on desktop) */}
        <ul className="hidden md:flex space-x-10">
          {menuItems.map((item) => (
            <li
              key={item.id}
              onClick={() => router.push(item.id)}
              className="text-white font-medium text-sm tracking-wider cursor-pointer hover:text-blue-400 transition"
            >
              {item.name}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
 
export default Navbar;