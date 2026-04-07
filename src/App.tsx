import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ValueProp from "./components/ValueProp";
import Services from "./components/Services";
import VirtualPresence from "./components/VirtualPresence";
import SuccessStories from "./components/SuccessStories";
import Footer from "./components/Footer";
import { translations } from "./translations";

export default function App() {
  const [lang, setLang] = useState<'en' | 'el'>('en');
  const t = translations[lang];

  // Smooth scroll for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor && anchor.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = anchor.getAttribute('href')?.substring(1);
        const targetElement = document.getElementById(targetId || '');
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar lang={lang} setLang={setLang} t={t} />
      
      <main className="flex-grow">
        <Hero t={t} />
        <ValueProp t={t} />
        <Services t={t} />
        <SuccessStories t={t} />
        <VirtualPresence t={t} />
      </main>

      <Footer t={t} />
    </div>
  );
}
