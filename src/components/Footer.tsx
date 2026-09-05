// src/components/Footer.tsx
import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black border-t border-brand-silver/10 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="space-y-4">
            <Link href="/" className="block">
              <Image 
                src="/logo.svg" 
                alt="Yurij Stav Group Logo" 
                width={270} 
                height={100} 
                className="w-auto h-14 md:h-16 object-contain invert hue-rotate-180 brightness-110"
              />
            </Link>
            <p className="text-brand-silver/80 text-sm leading-relaxed">
              Váš spolehlivý partner ve stavebnictví. Od menších rekonstrukcí až po realizaci staveb na klíč. Kvalita bez kompromisů a poctivé řemeslo.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Navigace</h4>
            <ul className="space-y-2 text-sm text-brand-silver/80">
              <li><Link href="#o-nas" className="hover:text-brand-blue transition-colors">O nás</Link></li>
              <li><Link href="#sluzby" className="hover:text-brand-blue transition-colors">Služby</Link></li>
              <li><Link href="#portfolio" className="hover:text-brand-blue transition-colors">Portfolio</Link></li>
              <li><Link href="#recenze" className="hover:text-brand-blue transition-colors">Recenze</Link></li>
              <li><Link href="#poptavka" className="hover:text-brand-blue transition-colors">Kontakt</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Kontakt</h4>
            <ul className="space-y-3 text-sm text-brand-silver/80">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-brand-blue mt-0.5 shrink-0" />
                <span>+420 608 084 721</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-brand-blue mt-0.5 shrink-0" />
                <span>info@yurijstavgroup.cz</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-blue mt-0.5 shrink-0" />
                <span>Fryčovická 458<br/>Letňany, 199 00 Praha</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Právní informace</h4>
            <ul className="space-y-2 text-sm text-brand-silver/80">
              <li><Link href="/obchodni-podminky" className="hover:text-brand-blue transition-colors">Obchodní podmínky</Link></li>
              <li><Link href="/gdpr" className="hover:text-brand-blue transition-colors">Ochrana osobních údajů (GDPR)</Link></li>
              <li><Link href="/cookies" className="hover:text-brand-blue transition-colors">Nastavení Cookies</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-silver/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-sm text-brand-silver/60">
            &copy; {new Date().getFullYear()} Yurij Stav Group s.r.o. | IČO: 24091812, DIČ: CZ24091812<br className="md:hidden"/> Všechna práva vyhrazena.
          </p>
          <p className="text-sm text-brand-silver/60">
            Vytvořil:  <a href="https://webnamiru.site" target="_blank" rel="noopener noreferrer" className="hover:text-brand-blue transition-colors font-medium">Taras Ishchuk</a>
          </p>
        </div>
      </div>
    </footer>
  )
}