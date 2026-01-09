import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, Linkedin, Send, Sparkles, MessageCircle, Heart } from "lucide-react";

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
    href: "mailto:keyurdaswani14@gmail.com",
    gradient: "from-rose-500 to-orange-400",
    bgGlow: "bg-rose-500/20"
  }, {
    icon: Phone,
    label: "Phone",
    value: "+1 (437) 662-8723",
    href: "tel:+14376628723",
    gradient: "from-emerald-500 to-teal-400",
    bgGlow: "bg-emerald-500/20"
  }, {
    icon: Linkedin,
    label: "LinkedIn",
    value: "keyur-daswani",
    href: "https://www.linkedin.com/in/keyur-daswani/",
    gradient: "from-blue-500 to-cyan-400",
    bgGlow: "bg-blue-500/20"
  }];

  // Floating decorative elements
  const floatingElements = [
    { icon: Sparkles, x: "10%", y: "20%", delay: 0, size: "w-6 h-6" },
    { icon: MessageCircle, x: "85%", y: "15%", delay: 0.5, size: "w-8 h-8" },
    { icon: Heart, x: "5%", y: "70%", delay: 1, size: "w-5 h-5" },
    { icon: Send, x: "90%", y: "75%", delay: 1.5, size: "w-7 h-7" },
  ];

  return (
    <section id="contact" className={`py-16 lg:py-24 bg-background relative overflow-hidden ${className || ""}`}>
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(var(--primary-rgb),0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(var(--primary-rgb),0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Floating icons */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute text-primary/20"
          style={{ left: element.x, top: element.y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { 
            opacity: 1, 
            scale: 1,
            y: [0, -10, 0],
          } : { opacity: 0, scale: 0 }}
          transition={{
            opacity: { duration: 0.5, delay: element.delay },
            scale: { duration: 0.5, delay: element.delay },
            y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: element.delay }
          }}
        >
          <element.icon className={element.size} />
        </motion.div>
      ))}

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div 
          ref={ref} 
          initial={{ opacity: 0, y: 20 }} 
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} 
          transition={{ duration: 0.6 }} 
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
          >
            <MessageCircle className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">Let's Connect</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Have a project in mind or just want to say hello? I'd love to hear from you!
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} 
          transition={{ duration: 0.6, delay: 0.2 }} 
          className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {contactInfo.map((item, index) => (
            <motion.a 
              key={item.label} 
              href={item.href} 
              target={item.label === "LinkedIn" ? "_blank" : undefined} 
              rel={item.label === "LinkedIn" ? "noopener noreferrer" : undefined} 
              initial={{ opacity: 0, y: 30, rotateX: -15 }} 
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 30, rotateX: -15 }} 
              transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              {/* Card glow effect */}
              <div className={`absolute -inset-1 ${item.bgGlow} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Main card */}
              <div className="relative p-8 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 overflow-hidden">
                {/* Decorative corner */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${item.gradient} opacity-10 rounded-bl-full`} />
                
                <div className="flex flex-col items-center text-center gap-5 relative z-10">
                  {/* Icon container with gradient ring */}
                  <div className="relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-full blur-md opacity-50 group-hover:opacity-80 transition-opacity`} />
                    <div className={`relative w-16 h-16 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg`}>
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                    
                    {/* Animated ring */}
                    <motion.div
                      className={`absolute -inset-2 rounded-full border-2 border-dashed opacity-30`}
                      style={{ borderColor: `var(--primary)` }}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    />
                  </div>
                  
                  <div className="space-y-1">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
                      {item.label}
                    </p>
                    <p className="text-foreground font-semibold group-hover:text-primary transition-colors text-lg">
                      {item.value}
                    </p>
                  </div>
                  
                  {/* Hover arrow */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2 text-primary text-sm font-medium"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                      {item.label === "Email" ? "Send Email" : item.label === "Phone" ? "Call Now" : "View Profile"}
                    </span>
                    <Send className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
                  </motion.div>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Bottom decorative text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12 text-muted-foreground/60 text-sm flex items-center justify-center gap-2"
        >
          <Heart className="w-4 h-4 text-rose-400" />
          Looking forward to connecting with you
          <Heart className="w-4 h-4 text-rose-400" />
        </motion.p>
      </div>
    </section>
  );
};

export default ContactSection;