import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, Award, TrendingUp } from "lucide-react";
const stats = [{
  icon: Briefcase,
  value: 5,
  suffix: "+",
  label: "Years Experience"
}, {
  icon: Award,
  value: 30,
  suffix: "+",
  label: "End-to-End Projects Delivered"
}];
const AnimatedCounter = ({
  value,
  suffix
}: {
  value: number;
  suffix: string;
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, {
    once: true
  });
  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [value, isInView]);
  return <span ref={ref} className="text-4xl lg:text-5xl font-bold text-gradient">
      {count}
      {suffix}
    </span>;
};
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
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              About Me
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-3 mb-4"><span className="text-gradient">Strategic Insights</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A results-driven Data Professional with expertise in transforming complex data
              into actionable business strategies.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Bio */}
            <motion.div initial={{
            opacity: 0,
            x: -30
          }} animate={isInView ? {
            opacity: 1,
            x: 0
          } : {}} transition={{
            duration: 0.6,
            delay: 0.2
          }} className="space-y-6">
              <p className="text-lg text-foreground leading-relaxed">
                With over <strong>5 years of experience</strong> at leading organizations like{" "}
                <span className="text-primary font-semibold">IBM</span> and{" "}
                <span className="text-primary font-semibold">Accenture</span>, I specialize in
                combining technical depth with analytical storytelling.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My expertise spans across <strong>SQL, Power BI, Python, and SAP S/4HANA</strong>,
                enabling me to deliver comprehensive data solutions from ETL optimization to
                advanced machine learning implementations.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I am passionate about leveraging data to drive business decisions, improve
                forecasting accuracy, and optimize operational costs through innovative
                analytics solutions.
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                {["Data Analytics", "ETL Optimization", "Machine Learning", "BI Reporting"].map(skill => <span key={skill} className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
                      {skill}
                    </span>)}
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div initial={{
            opacity: 0,
            x: 30
          }} animate={isInView ? {
            opacity: 1,
            x: 0
          } : {}} transition={{
            duration: 0.6,
            delay: 0.4
          }} className="grid gap-6">
              {stats.map((stat, index) => {
              const Icon = stat.icon;
              return <motion.div key={stat.label} initial={{
                opacity: 0,
                y: 20
              }} animate={isInView ? {
                opacity: 1,
                y: 0
              } : {}} transition={{
                duration: 0.5,
                delay: 0.5 + index * 0.1
              }} className="flex items-center gap-6 p-6 bg-card rounded-xl shadow-card border border-border hover-lift">
                    <div className="w-14 h-14 rounded-lg bg-gradient-primary flex items-center justify-center shrink-0">
                      <Icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <div>
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                      <p className="text-muted-foreground mt-1">{stat.label}</p>
                    </div>
                  </motion.div>;
            })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default AboutSection;