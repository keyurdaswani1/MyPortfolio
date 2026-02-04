import { motion } from "framer-motion";
import { ArrowRight, Download, Linkedin, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/keyur-profile.png";
import heroPattern from "@/assets/hero-pattern.png";

// Import certification badge images
import microsoftPL300Badge from "@/assets/microsoft-pl300-badge-new.png";
import azureAIBadge from "@/assets/azure-ai-badge.png";
import azureAZBadge from "@/assets/azure-az-badge.png";
import azureDPBadge from "@/assets/azure-dp-badge.png";

// Import company logos
import ibmLogo from "@/assets/ibm-logo.jpg";
import accentureLogo from "@/assets/accenture-logo.png";
import vizruLogo from "@/assets/vizru-logo.png";

const certifications = [{
  name: "Power BI Data Analyst",
  code: "PL-300",
  badge: microsoftPL300Badge,
  url: "https://learn.microsoft.com/api/credentials/share/en-us/KeyurDaswani-9486/"
}, {
  name: "Azure AI Fundamentals",
  code: "AI-900",
  badge: azureAIBadge,
  url: "https://learn.microsoft.com/api/credentials/share/en-us/KeyurDaswani-9486/5E490F2B3BCC5D60?sharingId=D7A82B50A61A675A"
}, {
  name: "Azure Data Fundamentals",
  code: "DP-900",
  badge: azureDPBadge,
  url: "https://learn.microsoft.com/api/credentials/share/en-us/KeyurDaswani-9486/198FC67FBA99E598?sharingId=D7A82B50A61A675A"
}, {
  name: "Azure Fundamentals",
  code: "AZ-900",
  badge: azureAZBadge,
  url: "https://learn.microsoft.com/api/credentials/share/en-us/KeyurDaswani-9486/C3065EDAAE249D48?sharingId=D7A82B50A61A675A"
}];

const HeroSection = () => {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col pt-20 overflow-hidden bg-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40 -z-10" style={{
        backgroundImage: `url(${heroPattern})`,
        backgroundSize: "cover",
        backgroundPosition: "center bottom"
      }} />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background -z-10" />
      <div className="absolute inset-0 data-grid-bg -z-10" />

      {/* Social Links - Top Right */}
      <div className="fixed top-5 right-4 lg:right-8 flex gap-3 z-[60]">
        <a href="https://www.linkedin.com/in/keyur-daswani/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-card/80 backdrop-blur-sm border border-border hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110" aria-label="LinkedIn">
          <Linkedin className="w-5 h-5" />
        </a>
        <a href="https://github.com/keyurdaswani1/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-card/80 backdrop-blur-sm border border-border hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110" aria-label="GitHub">
          <Github className="w-5 h-5" />
        </a>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 flex-1 flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Content */}
          <motion.div initial={{
            opacity: 0,
            x: -50
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8,
            ease: "easeOut"
          }} className="order-2 lg:order-1">
            <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.4
            }} className="mb-8">
              <p className="text-muted-foreground text-4xl">Hello, I'm</p>
              <p className="font-bold text-sidebar-primary text-5xl whitespace-nowrap sm:text-5xl">Keyur Daswani</p>
            </motion.div>

            <motion.p initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.5
            }} className="text-muted-foreground mb-8 max-w-lg">I bring <span className="text-tech-blue font-medium text-muted-foreground">5+ years</span> of experience working with <span className="text-tech-blue font-medium">Vizru</span>, <span className="text-tech-blue font-medium">IBM</span> & <span className="text-tech-blue font-medium">Accenture</span> while helping clients across Banking & CPG sectors. I build scalable <span className="text-tech-blue font-medium">Data Analytics & Integration</span> solutions to solve business problems.</motion.p>
          </motion.div>

          {/* Profile Image & Action Buttons */}
          <motion.div initial={{
            opacity: 0,
            scale: 0.8
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.8,
            delay: 0.3
          }} className="order-1 lg:order-2 flex flex-col items-center">
            <div className="relative">
              {/* Animated rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 blur-3xl animate-pulse-slow" />
              <div className="absolute -inset-4 rounded-full border-2 border-primary/20 animate-float" />
              <div className="absolute -inset-8 rounded-full border border-primary/10 animate-float" style={{
                animationDelay: "1s"
              }} />
              
              {/* Image container */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/30 shadow-glow">
                <img src={profileImage} alt="Keyur Daswani - Data Analyst" className="w-full h-full object-cover" />
              </div>
            </div>
            
            {/* Action Buttons - Under Profile */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-3 mt-6 justify-center"
            >
              <Button variant="hero" size="sm" onClick={() => handleNavClick("#projects")}>
                View Projects
                <ArrowRight className="ml-1 w-3 h-3" />
              </Button>
              <Button variant="hero-outline" size="sm" asChild>
                <a href="/resume.pdf" download>
                  <Download className="mr-1 w-3 h-3" />
                  Download Resume
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Hero Footer - Experience & Certifications */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="container mx-auto px-4 lg:px-8 pb-8 relative z-10"
      >
        <div className="space-y-6">
          {/* Left Side - Experience & Certifications stacked */}
          
          {/* Experience Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-px w-8 bg-primary/50" />
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Experience</span>
            </div>
            
            {/* Company Logos - Enlarged with Vizru */}
            <div className="flex items-center gap-4">
              <div className="group w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden hover:scale-110 transition-transform duration-300">
                <img src={vizruLogo} alt="Vizru" className="w-full h-full object-cover" />
              </div>
              <div className="group w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden hover:scale-110 transition-transform duration-300">
                <img src={ibmLogo} alt="IBM" className="w-full h-full object-cover" />
              </div>
              <div className="group w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden hover:scale-110 transition-transform duration-300">
                <img src={accentureLogo} alt="Accenture" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Certifications Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-px w-8 bg-primary/50" />
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Certifications</span>
            </div>
            
            {/* Certification Badges - Enlarged */}
            <div className="flex flex-wrap gap-4">
              {certifications.map((cert, index) => (
                <motion.a
                  key={cert.code}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="group w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden hover:scale-110 transition-transform duration-300"
                  title={`${cert.name} (${cert.code})`}
                >
                  <img 
                    src={cert.badge} 
                    alt={cert.name}
                    className="w-full h-full object-cover"
                  />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
