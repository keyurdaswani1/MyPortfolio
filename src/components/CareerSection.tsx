import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Building2, GraduationCap, ArrowDown, Sparkles } from "lucide-react";
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
  title: "Senior Software Analyst",
  role: "Accenture",
  period: "2018 - 2022",
  type: "work",
  icon: Building2
}, {
  title: "VES Institute of Technology",
  role: "BE in Electronics & Telecommunication",
  period: "2015 - 2018",
  type: "education",
  icon: GraduationCap
}];
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
                {journeySteps.map((step, index) => {
                const isLeft = index % 2 === 0;
                const Icon = step.icon;
                const isWork = step.type === "work";
                const accentColor = isWork ? "primary" : "emerald-500";
                return <motion.div key={step.title + step.period} initial={{
                  opacity: 0,
                  x: isLeft ? -50 : 50
                }} animate={isInView ? {
                  opacity: 1,
                  x: 0
                } : {}} transition={{
                  duration: 0.5,
                  delay: 0.2 + index * 0.15
                }} className={`relative md:flex items-center ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>
                      {/* Card */}
                      <div className={`md:w-[calc(50%-2rem)] ${isLeft ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"}`}>
                        <div className={`group p-4 rounded-2xl bg-card/70 backdrop-blur-sm border border-border/50 hover:border-${accentColor}/50 transition-all duration-300 hover:shadow-lg hover:shadow-${accentColor}/10`}>
                          <div className={`flex items-center gap-3 ${isLeft ? "md:flex-row-reverse" : ""}`}>
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${isWork ? "bg-primary/10" : "bg-emerald-500/10"}`}>
                              <Icon className={`w-5 h-5 ${isWork ? "text-primary" : "text-emerald-500"}`} />
                            </div>
                            <div className={`flex-1 ${isLeft ? "md:text-right" : ""}`}>
                              <h4 className={`font-bold text-foreground group-hover:${isWork ? "text-primary" : "text-emerald-500"} transition-colors`}>
                                {step.title}
                              </h4>
                              <p className="text-sm text-muted-foreground">{step.role}</p>
                            </div>
                          </div>
                          <div className={`mt-2 ${isLeft ? "md:text-right" : ""}`}>
                            <span className={`inline-block text-xs font-mono px-2 py-1 rounded-md ${isWork ? "text-primary bg-primary/10" : "text-emerald-500 bg-emerald-500/10"}`}>
                              {step.period}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Center node */}
                      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4">
                        <div className={`w-4 h-4 rounded-full ${isWork ? "bg-primary" : "bg-emerald-500"} border-4 border-background shadow-lg`} />
                      </div>

                      {/* Arrow connector for mobile */}
                      {index < journeySteps.length - 1 && <div className="flex justify-center py-2 md:hidden">
                          <ArrowDown className="w-5 h-5 text-muted-foreground/50" />
                        </div>}

                      {/* Empty space for opposite side */}
                      <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                    </motion.div>;
              })}
              </div>
            </div>
          </div>

          {/* Stats */}
          
        </motion.div>
      </div>
    </section>;
};
export default CareerSection;
