import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import HomeOverviewSection from "@/components/sections/HomeOverviewSection";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <HomeOverviewSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
