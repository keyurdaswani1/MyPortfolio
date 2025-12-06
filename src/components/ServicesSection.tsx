import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  BarChart3,
  Database,
  Brain,
  GitBranch,
  LineChart,
  Layers,
} from "lucide-react";

const services = [
  {
    icon: BarChart3,
    title: "Data Analytics & Insights",
    description:
      "Transform raw data into meaningful insights through advanced analytics, statistical analysis, and trend identification.",
  },
  {
    icon: LineChart,
    title: "Dashboard Creation & Reporting",
    description:
      "Design interactive Power BI and Excel dashboards that drive informed decision-making for stakeholders at all levels.",
  },
  {
    icon: Database,
    title: "Data Modeling & Database Management",
    description:
      "Build robust data models and optimize database structures for improved performance and data integrity.",
  },
  {
    icon: Brain,
    title: "Machine Learning Insights",
    description:
      "Apply ML techniques including clustering, sentiment analysis, and predictive modeling for advanced analytics.",
  },
  {
    icon: GitBranch,
    title: "ETL Optimization",
    description:
      "Streamline data pipelines and ETL processes to reduce execution times and improve data flow efficiency.",
  },
  {
    icon: Layers,
    title: "Business Intelligence",
    description:
      "Develop comprehensive BI solutions that align technical capabilities with business objectives and KPIs.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              What I Offer
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-3 mb-4">
              Services & <span className="text-gradient">Solutions</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              End-to-end data services to help your organization make data-driven decisions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="group p-8 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover-lift relative overflow-hidden"
                >
                  {/* Background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-primary-foreground" />
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
