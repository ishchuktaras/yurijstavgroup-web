import { Building2, BrickWall, PaintRoller, Home, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const services = [
  { id: 'stavby', title: 'Stavby na klíč', description: 'Kompletní realizace novostaveb od zemních prací a základové desky až po finální úpravy interiéru. Využíváme moderní stavební materiály a přesné technologické postupy pro maximální energetickou úspornost.', icon: Building2 },
  { id: 'rekonstrukce', title: 'Rekonstrukce', description: 'Celkové i částečné rekonstrukce bytových jader, domů a komerčních prostor. Kompletní přeměna zastaralých dispozic na moderní a funkční prostory s důrazem na detail.', icon: BrickWall },
  { id: 'fasady', title: 'Fasády a zateplení', description: 'Certifikované zateplovací systémy a moderní fasádní omítky. Zlepšete vzhled své nemovitosti a získejte výraznou úsporu nákladů na vytápění díky špičkové izolaci.', icon: PaintRoller },
  { id: 'strechy', title: 'Střechy', description: 'Komplexní realizace a opravy střech. Tesařské, pokrývačské a klempířské práce z kvalitních materiálů, které vaši stavbu ochrání před jakýmikoliv povětrnostními vlivy po desítky let.', icon: Home }
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
            <div key={service.id} id={service.id} className="group relative bg-brand-dark/50 border border-brand-silver/10 rounded-2xl p-8 hover:bg-brand-dark transition-all duration-300 hover:border-brand-blue/30 overflow-hidden">
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-blue/10 rounded-full blur-3xl group-hover:bg-brand-blue/20 transition-all duration-500 pointer-events-none" />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-brand-bg border border-brand-silver/10 rounded-xl flex items-center justify-center mb-6 group-hover:border-brand-blue/30 transition-colors">
                  <service.icon className="w-7 h-7 text-brand-blue" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-4">{service.title}</h4>
                <p className="text-brand-silver/80 leading-relaxed mb-8">{service.description}</p>
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