'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Testimonial {
  id: number
  quote: string
  name: string
  company: string
  initial: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Stephen',
    company: 'Warwick Roofing Midlands Ltd',
    initial: 'S',
    quote:
      'Kyle came across very professional and not pushy like a lot of website designers I have dealt with in the past. His prices are very reasonable and the after sales are excellent — always answers any questions or updates to my site when needed. Very happy with the service.',
  },
  {
    id: 2,
    name: 'Hollyfield Roofing',
    company: 'Roofer · Blackburn',
    initial: 'H',
    quote:
      "Kyle got in touch about a website and, having had bad experiences with other companies before, I wasn't sure at first. He sent a demo over straight away, the price was fair, and from there it was easy. Communication throughout was great and the finished site looks really good. Very happy with how it all turned out.",
  },
  {
    id: 3,
    name: 'Jai',
    company: 'Sapphire Spray Coatings · Mansfield',
    initial: 'J',
    quote:
      "Kyle reached out to me about building a site for my business as I didn't have one and normally I wouldn't bother with these calls but I'm so glad I gave him a chance. His responses were informative and prompt, the turnaround on the site was fast and even though I went back to him with tweaks and changes a few times nothing was too much hassle. He's gone above my expectations — the colour scheme, how professional it all looks, the details. I'd 100% recommend him to anyone thinking of getting a site made.",
  },
  {
    id: 4,
    name: 'Brad',
    company: 'C&B Joinery · Barrow-in-Furness',
    initial: 'B',
    quote:
      "Kyle recently reached out to us as we were without a website. There was no hard selling and he was respectful that we are running a business so can't always talk. Very clear instructions as to what the process required — literally needed minutes of my time. We had a drafted website the same day, any amendments were made straight away. Very quick responses to any questions we had. Kyle is a genuine guy who's happy to help. Many thanks.",
  },
]

const getVisibleCount = (width: number): number => {
  if (width >= 1024) return 3
  if (width >= 640) return 2
  return 1
}

