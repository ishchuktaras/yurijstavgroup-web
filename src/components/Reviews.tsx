import { Star, Quote } from 'lucide-react'

const reviews = [
  { id: 1, name: "Jan Novák", project: "Kompletní rekonstrukce bytu", text: "S firmou Yurij Stav Group jsme realizovali kompletní rekonstrukci bytu 3+1. Vše proběhlo přesně podle domluvy. Cením si především dodržení rozpočtu, čistoty na staveništi a perfektní komunikace během celé stavby.", rating: 5 },
  { id: 2, name: "Petra Svobodová", project: "Zateplení fasády", text: "Hledali jsme spolehlivou firmu na fasádu a zateplení našeho rodinného domu. Pánové z Yurij Stav pracovali rychle, precizně a s ohledem na detaily. Výsledek předčil naše očekávání.", rating: 5 },
  { id: 3, name: "Tomáš Dvořák", project: "Nová střecha na klíč", text: "Profesionální přístup od prvního nacenění až po předání hotové střechy. Velmi oceňuji, že si poradili i s nečekanými komplikacemi u starého krovu, aniž by to výrazně protáhlo termín. Doporučuji.", rating: 5 }
]

export default function Reviews() {
  return (
    <section id="recenze" className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-bg relative border-t border-brand-silver/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-brand-blue uppercase tracking-widest mb-2">Recenze</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Co o nás říkají klienti</h3>
          <p className="text-brand-silver/80 text-lg">Nejlepší vizitkou naší práce jsou spokojení zákazníci. Přečtěte si, jak hodnotí spolupráci s námi.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-brand-dark/50 border border-brand-silver/10 rounded-2xl p-8 hover:border-brand-blue/30 transition-colors relative">
              <Quote className="absolute top-6 right-6 w-10 h-10 text-brand-blue/10" />
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-brand-blue text-brand-blue" />
                ))}
              </div>
              <p className="text-brand-silver/90 italic leading-relaxed mb-8 relative z-10">&quot;{review.text}&quot;</p>
              <div className="mt-auto border-t border-brand-silver/10 pt-4">
                <p className="text-white font-bold">{review.name}</p>
                <p className="text-brand-silver/60 text-sm">{review.project}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}