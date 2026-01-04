import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import Footer from "@/components/Footer";
const Index = () => {
  return <ThemeProvider>
      <main className="min-h-screen bg-background">
        <Navbar />
        <HeroSection />
        <AboutSection className="text-primary-foreground bg-[#010118]" />
        <ProjectsSection className="bg-[#010118]" />
        <SkillsSection className="bg-[#010118]" />
        <ExperienceSection className="bg-[#010118]" />
        <EducationSection className="bg-[#010118]" />
        <Footer className="bg-[#010118]" />
      </main>
    </ThemeProvider>;
};
export default Index;