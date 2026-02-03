import { useRef } from "react";
import { motion, useInView } from "framer-motion";
const AboutSection = ({ className }: { className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  return <section id="about" className={`py-12 lg:py-16 bg-background ${className || ''}`}>
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
          }} className="text-lg text-foreground leading-relaxed font-normal italic" style={{ fontFamily: "'Segoe Print', cursive" }}>
              Over the past <strong>5+ years</strong>, I've partnered with teams at{" "}
              <span className="text-primary font-semibold">Vizru</span>,{" "}
              <span className="text-primary font-semibold">IBM</span> & {" "}
              <span className="text-primary font-semibold">Accenture</span>{" "}
              to design <span className="text-primary font-semibold">Data Analytics & Integration solutions</span>{" "} that operate at production scale and support critical business decisions. I bring a strong technical foundation combined with a practical understanding of how data is used within Banking & CPG organizations. I enjoy tackling ambiguous problems, uncovering the questions hidden in the data and building solutions that address real business challenges.
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
          }} className="leading-relaxed text-lg font-medium text-foreground italic" style={{ fontFamily: "'Segoe Print', cursive" }}>
              My work includes designing scalable solutions using <span className="text-primary font-semibold">Machine learning & AI</span>, along with cloud platforms such as <span className="text-primary font-semibold">Azure & Snowflake</span>. I also apply <span className="text-primary font-semibold">Python, PySpark & SQL </span> to build forecasting and predictive models, helping teams derive meaningful insights from complex datasets. To ensure those insights are accessible, I translate results into clear, intuitive <span className="text-primary font-semibold">Power BI dashboards</span> that enable business users to understand trends, risks and opportunities without needing deep technical expertise.
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
          }} className="leading-relaxed text-lg text-foreground italic" style={{ fontFamily: "'Segoe Print', cursive" }}>
              What drives me is working through messy data, aligning technical solutions with business needs and delivering insights that are reliable and actionable.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default AboutSection;
