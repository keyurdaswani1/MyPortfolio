import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, Linkedin, Send } from "lucide-react";
const ContactSection = ({
  className
}: {
  className?: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  const contactInfo = [{
    icon: Mail,
    label: "Email",
    value: "keyurdaswani14@gmail.com",
    href: "mailto:keyurdaswani14@gmail.com"
  }, {
    icon: Phone,
    label: "Phone",
    value: "+1 (437) 662-8723",
    href: "tel:+14376628723"
  }, {
    icon: Linkedin,
    label: "LinkedIn",
    value: "keyur-daswani",
    href: "https://www.linkedin.com/in/keyur-daswani/"
  }];
  return <section id="contact" className={`py-12 lg:py-16 ${className || ""}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div ref={ref} initial={{
        opacity: 0,
        y: 20
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {
        opacity: 0,
        y: 20
      }} transition={{
        duration: 0.6
      }} className="text-center mb-12">
          <h2 className="text-primary text-sm font-semibold uppercase tracking-wider">
            Contact
          </h2>
          
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {
        opacity: 0,
        y: 30
      }} transition={{
        duration: 0.6,
        delay: 0.2
      }} className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {contactInfo.map((item, index) => <motion.a key={item.label} href={item.href} target={item.label === "LinkedIn" ? "_blank" : undefined} rel={item.label === "LinkedIn" ? "noopener noreferrer" : undefined} initial={{
          opacity: 0,
          y: 20
        }} animate={isInView ? {
          opacity: 1,
          y: 0
        } : {
          opacity: 0,
          y: 20
        }} transition={{
          duration: 0.5,
          delay: 0.3 + index * 0.1
        }} className="group relative p-6 rounded-xl bg-card/50 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">
                    {item.label}
                  </h3>
                  <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                    {item.value}
                  </p>
                </div>
              </div>
              <Send className="absolute top-4 right-4 w-4 h-4 text-muted-foreground/30 group-hover:text-primary/50 transition-colors" />
            </motion.a>)}
        </motion.div>
      </div>
    </section>;
};
export default ContactSection;
