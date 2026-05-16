'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { portfolioData } from '@/lib/portfolio-data'
import StarRating from '@/components/StarRating'

const AUTO_ROTATE_MS = 5000

export default function PortfolioPreview() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [revealed, setRevealed] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  // Staggered reveal on scroll into view
  useEffect(() => {
    if (!isInView) return
    const timers = portfolioData.map((_, i) =>
      setTimeout(() => setRevealed(prev => [...prev, i]), 150 * i)
    )
    return () => timers.forEach(clearTimeout)
  }, [isInView])

  // Auto-rotate
  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setActiveIndex(i => (i + 1) % portfolioData.length)
    }, AUTO_ROTATE_MS)
  }

  useEffect(() => {
    startTimer()
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [])

  const handleClick = (i: number) => {
    setActiveIndex(i)
    startTimer() // reset timer on manual click
  }

  return (
    <section
      id="portfolio-preview"
      className="relative py-24 sm:py-28 overflow-hidden"
      style={{ background: '#111320' }}
      aria-labelledby="portfolio-heading"
    >
      {/* Dividers */}
      <div className="absolute top-0 inset-x-0 h-px pointer-events-none" style={{ background: 'linear-gradient(90deg, transparent, rgba(200,160,78,0.2), transparent)' }} aria-hidden="true" />
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 40% at 50% 0%, rgba(200,160,78,0.05) 0%, transparent 60%)' }} aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12"
        >
          <div>
            <p className="font-sans text-xs font-medium tracking-widest text-gold uppercase mb-3">
              Our Work
            </p>
            <h2
              id="portfolio-heading"
              className="font-sans text-4xl sm:text-5xl font-semibold text-text-primary"
            >
              Sites we&apos;ve built
            </h2>
            <p className="font-sans text-text-muted mt-3 max-w-md text-base leading-relaxed font-light">
              Real sites for real tradesmen. Click through to see them live.
            </p>
          </div>
          <Link
            href="/portfolio"
            className="flex items-center gap-2 font-sans text-sm text-gold hover:text-gold-bright transition-colors duration-200 cursor-pointer group flex-shrink-0"
          >
            View all work
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover:translate-x-0.5" aria-hidden="true">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </motion.div>

        {/* Accordion panels */}
        <div
          className="flex w-full overflow-hidden rounded-xl"
          style={{
            height: '480px',
            border: '1px solid rgba(200,160,78,0.12)',
          }}
        >
          {portfolioData.map((item, i) => {
            const isActive = activeIndex === i
            const isRevealed = revealed.includes(i)

            return (
              <div
                key={item.id}
                onClick={() => handleClick(i)}
                aria-label={`View ${item.clientName}`}
                style={{
                  flex: isActive ? '5 1 0%' : '1 1 0%',
                  minWidth: '52px',
                  opacity: isRevealed ? 1 : 0,
                  transform: isRevealed ? 'translateX(0)' : 'translateX(-40px)',
                  transition: 'flex 0.7s cubic-bezier(0.22,1,0.36,1), opacity 0.45s ease, transform 0.45s ease',
                  borderRight: i < portfolioData.length - 1 ? '1px solid rgba(200,160,78,0.1)' : 'none',
                  outline: isActive ? '2px solid rgba(200,160,78,0.5)' : 'none',
                  outlineOffset: '-2px',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                  backgroundColor: '#0a0a0f',
                  willChange: 'flex',
                }}
              >
                {/* Screenshot image */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    transition: 'transform 0.7s ease',
                    transform: isActive ? 'scale(1)' : 'scale(1.05)',
                  }}
                >
                  <Image
                    src={item.imagePlaceholder}
                    alt={`${item.clientName} website`}
                    fill
                    sizes="(max-width: 768px) 100vw, 1200px"
                    quality={80}
                    className="object-cover object-top"
                  />
                </div>

                {/* Overlay — darker on collapsed, gradient on active */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: isActive
                      ? 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.15) 100%)'
                      : 'rgba(5,6,10,0.72)',
                    transition: 'background 0.5s ease',
                    pointerEvents: 'none',
                  }}
                  aria-hidden="true"
                />

                {/* Gold top accent line on active */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: 'linear-gradient(90deg, transparent, #c8a04e, transparent)',
                    opacity: isActive ? 1 : 0,
                    transition: 'opacity 0.4s ease',
                    pointerEvents: 'none',
                  }}
                  aria-hidden="true"
                />

                {/* Niche badge — top left, always visible */}
                <div
                  style={{
                    position: 'absolute',
                    top: '14px',
                    left: '14px',
                    background: 'rgba(8,9,14,0.8)',
                    backdropFilter: 'blur(6px)',
                    border: '1px solid rgba(200,160,78,0.22)',
                    borderRadius: '6px',
                    padding: '4px 10px',
                    zIndex: 10,
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? 'translateY(0)' : 'translateY(-6px)',
                    transition: 'opacity 0.35s ease 0.1s, transform 0.35s ease 0.1s',
                    pointerEvents: 'none',
                  }}
                >
                  <span className="font-sans text-xs font-medium" style={{ color: '#c8a04e' }}>{item.niche}</span>
                </div>

                {/* Collapsed label — rotated client name */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: isActive ? 0 : 1,
                    transition: 'opacity 0.3s ease',
                    pointerEvents: 'none',
                  }}
                >
                  <span
                    className="font-sans font-medium text-xs"
                    style={{
                      color: 'rgba(232,228,220,0.6)',
                      writingMode: 'vertical-rl',
                      textOrientation: 'mixed',
                      transform: 'rotate(180deg)',
                      letterSpacing: '0.06em',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {item.clientName}
                  </span>
                </div>

                {/* Bottom content — visible when active */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '24px',
                    zIndex: 10,
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? 'translateY(0)' : 'translateY(12px)',
                    transition: 'opacity 0.4s ease 0.15s, transform 0.4s ease 0.15s',
                    pointerEvents: isActive ? 'auto' : 'none',
                  }}
                >
                  {/* Meta */}
                  <p className="font-sans text-xs font-light mb-1.5" style={{ color: 'rgba(200,160,78,0.6)', letterSpacing: '0.04em' }}>
                    {item.meta}
                  </p>

                  {/* Client name */}
                  <h3 className="font-sans text-xl font-semibold mb-2" style={{ color: '#e8e4dc' }}>
                    {item.clientName}
                  </h3>

                  {/* Star rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <StarRating rating={item.googleRating} size={14} />
                    <span className="font-sans text-xs font-light" style={{ color: '#6a6660' }}>
                      {item.googleRating.toFixed(1)} on Google
                    </span>
                  </div>

                  {/* Description */}
                  <p className="font-sans text-sm font-light leading-relaxed mb-4" style={{ color: '#7a7672', maxWidth: '380px' }}>
                    {item.description}
                  </p>

                  {/* CTA */}
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={e => e.stopPropagation()}
                    className="inline-flex items-center gap-2 font-sans text-sm font-medium transition-colors duration-200 group/link"
                    style={{ color: '#c8a04e' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#e8c96e')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#c8a04e')}
                    aria-label={`Visit ${item.clientName} live site`}
                  >
                    View Live Site
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="transition-transform group-hover/link:translate-x-0.5" aria-hidden="true">
                      <path d="M1 11L11 1M11 1H4M11 1v7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-2.5 mt-6">
          {portfolioData.map((_, i) => (
            <button
              key={i}
              onClick={() => handleClick(i)}
              aria-label={`View ${portfolioData[i].clientName}`}
              className="h-2 rounded-full transition-all duration-300 cursor-pointer"
              style={{
                width: activeIndex === i ? '32px' : '8px',
                background: activeIndex === i ? '#c8a04e' : 'rgba(200,160,78,0.2)',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
