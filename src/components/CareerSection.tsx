import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Building2, GraduationCap, ArrowDown } from "lucide-react";

const journeySteps = [{
  title: "Data Analyst Co-op",
  role: "Vizru",
  period: "2025",
  type: "work",
  icon: Building2
}, {
  title: "PG in Business Insights & Analytics",
  role: "Humber Polytechnic",
  period: "2023 - 2025",
  type: "education",
  icon: GraduationCap
}, {
  title: "Senior Data Consultant",
  role: "IBM",
  period: "2022 - 2023",
  type: "work",
  icon: Building2
}, {
  title: "BE in Electronics & Telecommunication",
  role: "VES Institute of Technology",
  period: "2015 - 2018",
  type: "education",
  icon: GraduationCap
}, {
  title: "Senior Software Analyst",
  role: "Accenture",
  period: "2018 - 2022",
  type: "work",
  icon: Building2
}];

interface StepType {
  title: string;
  role: string;
  period: string;
  type: string;
  icon: typeof Building2;
}

const CareerCard = ({ step, index }: { step: StepType; index: number }) => {
  const cardRef = useRef(null);
  const isCardInView = useInView(cardRef, { once: true, margin: "-50px" });
  
  const isLeft = index % 2 === 0;
  const Icon = step.icon;
  const isWork = step.type === "work";

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: isLeft ? -60 : 60, y: 20 }}
      animate={isCardInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={`relative md:flex items-center ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
    >
      {/* Card */}
      <div className={`md:w-[calc(50%-2rem)] ${isLeft ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"}`}>
        <motion.div
          initial={{ scale: 0.95 }}
          animate={isCardInView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.1 }}
          whileHover={{ scale: 1.02, y: -4 }}
          className={`group p-4 rounded-2xl bg-card/70 backdrop-blur-sm border border-border/50 ${isWork ? "hover:border-primary/50 hover:shadow-primary/10" : "hover:border-emerald-500/50 hover:shadow-emerald-500/10"} transition-all duration-300 hover:shadow-lg`}
        >
          <div className={`flex items-center gap-3 ${isLeft ? "md:flex-row-reverse" : ""}`}>
            <motion.div
              initial={{ rotate: -10, scale: 0.8 }}
              animate={isCardInView ? { rotate: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 200 }}
              className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${isWork ? "bg-primary/10" : "bg-emerald-500/10"}`}
            >
              <Icon className={`w-5 h-5 ${isWork ? "text-primary" : "text-emerald-500"}`} />
            </motion.div>
            <div className={`flex-1 ${isLeft ? "md:text-right" : ""}`}>
              <h4 className={`font-bold text-foreground ${isWork ? "group-hover:text-primary" : "group-hover:text-emerald-500"} transition-colors`}>
                {step.title}
              </h4>
              <p className="text-sm text-muted-foreground">{step.role}</p>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isCardInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.3 }}
            className={`mt-2 ${isLeft ? "md:text-right" : ""}`}
          >
            <span className={`inline-block text-xs font-mono px-2 py-1 rounded-md ${isWork ? "text-primary bg-primary/10" : "text-emerald-500 bg-emerald-500/10"}`}>
              {step.period}
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Center node */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={isCardInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.15, type: "spring", stiffness: 300 }}
        className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4"
      >
        <div className={`w-4 h-4 rounded-full ${isWork ? "bg-primary" : "bg-emerald-500"} border-4 border-background shadow-lg`} />
      </motion.div>

      {/* Arrow connector for mobile */}
      {index < journeySteps.length - 1 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={isCardInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="flex justify-center py-2 md:hidden"
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
  return <section id="career" className={`py-12 lg:py-16 ${className || ""}`}>
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
