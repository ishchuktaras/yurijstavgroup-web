// src/components/Hero.tsx
import { ArrowRight, ChevronDown } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Image ze stavby - opravený gradient z 'bg-linear-to' na 'bg-gradient-to' */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpeg" 
          alt="Stavební práce pozadí"
          fill
          sizes="100vw" 
          className="object-cover opacity-60 grayscale"
          priority
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/40 via-brand-bg/70 to-brand-bg" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center mt-[-5vh]">
        {/* Přidán font-heading pro lepší vizuální dopad nadpisu */}
        <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-white tracking-tight mb-8 drop-shadow-lg">
          Stavíme vaši <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-blue-light">
            budoucnost
          </span>
        </h1>
        
        <p className="mt-4 text-xl md:text-2xl text-brand-silver max-w-2xl mx-auto mb-10 drop-shadow">
          Od menších rekonstrukcí až po realizaci staveb na klíč. Kvalita bez kompromisů a poctivé řemeslo.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#poptavka" className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white bg-brand-blue hover:bg-brand-blue-light rounded-xl transition-all hover:scale-105 shadow-lg shadow-brand-blue/20">
            Poptat služby
            <ArrowRight className="w-5 h-5" />
          </a>
          <a href="#sluzby" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-brand-silver bg-brand-dark/80 backdrop-blur-sm hover:bg-brand-silver/10 hover:text-white border border-brand-silver/20 rounded-xl transition-all">
            Naše služby
          </a>
        </div>
      </div>

      {/* Skákající šipka nabádající ke scrollování */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <a href="#sluzby" aria-label="Pokračovat dolů">
          <ChevronDown className="w-10 h-10 text-brand-silver/50 hover:text-white transition-colors" />
        </a>
      </div>
    </section>
  )
}