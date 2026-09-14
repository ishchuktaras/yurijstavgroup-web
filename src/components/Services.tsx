'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Check, X } from 'lucide-react'
import Image from 'next/image'

// --- DATA SLUŽEB S ODKAZY NA EXTERNÍ SVG IKONY ---
const services = [
  { 
    id: 'stavby', 
    title: 'Stavby', 
    shortDesc: 'Kompletní stavební práce od menších rekonstrukcí až po realizaci staveb na klíč.', 
    fullDescription: 'Nabízíme kompletní stavební práce od menších rekonstrukcí až po realizaci staveb na klíč. Provádíme výstavbu a rekonstrukce rodinných domů, bytů a komerčních prostor, včetně zateplení fasád, omítek, sádrokartonových konstrukcí, betonových prací a dokončovacích prací.\n\nPracujeme s kvalitními a ověřenými materiály od renomovaných výrobců. Při realizaci využíváme moderní stavební technologie a dbáme na správné pracovní postupy, aby byl výsledek nejen estetický, ale také dlouhodobě odolný a funkční.',
    points: [
      'rekonstrukce bytů a rodinných domů',
      'výstavba a stavební úpravy objektů',
      'zateplení fasád (EPS, minerální vata, XPS)',
      'omítky a fasádní systémy',
      'betonové práce a základové konstrukce',
      'sádrokartonové práce',
      'pokládka obkladů a dlažeb',
      'dokončovací práce interiérů a exteriérů',
      'kompletní realizace projektů podle požadavků zákazníka'
    ],
    icon: '/icons/stavby.svg' 
  },
  { 
    id: 'rekonstrukce', 
    title: 'Rekonstrukce (vnitřní práce)', 
    shortDesc: 'Kompletní rekonstrukce interiérů bytů, rodinných domů i komerčních prostor.', 
    fullDescription: 'Nabízíme kompletní rekonstrukce interiérů bytů, rodinných domů i komerčních prostor. Provádíme práce od přípravy a demontáže původních konstrukcí až po finální dokončení interiéru. Každému projektu věnujeme individuální přístup s důrazem na kvalitu, přesnost a dlouhou životnost.\n\nPoužíváme kvalitní materiály a moderní pracovní postupy, aby byl každý interiér nejen krásný, ale také praktický a odolný. Naším cílem je vytvořit prostor, který bude odpovídat představám zákazníka a bude sloužit dlouhá léta.',
    points: [
      'rekonstrukce bytů a rodinných domů',
      'kompletní úpravy interiérů',
      'sádrokartonové konstrukce, příčky a podhledy',
      'štukování, omítky a stěrkování stěn',
      'malířské práce',
      'pokládku podlah (vinyl, laminát, dlažba)',
      'obklady a dlažby v koupelnách a kuchyních',
      'rekonstrukce koupelen a kuchyní',
      'montáž dveří a dokončovací práce',
      'drobné stavební úpravy a opravy'
    ],
    icon: '/icons/rekonstrukce.svg' 
  },
  { 
    id: 'fasady', 
    title: 'Fasády (zateplení)', 
    shortDesc: 'Kompletní realizace fasádních systémů a zateplení rodinných domů a objektů.', 
    fullDescription: 'Nabízíme kompletní realizaci fasádních systémů a zateplení rodinných domů, bytových i komerčních objektů. Provádíme odbornou montáž tepelných izolací, povrchové úpravy fasád a renovace stávajících fasád s důrazem na energetickou úsporu, odolnost a estetický vzhled.\n\nPoužíváme kvalitní materiály od ověřených výrobců a dodržujeme správné technologické postupy, aby fasáda poskytovala dlouhodobou ochranu objektu, snížila náklady na vytápění a zlepšila vzhled celé nemovitosti.',
    points: [
      'kontaktní zateplovací systémy ETICS',
      'zateplení fasád pomocí EPS (bílý a šedý polystyren)',
      'zateplení pomocí minerální vaty',
      'použití XPS pro soklové části a namáhaná místa',
      'lepení a kotvení izolačních desek',
      'armovací vrstvu se sklotextilní síťovinou',
      'fasádní omítky (silikonové, silikátové, akrylátové)',
      'finální nátěry a barevné úpravy fasád',
      'opravy prasklin a renovace starších fasád',
      'montáž fasádních detailů kolem oken, rohů a soklů'
    ],
    icon: '/icons/fasady.svg' 
  },
  { 
    id: 'strechy', 
    title: 'Střechy', 
    shortDesc: 'Kompletní střešní práce, opravy, rekonstrukce a modernizace střech.', 
    fullDescription: 'Nabízíme kompletní střešní práce pro rodinné domy, garáže i další objekty. Provádíme opravy, rekonstrukce a modernizace střech s důrazem na kvalitní provedení, dlouhou životnost a ochranu celé stavby.\n\nPoužíváme kvalitní materiály a moderní technologie, které zajišťují bezpečnost, energetickou úsporu a dlouhou životnost střechy. Každou realizaci přizpůsobujeme konkrétnímu objektu a požadavkům zákazníka.',
    points: [
      'opravy a rekonstrukce šikmých i plochých střech',
      'výměnu a montáž střešní krytiny',
      'pokládku tašek, plechových krytin a dalších střešních materiálů',
      'montáž střešních fólií a hydroizolačních vrstev',
      'zateplení střech a půdních prostor',
      'montáž střešních oken',
      'opravy a montáž okapových systémů',
      'klempířské práce (oplechování, lemování, detaily střech)',
      'izolace a ochranu střech proti vlhkosti'
    ],
    icon: '/icons/strechy.svg' 
  }
]

