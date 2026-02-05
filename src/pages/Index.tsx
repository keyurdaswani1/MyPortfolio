import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import CareerSection from "@/components/CareerSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <ThemeProvider>
      <main className="min-h-screen bg-background">
        <Navbar />
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <CareerSection />
        <ContactSection />
        <Footer />
      </main>
    </ThemeProvider>
  );
};

export default Index;