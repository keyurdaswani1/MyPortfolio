import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Building2, GraduationCap, ArrowRight } from "lucide-react";

// Import company/institution logos
import vizruLogo from "@/assets/vizru-logo.png";
import humberLogo from "@/assets/humber-logo.png";
import ibmLogo from "@/assets/ibm-logo.jpg";
import accentureLogo from "@/assets/accenture-logo.png";
import vesLogo from "@/assets/ves-logo.png";

// Timeline items in chronological order (recent to older): Vizru → Humber → IBM → Accenture → VES
const timelineItems = [
  {
    id: 1,
    title: "Data Analyst Co-op",
    role: "Vizru",
    period: "2025",
    icon: Building2,
    logo: vizruLogo,
    type: "experience",
    position: "top" as const,
    description: [
      "Performed end-to-end data analysis using Python and SQL",
      "Built and evaluated machine learning models for business insights",
      "Applied statistical analysis and ML techniques",
      "Communicated insights through clear narratives"
    ]
  },
  {
    id: 2,
    title: "PG in Business Insights & Analytics",
    role: "Humber Polytechnic",
    period: "2023 - 2025",
    icon: GraduationCap,
    logo: humberLogo,
    type: "education",
    position: "bottom" as const,
    description: [
      "Honored in Dean's Honor List",
      "Courses: Python, SQL, ML, Power BI, Big Data"
    ]
  },
  {
    id: 3,
    title: "Senior Data Consultant",
    role: "IBM",
    period: "2022 - 2023",
    icon: Building2,
    logo: ibmLogo,
    type: "experience",
    position: "top" as const,
    description: [
      "Large-scale data analysis with Python and PySpark",
      "ML data pipelines in Snowflake",
      "Power BI and Tableau dashboards"
    ]
  },
  {
    id: 4,
    title: "Senior Software Analyst",
    role: "Accenture",
    period: "2018 - 2022",
    icon: Building2,
    logo: accentureLogo,
    type: "experience",
    position: "top" as const,
    description: [
      "Enterprise data analysis with SAP integration",
      "Azure Data Services for analytics",
      "ETL/ELT pipeline design"
    ]
  },
  {
    id: 5,
    title: "BE in Electronics & Telecom",
    role: "VES Institute of Technology",
    period: "2015 - 2018",
    icon: GraduationCap,
    logo: vesLogo,
    type: "education",
    position: "bottom" as const,
    description: [
      "Courses: Java, Image Processing, Neural Networks"
    ]
  }
];

interface TimelineItemType {
  id: number;
  title: string;
  role: string;
  period: string;
  icon: typeof Building2;
  logo: string;
  type: string;
  position: "top" | "bottom";
  description?: string[];
}

