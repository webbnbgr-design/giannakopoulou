import { motion } from "motion/react";
import { Quote } from "lucide-react";

interface SuccessStoriesProps {
  t: any;
}

export default function SuccessStories({ t }: SuccessStoriesProps) {
  return (
    <section className="py-24 bg-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-navy mb-6">
            {t.success.title}
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {t.success.items.map((item: any, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-10 shadow-sm border-t-4 border-gold relative"
            >
              <Quote className="w-8 h-8 text-gold/20 absolute top-6 right-6" />
              <p className="text-navy/80 italic mb-8 leading-relaxed">
                "{item.quote}"
              </p>
              <p className="text-navy font-bold uppercase tracking-widest text-xs">
                {item.author}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
