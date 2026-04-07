interface FooterProps {
  t: any;
}

export default function Footer({ t }: FooterProps) {
  return (
    <footer id="contact" className="bg-white pt-20 pb-10 border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div>
            <div className="flex flex-col mb-6">
              <span className="text-2xl font-serif font-bold tracking-tight text-navy">
                GIANNAKOPOULOU
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-medium">
                & ASSOCIATES | LAW OFFICES
              </span>
            </div>
            <p className="text-navy/60 text-sm leading-relaxed italic">
              "Greek lawyers serving the interests of the Greek Omogenia around the world."
            </p>
          </div>

          <div>
            <h4 className="text-navy font-bold uppercase tracking-widest text-xs mb-6">Contact Details</h4>
            <ul className="space-y-4 text-navy/70 text-sm">
              <li>{t.footer.address}</li>
              <li>{t.footer.phone}</li>
              <li>{t.footer.email}</li>
            </ul>
          </div>

          <div>
            <h4 className="text-navy font-bold uppercase tracking-widest text-xs mb-6">Legal</h4>
            <ul className="space-y-4 text-navy/70 text-sm">
              <li><a href="#" className="hover:text-gold transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Disclaimer</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gold/10 text-center">
          <p className="text-navy/40 text-xs">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
