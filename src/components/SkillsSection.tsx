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

// Import certification badge images
import microsoftPL300Badge from "@/assets/microsoft-pl300-badge.jpg";
import azureAIBadge from "@/assets/azure-ai-badge.png";
import azureAZBadge from "@/assets/azure-az-badge.png";
import azureDPBadge from "@/assets/azure-dp-badge.png";

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
  badge: microsoftPL300Badge,
  url: "https://learn.microsoft.com/api/credentials/share/en-us/KeyurDaswani-9486/"
}, {
  name: "Azure Fundamentals",
  code: "AZ-900",
  badge: azureAZBadge,
  url: "https://learn.microsoft.com/api/credentials/share/en-us/KeyurDaswani-9486/C3065EDAAE249D48?sharingId=D7A82B50A61A675A"
}, {
  name: "Azure Data Fundamentals",
  code: "DP-900",
  badge: azureDPBadge,
  url: "https://learn.microsoft.com/api/credentials/share/en-us/KeyurDaswani-9486/198FC67FBA99E598?sharingId=D7A82B50A61A675A"
}, {
  name: "Azure AI Fundamentals",
  code: "AI-900",
  badge: azureAIBadge,
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
                    <div className="flex items-center gap-4">
                      <img 
                        src={tool.image} 
                        alt={tool.name} 
                        className="w-14 h-14 object-contain rounded-lg transition-transform duration-300 group-hover:scale-110"
                      />
                      <span className="font-medium text-foreground">{tool.name}</span>
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
                        <img 
                          src={cert.badge} 
                          alt={cert.name}
                          className="w-16 h-16 object-contain shrink-0 group-hover:scale-110 transition-transform duration-300"
                        />
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
                        <img 
                          src={cert.badge} 
                          alt={cert.name}
                          className="w-16 h-16 object-contain shrink-0 group-hover:scale-110 transition-transform duration-300"
                        />
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
