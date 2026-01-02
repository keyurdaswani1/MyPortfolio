import { motion } from "framer-motion";
import { ArrowRight, Download, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/keyur-profile.png";
import heroPattern from "@/assets/hero-pattern.png";
const socials = [{
  icon: Linkedin,
  label: "LinkedIn",
  href: "https://www.linkedin.com/in/keyur-daswani/"
}, {
  icon: Github,
  label: "GitHub",
  href: "https://github.com/keyurdaswani1/"
}];
const HeroSection = () => {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40" style={{
      backgroundImage: `url(${heroPattern})`,
      backgroundSize: "cover",
      backgroundPosition: "center bottom"
    }} />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      <div className="absolute inset-0 data-grid-bg" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
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
            

            <motion.h1 initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.3
          }} className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Modernizing Data Problems with{" "}
              <span className="text-gradient-hero">Data Solutions</span>
            </motion.h1>

            <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.4
          }} className="text-xl text-muted-foreground mb-4">
              Hello, I'm{" "}
              <span className="font-semibold text-sidebar-primary">Keyur Daswani</span>
            </motion.p>

            <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.5
          }} className="text-muted-foreground mb-8 max-w-lg">I build scalable Data Analytics & Integration solutions using Machine Learning, Python, SQL, Azure Services and Power BI. With 5+ years of experience working with IBM & Accenture, 
I have hel</motion.p>

            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.6
          }} className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" onClick={() => handleNavClick("#projects")}>
                View Projects
                <ArrowRight className="ml-1" />
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <a href="/resume.pdf" download>
                  <Download className="mr-1" />
                  Download Resume
                </a>
              </Button>
            </motion.div>

            {/* Stats Preview */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.8
          }} className="flex gap-8 mt-12 pt-8 border-t border-border">
              <div>
                <div className="text-3xl font-bold text-gradient">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gradient">30+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div initial={{
          opacity: 0,
          scale: 0.8
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.8,
          delay: 0.3
        }} className="order-1 lg:order-2 flex justify-center">
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

              {/* Connect Links */}
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.6
            }} className="flex gap-4 mt-6 justify-center">
                <a href="https://www.linkedin.com/in/keyur-daswani/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-secondary/50 hover:bg-primary/20 border border-border flex items-center justify-center transition-all hover:border-primary/50 cursor-pointer" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://github.com/keyurdaswani1/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-secondary/50 hover:bg-primary/20 border border-border flex items-center justify-center transition-all hover:border-primary/50 cursor-pointer" aria-label="GitHub">
                  <Github className="w-5 h-5" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default HeroSection;