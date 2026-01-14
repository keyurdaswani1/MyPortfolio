import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Building2, GraduationCap, ArrowDown } from "lucide-react";

// Import company/institution logos
import vizruLogo from "@/assets/vizru-logo.png";
import humberLogo from "@/assets/humber-logo.png";
import ibmLogo from "@/assets/ibm-logo.jpg";
import accentureLogo from "@/assets/accenture-logo.png";
import vesLogo from "@/assets/ves-logo.png";

const journeySteps = [{
  title: "Data Analyst Co-op",
  role: "Vizru",
  period: "2025",
  type: "work",
  icon: Building2,
  logo: vizruLogo,
  side: "left" as const,
  description: [
    "Performed end-to-end data analysis using Python and SQL, from data cleaning and feature engineering to insight generation",
    "Built and evaluated machine learning models to identify patterns, trends, and predictive signals in business data",
    "Applied statistical analysis and ML techniques to support data-driven decision-making",
    "Communicated analytical and ML-driven insights through clear narratives and visual summaries"
  ]
}, {
  title: "PG in Business Insights & Analytics",
  role: "Humber Polytechnic",
  period: "2023 - 2025",
  type: "education",
  icon: GraduationCap,
  logo: humberLogo,
  side: "right" as const,
  description: [
    "Honored in Dean's Honor List",
    "Relevant Courses: Python, SQL, Machine Learning, SPSS, Power BI, Data Governance, Big Data, R Programming, Hadoop"
  ]
}, {
  title: "Senior Data Consultant",
  role: "IBM",
  period: "2022 - 2023",
  type: "work",
  icon: Building2,
  logo: ibmLogo,
  side: "left" as const,
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
  type: "work",
  icon: Building2,
  logo: accentureLogo,
  side: "left" as const,
  description: [
    "Led enterprise data analysis initiatives by integrating complex SAP data into centralized analytics platforms",
    "Built reliable datasets using Azure Data Services to support reporting, advanced analytics, and downstream ML use cases",
    "Designed ETL/ELT pipelines that enabled historical analysis, trend identification, and predictive modeling readiness",
    "Partnered with business teams to translate analytical requirements into scalable data solutions"
  ]
}, {
  title: "BE in Electronics & Telecommunication",
  role: "VES Institute of Technology",
  period: "2015 - 2018",
  type: "education",
  icon: GraduationCap,
  logo: vesLogo,
  side: "right" as const,
  description: [
    "Relevant Courses: Java, Image Processing, Neural Networks, Speech Processing, Advanced Communication"
  ]
}];

interface StepType {
  title: string;
  role: string;
  period: string;
  type: string;
  icon: typeof Building2;
  logo: string;
  side: "left" | "right";
  description?: string[];
}

const CareerCard = ({ step, index }: { step: StepType; index: number }) => {
  const cardRef = useRef(null);
  const isCardInView = useInView(cardRef, { once: true, margin: "-50px" });
  
  const isLeft = step.side === "left";
  const Icon = step.icon;
  const isWork = step.type === "work";
  const hasDescription = step.description && step.description.length > 0;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: isLeft ? -60 : 60, y: 20 }}
      animate={isCardInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={`relative md:flex items-start ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
    >
      {/* Card */}
      <div className={`md:w-[calc(50%-2rem)] ${isLeft ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"}`}>
        <motion.div
          initial={{ scale: 0.95 }}
          animate={isCardInView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.1 }}
          className={`group p-5 rounded-2xl bg-card/70 backdrop-blur-sm border border-border/50 ${isWork ? "border-primary/30" : "border-emerald-500/30"} transition-all duration-300`}
        >
          <div className={`flex items-center gap-4 ${isLeft ? "md:flex-row-reverse" : ""}`}>
            <motion.div
              initial={{ rotate: -10, scale: 0.8 }}
              animate={isCardInView ? { rotate: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 200 }}
              className={`relative w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 bg-white p-2 shadow-lg border-2 ${isWork ? "border-primary/30 shadow-primary/20" : "border-emerald-500/30 shadow-emerald-500/20"}`}
            >
              {/* Decorative ring */}
              <div className={`absolute inset-0 rounded-2xl ${isWork ? "bg-gradient-to-br from-primary/10 to-transparent" : "bg-gradient-to-br from-emerald-500/10 to-transparent"}`} />
              <img 
                src={step.logo} 
                alt={`${step.role} logo`} 
                className="w-full h-full object-contain relative z-10"
              />
              {/* Corner accent */}
              <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full ${isWork ? "bg-primary" : "bg-emerald-500"} flex items-center justify-center`}>
                <Icon className="w-2 h-2 text-white" />
              </div>
            </motion.div>
            <div className={`flex-1 ${isLeft ? "md:text-right" : ""}`}>
              <h4 className={`font-bold text-lg text-foreground ${isWork ? "text-primary" : "text-emerald-500"}`}>
                {step.title}
              </h4>
              <p className="text-base text-muted-foreground font-medium">{step.role}</p>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isCardInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.3 }}
            className={`mt-3 ${isLeft ? "md:text-right" : ""}`}
          >
            <span className={`inline-block text-sm font-mono px-3 py-1.5 rounded-md ${isWork ? "text-primary bg-primary/10" : "text-emerald-500 bg-emerald-500/10"}`}>
              {step.period}
            </span>
          </motion.div>

          {/* Always visible description */}
          {hasDescription && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={isCardInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <ul className={`mt-4 space-y-2.5 text-left border-t border-border/30 pt-4`}>
                {step.description?.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isCardInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.5 + i * 0.05 }}
                    className="flex gap-2.5 text-sm text-foreground/80"
                  >
                    <span className={`mt-2 w-1.5 h-1.5 rounded-full shrink-0 ${isWork ? "bg-primary" : "bg-emerald-500"}`} />
                    <span className="leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Center node */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={isCardInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.15, type: "spring", stiffness: 300 }}
        className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 top-8"
      >
        <div className={`w-4 h-4 rounded-full ${isWork ? "bg-primary" : "bg-emerald-500"} border-4 border-background shadow-lg`} />
      </motion.div>

      {/* Arrow connector for mobile */}
      {index < journeySteps.length - 1 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={isCardInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="flex justify-center py-3 md:hidden"
        >
          <ArrowDown className="w-5 h-5 text-muted-foreground/50" />
        </motion.div>
      )}

      {/* Empty space for opposite side */}
      <div className="hidden md:block md:w-[calc(50%-2rem)]" />
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
  return <section id="career" className={`py-12 lg:py-16 bg-background ${className || ""}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div ref={ref} initial={{
        opacity: 0,
        y: 40
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.6
      }}>
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Career Journey
            </span>
            
          </div>

          {/* Journey Flow */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Central flowing line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-emerald-500 to-primary/30 -translate-x-1/2 hidden md:block" />

              <div className="space-y-4 md:space-y-0">
                {journeySteps.map((step, index) => (
                  <CareerCard key={step.title + step.period} step={step} index={index} />
                ))}
              </div>
            </div>
          </div>

          {/* Stats */}
          
        </motion.div>
      </div>
    </section>;
};
export default CareerSection;
