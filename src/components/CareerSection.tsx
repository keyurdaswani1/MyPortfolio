import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Building2, GraduationCap } from "lucide-react";

// Import company/institution logos
import vizruLogo from "@/assets/vizru-logo.png";
import humberLogo from "@/assets/humber-logo.png";
import ibmLogo from "@/assets/ibm-logo.jpg";
import accentureLogo from "@/assets/accenture-logo.png";
import vesLogo from "@/assets/ves-logo.png";

const educationSteps = [{
  title: "PG in Business Insights & Analytics",
  role: "Humber Polytechnic",
  period: "2023 - 2025",
  icon: GraduationCap,
  logo: humberLogo,
  description: [
    "Honored in Dean's Honor List",
    "Relevant Courses: Python, SQL, Machine Learning, SPSS, Power BI, Data Governance, Big Data, R Programming, Hadoop"
  ]
}, {
  title: "BE in Electronics & Telecommunication",
  role: "VES Institute of Technology",
  period: "2015 - 2018",
  icon: GraduationCap,
  logo: vesLogo,
  description: [
    "Relevant Courses: Java, Image Processing, Neural Networks, Speech Processing, Advanced Communication"
  ]
}];

const experienceSteps = [{
  title: "Data Analyst Co-op",
  role: "Vizru",
  period: "2025",
  icon: Building2,
  logo: vizruLogo,
  description: [
    "Performed end-to-end data analysis using Python and SQL, from data cleaning and feature engineering to insight generation",
    "Built and evaluated machine learning models to identify patterns, trends, and predictive signals in business data",
    "Applied statistical analysis and ML techniques to support data-driven decision-making",
    "Communicated analytical and ML-driven insights through clear narratives and visual summaries"
  ]
}, {
  title: "Senior Data Consultant",
  role: "IBM",
  period: "2022 - 2023",
  icon: Building2,
  logo: ibmLogo,
  description: [
    "Designed and implemented large-scale data analysis workflows using Python and PySpark for high-volume datasets",
    "Supported machine learning data pipelines by preparing, transforming, and optimizing data in Snowflake",
    "Enabled analytical and ML use cases by delivering trusted, analytics-ready datasets",
    "Built interactive Power BI and Tableau dashboards to surface analytical findings and model outputs for business leaders",
    "Delivered technically robust analytics solutions aligned with enterprise ML and AI initiatives"
  ]
}, {
  title: "Senior Software Analyst",
  role: "Accenture",
  period: "2018 - 2022",
  icon: Building2,
  logo: accentureLogo,
  description: [
    "Led enterprise data analysis initiatives by integrating complex SAP data into centralized analytics platforms",
    "Built reliable datasets using Azure Data Services to support reporting, advanced analytics, and downstream ML use cases",
    "Designed ETL/ELT pipelines that enabled historical analysis, trend identification, and predictive modeling readiness",
    "Partnered with business teams to translate analytical requirements into scalable data solutions"
  ]
}];

interface StepType {
  title: string;
  role: string;
  period: string;
  icon: typeof Building2;
  logo: string;
  description?: string[];
}

const HorizontalCard = ({ step, index, isWork }: { step: StepType; index: number; isWork: boolean }) => {
  const cardRef = useRef(null);
  const isCardInView = useInView(cardRef, { once: true, margin: "-50px" });
  const Icon = step.icon;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isCardInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex-shrink-0 w-[320px] sm:w-[360px]"
    >
      <div className={`h-full p-5 rounded-2xl bg-card/70 backdrop-blur-sm border border-border/50 ${isWork ? "hover:border-primary/50" : "hover:border-emerald-500/50"} transition-all duration-300 hover:shadow-lg`}>
        {/* Header */}
        <div className="flex items-center gap-4 mb-4">
          <div className={`relative w-14 h-14 rounded-xl flex items-center justify-center shrink-0 bg-white p-2 shadow-md border-2 ${isWork ? "border-primary/30" : "border-emerald-500/30"}`}>
            <img 
              src={step.logo} 
              alt={`${step.role} logo`} 
              className="w-full h-full object-contain"
            />
            <div className={`absolute -top-1 -right-1 w-5 h-5 rounded-full ${isWork ? "bg-primary" : "bg-emerald-500"} flex items-center justify-center`}>
              <Icon className="w-3 h-3 text-white" />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h4 className={`font-bold text-foreground text-sm leading-tight ${isWork ? "group-hover:text-primary" : "group-hover:text-emerald-500"}`}>
              {step.title}
            </h4>
            <p className="text-sm text-muted-foreground">{step.role}</p>
            <span className={`inline-block text-xs font-mono px-2 py-0.5 rounded-md mt-1 ${isWork ? "text-primary bg-primary/10" : "text-emerald-500 bg-emerald-500/10"}`}>
              {step.period}
            </span>
          </div>
        </div>

        {/* Description - Always visible */}
        {step.description && step.description.length > 0 && (
          <ul className="space-y-2 border-t border-border/30 pt-4">
            {step.description.map((item, i) => (
              <li key={i} className="flex gap-2 text-xs text-muted-foreground">
                <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${isWork ? "bg-primary" : "bg-emerald-500"}`} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
};

const CareerSection = ({ className }: { className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="career" className={`py-12 lg:py-16 bg-background ${className || ""}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div 
          ref={ref} 
          initial={{ opacity: 0, y: 40 }} 
          animate={isInView ? { opacity: 1, y: 0 } : {}} 
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Career Journey
            </span>
          </div>

          {/* Education Section */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
              <div className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-emerald-500" />
                <h3 className="text-lg font-semibold text-foreground">Education</h3>
              </div>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
            </div>
            
            {/* Horizontal scroll container */}
            <div className="overflow-x-auto pb-4 -mx-4 px-4">
              <div className="flex gap-6">
                {educationSteps.map((step, index) => (
                  <HorizontalCard key={step.title} step={step} index={index} isWork={false} />
                ))}
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">Experience</h3>
              </div>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            </div>
            
            {/* Horizontal scroll container */}
            <div className="overflow-x-auto pb-4 -mx-4 px-4">
              <div className="flex gap-6">
                {experienceSteps.map((step, index) => (
                  <HorizontalCard key={step.title} step={step} index={index} isWork={true} />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CareerSection;
