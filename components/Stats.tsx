'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

function StarRow() {
  return (
    <div className="flex items-center gap-1" aria-label="Five stars">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
          <path
            d="M9 1.5l2.163 4.38 4.837.703-3.5 3.412.826 4.817L9 12.553l-4.326 2.259.826-4.817L2 6.583l4.837-.703L9 1.5z"
            fill="#c8a04e"
            stroke="#c8a04e"
            strokeWidth="0.5"
            strokeLinejoin="round"
          />
        </svg>
      ))}
    </div>
  )
}

function CountUp({ target, isInView }: { target: number; isInView: boolean }) {
  const [count, setCount] = useState(target)
  const started = useRef(false)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    if (!isInView || started.current) return
    started.current = true
    const duration = 1400
    const startTime = performance.now()

    const tick = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      // Ease-out cubic for natural deceleration
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick)
      }
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [isInView, target])

  return <>{count}</>
}

const items = [
  {
    id: 'clients',
    display: (isInView: boolean) => (
      <span
        className="font-sans font-semibold leading-none"
        style={{
          fontSize: 'clamp(3rem, 5vw, 3.75rem)',
          background: 'linear-gradient(135deg, #9a7a3a, #c8a04e, #e8c96e)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        <CountUp target={7} isInView={isInView} />
      </span>
    ),
    label: 'Live trade businesses',
    sub: 'Real sites, real enquiries',
  },
  {
    id: 'days',
    display: (isInView: boolean) => (
      <span
        className="font-sans font-semibold leading-none"
        style={{
          fontSize: 'clamp(3rem, 5vw, 3.75rem)',
          background: 'linear-gradient(135deg, #9a7a3a, #c8a04e, #e8c96e)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        <CountUp target={5} isInView={isInView} /> Days
      </span>
    ),
    label: 'First call to launch',
    sub: 'Not weeks. Days.',
  },
  {
    id: 'star',
    display: (isInView: boolean) => (
      <div className="flex flex-col items-center gap-2">
        <span
          className="font-sans font-semibold leading-none"
          style={{
            fontSize: 'clamp(3rem, 5vw, 3.75rem)',
            background: 'linear-gradient(135deg, #9a7a3a, #c8a04e, #e8c96e)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          <CountUp target={5} isInView={isInView} />
          <span className="text-2xl align-top ml-0.5">★</span>
        </span>
        <StarRow />
      </div>
    ),
    label: 'Rated by every client',
    sub: 'No exceptions',
  },
  {
    id: 'guarantee',
    display: (_isInView: boolean) => (
      <span
        className="font-sans font-semibold leading-none"
        style={{
          fontSize: 'clamp(2.4rem, 4vw, 3.25rem)',
          background: 'linear-gradient(135deg, #9a7a3a, #c8a04e, #e8c96e)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        30 Days
      </span>
    ),
    label: 'Enquiry guarantee',
    sub: 'Or you don\'t pay monthly',
  },
]

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{ background: '#0d0d14' }}
      aria-label="Trust indicators"
    >
      {/* Top gold line */}
      <div
        className="absolute top-0 inset-x-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(200,160,78,0.5), transparent)' }}
        aria-hidden="true"
      />
      {/* Bottom gold line */}
      <div
        className="absolute bottom-0 inset-x-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(200,160,78,0.2), transparent)' }}
        aria-hidden="true"
      />
      {/* Subtle centre glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 100% at 50% 50%, rgba(200,160,78,0.04) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 divide-x divide-gold/10">
          {items.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center text-center gap-3 px-6 py-10 sm:py-8"
            >
              {item.display(isInView)}

              <div className="flex flex-col gap-0.5 mt-1">
                <p className="font-sans text-sm font-medium text-text-primary tracking-wide">
                  {item.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
