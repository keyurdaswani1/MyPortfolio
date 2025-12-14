import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Brain,
  LineChart,
  PieChart,
  Target,
  GitBranch,
  BarChart3,
} from "lucide-react";

// Custom SVG icons for brand logos
const PythonIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/>
  </svg>
);

const SQLIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M12 3C7.58 3 4 4.79 4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7c0-2.21-3.58-4-8-4zm0 2c3.87 0 6 1.5 6 2s-2.13 2-6 2-6-1.5-6-2 2.13-2 6-2zm6 12c0 .5-2.13 2-6 2s-6-1.5-6-2v-2.23c1.61.78 3.72 1.23 6 1.23s4.39-.45 6-1.23V17zm0-4c0 .5-2.13 2-6 2s-6-1.5-6-2v-2.23c1.61.78 3.72 1.23 6 1.23s4.39-.45 6-1.23V13zm0-4c0 .5-2.13 2-6 2s-6-1.5-6-2V6.77c1.61.78 3.72 1.23 6 1.23s4.39-.45 6-1.23V9z"/>
  </svg>
);

const PowerBIIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M10.5 3A1.5 1.5 0 0 0 9 4.5v15A1.5 1.5 0 0 0 10.5 21h3a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 13.5 3h-3zM3 9.5A1.5 1.5 0 0 1 4.5 8h3A1.5 1.5 0 0 1 9 9.5v10A1.5 1.5 0 0 1 7.5 21h-3A1.5 1.5 0 0 1 3 19.5v-10zM16.5 6A1.5 1.5 0 0 0 15 7.5v12a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 19.5 6h-3z"/>
  </svg>
);

const ExcelIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 2l5 5h-5V4zM8.5 19l2-3-2-3h1.5l1.25 2 1.25-2H14l-2 3 2 3h-1.5l-1.25-2-1.25 2H8.5z"/>
  </svg>
);

const SnowflakeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M12.5 2v4.5L15 5l1 1.5-3.5 2v3l2.5-1.5 1-3L18 4.5l.5 1.5-1.5 1 1.5 1 .5 1.5L17 9l-1 3 3.5 2L21 12.5l1 1.5-2.5 1.5V20h-1.5l-1-3-3.5 2v3h-1v-4.5L10 19.5l-1-1.5 3.5-2v-3L10 14.5l-1 3L7 18l-.5-1.5 1.5-1-1.5-1L6 14l2-1.5 1-3-3.5-2L4 9l-1-1.5 2.5-1.5V2h1.5l1 3 3.5-2V0h1v2z"/>
  </svg>
);

const AzureIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M13.05 4.24L6.56 18.05L2 18l3.56-6.47L13.05 4.24zM13.75 5.33l4.26 11.18-7.39 1.67 8.35-.02L22 19.67H7.6l6.15-14.34z"/>
  </svg>
);

const JavaIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149m-.575-2.627s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218m4.84-4.458c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0 0-8.216 2.051-4.292 6.573m6.013 8.753s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892m7.824 4.378c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0 0 .07-.062.09-.118M14.401 2s2.494 2.494-2.365 6.33c-3.896 3.077-.889 4.832 0 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.189-7.627"/>
  </svg>
);

const SAPIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M0 6.986v10.028h24V6.986zm4.156 2.476l1.28 3.626h.038l1.26-3.626h1.67l-2.194 5.535H4.81L2.617 9.462zm6.672 0v1.234h1.69v-.002c.564 0 .852.282.852.69 0 .406-.288.704-.852.704h-1.69v1.654h1.69c1.278 0 2.14-.704 2.14-1.855 0-.518-.178-.948-.494-1.266-.322-.326-.784-.541-1.406-.576v-.002h-.004c-.078-.006-.158-.008-.236-.008h-1.69zm5.64 0l-2.195 5.535h1.398l.38-1.022h2.234l.378 1.022h1.398l-2.193-5.535zm.7 1.532l.694 1.866h-1.388l.656-1.866z"/>
  </svg>
);

const CPIIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
  </svg>
);

const HTMLIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
  </svg>
);

const tools = [
  { name: "Python", Icon: PythonIcon, color: "from-yellow-400 to-blue-500" },
  { name: "SQL", Icon: SQLIcon, color: "from-cyan-500 to-blue-600" },
  { name: "Power BI", Icon: PowerBIIcon, color: "from-amber-500 to-yellow-500" },
  { name: "Excel", Icon: ExcelIcon, color: "from-emerald-500 to-green-600" },
  { name: "Snowflake", Icon: SnowflakeIcon, color: "from-sky-400 to-blue-500" },
  { name: "Azure", Icon: AzureIcon, color: "from-blue-500 to-cyan-400" },
  { name: "Java", Icon: JavaIcon, color: "from-red-500 to-orange-500" },
  { name: "SAP S/4HANA", Icon: SAPIcon, color: "from-blue-600 to-indigo-600" },
  { name: "SAP CPI", Icon: CPIIcon, color: "from-teal-500 to-cyan-500" },
  { name: "HTML", Icon: HTMLIcon, color: "from-orange-500 to-red-500" },
];

const techniques = [
  { name: "ETL Optimization", icon: GitBranch, description: "Streamlining data pipelines for efficiency" },
  { name: "KPI Reporting", icon: Target, description: "Building actionable business dashboards" },
  { name: "Machine Learning", icon: Brain, description: "Clustering, Sentiment Analysis, Predictive Models" },
  { name: "Market Basket Analysis", icon: PieChart, description: "Uncovering product associations" },
  { name: "Data Visualization", icon: LineChart, description: "Creating impactful visual stories" },
  { name: "Statistical Analysis", icon: BarChart3, description: "Deriving insights from data patterns" },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Expertise
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-3 mb-4">
              Tech Stack & <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Proficient in modern data tools and techniques to deliver end-to-end analytics solutions.
            </p>
          </div>

          {/* Tools Grid */}
          <div className="mb-16">
            <h3 className="text-xl font-semibold mb-8 text-center">Tools & Technologies</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {tools.map((tool, index) => {
                const IconComponent = tool.Icon;
                return (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="group relative p-6 bg-card rounded-xl border border-border hover-lift cursor-default"
                  >
                    <div className="flex flex-col items-center text-center gap-3">
                      <div
                        className={`w-12 h-12 rounded-lg bg-gradient-to-br ${tool.color} flex items-center justify-center transition-transform group-hover:scale-110 text-white`}
                      >
                        <IconComponent />
                      </div>
                      <span className="font-medium text-foreground">{tool.name}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Techniques Grid */}
          <div>
            <h3 className="text-xl font-semibold mb-8 text-center">Techniques & Methods</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {techniques.map((technique, index) => {
                const Icon = technique.icon;
                return (
                  <motion.div
                    key={technique.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + 0.1 * index }}
                    className="group p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover-lift"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{technique.name}</h4>
                        <p className="text-sm text-muted-foreground">{technique.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
