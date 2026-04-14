import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/sections/ProjectsSection";
import Footer from "@/components/sections/Footer";

const ProjectsPage = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <main className="pt-24">
      <ProjectsSection />
    </main>
    <Footer />
  </div>
);

export default ProjectsPage;