import { motion } from "motion/react";
import { Video, Calendar } from "lucide-react";

interface VirtualPresenceProps {
  t: any;
}

export default function VirtualPresence({ t }: VirtualPresenceProps) {
  return (
    <section id="virtual" className="py-24 relative bg-navy text-white overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#C5A059,transparent_50%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-serif mb-6">
              {t.virtual.title}
            </h2>
            <p className="text-lg text-white/70 leading-relaxed">
              {t.virtual.description}
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="p-8 bg-white/5 border border-white/10 rounded-sm text-center">
            <Video className="w-10 h-10 text-gold mx-auto mb-6" />
            <h3 className="text-xl font-serif mb-4">Zoom Consultations</h3>
            <p className="text-white/60 text-sm">Face-to-face legal advice from anywhere in the world.</p>
          </div>
          
          <div className="p-8 bg-white/5 border border-white/10 rounded-sm text-center">
            <Calendar className="w-10 h-10 text-gold mx-auto mb-6" />
            <h3 className="text-xl font-serif mb-4">Flexible Scheduling</h3>
            <p className="text-white/60 text-sm">We accommodate all time zones for your convenience.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
