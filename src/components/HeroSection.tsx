import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowRight, Download, Linkedin, Github } from "lucide-react";
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

const greetings = ["Hello!", "Bonjour!", "Hola!"];

const HeroSection = () => {
  const [greetingIndex, setGreetingIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGreetingIndex((prev) => (prev + 1) % greetings.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

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
      <div className="container mx-auto px-4 lg:px-8 relative z-10 flex-1 flex items-center py-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start w-full">
          {/* Left Side - Bio/About */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8, ease: "easeOut" }} 
            className="order-2 lg:order-1"
          >
            {/* Animated Greeting */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-4"
            >
              <div className="h-14 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={greetingIndex}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -40, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="block text-4xl sm:text-5xl font-bold text-primary"
                  >
                    {greetings[greetingIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Name */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-6"
            >
              <p className="text-2xl sm:text-3xl font-semibold text-foreground">
                I am <span className="text-primary">Keyur.</span>
              </p>
            </motion.div>

            {/* Bio Paragraphs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-4 text-muted-foreground leading-relaxed"
            >
              <p>
                I'm a <span className="text-primary font-medium">Data Analytics specialist</span> with <span className="text-primary font-medium">5+ years</span> of experience at <span className="text-primary font-medium">IBM</span>, <span className="text-primary font-medium">Accenture</span> and <span className="text-primary font-medium">Vizru</span>. I've spent my career solving ambiguous problems for Banking and CPG clients to turn business related challenges into reliable production-scale data solutions.
              </p>
              <p>
                I have designed scalable data infrastructure solutions using <span className="text-primary font-medium">Python, SQL, Azure, Snowflake, Databricks</span> and I deliver polished visual analytics using <span className="text-primary font-medium">Power BI</span> and <span className="text-primary font-medium">Tableau</span>. Whether it's forecasting with <span className="text-primary font-medium">AI/ML</span> or integrating complex landscapes, I focus on delivering insights that are reliable, actionable and easy to use.
              </p>
            </motion.div>

            {/* Experience & Certifications - Left Side */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-8 space-y-6"
            >
              {/* Experience Section */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="h-px w-8 bg-primary/50" />
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Experience</span>
                </div>
                
                {/* Company Logos */}
                <div className="flex items-center gap-4">
                  <div className="group w-14 h-14 sm:w-16 sm:h-16 rounded-lg overflow-hidden hover:scale-110 transition-transform duration-300 bg-white p-1">
                    <img src={vizruLogo} alt="Vizru" className="w-full h-full object-contain" />
                  </div>
                  <div className="group w-14 h-14 sm:w-16 sm:h-16 rounded-lg overflow-hidden hover:scale-110 transition-transform duration-300 bg-white p-1">
                    <img src={ibmLogo} alt="IBM" className="w-full h-full object-contain" />
                  </div>
                  <div className="group w-14 h-14 sm:w-16 sm:h-16 rounded-lg overflow-hidden hover:scale-110 transition-transform duration-300 bg-white p-1">
                    <img src={accentureLogo} alt="Accenture" className="w-full h-full object-contain" />
                  </div>
                </div>
              </div>

              {/* Certifications Section */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="h-px w-8 bg-primary/50" />
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Certifications</span>
                </div>
                
                {/* Certification Badges */}
                <div className="flex flex-wrap gap-3">
                  {certifications.map((cert, index) => (
                    <motion.a
                      key={cert.code}
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      className="group w-14 h-14 sm:w-16 sm:h-16 rounded-lg overflow-hidden hover:scale-110 transition-transform duration-300"
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
            </motion.div>
          </motion.div>

          {/* Right Side - Profile Image, Experience & Certifications */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.8, delay: 0.3 }} 
            className="order-1 lg:order-2 flex flex-col items-center"
          >
            {/* Profile Image */}
            <div className="relative">
              {/* Animated rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 blur-3xl animate-pulse-slow" />
              <div className="absolute -inset-4 rounded-full border-2 border-primary/20 animate-float" />
              <div className="absolute -inset-8 rounded-full border border-primary/10 animate-float" style={{ animationDelay: "1s" }} />
              
              {/* Image container */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-glow">
                <img src={profileImage} alt="Keyur Daswani - Data Analyst" className="w-full h-full object-cover" />
              </div>
            </div>
            
            {/* Action Buttons - Right Side under profile */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-8 flex flex-wrap justify-center gap-3"
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
    </section>
  );
};

export default HeroSection;
