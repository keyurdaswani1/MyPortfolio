import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github, Brain, Shield, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Starbucks Sentiment Analysis",
    description:
      "Analyzed customer reviews using PCA and KMeans clustering to identify optimal retail expansion locations and customer preferences.",
    tags: ["Python", "Scikit-learn", "PCA", "KMeans"],
    icon: Brain,
    color: "from-green-500 to-emerald-600",
    github: "https://github.com/keyurdaswani",
  },
  {
    title: "Credit Risk Analysis",
    description:
      "Built risk classification models using XGBoost and Random Forest to predict loan defaults and assess creditworthiness.",
    tags: ["Python", "XGBoost", "Random Forest", "Machine Learning"],
    icon: Shield,
    color: "from-blue-500 to-indigo-600",
    github: "https://github.com/keyurdaswani",
  },
  {
    title: "Major Crime Indicators (Toronto)",
    description:
      "Developed interactive SQL/DAX dashboards visualizing public safety trends and crime patterns across Toronto neighborhoods.",
    tags: ["Power BI", "SQL", "DAX", "Data Visualization"],
    icon: MapPin,
    color: "from-purple-500 to-pink-600",
    github: "https://github.com/keyurdaswani",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Portfolio
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-3 mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A showcase of data-driven projects demonstrating expertise in analytics, ML, and visualization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="group bg-card rounded-xl border border-border overflow-hidden hover-lift"
                >
                  {/* Project Header */}
                  <div
                    className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 opacity-20 node-pattern" />
                    <Icon className="w-16 h-16 text-primary-foreground/90 group-hover:scale-110 transition-transform duration-300" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github className="w-4 h-4 mr-1" />
                        Code
                      </Button>
                      <Button variant="default" size="sm" className="flex-1">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Demo
                      </Button>
                    </div>
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

export default ProjectsSection;
