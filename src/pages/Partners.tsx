import Navbar from "@/components/Navbar";
import PartnersSection from "@/components/sections/PartnersSection";
import Footer from "@/components/sections/Footer";

const PartnersPage = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <main className="pt-24">
      <PartnersSection />
    </main>
    <Footer />
  </div>
);

export default PartnersPage;
