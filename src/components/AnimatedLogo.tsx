// src/components/AnimatedLogo.tsx
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function AnimatedLogo() {
  const [isHovered, setIsHovered] = useState(false)

  // Parametry pro naši "cihlovou zeď"
  const rows = 3;
  const cols = 8;
  const bricks = Array.from({ length: rows * cols });

  return (
    <Link 
      href="/" 
      className="relative block w-48 h-14 md:w-[270px] md:h-[64px] overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      // Na mobilu simulujeme hover při dotyku
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setTimeout(() => setIsHovered(false), 2000)}
    >
      {/* Původní Logo */}
      <motion.div
        animate={{ opacity: isHovered ? 0.2 : 1 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 z-0"
      >
        <Image 
          src="/logo.svg" 
          alt="Yurij Stav Group Logo" 
          fill
          className="object-contain object-left invert hue-rotate-180 brightness-110"
          priority 
        />
      </motion.div>

      {/* Efekt vyzdívání cihel */}
      <div className="absolute inset-0 z-10 grid grid-rows-3 grid-cols-8 gap-[2px] pointer-events-none p-1">
        {bricks.map((_, i) => {
          const row = Math.floor(i / cols);
          const col = i % cols;
          
          // Matematika pro zpoždění animace: 
          // Cihly se staví odspodu (největší row index) nahoru a zleva doprava
          const delay = ((rows - 1 - row) * 0.15) + (col * 0.05);

          // Každá třetí cihla bude modrá, zbytek stříbrný pro realistický vzor zdi
          const isBlue = (row + col) % 3 === 0;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15, scale: 0.5 }}
              animate={
                isHovered 
                  // Cihla se objeví, chvíli zůstane a zase zmizí
                  ? { opacity: [0, 1, 0], y: [15, 0, 0], scale: [0.5, 1, 0.9] } 
                  : { opacity: 0, y: 15, scale: 0.5 }
              }
              transition={{ 
                duration: 1.5, 
                delay: isHovered ? delay : 0,
                repeat: isHovered ? Infinity : 0, // Opakuje se donekonečna, dokud je myš na logu
                repeatDelay: 0.5,
                ease: "easeInOut"
              }}
              className={`rounded-[2px] ${isBlue ? 'bg-brand-blue' : 'bg-brand-silver/80'}`}
            />
          )
        })}
      </div>
    </Link>
  )
}