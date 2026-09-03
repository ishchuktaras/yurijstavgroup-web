// src/components/Hero.tsx

import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Image ze stavby s více průhledným gradient overlayem */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpg" 
          alt="Stavební práce pozadí"
          fill
          sizes="100vw" 
          className="object-cover opacity-60 grayscale-50"
          priority
          loading="eager"
        />
        <div className="absolute inset-0 bg-linear-to-b from-brand-bg/40 via-brand-bg/70 to-brand-bg" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-8 drop-shadow-lg">
          Váš spolehlivý partner <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-blue to-brand-blue-light">
            ve stavebnictví
          </span>
        </h1>
        
        <p className="mt-4 text-xl md:text-2xl text-brand-silver max-w-2xl mx-auto mb-10 drop-shadow">
          Od menších rekonstrukcí až po realizaci staveb na klíč. Kvalita bez kompromisů a poctivé řemeslo.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#poptavka" className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white bg-brand-blue hover:bg-brand-blue-light rounded-lg transition-all hover:scale-105">
            Poptat služby
            <ArrowRight className="w-5 h-5" />
          </a>
          <a href="#sluzby" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-brand-silver bg-brand-dark/80 backdrop-blur-sm hover:bg-brand-dark hover:text-white border border-brand-silver/20 rounded-lg transition-all">
            Naše služby
          </a>
        </div>
      </div>
    </section>
  )
}