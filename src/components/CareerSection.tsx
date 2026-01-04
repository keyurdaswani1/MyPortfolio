import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Building2, Calendar, MapPin, GraduationCap, Briefcase } from "lucide-react";

const experiences = [
  {
    type: "work",
    company: "Vizru Inc",
    role: "Data Science Co-op",
    period: "Mar 2025 – Jun 2025",
    location: "Toronto, Canada",
    badge: "Co-op",
    highlights: [
      "Created forecasting and predictive models using Machine Learning",
      "Implemented data preprocessing pipelines for improved model accuracy",
      "Collaborated with cross-functional teams on AI-driven solutions",
    ],
  },
  {
    type: "education",
    company: "Humber Polytechnic",
    role: "PG in Business Insights and Analytics",
    period: "2025",
    location: "Toronto, Canada",
    badge: "Post Graduate",
  },
  {
    type: "work",
    company: "IBM",
    role: "Senior Data Consultant",
    period: "Jan 2022 – Aug 2023",
    location: "India",
    badge: "Full-time",
    highlights: [
      "Optimized ETL processes reducing execution times by 25%",
      "Developed KPI dashboards serving 50+ stakeholders",
      "Led data migration projects for enterprise clients",
      "Implemented automated reporting systems using Power BI",
    ],
  },
  {
    type: "work",
    company: "Accenture",
    role: "Senior Data Analyst",
    period: "Oct 2018 – Jan 2022",
    location: "India",
    badge: "Full-time",
    highlights: [
      "Improved dashboard adoption by 40% through UX enhancements",
      "Maintained data integrity across 10+ integrated systems",
      "Delivered analytics solutions for Fortune 500 clients",
      "Mentored junior analysts on best practices",
    ],
  },
  {
    type: "education",
    company: "VES Institute of Technology",
    role: "Bachelor's in Electronics and Telecommunication",
    period: "2018",
    location: "Mumbai, India",
    badge: "Bachelor's Degree",
  },
  {
    type: "education",
    company: "VES Polytechnic",
    role: "Diploma in Electronics and Communication",
    period: "2015",
    location: "Mumbai, India",
    badge: "Diploma",
  },
];

const CareerSection = ({ className }: { className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className={`py-20 lg:py-32 ${className}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              My Journey
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-3 mb-4">
              Experience & <span className="text-gradient">Education</span>
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-6 lg:left-1/2 lg:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-primary/20" />

            {experiences.map((item, index) => (
              <motion.div
                key={`${item.company}-${item.role}`}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="relative flex gap-6 lg:gap-0 mb-8 last:mb-0"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 lg:left-1/2 -translate-x-1/2 z-10">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center border-4 border-background shadow-lg ${
                      item.type === "work"
                        ? "bg-gradient-to-br from-primary to-primary/80"
                        : "bg-gradient-to-br from-emerald-500 to-emerald-600"
                    }`}
                  >
                    {item.type === "work" ? (
                      <Briefcase className="w-5 h-5 text-primary-foreground" />
                    ) : (
                      <GraduationCap className="w-5 h-5 text-white" />
                    )}
                  </div>
                </div>

                {/* Content container */}
                <div
                  className={`w-full lg:w-1/2 pl-20 lg:pl-0 ${
                    index % 2 === 0
                      ? "lg:pr-16 lg:text-right"
                      : "lg:pl-16 lg:ml-auto"
                  }`}
                >
                  <div
                    className={`group relative p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 ${
                      index % 2 === 0 ? "lg:mr-6" : "lg:ml-6"
                    }`}
                  >
                    {/* Badge */}
                    <span
                      className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-3 ${
                        item.type === "work"
                          ? "bg-primary/10 text-primary"
                          : "bg-emerald-500/10 text-emerald-500"
                      }`}
                    >
                      {item.badge}
                    </span>

                    {/* Role/Degree */}
                    <h3 className="text-lg lg:text-xl font-bold text-foreground mb-1">
                      {item.role}
                    </h3>

                    {/* Company/Institution */}
                    <div
                      className={`flex items-center gap-2 mb-3 ${
                        index % 2 === 0 ? "lg:justify-end" : ""
                      }`}
                    >
                      {item.type === "work" ? (
                        <Building2 className="w-4 h-4 text-primary" />
                      ) : (
                        <GraduationCap className="w-4 h-4 text-emerald-500" />
                      )}
                      <span className="font-medium text-primary">
                        {item.company}
                      </span>
                    </div>

                    {/* Meta info */}
                    <div
                      className={`flex flex-wrap gap-3 text-sm text-muted-foreground mb-4 ${
                        index % 2 === 0 ? "lg:justify-end" : ""
                      }`}
                    >
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{item.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{item.location}</span>
                      </div>
                    </div>

                    {/* Highlights (only for work) */}
                    {item.highlights && (
                      <ul
                        className={`space-y-2 ${
                          index % 2 === 0 ? "lg:text-left" : ""
                        }`}
                      >
                        {item.highlights.map((highlight, hIndex) => (
                          <li
                            key={hIndex}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Decorative gradient */}
                    <div
                      className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
                        item.type === "work"
                          ? "bg-gradient-to-br from-primary/5 to-transparent"
                          : "bg-gradient-to-br from-emerald-500/5 to-transparent"
                      }`}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CareerSection;
