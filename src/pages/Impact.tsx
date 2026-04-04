import Navbar from "@/components/Navbar";
import ImpactSection from "@/components/sections/ImpactSection";
import Footer from "@/components/sections/Footer";

const ImpactPage = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <main className="pt-24">
      <ImpactSection />
    </main>
    <Footer />
  </div>
);

export default ImpactPage;
