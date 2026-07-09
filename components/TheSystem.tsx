'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const blocks = [
  {
    id: 'site',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c8a04e" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: 'A site built to get you the call',
    body: 'Mobile-first, fast, and built around your trade and your patch. Your Google reviews front and centre. Click-to-call on every page. Designed so the next person who finds you rings you.',
  },
  {
    id: 'google',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c8a04e" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
        <path d="M11 8v3l2 2" />
      </svg>
    ),
    title: 'A Google profile that brings in calls',
    body: 'Set up properly, kept fresh every month. Photos, posts, responses — done for you. So when someone searches your trade nearby, you\'re the one they find.',
  },
  {
    id: 'missedcall',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c8a04e" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .84h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.64a16 16 0 006.29 6.29l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
        <line x1="1" y1="1" x2="23" y2="23" />
      </svg>
    ),
    title: 'Never lose a job because you missed the call',
    body: 'Miss a call on the tools and they get a text back straight away. "Sorry I missed you — I\'ll call you back within the hour." Most of them wait. Jobs saved automatically.',
  },
  {
    id: 'reviews',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c8a04e" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    title: '5-star reviews on autopilot',
    body: 'After every job, your customer gets a review request sent automatically. More reviews coming in, zero chasing. Your reputation grows without you thinking about it.',
  },
]

export default function TheSystem() {
  const headerRef = useRef<HTMLDivElement>(null)
  const headerInView = useInView(headerRef, { once: true, amount: 0.3 })
  const gridRef = useRef<HTMLDivElement>(null)
  const gridInView = useInView(gridRef, { once: true, amount: 0.1 })

  return (
    <section
      className="relative py-24 sm:py-28 overflow-hidden"
      style={{ background: '#0a0a0f' }}
      aria-labelledby="the-system-heading"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 30%, rgba(200,160,78,0.05) 0%, transparent 65%)' }}
        aria-hidden="true"
      />
      <div className="absolute top-0 inset-x-0 h-px pointer-events-none" style={{ background: 'linear-gradient(90deg, transparent, rgba(200,160,78,0.2), transparent)' }} aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <p className="font-sans text-xs font-medium tracking-widest text-gold uppercase mb-4">
            What We Build
          </p>
          <h2
            id="the-system-heading"
            className="font-sans text-4xl sm:text-5xl font-semibold text-text-primary mb-5 leading-tight"
          >
            Four things working together.<br />
            <span
              className="italic font-light"
              style={{
                background: 'linear-gradient(135deg, #9a7a3a 0%, #c8a04e 50%, #e8c96e 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              One system that fills your diary.
            </span>
          </h2>
          <p className="font-sans text-base text-text-muted font-light max-w-xl mx-auto leading-relaxed">
            A website alone isn&apos;t enough. We build the whole thing — so you show up, you get called, and you never lose a job to voicemail.
          </p>
        </motion.div>

        {/* Grid */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {blocks.map((block, i) => (
            <motion.div
              key={block.id}
              initial={{ opacity: 0, y: 28 }}
              animate={gridInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-xl p-7 flex flex-col gap-4"
              style={{
                background: '#111118',
                border: '1px solid rgba(200,160,78,0.12)',
              }}
            >
              {/* Top gold line on first card */}
              {i === 0 && (
                <div className="absolute top-0 left-0 right-0 h-px rounded-t-xl" style={{ background: 'linear-gradient(90deg, transparent, rgba(200,160,78,0.5), transparent)' }} aria-hidden="true" />
              )}
              <div
                className="flex items-center justify-center rounded-full flex-shrink-0 self-start"
                style={{
                  width: '48px',
                  height: '48px',
                  background: 'rgba(200,160,78,0.08)',
                  border: '1px solid rgba(200,160,78,0.22)',
                }}
              >
                {block.icon}
              </div>
              <div>
                <h3 className="font-sans text-base font-semibold text-text-primary mb-2 leading-snug">
                  {block.title}
                </h3>
                <p className="font-sans text-sm font-light leading-relaxed" style={{ color: '#7a7672' }}>
                  {block.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
