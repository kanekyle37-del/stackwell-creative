'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import ElegantShapesBg from '@/components/ui/elegant-shapes'

// ─── Animation variants ───────────────────────────────────────────────────

const containerVariants = {
  hidden: {},
  // Shorter delay so heading appears faster (better LCP)
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

const itemVariants = {
  // Use opacity: 0.01 not 0 — Lighthouse can measure the element immediately
  hidden: { opacity: 0.01, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
}

// ─── Laptop mockup ────────────────────────────────────────────────────────

function LaptopMockup() {
  return (
    <div
      className="relative w-full"
      aria-label="Hollyfield Roofing website displayed in a laptop frame"
    >
      {/* Screen lid */}
      <div
        className="rounded-t-xl overflow-hidden"
        style={{
          background: '#0d0e15',
          border: '2px solid rgba(200,160,78,0.35)',
          borderBottom: 'none',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04)',
        }}
      >
        {/* Browser chrome */}
        <div
          className="flex items-center gap-2 px-3 py-2.5"
          style={{
            background: '#08090e',
            borderBottom: '1px solid rgba(200,160,78,0.12)',
          }}
        >
          {/* Traffic lights */}
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#ff5f57' }} />
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#febc2e' }} />
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#28c840' }} />
          </div>

          {/* URL bar */}
          <div
            className="flex-1 mx-3 flex items-center gap-2 rounded px-3 py-1"
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <svg width="9" height="10" viewBox="0 0 9 10" fill="none" aria-hidden="true">
              <rect x="1" y="4.5" width="7" height="5" rx="1" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8" />
              <path d="M2.8 4.5V3a1.7 1.7 0 013.4 0v1.5" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8" />
            </svg>
            <span style={{ fontSize: '9px', color: 'rgba(255,255,255,0.3)', fontFamily: 'ui-monospace,monospace', letterSpacing: '0.02em' }}>
              hollyfieldroofings.com
            </span>
          </div>

          {/* Toolbar spacer */}
          <div className="flex gap-1" aria-hidden="true">
            <div className="w-7 h-3.5 rounded" style={{ background: 'rgba(255,255,255,0.04)' }} />
            <div className="w-3.5 h-3.5 rounded" style={{ background: 'rgba(255,255,255,0.04)' }} />
          </div>
        </div>

        {/* Screenshot */}
        <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
          <Image
            src="/images/portfolio-hollyfield-roofing.jpg"
            alt="Hollyfield Roofing website"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
            quality={95}
            className="object-cover object-top"
            priority
          />
          {/* Bottom vignette to blend into base */}
          <div
            className="absolute inset-x-0 bottom-0 h-10 pointer-events-none"
            style={{ background: 'linear-gradient(to bottom, transparent, rgba(8,9,14,0.35))' }}
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Laptop base */}
      <div
        className="flex flex-col items-center px-3 pt-2.5 pb-2"
        style={{
          background: 'linear-gradient(180deg, #0d0e15 0%, #08090e 100%)',
          border: '2px solid rgba(200,160,78,0.35)',
          borderTop: 'none',
          borderRadius: '0 0 8px 8px',
        }}
      >
        <div
          className="w-full rounded-sm"
          style={{ height: '26px', background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.04)' }}
          aria-hidden="true"
        />
        <div
          className="mt-1.5 rounded-sm"
          style={{ width: '64px', height: '11px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}
          aria-hidden="true"
        />
      </div>

      {/* Hinge shadow */}
      <div
        className="mx-auto"
        style={{ width: '120px', height: '4px', background: 'linear-gradient(90deg, transparent, rgba(200,160,78,0.15), transparent)', borderRadius: '0 0 6px 6px' }}
        aria-hidden="true"
      />
    </div>
  )
}

// ─── Phone mockup ─────────────────────────────────────────────────────────

function PhoneMockup() {
  return (
    <div
      className="relative flex flex-col overflow-hidden"
      style={{
        width: '140px',
        borderRadius: '20px',
        background: '#08090e',
        border: '2px solid rgba(200,160,78,0.4)',
        boxShadow: '0 16px 48px rgba(0,0,0,0.75), 0 0 24px rgba(200,160,78,0.15)',
      }}
      aria-label="Spires Decorating website on mobile"
    >
      {/* Notch bar */}
      <div
        className="flex items-center justify-center py-2.5"
        style={{ background: '#05060a', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
        aria-hidden="true"
      >
        <div className="rounded-full" style={{ width: '40px', height: '5px', background: 'rgba(255,255,255,0.12)' }} />
      </div>

      {/* Screenshot */}
      <div className="relative" style={{ aspectRatio: '9/16' }}>
        <Image
          src="/images/portfolio-spires-decorating-mobile.jpg"
          alt="Spires Decorating on mobile"
          fill
          sizes="280px"
          quality={95}
          className="object-cover object-top"
        />
        <div
          className="absolute inset-x-0 bottom-0 h-10 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, transparent, rgba(5,6,10,0.5))' }}
          aria-hidden="true"
        />
      </div>

      {/* Home bar */}
      <div
        className="flex items-center justify-center py-2.5"
        style={{ background: '#05060a', borderTop: '1px solid rgba(255,255,255,0.05)' }}
        aria-hidden="true"
      >
        <div className="rounded-full" style={{ width: '48px', height: '4px', background: 'rgba(255,255,255,0.2)' }} />
      </div>
    </div>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────

export default function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      className="relative flex items-center overflow-hidden"
      style={{ minHeight: 'calc(100vh - 80px)', marginTop: '80px' }}
      aria-label="Hero"
    >
      {/* ── Backgrounds ──────────────────────────────────────────────── */}

      {/* Floating gold ellipses */}
      <ElegantShapesBg />

      {/* Ambient orb — top left */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '-5%', left: '-10%',
          width: '55%', height: '70%',
          background: 'radial-gradient(ellipse, rgba(200,160,78,0.07) 0%, transparent 60%)',
          filter: 'blur(80px)',
        }}
        aria-hidden="true"
      />

      {/* Ambient orb — bottom right */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '-10%', right: '-5%',
          width: '50%', height: '60%',
          background: 'radial-gradient(ellipse, rgba(100,120,180,0.05) 0%, transparent 60%)',
          filter: 'blur(80px)',
        }}
        aria-hidden="true"
      />

      {/* Top gold line */}
      <div
        className="absolute top-0 inset-x-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(200,160,78,0.4), transparent)' }}
        aria-hidden="true"
      />

      {/* ── Content ──────────────────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* ── LEFT: copy ───────────────────────────────────────────── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6 lg:gap-7"
          >
            {/* Trust line */}
            <motion.div variants={itemVariants} className="flex items-center gap-2.5">
              <span
                className="flex-shrink-0 w-1.5 h-1.5 rounded-full"
                style={{ background: '#c8a04e' }}
                aria-hidden="true"
              />
              <span
                className="font-sans text-xs uppercase"
                style={{ color: 'rgba(200,160,78,0.75)', letterSpacing: '0.12em' }}
              >
                Trusted by roofers, plasterers &amp; decorators across the UK
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-sans font-semibold leading-[1.05]"
              style={{ fontSize: 'clamp(2.8rem, 5.5vw, 4.5rem)' }}
            >
              Websites That
              <br />
              <span
                className="italic font-light"
                style={{
                  background: 'linear-gradient(135deg, #9a7a3a 0%, #c8a04e 50%, #e8c96e 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Win Work
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="font-sans font-light leading-relaxed"
              style={{ fontSize: 'clamp(1rem, 1.8vw, 1.125rem)', color: '#8a8680', maxWidth: '480px' }}
            >
              When someone nearby searches for a roofer, decorator, or plasterer, they call
              whoever comes up first. Right now that&apos;s probably not you. We change that in 5 days.
            </motion.p>

            {/* CTA buttons */}
            <motion.div id="hero-cta" variants={itemVariants} className="flex flex-wrap items-center gap-3">
              <motion.button
                onClick={() => scrollTo('contact')}
                whileHover={{ scale: 1.03, boxShadow: '0 8px 30px rgba(200,160,78,0.3)' }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="group flex items-center gap-2.5 font-sans font-medium text-sm tracking-wide rounded cursor-pointer"
                style={{ padding: '14px 28px', background: '#c8a04e', color: '#0f1117', boxShadow: '0 0 24px rgba(200,160,78,0.25)', minHeight: '48px', willChange: 'transform' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#e8c96e' }}
                onMouseLeave={e => { e.currentTarget.style.background = '#c8a04e' }}
                aria-label="Get a free quote — scroll to contact form"
              >
                Get Your Free Website Preview
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true">
                  <path d="M3 7.5h9M8.5 4l3.5 3.5L8.5 11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.button>

              <motion.button
                onClick={() => scrollTo('portfolio-preview')}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="font-sans font-light text-sm tracking-wide rounded cursor-pointer transition-colors duration-200"
                style={{ padding: '14px 28px', border: '1px solid rgba(200,160,78,0.3)', color: '#e8e4dc', minHeight: '48px', willChange: 'transform' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(200,160,78,0.65)'; e.currentTarget.style.color = '#c8a04e' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(200,160,78,0.3)'; e.currentTarget.style.color = '#e8e4dc' }}
                aria-label="See our work — scroll to portfolio"
              >
                See Our Work
              </motion.button>
            </motion.div>

            {/* Trust strip */}
            <motion.div variants={itemVariants} className="flex flex-col gap-3">
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                {['Live in 5 days', '30-day enquiry guarantee', 'More booked jobs, not just enquiries'].map(item => (
                  <span key={item} className="flex items-center gap-1.5 font-sans text-xs font-light" style={{ color: '#5a5854' }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M2 6l2.5 2.5L10 3.5" stroke="#c8a04e" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item}
                  </span>
                ))}
              </div>
              {/* Guarantee line */}
              <div className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c8a04e" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: 0 }}>
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <span className="font-sans text-sm font-light" style={{ color: '#c8a04e' }}>
                  If your site doesn&apos;t generate an enquiry in the first 30 days, you don&apos;t pay monthly until it does.
                </span>
              </div>
              {/* Scarcity line */}
              <div className="flex items-center gap-2">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#5a5854" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: 0 }}>
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <span className="font-sans font-light" style={{ fontSize: '13px', color: '#5a5854' }}>
                  We only take on 5 new clients per month to keep quality high.
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* ── RIGHT: mockup ────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-center lg:justify-end"
          >
            {/* Float wrapper */}
            <motion.div
              animate={{ y: [0, -9, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', repeatType: 'loop' }}
              className="relative w-full"
              /* Extra space on bottom/right for phone overflow */
              style={{ paddingBottom: '48px', paddingRight: '28px' }}
            >
              {/* Gold glow orb behind everything */}
              <div
                className="absolute pointer-events-none"
                style={{
                  top: '50%', left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '130%', height: '130%',
                  background: 'radial-gradient(ellipse at center, rgba(200,160,78,0.18) 0%, rgba(200,160,78,0.06) 40%, transparent 70%)',
                  filter: 'blur(48px)',
                  zIndex: 0,
                }}
                aria-hidden="true"
              />

              {/* Laptop — full column width, subtle 3D tilt */}
              <div
                className="relative z-10"
                style={{
                  transform: 'perspective(1400px) rotateY(-4deg) rotateX(3deg)',
                  filter: 'drop-shadow(0 40px 72px rgba(0,0,0,0.75)) drop-shadow(0 0 40px rgba(200,160,78,0.1))',
                }}
              >
                <LaptopMockup />

                {/* "Live client sites" badge */}
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0, duration: 0.4 }}
                  className="absolute flex items-center gap-2"
                  style={{
                    top: '-16px',
                    right: '16px',
                    background: 'rgba(15,17,23,0.92)',
                    border: '1px solid rgba(200,160,78,0.28)',
                    borderRadius: '20px',
                    padding: '5px 14px',
                    backdropFilter: 'blur(10px)',
                    zIndex: 30,
                    boxShadow: '0 4px 16px rgba(0,0,0,0.4)',
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full animate-pulse-gold" style={{ background: '#4aba7a' }} aria-hidden="true" />
                  <span className="font-sans text-xs" style={{ color: '#8a8680' }}>Live client sites</span>
                </motion.div>
              </div>

              {/* Phone — overlapping bottom-right of laptop */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.65, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute z-20 hidden lg:block"
                style={{
                  bottom: '0px',
                  right: '0px',
                  transform: 'perspective(800px) rotateY(3deg) rotateX(-2deg) rotate(3deg)',
                }}
              >
                <PhoneMockup />
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* ── Bottom divider ────────────────────────────────────────────── */}
      <div className="absolute bottom-0 inset-x-0 pointer-events-none" aria-hidden="true">
        <div className="h-20" style={{ background: 'linear-gradient(to bottom, transparent, #0f1117)' }} />
        <div className="h-px" style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(200,160,78,0.45) 30%, rgba(200,160,78,0.6) 50%, rgba(200,160,78,0.45) 70%, transparent 100%)' }} />
      </div>
    </section>
  )
}
