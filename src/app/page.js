import HeroSection from "../components/HeroSection";
import ClothingStyles from "../components/ClothingStyles";
import StepsToOrder from "../components/StepsToOrder";
import ComingSoon from "../components/ComingSoon";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <div className="bg-gray-100">
      <HeroSection />
      <ClothingStyles />
      <StepsToOrder />
      <ComingSoon/>
      <Footer/>
    </div>
  );
}
