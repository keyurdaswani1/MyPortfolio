import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import CareerSection from "@/components/CareerSection";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <ThemeProvider>
      <main className="min-h-screen bg-background">
        <Navbar />
        <HeroSection />
        <AboutSection className="text-primary-foreground bg-[sidebar-accent-foreground] bg-slate-950" />
        <ProjectsSection className="bg-slate-950" />
        <SkillsSection className="bg-slate-950" />
        <CareerSection className="bg-slate-950" />
        <Footer className="bg-slate-950" />
      </main>
    </ThemeProvider>
  );
};

export default Index;