export default function Services() {
  const [activeService, setActiveService] = useState<typeof services[0] | null>(null)

  useEffect(() => {
    if (activeService) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = 'auto'
    return () => { document.body.style.overflow = 'auto' }
  }, [activeService])

  const scrollToContact = () => {
    setActiveService(null)
    setTimeout(() => {
      document.getElementById('poptavka')?.scrollIntoView({ behavior: 'smooth' })
    }, 300)
  }

  return (
    <section id="sluzby" className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-bg relative border-t border-brand-silver/10">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-brand-blue uppercase tracking-widest mb-2">Co nabízíme</h2>
          <h3 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">Komplexní stavební služby</h3>
          <p className="text-brand-silver/80 text-lg leading-relaxed">
            Spojujeme tradiční řemeslnou pečlivost s moderními technologiemi. Nabízíme řešení, která jsou nejen estetická, ale především trvanlivá a funkční.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 relative z-10">
          {services.map((service) => (
            <motion.div 
              key={service.id}
              layoutId={`card-${service.id}`}
              onClick={() => setActiveService(service)}
              className="group cursor-pointer bg-brand-dark/40 backdrop-blur-sm border border-brand-silver/10 rounded-3xl p-8 hover:bg-brand-dark hover:border-brand-blue/40 transition-colors flex flex-col relative overflow-hidden"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl group-hover:bg-brand-blue/15 transition-all duration-700 pointer-events-none" />
              
              <motion.div layoutId={`icon-${service.id}`} className="w-16 h-16 bg-brand-bg border border-brand-silver/10 rounded-2xl flex items-center justify-center mb-8 group-hover:border-brand-blue/30 group-hover:bg-brand-blue/10 transition-colors duration-300">
                <Image 
                  src={service.icon} 
                  alt={service.title} 
                  width={32} 
                  height={32}
                  className="group-hover:scale-110 transition-transform duration-300" 
                />
              </motion.div>
              
              <motion.h4 layoutId={`title-${service.id}`} className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
                {service.title}
              </motion.h4>
              
              <motion.p layoutId={`desc-${service.id}`} className="text-brand-silver/80 leading-relaxed mb-8">
                {service.shortDesc}
              </motion.p>
              
              <div className="mt-auto pt-6 border-t border-brand-silver/10 flex items-center text-brand-blue font-bold group-hover:text-white transition-colors">
                Detaily služby a realizace 
                <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      <AnimatePresence>
        {activeService && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveService(null)}
              className="fixed inset-0 bg-brand-bg/90 backdrop-blur-md z-[60]"
            />
            
            <div className="fixed inset-0 flex items-center justify-center z-[70] p-4 pointer-events-none">
              <motion.div 
                layoutId={`card-${activeService.id}`}
                className="bg-brand-dark border border-brand-silver/20 rounded-[2rem] w-full max-w-3xl max-h-[90vh] overflow-y-auto pointer-events-auto relative shadow-2xl shadow-brand-blue/10 scrollbar-hide"
              >
                <button 
                  onClick={() => setActiveService(null)}
                  className="absolute top-6 right-6 w-10 h-10 bg-brand-bg border border-brand-silver/20 rounded-full flex items-center justify-center text-brand-silver hover:text-white hover:border-brand-blue/50 transition-colors z-10"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="p-8 md:p-12">
                  <motion.div layoutId={`icon-${activeService.id}`} className="w-20 h-20 bg-brand-blue/10 border border-brand-blue/20 rounded-3xl flex items-center justify-center mb-8">
                    <Image 
                      src={activeService.icon} 
                      alt={activeService.title} 
                      width={40} 
                      height={40} 
                    />
                  </motion.div>
                  
                  <motion.h4 layoutId={`title-${activeService.id}`} className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
                    {activeService.title}
                  </motion.h4>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="space-y-8"
                  >
                    <div className="text-brand-silver leading-relaxed text-lg space-y-4">
                      {activeService.fullDescription.split('\n\n').map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                    </div>

                    <div className="bg-brand-bg/50 border border-brand-silver/10 rounded-2xl p-6">
                      <h5 className="text-white font-bold mb-5 uppercase tracking-wider text-sm">Naše služby zahrnují zejména:</h5>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {activeService.points.map((point, i) => (
                          <li key={i} className="flex items-start gap-3 text-brand-silver/90">
                            <div className="mt-1 bg-brand-blue/20 rounded-full p-1 shrink-0">
                              <Check className="w-4 h-4 text-brand-blue" />
                            </div>
                            <span className="leading-snug">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-6 flex flex-col sm:flex-row gap-4">
                      <button 
                        onClick={scrollToContact}
                        className="bg-brand-blue hover:bg-brand-blue-light text-white font-bold h-14 px-8 rounded-xl text-lg transition-all hover:scale-[1.02] shadow-lg shadow-brand-blue/20 flex items-center justify-center"
                      >
                        Mám zájem o tuto službu <ArrowRight className="ml-2 w-5 h-5" />
                      </button>
                      <button 
                        onClick={() => setActiveService(null)}
                        className="bg-transparent border border-brand-silver/20 text-brand-silver hover:text-white hover:bg-white/5 font-bold h-14 px-8 rounded-xl transition-colors"
                      >
                        Zavřít detail
                      </button>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}