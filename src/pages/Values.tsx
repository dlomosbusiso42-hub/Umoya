import Navbar from "@/components/Navbar";
import ValuesSection from "@/components/sections/ValuesSection";
import Footer from "@/components/sections/Footer";

const ValuesPage = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <main className="pt-24">
      <ValuesSection />
    </main>
    <Footer />
  </div>
);

export default ValuesPage;
