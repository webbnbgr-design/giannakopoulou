import { motion } from "motion/react";
import { Globe, Menu, X } from "lucide-react";
import { useState } from "react";

interface NavbarProps {
  lang: 'en' | 'el';
  setLang: (lang: 'en' | 'el') => void;
  t: any;
}

export default function Navbar({ lang, setLang, t }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex flex-col">
            <span className="text-xl font-serif font-bold tracking-tight text-navy">
              GIANNAKOPOULOU
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-medium">
              & ASSOCIATES | LAW OFFICES
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-sm font-medium text-navy/80 hover:text-gold transition-colors">
              {t.nav.services}
            </a>
            <a href="#about" className="text-sm font-medium text-navy/80 hover:text-gold transition-colors">
              {t.nav.about}
            </a>
            <a href="#contact" className="text-sm font-medium text-navy/80 hover:text-gold transition-colors">
              {t.nav.contact}
            </a>
            <button 
              onClick={() => setLang(lang === 'en' ? 'el' : 'en')}
              className="flex items-center space-x-1 text-sm font-medium text-navy/80 hover:text-gold transition-colors uppercase"
            >
              <Globe className="w-4 h-4" />
              <span>{lang === 'en' ? 'EL' : 'EN'}</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button 
              onClick={() => setLang(lang === 'en' ? 'el' : 'en')}
              className="text-navy/80 hover:text-gold transition-colors uppercase text-xs font-bold"
            >
              {lang === 'en' ? 'EL' : 'EN'}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-navy">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-gold/20 px-4 pt-2 pb-6 space-y-4"
        >
          <a href="#services" className="block text-base font-medium text-navy" onClick={() => setIsOpen(false)}>
            {t.nav.services}
          </a>
          <a href="#about" className="block text-base font-medium text-navy" onClick={() => setIsOpen(false)}>
            {t.nav.about}
          </a>
          <a href="#contact" className="block text-base font-medium text-navy" onClick={() => setIsOpen(false)}>
            {t.nav.contact}
          </a>
        </motion.div>
      )}
    </nav>
  );
}
