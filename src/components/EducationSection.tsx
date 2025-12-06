import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";

const education = [
  {
    degree: "PG in Business Insights and Analytics",
    institution: "Humber Polytechnic",
    year: "2025",
    location: "Toronto, Canada",
  },
  {
    degree: "Bachelor's in Electronics and Telecommunication",
    institution: "VES Institute of Technology",
    year: "2018",
    location: "Mumbai, India",
  },
  {
    degree: "Diploma in Electronics and Communication",
    institution: "VES Polytechnic",
    year: "2015",
    location: "Mumbai, India",
  },
];

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Academic Background
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-3 mb-4">
              <span className="text-gradient">Education</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border hover-lift"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center shrink-0">
                  <GraduationCap className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground">{edu.degree}</h3>
                  <p className="text-primary font-medium">{edu.institution}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.year}</span>
                    <span>•</span>
                    <span>{edu.location}</span>
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

export default EducationSection;