export default function Testimonials() {
  const headerRef = useRef<HTMLDivElement>(null)
  const headerInView = useInView(headerRef, { once: true, amount: 0.3 })
  const containerRef = useRef<HTMLDivElement>(null)

  const [currentIndex, setCurrentIndex] = useState(0)
  const [windowWidth, setWindowWidth] = useState(1024)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const [direction, setDirection] = useState(1)

  useEffect(() => {
    setWindowWidth(window.innerWidth)
    const handleResize = () => {
      const newWidth = window.innerWidth
      setWindowWidth(newWidth)
      const maxIdx = testimonials.length - getVisibleCount(newWidth)
      setCurrentIndex(prev => Math.min(prev, Math.max(0, maxIdx)))
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (!isAutoPlaying) return
    autoPlayRef.current = setInterval(() => {
      const visibleCount = getVisibleCount(windowWidth)
      const maxIndex = testimonials.length - visibleCount
      setCurrentIndex(prev => {
        if (prev >= maxIndex) { setDirection(-1); return prev - 1 }
        if (prev <= 0) { setDirection(1); return prev + 1 }
        return prev + direction
      })
    }, 4000)
    return () => { if (autoPlayRef.current) clearInterval(autoPlayRef.current) }
  }, [isAutoPlaying, currentIndex, windowWidth, direction])

  const visibleCount = getVisibleCount(windowWidth)
  const maxIndex = testimonials.length - visibleCount

  const pauseAutoPlay = () => {
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 8000)
  }

  const goNext = () => {
    if (currentIndex < maxIndex) {
      setDirection(1)
      setCurrentIndex(prev => Math.min(prev + 1, maxIndex))
      pauseAutoPlay()
    }
  }

  const goPrev = () => {
    if (currentIndex > 0) {
      setDirection(-1)
      setCurrentIndex(prev => Math.max(prev - 1, 0))
      pauseAutoPlay()
    }
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    pauseAutoPlay()
  }

  const handleDragEnd = (_event: unknown, info: { offset: { x: number } }) => {
    if (info.offset.x < -30 && currentIndex < maxIndex) goNext()
    else if (info.offset.x > 30 && currentIndex > 0) goPrev()
  }

  const cardWidth = 100 / visibleCount

  return (
    <section
      className="relative py-24 sm:py-28 overflow-hidden"
      style={{ background: '#0f1117' }}
      aria-labelledby="testimonials-heading"
    >
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 40%, rgba(200,160,78,0.04) 0%, transparent 65%)' }} aria-hidden="true" />

      {/* Header */}
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 20 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-14 px-4"
      >
        <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.15em', color: '#c8a04e', textTransform: 'uppercase', marginBottom: '12px', fontFamily: 'var(--font-outfit)' }}>
          What Tradesmen Say
        </p>
        <h2
          id="testimonials-heading"
          style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(28px, 4vw, 38px)', fontWeight: 400, color: '#e8e4dc', lineHeight: 1.1, marginBottom: '12px' }}
        >
          Real results, real trades.
        </h2>
        <p style={{ fontSize: '14px', color: '#8a8680', fontFamily: 'var(--font-outfit)', fontWeight: 300 }}>
          Don&apos;t take our word for it — here&apos;s what our clients say.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="relative" ref={containerRef}>

          {/* Nav buttons */}
          <div className="flex justify-center sm:justify-end sm:absolute sm:-top-16 right-0 gap-2 mb-6 sm:mb-0">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={goPrev}
              disabled={currentIndex === 0}
              style={{
                padding: '8px',
                borderRadius: '50%',
                background: currentIndex === 0 ? 'rgba(255,255,255,0.04)' : 'rgba(200,160,78,0.1)',
                border: currentIndex === 0 ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(200,160,78,0.3)',
                color: currentIndex === 0 ? '#3a3835' : '#c8a04e',
                cursor: currentIndex === 0 ? 'not-allowed' : 'pointer',
                transition: 'all 0.2s',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={goNext}
              disabled={currentIndex >= maxIndex}
              style={{
                padding: '8px',
                borderRadius: '50%',
                background: currentIndex >= maxIndex ? 'rgba(255,255,255,0.04)' : 'rgba(200,160,78,0.1)',
                border: currentIndex >= maxIndex ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(200,160,78,0.3)',
                color: currentIndex >= maxIndex ? '#3a3835' : '#c8a04e',
                cursor: currentIndex >= maxIndex ? 'not-allowed' : 'pointer',
                transition: 'all 0.2s',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>

          {/* Slider */}
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `-${currentIndex * cardWidth}%` }}
              transition={{ type: 'spring', stiffness: 70, damping: 20 }}
            >
              {testimonials.map((t) => (
                <motion.div
                  key={t.id}
                  style={{ flexShrink: 0, width: `${cardWidth}%`, padding: '8px' }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={handleDragEnd}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  aria-label={`Testimonial from ${t.name}`}
                >
                  <div
                    style={{
                      background: '#111118',
                      border: '1px solid rgba(200,160,78,0.12)',
                      borderRadius: '14px',
                      padding: '28px',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0',
                      cursor: 'grab',
                      transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(200,160,78,0.3)'
                      ;(e.currentTarget as HTMLDivElement).style.boxShadow = '0 16px 48px rgba(0,0,0,0.4)'
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(200,160,78,0.12)'
                      ;(e.currentTarget as HTMLDivElement).style.boxShadow = 'none'
                    }}
                  >
                    {/* Stars */}
                    <div style={{ display: 'flex', gap: '2px', marginBottom: '16px' }}>
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} width="14" height="14" viewBox="0 0 18 18" fill="#f59e0b" aria-hidden="true">
                          <path d="M9 1.5l2.163 4.38 4.837.703-3.5 3.412.826 4.817L9 12.553l-4.326 2.259.826-4.817L2 6.583l4.837-.703L9 1.5z" />
                        </svg>
                      ))}
                    </div>

                    {/* Quote mark */}
                    <div style={{ fontSize: '36px', color: '#c8a04e', lineHeight: 0.8, marginBottom: '10px', fontFamily: 'Georgia, serif' }}>&ldquo;</div>

                    {/* Quote */}
                    <p style={{ fontSize: '14px', color: '#e8e4dc', lineHeight: 1.75, fontStyle: 'italic', fontFamily: 'var(--font-outfit)', fontWeight: 300, flex: 1, marginBottom: '24px' }}>
                      {t.quote}
                    </p>

                    {/* Author */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingTop: '16px', borderTop: '1px solid rgba(200,160,78,0.1)' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(200,160,78,0.12)', border: '1px solid rgba(200,160,78,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <span style={{ fontSize: '16px', fontWeight: 600, color: '#c8a04e', fontFamily: 'var(--font-outfit)' }}>{t.initial}</span>
                      </div>
                      <div>
                        <p style={{ fontSize: '14px', fontWeight: 600, color: '#e8e4dc', lineHeight: 1.2, fontFamily: 'var(--font-outfit)', margin: 0 }}>{t.name}</p>
                        <p style={{ fontSize: '12px', color: '#8a8680', marginTop: '2px', fontFamily: 'var(--font-outfit)', fontWeight: 300, margin: 0 }}>{t.company}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: maxIndex + 1 }, (_, i) => (
              <motion.button
                key={i}
                onClick={() => goToSlide(i)}
                className="relative focus:outline-none"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Go to slide ${i + 1}`}
              >
                <motion.div
                  style={{
                    width: i === currentIndex ? '20px' : '8px',
                    height: '8px',
                    borderRadius: '4px',
                    background: i === currentIndex ? '#c8a04e' : 'rgba(200,160,78,0.2)',
                    transition: 'all 0.3s ease',
                  }}
                />
              </motion.button>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
