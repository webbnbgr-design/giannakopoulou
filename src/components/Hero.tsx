import { motion } from "motion/react";

interface HeroProps {
  t: any;
}

export default function Hero({ t }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1555854816-802f188090e4?auto=format&fit=crop&q=80&w=2000" 
          alt="Athens Modern Architecture"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-navy/85 backdrop-blur-[1px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-3 py-1 bg-gold/20 border border-gold/30 text-gold text-xs font-bold uppercase tracking-widest mb-6">
              High-End Boutique Law Firm
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-tight mb-8">
              {t.hero.title}
            </h1>
            <p className="text-lg md:text-xl text-white/80 font-light mb-10 leading-relaxed">
              {t.hero.subtitle}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-gold/5 blur-3xl rounded-full -mb-20 -mr-20"></div>
    </section>
  );
}
