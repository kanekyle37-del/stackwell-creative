'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { portfolioData } from '@/lib/portfolio-data'
import StarRating from '@/components/StarRating'

const AUTO_MS = 5000

export default function PortfolioPreview() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const current = portfolioData[index]

  const go = useCallback((next: number, dir: number) => {
    setDirection(dir)
    setIndex(next)
  }, [])

  const prev = () => go((index - 1 + portfolioData.length) % portfolioData.length, -1)
  const next = () => go((index + 1) % portfolioData.length, 1)

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setDirection(1)
      setIndex(i => (i + 1) % portfolioData.length)
    }, AUTO_MS)
  }, [])

  useEffect(() => {
    resetTimer()
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [resetTimer])

  const handleNav = (fn: () => void) => {
    fn()
    resetTimer()
  }

  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir * 48, scale: 0.98 }),
    center: { opacity: 1, x: 0, scale: 1 },
    exit: (dir: number) => ({ opacity: 0, x: dir * -48, scale: 0.98 }),
  }

  return (
    <section
      id="portfolio-preview"
      className="relative py-24 sm:py-28 overflow-hidden"
      style={{ background: '#0a0a0f' }}
      aria-labelledby="portfolio-heading"
    >
      {/* Ambient glow behind image */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 40%, rgba(200,160,78,0.05) 0%, transparent 65%)' }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-sans text-xs font-medium tracking-widest uppercase mb-3" style={{ color: '#c8a04e' }}>
            Our Work
          </p>
          <h2
            id="portfolio-heading"
            className="font-sans text-4xl sm:text-5xl font-semibold"
            style={{ color: '#e8e4dc' }}
          >
            Sites we&apos;ve built
          </h2>
        </div>

        {/* Image stage */}
        <div className="relative flex items-center gap-4 sm:gap-6">

          {/* Prev button */}
          <button
            onClick={() => handleNav(prev)}
            aria-label="Previous site"
            className="flex-shrink-0 flex items-center justify-center rounded-full transition-all duration-200 cursor-pointer z-10"
            style={{
              width: '44px',
              height: '44px',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(200,160,78,0.2)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(200,160,78,0.1)'
              e.currentTarget.style.borderColor = 'rgba(200,160,78,0.45)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
              e.currentTarget.style.borderColor = 'rgba(200,160,78,0.2)'
            }}
          >
            <ChevronLeft size={18} color="#c8a04e" />
          </button>

          {/* Screenshot */}
          <div className="relative flex-1 overflow-hidden rounded-xl" style={{ aspectRatio: '16/9' }}>
            {/* Outer glow */}
            <div
              className="absolute pointer-events-none"
              style={{
                inset: '-20px',
                background: 'radial-gradient(ellipse at center, rgba(200,160,78,0.12) 0%, transparent 65%)',
                filter: 'blur(20px)',
                zIndex: 0,
              }}
              aria-hidden="true"
            />

            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current.id}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 rounded-xl overflow-hidden"
                style={{
                  border: '1px solid rgba(200,160,78,0.18)',
                  boxShadow: '0 32px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(200,160,78,0.08)',
                  zIndex: 1,
                }}
              >
                <Image
                  src={current.imagePlaceholder}
                  alt={`${current.clientName} website`}
                  fill
                  sizes="(max-width: 768px) 100vw, 1200px"
                  quality={90}
                  className="object-cover object-top"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Next button */}
          <button
            onClick={() => handleNav(next)}
            aria-label="Next site"
            className="flex-shrink-0 flex items-center justify-center rounded-full transition-all duration-200 cursor-pointer z-10"
            style={{
              width: '44px',
              height: '44px',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(200,160,78,0.2)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(200,160,78,0.1)'
              e.currentTarget.style.borderColor = 'rgba(200,160,78,0.45)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
              e.currentTarget.style.borderColor = 'rgba(200,160,78,0.2)'
            }}
          >
            <ChevronRight size={18} color="#c8a04e" />
          </button>
        </div>

        {/* Client details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id + '-meta'}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="mt-10 flex flex-col items-center text-center gap-3"
          >
            {/* Trade + location */}
            <p className="font-sans text-xs font-medium tracking-widest uppercase" style={{ color: 'rgba(200,160,78,0.6)' }}>
              {current.meta}
            </p>

            {/* Client name */}
            <h3 className="font-sans text-2xl sm:text-3xl font-semibold" style={{ color: '#e8e4dc' }}>
              {current.clientName}
            </h3>

            {/* Stars + score */}
            <div className="flex items-center gap-2.5">
              <StarRating rating={current.googleRating} size={15} />
              <span className="font-sans text-sm font-light" style={{ color: '#5a5854' }}>
                {current.googleRating.toFixed(1)} on Google
              </span>
            </div>

            {/* Description */}
            <p className="font-sans text-sm font-light leading-relaxed max-w-sm" style={{ color: '#6a6660' }}>
              {current.description}
            </p>

            {/* Live site link */}
            <a
              href={current.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-sans text-sm font-medium mt-1 group"
              style={{ color: '#c8a04e' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#e8c96e')}
              onMouseLeave={e => (e.currentTarget.style.color = '#c8a04e')}
            >
              View Live Site
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="transition-transform group-hover:translate-x-0.5" aria-hidden="true">
                <path d="M1 11L11 1M11 1H4M11 1v7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </motion.div>
        </AnimatePresence>

        {/* Dot nav */}
        <div className="flex items-center justify-center gap-2.5 mt-8">
          {portfolioData.map((item, i) => (
            <button
              key={item.id}
              onClick={() => { go(i, i > index ? 1 : -1); resetTimer() }}
              aria-label={`View ${item.clientName}`}
              className="h-1.5 rounded-full transition-all duration-300 cursor-pointer"
              style={{
                width: index === i ? '28px' : '6px',
                background: index === i ? '#c8a04e' : 'rgba(200,160,78,0.2)',
              }}
            />
          ))}
        </div>

        {/* View all link */}
        <div className="text-center mt-10">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 font-sans text-sm text-gold hover:text-gold-bright transition-colors duration-200 group"
            style={{ color: '#c8a04e' }}
          >
            View all work
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover:translate-x-0.5" aria-hidden="true">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  )
}
