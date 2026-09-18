// src/components/Portfolio.tsx
'use client'

import { useState } from "react"
import Image from "next/image"
import { MapPin, Images, ArrowRight, Sparkles } from "lucide-react"

// Import moderní Lightbox knihovny a jejích pluginů
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails"
import "yet-another-react-lightbox/plugins/thumbnails.css"
import Zoom from "yet-another-react-lightbox/plugins/zoom"

// Struktura projektů sjednocena pro správné fungování galerie a výpisu
const projects = [
  {
    id: 1,
    title: "Rekonstrukce fasády",
    location: "Jihlava, kraj Vysočina",
    coverImage: "/portfolio/fasada-1.jpeg",
       images: Array.from({ length: 16 }).map((_, i) => ({
      src: `/portfolio/fasada-${i + 1}.jpeg`,
      alt: `Fasáda Jihlava - detail ${i + 1}`,
    })),
    isPlaceholder: false,
  },
  {
    id: "fasada-vysocina",
    title: "Kompletní realizace fasády rodinného domu",
    category: "Fasády",
    location: "Kraj Vysočina",
    description: "Zateplení novostavby rodinného domu, natažení stěrky s perlinkou a aplikace finální silikonové omítky. Čistý bílý design elegantně kontrastuje s tmavými rámy oken a falcovou střechou.",
    coverImage: "/portfolio/vysocina-fasada-16.jpg",
    images: [
      { src: "/portfolio/vysocina-fasada-01.jpg", alt: "Realizace fasády Vysočina - fáze 1" },
      { src: "/portfolio/vysocina-fasada-02.jpg", alt: "Realizace fasády Vysočina - fáze 2" },
      { src: "/portfolio/vysocina-fasada-03.jpg", alt: "Realizace fasády Vysočina - fáze 3" },
      { src: "/portfolio/vysocina-fasada-04.jpg", alt: "Realizace fasády Vysočina - fáze 4" },
      { src: "/portfolio/vysocina-fasada-05.jpg", alt: "Realizace fasády Vysočina - fáze 5" },
      { src: "/portfolio/vysocina-fasada-06.jpg", alt: "Realizace fasády Vysočina - fáze 6" },
      { src: "/portfolio/vysocina-fasada-07.jpg", alt: "Realizace fasády Vysočina - fáze 7" },
      { src: "/portfolio/vysocina-fasada-08.jpg", alt: "Realizace fasády Vysočina - fáze 8" },
      { src: "/portfolio/vysocina-fasada-09.jpg", alt: "Realizace fasády Vysočina - fáze 9" },
      { src: "/portfolio/vysocina-fasada-10.jpg", alt: "Realizace fasády Vysočina - fáze 10" },
      { src: "/portfolio/vysocina-fasada-11.jpg", alt: "Realizace fasády Vysočina - fáze 11" },
      { src: "/portfolio/vysocina-fasada-12.jpg", alt: "Realizace fasády Vysočina - fáze 12" },
      { src: "/portfolio/vysocina-fasada-13.jpg", alt: "Realizace fasády Vysočina - fáze 13" },
      { src: "/portfolio/vysocina-fasada-14.jpg", alt: "Realizace fasády Vysočina - fáze 14" },
      { src: "/portfolio/vysocina-fasada-15.jpg", alt: "Realizace fasády Vysočina - fáze 15" },
      { src: "/portfolio/vysocina-fasada-16.jpg", alt: "Realizace fasády Vysočina - fáze 16" },
      { src: "/portfolio/vysocina-fasada-17.jpg", alt: "Realizace fasády Vysočina - fáze 17" },
      { src: "/portfolio/vysocina-fasada-18.jpg", alt: "Realizace fasády Vysočina - fáze 18" }
    ],
    isPlaceholder: false,
  },
  {
    id: 2,
    title: "Zde může být váš projekt",
    location: "Kdekoliv v ČR",
    coverImage: "", 
    images: [],
    isPlaceholder: true,
  }
]

export default function Portfolio() {
  const [open, setOpen] = useState(false)
  const [currentImages, setCurrentImages] = useState<{src: string, alt: string}[]>([])

  const openProjectGallery = (images: {src: string, alt: string}[]) => {
    setCurrentImages(images)
    setOpen(true)
  }

  const scrollToContact = () => {
    document.getElementById('poptavka')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="portfolio" className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-dark relative">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-sm font-bold text-brand-blue uppercase tracking-widest mb-2">Portfolio</h2>
            <h3 className="text-3xl md:text-5xl font-heading font-bold text-white">Naše realizace</h3>
          </div>
          <p className="text-brand-silver/80 max-w-md text-lg">
            Ukázky naší práce mluví za vše. Prohlédněte si detaily jednotlivých projektů.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => {
            
            // Vykreslení Placeholderu (Zástupný projekt)
            if (project.isPlaceholder) {
              return (
                <div 
                  key={project.id}
                  onClick={scrollToContact}
                  className="group relative rounded-2xl overflow-hidden bg-brand-bg/50 border-2 border-dashed border-brand-silver/20 cursor-pointer h-[400px] flex flex-col items-center justify-center transition-all duration-300 hover:border-brand-blue/50 hover:bg-brand-blue/5"
                >
                  <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Sparkles className="w-8 h-8 text-brand-blue" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">{project.title}</h4>
                  <div className="flex items-center text-brand-silver mb-8">
                    <MapPin className="w-4 h-4 mr-2 text-brand-blue" />
                    {project.location}
                  </div>
                  <button className="flex items-center text-brand-blue font-bold group-hover:text-white transition-colors">
                    Poptat nezávaznou nabídku <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                </div>
              )
            }

            // Vykreslení reálného projektu
            return (
              <div 
                key={project.id} 
                onClick={() => openProjectGallery(project.images)}
                className="group relative rounded-2xl overflow-hidden bg-brand-bg border border-brand-silver/10 cursor-pointer h-[400px]"
              >
                <Image 
                  src={project.coverImage} 
                  alt={project.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90" />
                
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="flex items-center text-brand-silver text-sm mb-3">
                    <MapPin className="w-4 h-4 mr-2 text-brand-blue" />
                    {project.location}
                  </div>
                  <h4 className="text-3xl font-heading font-bold text-white mb-4">{project.title}</h4>
                  
                  <div className="flex items-center justify-between">
                    <span className="flex items-center text-white/80 text-sm bg-white/10 px-4 py-2 rounded-full backdrop-blur-md">
                      <Images className="w-4 h-4 mr-2" />
                      {project.images.length} fotografií
                    </span>
                    
                    <span className="flex items-center text-brand-blue font-bold group-hover:text-white transition-colors">
                      Detaily projektu <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Fullscreen Lightbox Galerie */}
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={currentImages}
          plugins={[Thumbnails, Zoom]}
          carousel={{ finite: false }}
          styles={{ 
            root: { 
              "--yarl__color_backdrop": "#050505", 
            },
            thumbnailsContainer: { 
              backgroundColor: "#050505" 
            }
          }}
        />

      </div>
    </section>
  )
}