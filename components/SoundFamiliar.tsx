'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const points = [
  {
    id: 'wordofmouth',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c8a04e" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .84h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.64a16 16 0 006.29 6.29l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
    text: "You're getting most of your work through word of mouth or Facebook",
  },
  {
    id: 'google',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c8a04e" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
    ),
    text: "Your competitors are showing up on Google and you're not",
  },
  {
    id: 'nevergotroundit',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c8a04e" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    text: "You've been meaning to sort a website but never got round to it",
  },
  {
    id: 'nowebsite',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c8a04e" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
    text: "Customers ask for your website and you don't have one to send them",
  },
]

export default function SoundFamiliar() {
  const headerRef = useRef<HTMLDivElement>(null)
  const headerInView = useInView(headerRef, { once: true, amount: 0.3 })
  const listRef = useRef<HTMLDivElement>(null)
  const listInView = useInView(listRef, { once: true, amount: 0.2 })

  return (
    <section
      className="relative py-20 sm:py-24 overflow-hidden"
      style={{ background: 'rgba(200,160,78,0.02)' }}
      aria-labelledby="sound-familiar-heading"
    >
      {/* Subtle dividers */}
      <div className="absolute top-0 inset-x-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(200,160,78,0.15), transparent)' }} aria-hidden="true" />
      <div className="absolute bottom-0 inset-x-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(200,160,78,0.15), transparent)' }} aria-hidden="true" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <h2
            id="sound-familiar-heading"
            className="font-serif text-4xl sm:text-5xl font-light text-text-primary leading-tight"
          >
            Sound familiar?
          </h2>
        </motion.div>

        {/* Points */}
        <div ref={listRef} className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {points.map((point, i) => (
            <motion.div
              key={point.id}
              initial={{ opacity: 0, y: 24 }}
              animate={listInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-start gap-4"
            >
              <div
                className="flex-shrink-0 flex items-center justify-center rounded-full mt-0.5"
                style={{
                  width: '40px',
                  height: '40px',
                  background: 'rgba(200,160,78,0.07)',
                  border: '1px solid rgba(200,160,78,0.18)',
                }}
              >
                {point.icon}
              </div>
              <p className="font-sans text-base font-light leading-relaxed" style={{ color: '#7a7672' }}>
                {point.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Closing line */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={listInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="font-sans text-base text-center mt-10 font-light"
          style={{ color: '#c8a04e' }}
        >
          If any of that sounds like you, we can fix it in less than a week.
        </motion.p>
      </div>
    </section>
  )
}
