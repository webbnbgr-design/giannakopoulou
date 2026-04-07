import { motion } from "motion/react";
import { Home, Users, FileText, ShieldCheck } from "lucide-react";

interface ServicesProps {
  t: any;
}

const icons = [FileText, Home, Users, ShieldCheck];

export default function Services({ t }: ServicesProps) {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-serif text-navy mb-6">
            {t.services.title}
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.services.items.map((service: any, idx: number) => {
            const Icon = icons[idx];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-8 bg-off-white border border-gold/10 hover:border-gold/40 transition-all duration-300 hover:shadow-xl"
              >
                <div className="w-14 h-14 bg-navy text-gold flex items-center justify-center mb-6 group-hover:bg-gold group-hover:text-navy transition-colors">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-serif text-navy mb-4 group-hover:text-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-navy/60 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