const TimelineCard = ({ 
  item, 
  index
}: { 
  item: TimelineItemType; 
  index: number;
}) => {
  const cardRef = useRef(null);
  const isCardInView = useInView(cardRef, { once: true, margin: "-50px" });
  const Icon = item.icon;
  const isExperience = item.type === "experience";

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: item.position === "top" ? -20 : 20 }}
      animate={isCardInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="w-full h-full"
    >
      <div
        className={`p-4 rounded-xl bg-card/80 backdrop-blur-sm border ${
          isExperience ? "border-primary/40" : "border-emerald-500/40"
        } h-full`}
      >
        <div className="flex items-center gap-3">
          <div
            className={`relative w-11 h-11 rounded-lg flex items-center justify-center shrink-0 bg-white p-1.5 shadow-md border ${
              isExperience ? "border-primary/30" : "border-emerald-500/30"
            }`}
          >
            <img 
              src={item.logo} 
              alt={`${item.role} logo`} 
              className="w-full h-full object-contain"
            />
            <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full ${
              isExperience ? "bg-primary" : "bg-emerald-500"
            } flex items-center justify-center`}>
              <Icon className="w-1.5 h-1.5 text-white" />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h4 className={`font-bold text-sm leading-tight ${
              isExperience ? "text-primary" : "text-emerald-500"
            }`}>
              {item.title}
            </h4>
            <p className="text-xs text-muted-foreground font-medium truncate">{item.role}</p>
          </div>
        </div>
        
        <div className="mt-2">
          <span className={`inline-block text-xs font-mono px-2 py-0.5 rounded ${
            isExperience 
              ? "text-primary bg-primary/10" 
              : "text-emerald-500 bg-emerald-500/10"
          }`}>
            {item.period}
          </span>
        </div>

        {item.description && item.description.length > 0 && (
          <ul className="mt-2 space-y-1 text-left border-t border-border/30 pt-2">
            {item.description?.map((desc, i) => (
              <li
                key={i}
                className="flex gap-1.5 text-xs text-foreground/80"
              >
                <span className={`mt-1 w-1 h-1 rounded-full shrink-0 ${
                  isExperience ? "bg-primary/70" : "bg-emerald-500/70"
                }`} />
                <span className="leading-relaxed">{desc}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
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
    <section id="career" className={`py-12 lg:py-20 bg-background overflow-hidden ${className || ""}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div 
          ref={ref} 
          initial={{ opacity: 0, y: 40 }} 
          animate={isInView ? { opacity: 1, y: 0 } : {}} 
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-10">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Career Journey
            </span>
            <h2 className="text-3xl font-bold mt-2 text-foreground">My Professional Path</h2>
            <div className="flex justify-center gap-6 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary"></div>
                <span className="text-sm text-muted-foreground">Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                <span className="text-sm text-muted-foreground">Education</span>
              </div>
            </div>
          </div>

          {/* Desktop Timeline */}
          <div className="hidden lg:block max-w-6xl mx-auto">
            {/* Direction Indicator */}
            <div className="flex items-center justify-between mb-6 px-2">
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-primary">2025</span>
                <span className="text-xs text-muted-foreground">(Recent)</span>
              </div>
              <div className="flex items-center gap-1 flex-1 mx-4">
                <div className="h-px flex-1 bg-gradient-to-r from-primary to-muted-foreground/30"></div>
                <ArrowRight className="w-4 h-4 text-muted-foreground" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground">(Older)</span>
                <span className="text-sm font-bold text-muted-foreground">2015</span>
              </div>
            </div>

            {/* 5-Column Grid Layout */}
            <div className="relative">
              {/* TOP ROW: Vizru (col 1), IBM (col 3), Accenture (col 4) */}
              <div className="grid grid-cols-5 gap-3 mb-4">
                <div className="col-span-1">
                  <TimelineCard item={timelineItems[0]} index={0} />
                </div>
                <div className="col-span-1"></div>
                <div className="col-span-1">
                  <TimelineCard item={timelineItems[2]} index={2} />
                </div>
                <div className="col-span-1">
                  <TimelineCard item={timelineItems[3]} index={3} />
                </div>
                <div className="col-span-1"></div>
              </div>

              {/* ZIGZAG LINE SVG */}
              <div className="relative h-28 -my-2">
                <svg 
                  className="w-full h-full" 
                  viewBox="0 0 500 100" 
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="zigzagLine" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="hsl(var(--primary))" />
                      <stop offset="20%" stopColor="hsl(142, 76%, 36%)" />
                      <stop offset="40%" stopColor="hsl(var(--primary))" />
                      <stop offset="60%" stopColor="hsl(var(--primary))" />
                      <stop offset="100%" stopColor="hsl(142, 76%, 36%)" />
                    </linearGradient>
                  </defs>
                  
                  {/* Zigzag path connecting all 5 points */}
                  {/* Pattern: Vizru(top) → Humber(bottom) → IBM(top) → Accenture(top) → VES(bottom) */}
                  <motion.path
                    d="M 50,15 L 50,50 L 150,50 L 150,85 L 250,85 L 250,50 L 350,50 L 350,15 L 450,15 L 450,50 L 450,85"
                    fill="none"
                    stroke="url(#zigzagLine)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={isInView ? { pathLength: 1 } : {}}
                    transition={{ duration: 1.8, delay: 0.4, ease: "easeInOut" }}
                  />
                  
                  {/* Pointer circles on the zigzag */}
                  {/* 1. Vizru - top position */}
                  <motion.circle
                    cx="50" cy="15"
                    r="7"
                    fill="hsl(var(--primary))"
                    stroke="hsl(var(--background))"
                    strokeWidth="2"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                  />
                  
                  {/* 2. Humber - bottom position */}
                  <motion.circle
                    cx="150" cy="85"
                    r="7"
                    fill="hsl(142, 76%, 36%)"
                    stroke="hsl(var(--background))"
                    strokeWidth="2"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                  />
                  
                  {/* 3. IBM - top position */}
                  <motion.circle
                    cx="250" cy="15"
                    r="7"
                    fill="hsl(var(--primary))"
                    stroke="hsl(var(--background))"
                    strokeWidth="2"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 1.0, type: "spring", stiffness: 200 }}
                  />
                  
                  {/* 4. Accenture - top position */}
                  <motion.circle
                    cx="350" cy="15"
                    r="7"
                    fill="hsl(var(--primary))"
                    stroke="hsl(var(--background))"
                    strokeWidth="2"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
                  />
                  
                  {/* 5. VES - bottom position */}
                  <motion.circle
                    cx="450" cy="85"
                    r="7"
                    fill="hsl(142, 76%, 36%)"
                    stroke="hsl(var(--background))"
                    strokeWidth="2"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 1.4, type: "spring", stiffness: 200 }}
                  />
                </svg>
              </div>

              {/* BOTTOM ROW: Humber (col 2), VES (col 5) */}
              <div className="grid grid-cols-5 gap-3 mt-4">
                <div className="col-span-1"></div>
                <div className="col-span-1">
                  <TimelineCard item={timelineItems[1]} index={1} />
                </div>
                <div className="col-span-1"></div>
                <div className="col-span-1"></div>
                <div className="col-span-1">
                  <TimelineCard item={timelineItems[4]} index={4} />
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Timeline - Vertical */}
          <div className="lg:hidden max-w-lg mx-auto">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-emerald-500 via-primary via-primary to-emerald-500 rounded-full"></div>
              
              <div className="space-y-4">
                {timelineItems.map((item, index) => (
                  <div key={item.id} className="relative pl-12">
                    {/* Point on the line */}
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ delay: 0.2 + index * 0.1, type: "spring" }}
                      className={`absolute left-2 top-5 w-5 h-5 rounded-full border-2 border-background shadow-lg ${
                        item.type === "experience" ? "bg-primary" : "bg-emerald-500"
                      }`}
                    />
                    
                    <TimelineCard item={item} index={index} />
                  </div>
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
