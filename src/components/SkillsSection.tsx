import { useRef } from "react";
import { motion, useInView } from "framer-motion";

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

const SkillsSection = ({ className }: { className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });

  return (
    <section id="skills" className={`py-12 lg:py-16 bg-background ${className || ''}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div 
          ref={ref} 
          initial={{ opacity: 0, y: 50 }} 
          animate={isInView ? { opacity: 1, y: 0 } : {}} 
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-10">
            <span className="text-gradient text-sm font-semibold">SKILLS & TECHNOLOGIES</span>
          </div>

          {/* Static 6x2 Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {tools.map((tool, index) => (
              <motion.div 
                key={tool.name}
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={isInView ? { opacity: 1, scale: 1 } : {}} 
                transition={{ duration: 0.4, delay: 0.05 * index }} 
                className="group flex flex-col items-center gap-3 p-5 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 hover:border-primary/30 hover:bg-card transition-all duration-300"
              >
                <img 
                  src={tool.image} 
                  alt={tool.name} 
                  className="w-14 h-14 object-contain rounded-lg transition-transform duration-300 group-hover:scale-110"
                />
                <span className="font-medium text-foreground text-sm text-center whitespace-nowrap">{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
