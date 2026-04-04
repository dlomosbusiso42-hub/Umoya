import Navbar from "@/components/Navbar";
import TeamSection from "@/components/sections/TeamSection";
import Footer from "@/components/sections/Footer";

const TeamPage = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <main className="pt-24">
      <TeamSection />
    </main>
    <Footer />
  </div>
);

export default TeamPage;
