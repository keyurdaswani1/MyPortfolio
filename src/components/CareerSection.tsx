import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Building2, GraduationCap } from "lucide-react";

// Import company/institution logos
import vizruLogo from "@/assets/vizru-logo.png";
import humberLogo from "@/assets/humber-logo.png";
import ibmLogo from "@/assets/ibm-logo.jpg";
import accentureLogo from "@/assets/accenture-logo.png";
import vesLogo from "@/assets/ves-logo.png";

const experienceSteps = [
  {
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
  },
  {
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
  },
  {
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
  }
];

const educationSteps = [
  {
    title: "PG in Business Insights & Analytics",
    role: "Humber Polytechnic",
    period: "2023 - 2025",
    icon: GraduationCap,
    logo: humberLogo,
    description: [
      "Honored in Dean's Honor List",
      "Relevant Courses: Python, SQL, Machine Learning, SPSS, Power BI, Data Governance, Big Data, R Programming, Hadoop"
    ]
  },
  {
    title: "BE in Electronics & Telecommunication",
    role: "VES Institute of Technology",
    period: "2015 - 2018",
    icon: GraduationCap,
    logo: vesLogo,
    description: [
      "Relevant Courses: Java, Image Processing, Neural Networks, Speech Processing, Advanced Communication"
    ]
  }
];

interface StepType {
  title: string;
  role: string;
  period: string;
  icon: typeof Building2;
  logo: string;
  description?: string[];
}

const TimelineCard = ({ 
  step, 
  index, 
  isExperience,
  totalItems
}: { 
  step: StepType; 
  index: number;
  isExperience: boolean;
  totalItems: number;
}) => {
  const cardRef = useRef(null);
  const isCardInView = useInView(cardRef, { once: true, margin: "-50px" });
  const Icon = step.icon;
  const hasDescription = step.description && step.description.length > 0;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: isExperience ? 30 : -30 }}
      animate={isCardInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="flex flex-col items-center relative"
      style={{ flex: 1 }}
    >
      {/* Pointer line connecting to horizontal timeline */}
      <div 
        className={`hidden lg:block absolute left-1/2 -translate-x-1/2 w-0.5 ${
          isExperience 
            ? "bottom-0 h-8 bg-gradient-to-b from-primary to-primary/50" 
            : "top-0 h-8 bg-gradient-to-t from-emerald-500 to-emerald-500/50"
        }`}
      />
      
      {/* Pointer dot at the end of line */}
      <div 
        className={`hidden lg:block absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-background shadow-lg ${
          isExperience 
            ? "bottom-0 translate-y-1/2 bg-primary" 
            : "top-0 -translate-y-1/2 bg-emerald-500"
        }`}
      />

      {/* Card */}
      <motion.div
        initial={{ scale: 0.95 }}
        animate={isCardInView ? { scale: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
        className={`group p-5 rounded-2xl bg-card/70 backdrop-blur-sm border border-border/50 ${
          isExperience ? "border-primary/30 lg:mb-8" : "border-emerald-500/30 lg:mt-8"
        } transition-all duration-300 w-full`}
      >
        <div className="flex items-center gap-4">
          <motion.div
            initial={{ rotate: -10, scale: 0.8 }}
            animate={isCardInView ? { rotate: 0, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1, type: "spring", stiffness: 200 }}
            className={`relative w-14 h-14 rounded-xl flex items-center justify-center shrink-0 bg-white p-2 shadow-lg border-2 ${
              isExperience 
                ? "border-primary/30 shadow-primary/20" 
                : "border-emerald-500/30 shadow-emerald-500/20"
            }`}
          >
            <div className={`absolute inset-0 rounded-xl ${
              isExperience 
                ? "bg-gradient-to-br from-primary/10 to-transparent" 
                : "bg-gradient-to-br from-emerald-500/10 to-transparent"
            }`} />
            <img 
              src={step.logo} 
              alt={`${step.role} logo`} 
              className="w-full h-full object-contain relative z-10"
            />
            <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full ${
              isExperience ? "bg-primary" : "bg-emerald-500"
            } flex items-center justify-center`}>
              <Icon className="w-2 h-2 text-white" />
            </div>
          </motion.div>
          <div className="flex-1 min-w-0">
            <h4 className={`font-bold text-base leading-tight ${
              isExperience ? "text-primary" : "text-emerald-500"
            }`}>
              {step.title}
            </h4>
            <p className="text-sm text-muted-foreground font-medium truncate">{step.role}</p>
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isCardInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
          className="mt-3"
        >
          <span className={`inline-block text-xs font-mono px-2.5 py-1 rounded-md ${
            isExperience 
              ? "text-primary bg-primary/10" 
              : "text-emerald-500 bg-emerald-500/10"
          }`}>
            {step.period}
          </span>
        </motion.div>

        {hasDescription && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isCardInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
          >
            <ul className="mt-4 space-y-2 text-left border-t border-border/30 pt-3">
              {step.description?.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isCardInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 + i * 0.03 }}
                  className="flex gap-2 text-sm text-foreground/80"
                >
                  <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${
                    isExperience ? "bg-primary" : "bg-emerald-500"
                  }`} />
                  <span className="leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

const CareerSection = ({
  className
}: {
  className?: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });

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

          {/* Horizontal Timeline Layout */}
          <div className="max-w-7xl mx-auto">

            {/* Experience Cards Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-4">
              {experienceSteps.map((step, index) => (
                <TimelineCard 
                  key={step.title + step.period} 
                  step={step} 
                  index={index}
                  isExperience={true}
                  totalItems={experienceSteps.length}
                />
              ))}
            </div>

            {/* Central Horizontal Timeline Line */}
            <div className="hidden lg:block relative my-2">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="h-1 bg-gradient-to-r from-primary via-emerald-500 to-primary rounded-full origin-left"
              />
              {/* Decorative dots on the line */}
              <div className="absolute top-1/2 left-0 w-3 h-3 -translate-y-1/2 rounded-full bg-primary border-2 border-background shadow-lg" />
              <div className="absolute top-1/2 left-1/2 w-4 h-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-primary to-emerald-500 border-2 border-background shadow-lg" />
              <div className="absolute top-1/2 right-0 w-3 h-3 -translate-y-1/2 rounded-full bg-primary border-2 border-background shadow-lg" />
            </div>

            {/* Mobile Divider */}
            <div className="lg:hidden flex items-center gap-4 my-8">
              <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-primary to-emerald-500 rounded-full" />
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-emerald-500" />
              <div className="flex-1 h-0.5 bg-gradient-to-r from-emerald-500 via-primary to-transparent rounded-full" />
            </div>

            {/* Education Cards Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 mt-4 lg:max-w-4xl lg:mx-auto">
              {educationSteps.map((step, index) => (
                <TimelineCard 
                  key={step.title + step.period} 
                  step={step} 
                  index={index}
                  isExperience={false}
                  totalItems={educationSteps.length}
                />
              ))}
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CareerSection;
