// src/components/Navigation.tsx

'use client'

import { useState } from 'react'
import { Menu, X, Users, ImageIcon, Wrench, MessageSquareQuote } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const navItems = [
  { name: 'O nás', href: '#o-nas', icon: Users },
  { name: 'Služby', href: '#sluzby', icon: Wrench },
  { name: 'Portfolio', href: '#portfolio', icon: ImageIcon },
  { name: 'Recenze', href: '#recenze', icon: MessageSquareQuote },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black border-b border-brand-silver/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          <div className="flex-shrink-0">
            <Link href="/" className="block">
              <Image 
                src="/logo.jpeg" 
                alt="Yurij Stav Group Logo" 
                width={160} 
                height={50} 
                className="w-auto h-12 object-contain"
                priority 
              />
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center gap-2 text-brand-silver hover:text-white transition-colors group"
              >
                <item.icon className="w-4 h-4 text-brand-blue group-hover:text-brand-blue-light transition-colors" />
                <span className="font-medium text-sm uppercase tracking-wider">{item.name}</span>
              </Link>
            ))}
            
            <Link
              href="#poptavka"
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-white bg-brand-blue hover:bg-brand-blue-light rounded-lg transition-all hover:scale-105"
            >
              Poptat služby
            </Link>
          </nav>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-silver hover:text-white p-2"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black border-b border-brand-silver/10 shadow-2xl absolute w-full left-0 top-20">
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
              className="flex items-center justify-center w-full mt-4 px-4 py-4 text-base font-bold text-white bg-brand-blue rounded-lg"
            >
              Poptat služby
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}