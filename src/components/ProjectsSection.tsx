import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import starbucksImage from "@/assets/starbucks-sentiment.png";
import creditRiskImage from "@/assets/credit-risk-analysis.png";
import torontoCrimeImage from "@/assets/toronto-crime-indicators.png";
import fraudDetectionImage from "@/assets/fraud-detection.png";
const projects = [{
  title: "Starbucks Sentiment Analysis",
  description: "Analyzed customer reviews using PCA and KMeans clustering to identify optimal retail expansion locations and customer preferences.",
  tags: ["Python", "Scikit-learn", "PCA", "KMeans"],
  image: starbucksImage,
  github: "https://github.com/keyurdaswani1/starbucks_sentiment_analysis"
}, {
  title: "Credit Risk Analysis",
  description: "Built risk classification models using XGBoost and Random Forest to predict loan defaults and assess creditworthiness.",
  tags: ["Python", "XGBoost", "Random Forest", "Machine Learning"],
  image: creditRiskImage,
  github: "https://github.com/keyurdaswani1/credit-risk-analysis"
}, {
  title: "Major Crime Indicators (Toronto)",
  description: "Developed interactive SQL/DAX dashboards visualizing public safety trends and crime patterns across Toronto neighborhoods.",
  tags: ["Power BI", "SQL", "DAX", "Data Visualization"],
  image: torontoCrimeImage,
  github: "https://github.com/keyurdaswani1/Major_Crime_Indicators_Capstone_Project"
}, {
  title: "Fraud Detection Analysis",
  description: "Built machine learning models to detect fraudulent transactions using anomaly detection and classification techniques.",
  tags: ["Python", "Machine Learning", "Anomaly Detection", "Classification"],
  image: fraudDetectionImage,
  github: "https://github.com/keyurdaswani1/Fraud-Detection-Analytics/"
}];
const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  return <section id="projects" className="py-20 lg:py-32 bg-muted/30">
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
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">PROJECTS</span>
            
            
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
            return <motion.div key={project.title} initial={{
              opacity: 0,
              y: 30
            }} animate={isInView ? {
              opacity: 1,
              y: 0
            } : {}} transition={{
              duration: 0.5,
              delay: 0.1 * index
            }} className="group bg-card rounded-xl border border-border overflow-hidden hover-lift">
                  {/* Project Header */}
                  <div className="h-48 relative overflow-hidden">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map(tag => <span key={tag} className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full">
                          {tag}
                        </span>)}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3">
                      <Button variant="outline" size="sm" className="w-full" onClick={() => window.open(project.github, '_blank')}>
                        <Github className="w-4 h-4 mr-1" />
                        View on GitHub
                      </Button>
                    </div>
                  </div>
                </motion.div>;
          })}
          </div>

          {/* View All Projects on GitHub */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={isInView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          duration: 0.5,
          delay: 0.4
        }} className="text-center mt-12">
            <Button variant="outline" size="lg" onClick={() => window.open('https://github.com/keyurdaswani1?tab=repositories', '_blank')}>
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>;
};
export default ProjectsSection;