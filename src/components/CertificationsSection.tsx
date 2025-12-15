import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const MicrosoftIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
    <path d="M0 0h11.5v11.5H0V0zm12.5 0H24v11.5H12.5V0zM0 12.5h11.5V24H0V12.5zm12.5 0H24V24H12.5V12.5z"/>
  </svg>
);

const certifications = [
  {
    name: "Power BI Developer Associate",
    code: "PL-300",
    color: "from-amber-500 to-yellow-500",
    url: null,
  },
  {
    name: "Azure Fundamentals",
    code: "AZ-900",
    color: "from-blue-500 to-cyan-400",
    url: "https://learn.microsoft.com/en-us/users/keyurdaswani-9486/credentials/certification/azure-fundamentals",
  },
  {
    name: "Azure Data Professional",
    code: "DP-900",
    color: "from-purple-500 to-indigo-500",
    url: "https://learn.microsoft.com/en-us/users/keyurdaswani-9486/credentials/certification/azure-data-fundamentals",
  },
  {
    name: "Azure AI Fundamentals",
    code: "AI-900",
    color: "from-pink-500 to-rose-500",
    url: "https://learn.microsoft.com/en-ca/users/keyurdaswani-9486/credentials/5e490f2b3bcc5d60",
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Microsoft certified professional credentials
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.code}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              {cert.url ? (
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative p-6 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover-lift text-center h-full block cursor-pointer"
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${cert.color} p-3 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <MicrosoftIcon />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1 text-sm leading-tight">
                    {cert.name}
                  </h3>
                  <span className="text-xs font-mono text-primary font-medium flex items-center justify-center gap-1">
                    {cert.code}
                    <ExternalLink className="w-3 h-3" />
                  </span>
                </a>
              ) : (
                <div className="relative p-6 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover-lift text-center h-full">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${cert.color} p-3 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <MicrosoftIcon />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1 text-sm leading-tight">
                    {cert.name}
                  </h3>
                  <span className="text-xs font-mono text-primary font-medium">
                    {cert.code}
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
