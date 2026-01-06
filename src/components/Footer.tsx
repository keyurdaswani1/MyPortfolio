import { Heart, Linkedin, Github } from "lucide-react";
const Footer = ({
  className
}: {
  className?: string;
}) => {
  const currentYear = new Date().getFullYear();
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <footer className={`bg-card border-t border-border py-12 ${className || ''}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <a href="#home" className="text-2xl font-bold text-gradient">
              Keyur Daswani
            </a>
            
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["About", "Projects", "Skills", "Career Journey", "Contact"].map(link => <li key={link}>
                  <button onClick={() => handleNavClick(`#${link.toLowerCase()}`)} className="text-muted-foreground hover:text-primary transition-colors">
                    {link}
                  </button>
                </li>)}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Connect</h3>
            <div className="flex gap-3">
              <a href="https://www.linkedin.com/in/keyur-daswani/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/keyurdaswani1/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Keyur Daswani. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;
