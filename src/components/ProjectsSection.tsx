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
const ProjectsSection = ({ className }: { className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  return <section id="projects" className={`py-12 lg:py-16 bg-muted/30 ${className || ''}`}>
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

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <motion.a
                key={project.title}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="group relative rounded-xl overflow-hidden cursor-pointer hover-lift"
              >
                {/* Image */}
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                  {/* Always visible overlay with title */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                  
                  {/* Title always visible */}
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <h3 className="text-sm font-semibold text-foreground text-center leading-tight">
                      {project.title}
                    </h3>
                    <div className="flex items-center justify-center gap-1 text-xs text-primary mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Github className="w-3 h-3" />
                      <span>View Project</span>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
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