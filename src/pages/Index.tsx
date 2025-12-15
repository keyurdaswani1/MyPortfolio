import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <ThemeProvider>
      <main className="min-h-screen bg-background">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ServicesSection />
        <ExperienceSection />
        <EducationSection />
        <CertificationsSection />
        <ContactSection />
        <Footer />
      </main>
    </ThemeProvider>
  );
};

export default Index;
