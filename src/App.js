import About from "./components/About-section";
import Footer from "./components/Footer";
import HeroSection from "./components/Hero-section";
import Navbar from "./components/Navbar";
import ServicesSection from "./components/Services-section";
import ToursSection from "./components/Tours-section";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <ServicesSection />
      <ToursSection />
      <Footer />
    </>
  );
}

export default App;
