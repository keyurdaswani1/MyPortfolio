import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Building2, GraduationCap, Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Vizru Inc",
    role: "Data Science Co-op",
    period: "2025",
    type: "work",
  },
  {
    company: "IBM",
    role: "Senior Data Consultant",
    period: "2022 – 2023",
    type: "work",
  },
  {
    company: "Accenture",
    role: "Senior Data Analyst",
    period: "2018 – 2022",
    type: "work",
  },
];

const education = [
  {
    institution: "Humber Polytechnic",
    degree: "PG in Business Insights & Analytics",
    year: "2025",
  },
  {
    institution: "VES Institute of Technology",
    degree: "B.E. Electronics & Telecommunication",
    year: "2018",
  },
  {
    institution: "VES Polytechnic",
    degree: "Diploma in Electronics",
    year: "2015",
  },
];

const CareerSection = ({ className }: { className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className={`py-16 lg:py-24 ${className || ""}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold">
              <span className="text-gradient">Career Journey</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Experience Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-lg">
                  <Briefcase className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Experience</h3>
              </div>

              <div className="relative pl-6 border-l-2 border-primary/30 space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.company}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="relative group"
                  >
                    {/* Timeline dot */}
                    <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-md group-hover:scale-125 transition-transform" />
                    
                    <div className="p-4 rounded-xl bg-card/60 backdrop-blur-sm border border-border/50 hover:border-primary/40 hover:bg-card/80 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/5">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                            {exp.role}
                          </h4>
                          <div className="flex items-center gap-1.5 text-muted-foreground text-sm mt-1">
                            <Building2 className="w-3.5 h-3.5" />
                            <span>{exp.company}</span>
                          </div>
                        </div>
                        <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded-md whitespace-nowrap">
                          {exp.period}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Education</h3>
              </div>

              <div className="relative pl-6 border-l-2 border-emerald-500/30 space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.institution}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="relative group"
                  >
                    {/* Timeline dot */}
                    <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-emerald-500 border-4 border-background shadow-md group-hover:scale-125 transition-transform" />
                    
                    <div className="p-4 rounded-xl bg-card/60 backdrop-blur-sm border border-border/50 hover:border-emerald-500/40 hover:bg-card/80 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-emerald-500/5">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h4 className="font-semibold text-foreground group-hover:text-emerald-500 transition-colors">
                            {edu.degree}
                          </h4>
                          <div className="flex items-center gap-1.5 text-muted-foreground text-sm mt-1">
                            <GraduationCap className="w-3.5 h-3.5" />
                            <span>{edu.institution}</span>
                          </div>
                        </div>
                        <span className="text-xs font-mono text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded-md">
                          {edu.year}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 flex flex-wrap justify-center gap-8 lg:gap-16"
          >
            {[
              { value: "5+", label: "Years Experience" },
              { value: "3", label: "Companies" },
              { value: "3", label: "Degrees" },
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-gradient">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CareerSection;
