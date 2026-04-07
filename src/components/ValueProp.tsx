import { motion } from "motion/react";
import { CheckCircle2, Plane } from "lucide-react";

interface ValuePropProps {
  t: any;
}

export default function ValueProp({ t }: ValuePropProps) {
  return (
    <section className="py-24 bg-off-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-3 text-gold mb-4">
              <Plane className="w-6 h-6" />
              <span className="text-sm font-bold uppercase tracking-widest">Digital-First Approach</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif text-navy mb-8 leading-tight">
              {t.valueProp.title}
            </h2>
            <p className="text-lg text-navy/70 mb-10 leading-relaxed">
              {t.valueProp.description}
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {t.valueProp.points.map((point: string, idx: number) => (
                <div key={idx} className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                  <span className="text-navy/80 font-medium">{point}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-sm overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1000" 
                alt="Legal Documents"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-10 -left-10 bg-navy p-8 text-white shadow-xl max-w-xs hidden md:block border-l-4 border-gold">
              <p className="text-2xl font-serif mb-2 italic">"Distance is no longer a barrier to your legal security in Greece."</p>
              <p className="text-gold text-sm font-bold uppercase tracking-widest">— Giannakopoulou & Associates</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
