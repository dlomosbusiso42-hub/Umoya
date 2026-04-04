import Navbar from "@/components/Navbar";
import AboutSection from "@/components/sections/AboutSection";
import Footer from "@/components/sections/Footer";

const AboutPage = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <main className="pt-24">
      <AboutSection />
    </main>
    <Footer />
  </div>
);

export default AboutPage;
