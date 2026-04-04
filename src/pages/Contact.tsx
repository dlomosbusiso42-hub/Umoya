import Navbar from "@/components/Navbar";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";

const ContactPage = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <main className="pt-24">
      <ContactSection />
    </main>
    <Footer />
  </div>
);

export default ContactPage;
