import HeroSection from '@/new-comp/HeroSection';
import Carousal from '../new-comp/Carousal';
import ServicesSection from '../new-comp/FeaturesSection';
import Footer from '../new-comp/Footer';
import Associate from '@/new-comp/Associate';
export default function Home() {
  return (
    <>
      <HeroSection />
      <Carousal />
      <ServicesSection />
      <Associate/>
      {/* <Footer /> */}
    </>

  );
}

