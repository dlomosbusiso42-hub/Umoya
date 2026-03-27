import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProductsSection from "@/components/sections/ProductsSection";
import ImpactSection from "@/components/sections/ImpactSection";
import TeamSection from "@/components/sections/TeamSection";
import ValuesSection from "@/components/sections/ValuesSection";
import PartnersSection from "@/components/sections/PartnersSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <ImpactSection />
        <TeamSection />
        <ValuesSection />
        <PartnersSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
