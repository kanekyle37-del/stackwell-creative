'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Phone, Monitor, Users } from 'lucide-react'

const steps = [
  {
    icon: Phone,
    title: 'Book a Call',
    description:
      'We have a quick 15-minute chat about your business — what you do, where you work, what kind of jobs you want more of. No pressure, no sales pitch.',
  },
  {
    icon: Monitor,
    title: 'We Build It',
    description:
      'Your site is custom-built around your trade, your area, and your reviews. Not a template — built from scratch. We handle the copy, pull your Google Reviews, and get it live within 5 days.',
  },
  {
    icon: Users,
    title: 'Start Getting Leads',
    description:
      "Your site goes live and starts working for you. When someone searches for your trade in your area, your name comes up. They see your work, read your reviews, and get in touch. You just answer the phone.",
  },
]

function Step({
  step,
  index,
  isLast,
}: {
  step: (typeof steps)[0]
  index: number
  isLast: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const baseDelay = index * 0.2
  const Icon = step.icon

  return (
    <div ref={ref} className="flex gap-6 sm:gap-10">
      {/* ── Left: icon + connector ── */}
      <div className="flex flex-col items-center flex-shrink-0" style={{ width: '64px' }}>
        {/* Icon circle — scales in */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: baseDelay + 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex items-center justify-center"
          style={{ willChange: 'transform' }}
        >
          {/* Glow orb */}
          <div
            className="absolute rounded-full pointer-events-none"
            style={{
              width: '72px',
              height: '72px',
              background: 'radial-gradient(circle, rgba(200,160,78,0.18) 0%, transparent 70%)',
              filter: 'blur(10px)',
            }}
            aria-hidden="true"
          />
          {/* Icon circle */}
          <div
            className="relative z-10 flex items-center justify-center rounded-full"
            style={{
              width: '52px',
              height: '52px',
              background: 'rgba(200,160,78,0.08)',
              border: '1px solid rgba(200,160,78,0.3)',
            }}
          >
            <Icon
              size={22}
              style={{ color: '#c8a04e' }}
              strokeWidth={1.5}
              aria-hidden="true"
            />
          </div>
        </motion.div>

        {/* Vertical connector line — scaleY from top */}
        {!isLast && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.8, delay: baseDelay + 0.25, ease: 'easeOut' }}
            className="flex-1 mt-3"
            style={{
              width: '1px',
              minHeight: '60px',
              background: 'linear-gradient(to bottom, rgba(200,160,78,0.45) 0%, rgba(200,160,78,0.08) 80%, transparent 100%)',
              transformOrigin: 'top',
              willChange: 'transform',
            }}
            aria-hidden="true"
          />
        )}
      </div>

      {/* ── Right: content — slides in from right ── */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.55, delay: baseDelay + 0.1, ease: [0.22, 1, 0.36, 1] }}
        className={`flex-1 ${isLast ? 'pb-0' : 'pb-16 sm:pb-20'}`}
        style={{ willChange: 'transform' }}
      >
        <h3
          className="font-sans font-semibold text-text-primary mb-3 leading-tight"
          style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.4rem)' }}
        >
          {step.title}
        </h3>
        <p className="font-sans text-base font-light leading-relaxed" style={{ color: '#6a6660', maxWidth: '520px' }}>
          {step.description}
        </p>
      </motion.div>
    </div>
  )
}

export default function HowItWorks() {
  const headerRef = useRef<HTMLDivElement>(null)
  const headerInView = useInView(headerRef, { once: true, amount: 0.3 })

  return (
    <section
      className="relative py-24 sm:py-28 overflow-hidden"
      style={{ background: '#0f1117' }}
      aria-labelledby="how-it-works-heading"
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 40%, rgba(200,160,78,0.04) 0%, transparent 65%)' }}
        aria-hidden="true"
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 sm:mb-20"
        >
          <p className="font-sans text-xs font-medium tracking-widest text-gold uppercase mb-4">
            The Process
          </p>
          <h2
            id="how-it-works-heading"
            className="font-sans text-4xl sm:text-5xl font-semibold text-text-primary mb-4"
          >
            How it works
          </h2>
          <p className="font-sans text-base text-text-muted font-light leading-relaxed max-w-lg">
            Three steps from first conversation to your site going live.
          </p>
        </motion.div>

        {/* Timeline steps */}
        <div>
          {steps.map((step, i) => (
            <Step
              key={step.title}
              step={step}
              index={i}
              isLast={i === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
