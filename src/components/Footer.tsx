import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-brand-silver/10 pt-20 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="space-y-6 lg:col-span-1">
            <Link href="/" className="block">
              <Image 
                src="/logo.svg" 
                alt="Yurij Stav Group Logo" 
                width={200} 
                height={80} 
                className="w-auto h-12 object-contain invert hue-rotate-180 brightness-110"
              />
            </Link>
            <p className="text-brand-silver/70 text-sm leading-relaxed">
              Váš spolehlivý partner ve stavebnictví. Od menších rekonstrukcí až po realizaci staveb na klíč. Kvalita bez kompromisů a poctivé řemeslo.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Navigace</h4>
            <ul className="space-y-3 text-sm text-brand-silver/80">
              {['O nás', 'Služby', 'Portfolio', 'Recenze'].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase().replace(' ', '-')}`} className="hover:text-brand-blue transition-colors flex items-center group">
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-brand-blue" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Kontakt</h4>
            <ul className="space-y-4 text-sm text-brand-silver/80">
              <li>
                <a href="tel:+420608084721" className="flex items-start gap-3 hover:text-brand-blue transition-colors group">
                  <div className="p-2 rounded-lg bg-brand-bg border border-brand-silver/10 group-hover:border-brand-blue/30 transition-colors">
                    <Phone className="w-4 h-4 text-brand-blue" />
                  </div>
                  <div className="pt-1">
                    <span className="block text-xs text-brand-silver/60 mb-0.5">Zavolejte nám</span>
                    <span className="font-bold text-white">+420 608 084 721</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="mailto:info@yurijstavgroup.cz" className="flex items-start gap-3 hover:text-brand-blue transition-colors group">
                  <div className="p-2 rounded-lg bg-brand-bg border border-brand-silver/10 group-hover:border-brand-blue/30 transition-colors">
                    <Mail className="w-4 h-4 text-brand-blue" />
                  </div>
                  <div className="pt-1">
                    <span className="block text-xs text-brand-silver/60 mb-0.5">Napište nám</span>
                    <span className="font-bold text-white">info@yurijstavgroup.cz</span>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-brand-bg border border-brand-silver/10">
                  <MapPin className="w-4 h-4 text-brand-blue" />
                </div>
                <div className="pt-1 leading-relaxed">
                  <span className="block text-xs text-brand-silver/60 mb-0.5">Sídlo</span>
                  <span className="text-brand-silver/90">Fryčovická 458<br/>Letňany, 199 00 Praha</span>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Právní informace</h4>
            <ul className="space-y-3 text-sm text-brand-silver/80">
              <li><Link href="/obchodni-podminky" className="hover:text-brand-blue transition-colors underline underline-offset-4 decoration-brand-silver/20 hover:decoration-brand-blue">Obchodní podmínky</Link></li>
              <li><Link href="/gdpr" className="hover:text-brand-blue transition-colors underline underline-offset-4 decoration-brand-silver/20 hover:decoration-brand-blue">Ochrana osobních údajů</Link></li>
              <li><Link href="/cookies" className="hover:text-brand-blue transition-colors underline underline-offset-4 decoration-brand-silver/20 hover:decoration-brand-blue">Nastavení Cookies</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-silver/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-sm text-brand-silver/50">
            &copy; {new Date().getFullYear()} Yurij Stav Group s.r.o. | IČO: 24091812, DIČ: CZ24091812<br className="md:hidden"/> Všechna práva vyhrazena.
          </p>
          <p className="text-sm text-brand-silver/50">
            Design & kód: <a href="https://www.webnamiru.site" target="_blank" rel="noopener noreferrer" className="hover:text-brand-blue transition-colors font-bold text-brand-silver/70">Taras Ishchuk</a>
          </p>
        </div>
      </div>
    </footer>
  )
}