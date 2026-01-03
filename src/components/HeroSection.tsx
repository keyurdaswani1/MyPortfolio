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

      {/* Social Links - Top Right */}
      <div className="fixed top-5 right-4 lg:right-8 flex gap-3 z-[60]">
        <a href="https://www.linkedin.com/in/keyur-daswani/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-card/80 backdrop-blur-sm border border-border hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110" aria-label="LinkedIn">
          <Linkedin className="w-5 h-5" />
        </a>
        <a href="https://github.com/keyurdaswani1/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-card/80 backdrop-blur-sm border border-border hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110" aria-label="GitHub">
          <Github className="w-5 h-5" />
        </a>
      </div>

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
          }} className="text-muted-foreground mb-8 max-w-lg">With <span className="text-tech-blue font-medium text-muted-foreground">5+ years</span> of experience working with <span className="text-tech-blue font-medium">IBM</span> & <span className="text-tech-blue font-medium">Accenture</span>, I have helped clients across <span className="text-tech-blue font-medium">Banking</span> & <span className="text-tech-blue font-medium">CPG</span> sectors. I build scalable <span className="text-tech-blue font-medium">Data Analytics & Integration</span> solutions to solve business problems.</motion.p>

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
              
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default HeroSection;