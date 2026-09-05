// src/components/Services.tsx
import { Building2, BrickWall, PaintRoller, Home, ArrowRight, Check } from 'lucide-react'
import Link from 'next/link'

const services = [
  { 
    id: 'stavby', 
    title: 'Stavby', 
    description: 'Kompletní stavební práce od menších rekonstrukcí až po realizaci staveb na klíč. Pracujeme s ověřenými materiály a moderními technologiemi.', 
    points: ['Výstavba a stavební úpravy', 'Betonové a základové konstrukce', 'Sádrokartonové práce', 'Kompletní realizace projektů'],
    icon: Building2 
  },
  { 
    id: 'rekonstrukce', 
    title: 'Rekonstrukce (vnitřní práce)', 
    description: 'Kompletní rekonstrukce interiérů bytů, rodinných domů i komerčních prostor s důrazem na kvalitu, přesnost a dlouhou životnost.', 
    points: ['Kompletní úpravy interiérů', 'Štukování, omítky a malířské práce', 'Rekonstrukce koupelen a kuchyní', 'Pokládka podlah, obkladů a dlažeb'],
    icon: BrickWall 
  },
  { 
    id: 'fasady', 
    title: 'Fasády (zateplení)', 
    description: 'Kompletní realizace fasádních systémů a zateplení objektů s důrazem na energetickou úsporu, odolnost a estetický vzhled.', 
    points: ['Kontaktní zateplovací systémy ETICS', 'Zateplení pomocí EPS a minerální vaty', 'Fasádní omítky a finální nátěry', 'Opravy prasklin a renovace fasád'],
    icon: PaintRoller 
  },
  { 
    id: 'strechy', 
    title: 'Střechy', 
    description: 'Opravy, rekonstrukce a modernizace střech pro rodinné domy a garáže. Důraz na kvalitní provedení a ochranu celé stavby.', 
    points: ['Opravy šikmých i plochých střech', 'Výměna a montáž střešní krytiny', 'Klempířské práce a okapové systémy', 'Zateplení střech a půdních prostor'],
    icon: Home 
  }
]

export default function Services() {
  return (
    <section id="sluzby" className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-bg relative border-t border-brand-silver/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-brand-blue uppercase tracking-widest mb-2">Co nabízíme</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Komplexní stavební služby</h3>
          <p className="text-brand-silver/80 text-lg">Spojujeme tradiční řemeslnou pečlivost s moderními technologiemi. Nabízíme řešení, která jsou nejen estetická, ale především trvanlivá a funkční.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service) => (
            <div key={service.id} id={service.id} className="group relative bg-brand-dark/50 border border-brand-silver/10 rounded-2xl p-8 hover:bg-brand-dark transition-all duration-300 hover:border-brand-blue/30 overflow-hidden flex flex-col">
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-blue/10 rounded-full blur-3xl group-hover:bg-brand-blue/20 transition-all duration-500 pointer-events-none" />
              <div className="relative z-10 flex-grow">
                <div className="w-14 h-14 bg-brand-bg border border-brand-silver/10 rounded-xl flex items-center justify-center mb-6 group-hover:border-brand-blue/30 transition-colors">
                  <service.icon className="w-7 h-7 text-brand-blue" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-4">{service.title}</h4>
                <p className="text-brand-silver/80 leading-relaxed mb-6">{service.description}</p>
                <ul className="space-y-2 mb-8">
                  {service.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-brand-silver/70">
                      <Check className="w-4 h-4 text-brand-blue mt-0.5 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative z-10 mt-auto">
                <Link href="#poptavka" className="inline-flex items-center gap-2 text-brand-silver font-medium group-hover:text-brand-blue transition-colors">
                  Zjistit více a poptat <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}