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
        <AboutSection className="text-primary-foreground bg-[sidebar-accent-foreground] bg-slate-950" />
        <ProjectsSection className="bg-slate-950" />
        <SkillsSection className="bg-slate-950" />
        <ExperienceSection className="bg-slate-950" />
        <EducationSection className="bg-slate-950" />
        <Footer className="bg-slate-950" />
      </main>
    </ThemeProvider>;
};
export default Index;