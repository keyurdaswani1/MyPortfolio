import { useRef } from "react";
import { motion, useInView } from "framer-motion";
const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  return <section id="about" className="py-20 lg:py-32 bg-muted/30">
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
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              About Me
            </span>
            
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={isInView ? {
            opacity: 1,
            y: 0
          } : {}} transition={{
            duration: 0.6,
            delay: 0.2
          }} className="text-lg text-foreground leading-relaxed font-normal">
              Over the past <strong>5+ years</strong>, I've partnered with teams at{" "}
              <span className="text-primary font-semibold">IBM</span>,{" "}
              <span className="text-primary font-semibold">Accenture</span> and{" "}
              <span className="text-primary font-semibold">Vizru</span> to design and deliver Data Analytics and Integration solutions that operate at production scale and support critical business decisions. I bring a strong technical foundation in Data Analytics and Integration, combined with a practical understanding of how data is used within Banking & CPG organizations. I enjoy tackling ambiguous problems, uncovering the questions hidden in the data and building solutions that address real business challenges.
            </motion.p>

            <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={isInView ? {
            opacity: 1,
            y: 0
          } : {}} transition={{
            duration: 0.6,
            delay: 0.4
          }} className="text-muted-foreground leading-relaxed text-lg font-medium">
              My work includes designing scalable solutions using <strong className="text-primary">Python, SQL and PySpark</strong>, along with cloud platforms such as <strong>Azure and Snowflake</strong>. I also apply Machine learning and AI to build forecasting and predictive models, helping teams derive meaningful insights from complex datasets. To ensure those insights are accessible, I translate results into clear, intuitive <strong>Power BI dashboards</strong> that enable business users to understand trends, risks and opportunities without needing deep technical expertise.
            </motion.p>

            <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={isInView ? {
            opacity: 1,
            y: 0
          } : {}} transition={{
            duration: 0.6,
            delay: 0.6
          }} className="text-muted-foreground leading-relaxed text-lg">
              What drives me is working through messy data, aligning technical solutions with business needs and delivering insights that are reliable and actionable.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default AboutSection;