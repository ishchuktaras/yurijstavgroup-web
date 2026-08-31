import { CheckCircle2 } from 'lucide-react'

export default function About() {
  const principles = [
    "Kvalitně odvedená práce bez kompromisů",
    "Spolehlivé a transparentní ceny",
    "Osobní přístup a dodržování termínů",
    "Využití moderních technologií a postupů"
  ]

  return (
    <section id="o-nas" className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-bg relative border-t border-brand-silver/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Textová část */}
          <div>
            <h2 className="text-sm font-bold text-brand-blue uppercase tracking-widest mb-2">O nás</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Nová firma, <span className="text-brand-silver">desítky let zkušeností</span>
            </h3>
            
            <div className="space-y-6 text-brand-silver/80 text-lg leading-relaxed">
              <p>
                Ačkoliv je Yurij Stav Group s.r.o. na trhu relativně novým jménem, nestojí za ním žádní nováčci. Firma vznikla spojením sil a dlouholetých zkušeností Michala a Yurije z předchozích úspěšných stavebních projektů.
              </p>
              <p>
                Rozhodli jsme se spojit naše dovednosti s jasným cílem: nabídnout zákazníkům špičkovou kvalitu stavebních prací, spolehlivost a férové ceny za využití moderních technologií. Zakládáme si na tom, že co slíbíme, to platí.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {principles.map((principle, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-brand-blue shrink-0" />
                  <span className="text-brand-silver font-medium">{principle}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Vizuální prvek / Statistiky */}
          <div className="relative">
            <div className="absolute inset-0 bg-brand-blue/5 rounded-3xl transform rotate-3 scale-105 transition-transform duration-500" />
            <div className="relative bg-brand-dark border border-brand-silver/10 rounded-3xl p-8 backdrop-blur-sm">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-5xl font-extrabold text-white mb-2">100%</div>
                  <div className="text-brand-silver text-sm uppercase tracking-wider">Garance kvality</div>
                </div>
                <div>
                  <div className="text-5xl font-extrabold text-brand-blue mb-2">24/7</div>
                  <div className="text-brand-silver text-sm uppercase tracking-wider">Osobní přístup</div>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-brand-silver/10">
                <p className="text-brand-silver/80 italic">
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