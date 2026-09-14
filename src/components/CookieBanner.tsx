// src/components/CookieBanner.tsx
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Cookie } from 'lucide-react'

// Vytvoříme si vlastní typ pro window, abychom se vyhnuli použití 'any'
interface CustomWindow extends Window {
  gtag?: (command: string, action: string, params: Record<string, string>) => void;
}

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Kontrola, zda uživatel už v minulosti udělil souhlas
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      // Krátké zpoždění, aby na uživatele lišta nevyskočila agresivně hned v první milisekundě
      const timer = setTimeout(() => setIsVisible(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAcceptAll = () => {
    localStorage.setItem('cookieConsent', 'all')
    setIsVisible(false)
    
    // Čistý TypeScript zápis pro volání Google Analytics (pokud existuje)
    if (typeof window !== 'undefined') {
      const win = window as unknown as CustomWindow
      if (win.gtag) {
        win.gtag('consent', 'update', {
          'analytics_storage': 'granted',
          'ad_storage': 'granted'
        })
      }
    }
  }

  const handleAcceptEssential = () => {
    localStorage.setItem('cookieConsent', 'essential')
    setIsVisible(false)
    
    // Odmítnuto – Google Analytics a Ads nesmí sbírat data
    if (typeof window !== 'undefined') {
      const win = window as unknown as CustomWindow
      if (win.gtag) {
        win.gtag('consent', 'update', {
          'analytics_storage': 'denied',
          'ad_storage': 'denied'
        })
      }
    }
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 w-full z-[100] p-4 md:p-6 pointer-events-none animate-in slide-in-from-bottom-10 fade-in duration-700">
      <div className="max-w-5xl mx-auto bg-brand-dark/95 backdrop-blur-xl border border-brand-silver/20 rounded-2xl p-6 shadow-2xl pointer-events-auto flex flex-col md:flex-row items-center gap-6">
        
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <Cookie className="w-5 h-5 text-brand-blue" />
            <h4 className="text-white font-bold text-lg">Soukromí a analytika</h4>
          </div>
          <p className="text-brand-silver/80 text-sm leading-relaxed">
            Abychom mohli náš web neustále zlepšovat a ukazovat vám relevantní obsah, potřebujeme váš souhlas s využitím cookies pro analytické a marketingové účely (Google Analytics, Sklik). 
            Více informací naleznete v <Link href="/cookies" className="text-brand-blue hover:underline underline-offset-4">Zásadách cookies</Link>.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
          <button 
            onClick={handleAcceptEssential}
            className="px-6 py-3 rounded-xl border border-brand-silver/20 text-brand-silver hover:text-white hover:bg-white/5 transition-colors text-sm font-bold"
          >
            Pouze nezbytné
          </button>
          <button 
            onClick={handleAcceptAll}
            className="px-6 py-3 rounded-xl bg-brand-blue hover:bg-brand-blue-light text-white transition-all hover:scale-[1.02] shadow-lg shadow-brand-blue/20 text-sm font-bold"
          >
            Přijmout vše
          </button>
        </div>

      </div>
    </div>
  )
}