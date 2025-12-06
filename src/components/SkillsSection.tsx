import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Database,
  BarChart3,
  Code2,
  FileSpreadsheet,
  Layers,
  GitBranch,
  Brain,
  LineChart,
  PieChart,
  Target,
} from "lucide-react";

const tools = [
  { name: "SQL", icon: Database, color: "from-blue-500 to-blue-600" },
  { name: "Power BI", icon: BarChart3, color: "from-yellow-500 to-orange-500" },
  { name: "Python", icon: Code2, color: "from-green-500 to-teal-500" },
  { name: "Excel", icon: FileSpreadsheet, color: "from-emerald-500 to-green-600" },
  { name: "SAP S/4HANA", icon: Layers, color: "from-blue-600 to-indigo-600" },
  { name: "Git", icon: GitBranch, color: "from-orange-500 to-red-500" },
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
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {tools.map((tool, index) => {
                const Icon = tool.icon;
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
                        className={`w-12 h-12 rounded-lg bg-gradient-to-br ${tool.color} flex items-center justify-center transition-transform group-hover:scale-110`}
                      >
                        <Icon className="w-6 h-6 text-primary-foreground" />
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
