'use client'

import { useState } from 'react'
import { Menu, X, Building2, BrickWall, PaintRoller, Home } from 'lucide-react'
import Link from 'next/link'

const navItems = [
  { name: 'Stavby', href: '#stavby', icon: Building2 },
  { name: 'Rekonstrukce', href: '#rekonstrukce', icon: BrickWall },
  { name: 'Fasády', href: '#fasady', icon: PaintRoller },
  { name: 'Střechy', href: '#strechy', icon: Home },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* --- DESKTOP SIDEBAR --- */}
      <aside className="hidden md:flex flex-col w-64 h-screen fixed left-0 top-0 bg-brand-dark border-r border-brand-silver/20">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-brand-silver tracking-wider">
            YURIJ <span className="text-brand-blue">STAV</span>
          </h1>
          <p className="text-xs text-brand-silver/60 mt-1 uppercase tracking-widest">Group s.r.o.</p>
        </div>
        
        <nav className="flex-1 px-4 mt-8 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 px-4 py-3 text-brand-silver hover:text-white hover:bg-brand-blue/10 rounded-lg transition-colors group"
            >
              <item.icon className="w-5 h-5 text-brand-blue group-hover:text-brand-blue-light" />
              <span className="font-medium">{item.name}</span>
            </Link>
          ))}
        </nav>
      </aside>

      {/* --- MOBILE HEADER & MENU --- */}
      <div className="md:hidden">
        <header className="flex items-center justify-between p-4 bg-brand-dark border-b border-brand-silver/20 fixed top-0 w-full z-50">
          <h1 className="text-xl font-bold text-brand-silver tracking-wider">
            YURIJ <span className="text-brand-blue">STAV</span>
          </h1>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-brand-silver hover:text-white"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </header>

        {/* Mobile Dropdown */}
        {isOpen && (
          <nav className="fixed top-[60px] left-0 w-full bg-brand-dark border-b border-brand-silver/20 p-4 space-y-2 z-40 shadow-xl">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 px-4 py-3 text-brand-silver hover:text-white hover:bg-brand-blue/10 rounded-lg"
              >
                <item.icon className="w-5 h-5 text-brand-blue" />
                <span className="font-medium">{item.name}</span>
              </Link>
            ))}
          </nav>
        )}
      </div>
    </>
  )
}