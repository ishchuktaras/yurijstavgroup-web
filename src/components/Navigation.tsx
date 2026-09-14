// src/components/Navigation.tsx
'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Users, ImageIcon, Wrench, MessageSquareQuote, Mail } from 'lucide-react'
import Link from 'next/link'
import AnimatedLogo from './AnimatedLogo' // <-- Importujeme naši novou dynamickou komponentu

const navItems = [
  { name: 'O nás', href: '#o-nas', icon: Users },
  { name: 'Služby', href: '#sluzby', icon: Wrench },
  { name: 'Portfolio', href: '#portfolio', icon: ImageIcon },
  { name: 'Recenze', href: '#recenze', icon: MessageSquareQuote },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Detekce scrollování pro změnu vzhledu navigace
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-brand-bg/85 backdrop-blur-md border-b border-brand-silver/10 py-0 shadow-lg' 
          : 'bg-transparent py-2 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 w-full">          
          
          {/* Levý sloupec - Animované Logo */}
          <div className="flex-1 flex justify-start shrink-0">
            <AnimatedLogo />
          </div>
          
          {/* Střední sloupec - Vycentrované odkazy */}
          <nav className="hidden md:flex flex-1 justify-center items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center gap-2 text-brand-silver hover:text-white transition-colors group"
              >
                <item.icon className="w-4 h-4 text-brand-blue group-hover:text-brand-blue-light transition-colors" />
                
                <span className="font-medium text-sm uppercase tracking-wider whitespace-nowrap">
                  {item.name}
                </span>
              </Link>
            ))}
          </nav>

          {/* Pravý sloupec - Tlačítko / Hamburger */}
          <div className="flex-1 flex justify-end items-center">
            <div className="hidden md:block">
              <Link
                href="#poptavka"
                className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-white bg-brand-blue hover:bg-brand-blue-light rounded-lg transition-all hover:scale-105"
              >
                Poptat služby
              </Link>
            </div>

            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-brand-silver hover:text-white p-2"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobilní rozbalovací menu */}
      {isOpen && (
        <div className="md:hidden bg-brand-bg/95 backdrop-blur-xl border-b border-brand-silver/10 shadow-2xl absolute w-full left-0 top-full">
          <nav className="px-4 pt-2 pb-6 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 px-4 py-4 text-brand-silver hover:text-white hover:bg-brand-blue/10 rounded-lg transition-colors"
              >
                <item.icon className="w-5 h-5 text-brand-blue" />
                <span className="font-medium">{item.name}</span>
              </Link>
            ))}
            
            <Link
              href="#poptavka"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-4 py-4 text-brand-silver hover:text-white hover:bg-brand-blue/10 rounded-lg transition-colors"
            >
              <Mail className="w-5 h-5 text-brand-blue" />
              <span className="font-medium">Kontakt</span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}