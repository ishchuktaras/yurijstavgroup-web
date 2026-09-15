import { CheckCircle2 } from 'lucide-react'
import Image from 'next/image'

export default function About() {
  const principles = [
    "Individuální přístup – každému zákazníkovi nasloucháme a hledáme řešení podle jeho potřeb.",
    "Kvalita bez kompromisů – používáme ověřené materiály a dbáme na precizní provedení.",
    "Poctivé řemeslo – pracujeme zodpovědně s důrazem na dlouhou životnost výsledku."
  ]

  return (
    <section id="o-nas" className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-bg relative border-t border-brand-silver/10 overflow-hidden">
      {/* Jemný glow v pozadí */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative z-10">
            <h2 className="text-sm font-bold text-brand-blue uppercase tracking-widest mb-2">O nás</h2>
            <h3 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
              Váš spolehlivý partner <span className="text-brand-silver/60">ve stavebnictví</span>
            </h3>
            
            <div className="space-y-6 text-brand-silver/80 text-lg leading-relaxed mb-10">
              <p>
                Yurij Stav Group vznikla s cílem poskytovat kvalitní a poctivé stavební práce, na které se mohou zákazníci spolehnout. Od samého začátku stavíme na zodpovědném přístupu, pečlivém provedení a otevřené komunikaci.
              </p>
              <p>
                Naším cílem není jen dokončit zakázku, ale vytvořit výsledek, který bude zákazníkům sloužit dlouhá léta.
              </p>
            </div>

            <div className="space-y-4">
              {principles.map((principle, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="mt-1 bg-brand-blue/10 rounded-full p-1.5 shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-brand-blue" />
                  </div>
                  <span className="text-brand-silver/90 font-medium leading-relaxed">{principle}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Vizuální blok s fotkou a garancemi */}
          <div className="relative lg:ml-10 mt-10 lg:mt-0">
            {/* Dekorativní pozadí */}
            <div className="absolute inset-0 bg-brand-blue/10 rounded-[2.5rem] transform rotate-3 scale-105 transition-transform duration-700 hover:rotate-6" />
            
            <div className="relative bg-brand-dark border border-brand-silver/10 rounded-[2rem] p-8 backdrop-blur-sm overflow-hidden">
              {/* Fotka ilustrující práci */}
              <div className="relative h-64 w-full rounded-2xl overflow-hidden mb-8">
                <Image 
                  src="/o-nas.jpeg" 
                  alt="Tým Yurij Stav Group při práci"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-brand-dark to-transparent opacity-80" />
              </div>

              <div className="grid grid-cols-2 gap-8 relative z-10">
                <div>
                  <div className="text-5xl font-heading font-extrabold text-white mb-2">100%</div>
                  <div className="text-brand-silver text-sm uppercase tracking-wider font-bold">Garance kvality</div>
                </div>
                <div>
                  <div className="text-5xl font-heading font-extrabold text-brand-blue mb-2">24/7</div>
                  <div className="text-brand-silver text-sm uppercase tracking-wider font-bold">Osobní přístup</div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-brand-silver/10 relative z-10">
                <p className="text-brand-silver/90 italic font-medium">
                  &quot;Naším cílem není jen postavit nebo opravit. Naším cílem je vytvořit prostor, ve kterém se vám bude dobře žít a pracovat po celé generace.&quot;
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}