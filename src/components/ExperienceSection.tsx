import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Building2, Calendar, MapPin } from "lucide-react";
const experiences = [{
  company: "Vizru Inc",
  role: "Data Science Co-op",
  period: "Mar 2025 – Jun 2025",
  location: "Toronto, Canada",
  type: "Co-op",
  highlights: ["Created forecasting and predictive models using Machine Learning", "Implemented data preprocessing pipelines for improved model accuracy", "Collaborated with cross-functional teams on AI-driven solutions"]
}, {
  company: "IBM",
  role: "Senior Data Consultant",
  period: "Jan 2022 – Aug 2023",
  location: "India",
  type: "Full-time",
  highlights: ["Optimized ETL processes reducing execution times by 25%", "Developed KPI dashboards serving 50+ stakeholders", "Led data migration projects for enterprise clients", "Implemented automated reporting systems using Power BI"]
}, {
  company: "Accenture",
  role: "Senior Data Analyst",
  period: "Oct 2018 – Jan 2022",
  location: "India",
  type: "Full-time",
  highlights: ["Improved dashboard adoption by 40% through UX enhancements", "Maintained data integrity across 10+ integrated systems", "Delivered analytics solutions for Fortune 500 clients", "Mentored junior analysts on best practices"]
}];
const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  return <section id="experience" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div ref={ref} initial={{
        opacity: 0,
        y: 50
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.6
      }}>
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Career Journey
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-3 mb-4">
              Work <span className="text-gradient">Experience</span>
            </h2>
            
          </div>

          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />

            {experiences.map((exp, index) => <motion.div key={exp.company} initial={{
            opacity: 0,
            x: index % 2 === 0 ? -50 : 50
          }} animate={isInView ? {
            opacity: 1,
            x: 0
          } : {}} transition={{
            duration: 0.6,
            delay: 0.2 * index
          }} className={`relative flex flex-col md:flex-row items-start gap-8 mb-12 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-glow z-10" />

                {/* Content */}
                <div className={`flex-1 ml-8 md:ml-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="bg-card p-6 rounded-xl border border-border hover-lift shadow-card">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-2">
                          {exp.type}
                        </span>
                        <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                        <div className="flex items-center gap-2 text-primary mt-1">
                          <Building2 className="w-4 h-4" />
                          <span className="font-semibold">{exp.company}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, hIndex) => <li key={hIndex} className="flex items-start gap-2 text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          {highlight}
                        </li>)}
                    </ul>
                  </div>
                </div>

                {/* Spacer for timeline alignment */}
                <div className="hidden md:block flex-1" />
              </motion.div>)}
          </div>
        </motion.div>
      </div>
    </section>;
};
export default ExperienceSection;