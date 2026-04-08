'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function FreeQuoteButton() {
  const [hovered, setHovered] = useState(false)

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-2">
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, x: -8, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -8, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="font-sans text-sm px-4 py-2 rounded-lg whitespace-nowrap"
            style={{
              background: 'rgba(22,24,34,0.95)',
              border: '1px solid rgba(200,160,78,0.2)',
              color: '#e8e4dc',
            }}
          >
            Get a free quote
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={scrollToContact}
        aria-label="Get a free quote — scroll to contact form"
        className="w-14 h-14 rounded-full flex items-center justify-center cursor-pointer"
        style={{
          background: '#c8a04e',
          boxShadow: '0 0 20px rgba(200,160,78,0.2)',
        }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Tag / price icon */}
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0f1117" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" />
          <line x1="7" y1="7" x2="7.01" y2="7" />
        </svg>
      </motion.button>
    </div>
  )
}
