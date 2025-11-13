// import About from "@/components/AboutUs";
// import Contact from "@/components/ContactUs";
// import Footer from "@/components/Footer";
// import JobBoardPage from "@/components/HeroSection";

// import Header from "@/components/Navbar";
// import Portfolio from "@/components/Portfolio";
// import Services from "@/components/ServicesSection";
// import Testimonials from "@/components/Testimonial";


// export default function Home() {
//   return (
//     <main className="min-h-screen">
//       <Header />
//       {/* <JobBoardPage /> */}
//       <Services />
//       <About />
//       <Portfolio />
//       <Testimonials />
//       <Contact />
//       <Footer />
//     </main>
//   );
// }
 
import HeroSection from '@/new-comp/HeroSection';
import Navbar from '@/new-comp/Navbar';
import Carousal from '../new-comp/Carousal';
import FeaturesSection from '../new-comp/FeaturesSection';
import Footer from '../new-comp/Footer';
import Navbottom from '../new-comp/HeroSection';
 
 
 
export default function Home() {
  return (
    <main className="min-h-screen text-white">
   
      <Navbar/>
      <HeroSection/>
      <Carousal/>
      <FeaturesSection/>
      <Footer/>
    </main>
 
  );
}
 
 