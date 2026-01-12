import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink } from "lucide-react";

// Import logo images
import pythonLogo from "@/assets/python-logo.jfif";
import sqlLogo from "@/assets/sql-logo.jpeg";
import powerbiLogo from "@/assets/powerbi-logo.png";
import tableauLogo from "@/assets/tableau-logo.png";
import excelLogo from "@/assets/excel-logo.png";
import snowflakeLogo from "@/assets/snowflake-logo.png";
import azureLogo from "@/assets/azure-logo.jpeg";
import mlaiLogo from "@/assets/ml-ai-logo.jpeg";
import sapS4HanaLogo from "@/assets/sap-s4hana-logo.jpeg";
import sapCpiLogo from "@/assets/sap-cpi-logo.jpg";
import databricksLogo from "@/assets/databricks-logo.jpeg";

const MicrosoftIcon = () => <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M0 0h11.5v11.5H0V0zm12.5 0H24v11.5H12.5V0zM0 12.5h11.5V24H0V12.5zm12.5 0H24V24H12.5V12.5z" />
  </svg>;

type ToolType = {
  name: string;
  image: string;
};

const tools: ToolType[] = [{
  name: "Python",
  image: pythonLogo
}, {
  name: "SQL",
  image: sqlLogo
}, {
  name: "ML / AI",
  image: mlaiLogo
}, {
  name: "Power BI",
  image: powerbiLogo
}, {
  name: "Tableau",
  image: tableauLogo
}, {
  name: "Excel",
  image: excelLogo
}, {
  name: "Snowflake",
  image: snowflakeLogo
}, {
  name: "Azure",
  image: azureLogo
}, {
  name: "SAP S/4HANA",
  image: sapS4HanaLogo
}, {
  name: "SAP CPI",
  image: sapCpiLogo
}, {
  name: "Databricks",
  image: databricksLogo
}];

const certifications = [{
  name: "Power BI Developer Associate",
  code: "PL-300",
  color: "from-amber-500 to-yellow-500",
  url: "https://learn.microsoft.com/api/credentials/share/en-us/KeyurDaswani-9486/"
}, {
  name: "Azure Fundamentals",
  code: "AZ-900",
  color: "from-blue-500 to-cyan-400",
  url: "https://learn.microsoft.com/api/credentials/share/en-us/KeyurDaswani-9486/C3065EDAAE249D48?sharingId=D7A82B50A61A675A"
}, {
  name: "Azure Data Professional",
  code: "DP-900",
  color: "from-purple-500 to-indigo-500",
  url: "https://learn.microsoft.com/api/credentials/share/en-us/KeyurDaswani-9486/198FC67FBA99E598?sharingId=D7A82B50A61A675A"
}, {
  name: "Azure AI Fundamentals",
  code: "AI-900",
  color: "from-pink-500 to-rose-500",
  url: "https://learn.microsoft.com/api/credentials/share/en-us/KeyurDaswani-9486/5E490F2B3BCC5D60?sharingId=D7A82B50A61A675A"
}];

const SkillsSection = ({ className }: { className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });

  return <section id="skills" className={`py-12 lg:py-16 bg-background ${className || ''}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div ref={ref} initial={{
        opacity: 0,
        y: 50
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.6
      }}>
          <div className="text-center mb-16">
            <span className="text-gradient text-sm font-semibold">SKILLS & CERTIFICATIONS</span>
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Tools & Technologies */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
                <h3 className="text-lg font-semibold text-foreground whitespace-nowrap">Skills</h3>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                {tools.map((tool, index) => (
                  <motion.div 
                    key={tool.name} 
                    initial={{ opacity: 0, scale: 0.9 }} 
                    animate={isInView ? { opacity: 1, scale: 1 } : {}} 
                    transition={{ duration: 0.4, delay: 0.05 * index }} 
                    className="group relative p-4 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 hover:border-primary/30 hover:bg-card transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 dark:from-slate-700 dark:to-slate-800 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/20 overflow-hidden ring-1 ring-white/10">
                        <img 
                          src={tool.image} 
                          alt={tool.name} 
                          className="w-9 h-9 object-contain brightness-110 contrast-105 drop-shadow-sm"
                        />
                      </div>
                      <span className="font-medium text-foreground text-sm">{tool.name}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
                <h3 className="text-lg font-semibold text-foreground whitespace-nowrap">Certifications</h3>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <motion.div 
                    key={cert.code} 
                    initial={{ opacity: 0, scale: 0.9 }} 
                    animate={isInView ? { opacity: 1, scale: 1 } : {}} 
                    transition={{ duration: 0.4, delay: 0.1 * index }} 
                    className="group"
                  >
                    {cert.url ? (
                      <a href={cert.url} target="_blank" rel="noopener noreferrer" className="relative flex items-center gap-4 p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:bg-card transition-all duration-300 h-full">
                        <div className={`w-12 h-12 shrink-0 rounded-xl bg-gradient-to-br ${cert.color} p-2.5 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <MicrosoftIcon />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-foreground text-sm leading-tight mb-1">
                            {cert.name}
                          </h4>
                          <span className="text-xs font-mono text-primary font-medium flex items-center gap-1">
                            {cert.code}
                            <ExternalLink className="w-3 h-3" />
                          </span>
                        </div>
                      </a>
                    ) : (
                      <div className="relative flex items-center gap-4 p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:bg-card transition-all duration-300 h-full">
                        <div className={`w-12 h-12 shrink-0 rounded-xl bg-gradient-to-br ${cert.color} p-2.5 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <MicrosoftIcon />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-foreground text-sm leading-tight mb-1">
                            {cert.name}
                          </h4>
                          <span className="text-xs font-mono text-primary font-medium">
                            {cert.code}
                          </span>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
};

export default SkillsSection;
