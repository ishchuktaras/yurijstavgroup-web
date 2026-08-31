// src/components/Portfolio.tsx

import { ImageIcon, ArrowRight } from 'lucide-react'
import Image from 'next/image' // Přidaný import Next.js Image komponenty

// Zatím ukázková data, později je budeme tahat z databáze/CMS
const projects = [
  {
    id: 1,
    title: 'Kompletní rekonstrukce bytu 3+1',
    category: 'Rekonstrukce',
    imageAfter: '/hero-bg.jpg', // Zatím použijeme fotku ze stavby jako ukázku
  },
  {
    id: 2,
    title: 'Nová fasáda rodinného domu',
    category: 'Fasády',
    imageAfter: '/hero-bg.jpg',
  },
  {
    id: 3,
    title: 'Realizace střechy na klíč',
    category: 'Střechy',
    imageAfter: '/hero-bg.jpg',
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-bg relative border-t border-brand-silver/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-brand-blue uppercase tracking-widest mb-2">Portfolio</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Naše nedávné realizace
            </h3>
            <p className="text-brand-silver/80 text-lg">
              Podívejte se na výsledky naší práce. Od drobných úprav až po kompletní stavby.
            </p>
          </div>
          
          <button className="hidden md:inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-brand-silver bg-brand-dark hover:bg-brand-dark/80 hover:text-white border border-brand-silver/20 rounded-lg transition-all">
            Zobrazit vše
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group relative rounded-2xl overflow-hidden bg-brand-dark border border-brand-silver/10 cursor-pointer"
            >
              {/* Opraveno aspect-[4/3] na aspect-4/3 */}
              <div className="aspect-4/3 relative bg-brand-dark/50 flex items-center justify-center overflow-hidden">
                {/* Opraveno bg-gradient-to-t na bg-linear-to-t */}
                <div className="absolute inset-0 bg-linear-to-t from-brand-bg via-transparent to-transparent z-10" />
                
                {/* Nahrazen obyčejný img tag za Next.js Image komponentu */}
                <Image 
                  src={project.imageAfter} 
                  alt={project.title}
                  fill
                  className="object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
                
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 text-xs font-bold text-white bg-brand-blue rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 w-full p-6 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <h4 className="text-xl font-bold text-white mb-1 drop-shadow-md">{project.title}</h4>
                <p className="text-sm text-brand-silver flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                  <ImageIcon className="w-4 h-4" />
                  Prohlédnout fotogalerii
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <button className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-brand-silver bg-brand-dark hover:text-white border border-brand-silver/20 rounded-lg transition-all w-full justify-center">
            Zobrazit vše
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  )
}