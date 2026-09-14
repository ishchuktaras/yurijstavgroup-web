// src/components/SuccessCheckmark.tsx
'use client'

import { motion } from 'framer-motion'

export default function SuccessCheckmark() {
  return (
    <div className="relative flex items-center justify-center w-28 h-28 mb-4">
      {/* Pulzující modrá záře na pozadí */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0, 1.4, 1.1], opacity: [0, 0.5, 0.2] }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute inset-0 rounded-full bg-brand-blue blur-xl"
      />

      <motion.svg
        viewBox="0 0 100 100"
        className="w-24 h-24 relative z-10"
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 240, damping: 18 }}
      >
        {/* Vykreslení modrého kruhu dokola */}
        <motion.circle
          cx="50"
          cy="50"
          r="42"
          fill="none"
          stroke="#2563EB"
          strokeWidth="6"
          strokeLinecap="round"
          initial={{ pathLength: 0, rotate: -90 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{ transformOrigin: "50% 50%" }}
        />
        
        {/* Animované nakreslení bílé fajfky */}
        <motion.path
          d="M30 52 L43 65 L71 36"
          fill="none"
          stroke="#ffffff"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.35, delay: 0.45, ease: "easeOut" }}
        />
      </motion.svg>
    </div>
  )
}