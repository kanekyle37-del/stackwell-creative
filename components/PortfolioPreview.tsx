'use client'

import { useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import StarRating from '@/components/StarRating'

interface CardData {
  id: string
  domain: string
  screenshot?: string
  heroBackground: string
  heroContent: React.ReactNode
  ctaColor: string
  trade: string
  clientName: string
  metaText: string
  rating: number
  resultPill: string
  liveUrl: string
}

function BrowserMockup({
  domain,
  screenshot,
  heroBackground,
  heroContent,
  ctaColor,
}: {
  domain: string
  screenshot?: string
  heroBackground: string
  heroContent: React.ReactNode
  ctaColor: string
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Chrome bar */}
      <div
        style={{
          flexShrink: 0,
          background: 'rgba(5,6,10,0.95)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '8px 14px',
        }}
      >
        <div style={{ display: 'flex', gap: '5px', flexShrink: 0 }}>
          {(['#ff5f57', '#febc2e', '#28c840'] as const).map((c) => (
            <div key={c} style={{ width: '7px', height: '7px', borderRadius: '50%', background: c }} />
          ))}
        </div>
        <div
          style={{
            flex: 1,
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: '4px',
            padding: '3px 8px',
            fontSize: '10px',
            fontFamily: 'ui-monospace, monospace',
            color: 'rgba(255,255,255,0.3)',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {domain}
        </div>
      </div>

      {/* Screenshot or fallback mockup */}
      {screenshot ? (
        <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
          <Image
            src={screenshot}
            alt={`${domain} website screenshot`}
            fill
            sizes="(max-width: 768px) 85vw, 520px"
            className="object-cover object-top"
            quality={90}
            draggable={false}
          />
        </div>
      ) : (
        <div
          style={{
            flex: 1,
            background: heroBackground,
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '12px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '12px',
              right: '16px',
              display: 'flex',
              gap: '12px',
            }}
          >
            {['About', 'Services', 'Contact'].map((s) => (
              <div key={s} style={{ fontSize: '8px', color: 'rgba(255,255,255,0.2)', fontWeight: 500 }}>
                {s}
              </div>
            ))}
          </div>

          {heroContent}

          <div
            style={{
              background: ctaColor,
              color: '#fff',
              fontSize: '10px',
              fontWeight: 700,
              padding: '6px 14px',
              borderRadius: '4px',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              alignSelf: 'flex-start',
            }}
          >
            Get a Free Quote
          </div>
        </div>
      )}
    </div>
  )
}

const cards: CardData[] = [
  {
    id: 'hollyfield-roofing',
    domain: 'hollyfieldroofings.com',
    screenshot: '/images/portfolio-hollyfield-roofing.jpg',
    heroBackground: 'linear-gradient(135deg, #1a1a1a 0%, #252525 100%)',
    heroContent: (
      <div
        style={{
          fontWeight: 800,
          fontSize: '20px',
          color: '#ffffff',
          letterSpacing: '0.04em',
          lineHeight: 1.2,
          textTransform: 'uppercase',
          maxWidth: '80%',
        }}
      >
        BLACKBURN&apos;S TRUSTED FAMILY ROOFERS
      </div>
    ),
    ctaColor: '#e8621a',
    trade: 'Roofer',
    clientName: 'Hollyfield Roofing',
    metaText: 'Roofer · Blackburn',
    rating: 5.0,
    resultPill: 'Live in 4 days · Now ranking on Google',
    liveUrl: 'https://hollyfieldroofings.com',
  },
  {
    id: 'warwick-roofing',
    domain: 'warwickrooftop.co.uk',
    screenshot: '/images/portfolio-warwick-roofing.jpg',
    heroBackground: 'linear-gradient(135deg, #0d1117 0%, #1a1f2e 100%)',
    heroContent: (
      <div
        style={{
          fontWeight: 800,
          fontSize: '19px',
          color: '#ffffff',
          letterSpacing: '0.04em',
          lineHeight: 1.2,
          textTransform: 'uppercase',
          maxWidth: '80%',
        }}
      >
        WARWICK&apos;S MOST TRUSTED ROOFING SPECIALISTS
      </div>
    ),
    ctaColor: '#e8621a',
    trade: 'Roofer',
    clientName: 'Warwick Roofing',
    metaText: 'Roofer · Warwick',
    rating: 5.0,
    resultPill: '30+ years showcased · Ranking locally',
    liveUrl: 'https://warwickrooftop.co.uk',
  },
  {
    id: 'spires-decorating',
    domain: 'spiresdecorating.com',
    screenshot: '/images/portfolio-spires-decorating.jpg',
    heroBackground: '#f5f0e8',
    heroContent: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <div
          style={{
            fontFamily: 'Georgia, "Times New Roman", serif',
            fontWeight: 400,
            fontSize: '26px',
            color: '#1a1a1a',
            lineHeight: 1.1,
          }}
        >
          Spires Decorating
        </div>
        <div
          style={{
            fontSize: '10px',
            color: '#6a6560',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            fontWeight: 500,
          }}
        >
          SPECIALIST COATINGS · NORTHAMPTON · EST. 20+ YEARS
        </div>
      </div>
    ),
    ctaColor: '#c8a04e',
    trade: 'Painter & Decorator',
    clientName: 'Spires Decorating',
    metaText: 'Painter & Decorator · Northampton',
    rating: 4.5,
    resultPill: '20+ years of work. Online in 5 days.',
    liveUrl: 'https://spiresdecorating.com',
  },
  {
    id: 'sapphire-spray-coatings',
    domain: 'sapphirespraycoatings.co.uk',
    screenshot: '/images/portfolio-sapphire-spray-coatings.jpg',
    heroBackground: '#0a0e1a',
    heroContent: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <div
          style={{
            fontWeight: 800,
            fontSize: '22px',
            color: '#ffffff',
            lineHeight: 1.15,
          }}
        >
          Home.{' '}
          <span style={{ color: '#3b82f6' }}>No</span>
          {' '}fuss needed.
        </div>
        <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)', fontWeight: 400 }}>
          Professional spray coatings &amp; UPVC in Mansfield
        </div>
      </div>
    ),
    ctaColor: '#3b82f6',
    trade: 'Painter & Decorator',
    clientName: 'Sapphire Spray Coatings',
    metaText: 'Painter & Decorator · Mansfield',
    rating: 5.0,
    resultPill: '3 enquiries in first 30 days',
    liveUrl: 'https://sapphirespraycoatings.co.uk',
  },
  {
    id: 'cb-joinery',
    domain: 'cbjoineryltd.com',
    heroBackground: 'linear-gradient(135deg, #1a2018 0%, #212820 100%)',
    heroContent: (
      <div
        style={{
          fontWeight: 800,
          fontSize: '21px',
          color: '#f0ece4',
          letterSpacing: '0.04em',
          lineHeight: 1.2,
          textTransform: 'uppercase',
          maxWidth: '80%',
        }}
      >
        BARROW&apos;S TRUSTED JOINERS
      </div>
    ),
    ctaColor: '#c8a04e',
    trade: 'Joiner',
    clientName: 'C&B Joinery',
    metaText: 'Joiner · Barrow-in-Furness',
    rating: 5.0,
    resultPill: 'Live same day. 5★ rated.',
    liveUrl: 'https://cbjoineryltd.com',
  },
  {
    id: 'mk-roadside',
    domain: 'mkroadside.co.uk',
    heroBackground: '#111111',
    heroContent: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <div
          style={{
            fontWeight: 800,
            fontSize: '22px',
            color: '#ffffff',
            lineHeight: 1.15,
          }}
        >
          MK Roadside Solutions
        </div>
        <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', fontWeight: 400 }}>
          24/7 roadside recovery · Milton Keynes
        </div>
      </div>
    ),
    ctaColor: '#c8a04e',
    trade: 'Breakdown',
    clientName: 'MK Roadside Solutions',
    metaText: 'Breakdown · Milton Keynes',
    rating: 5.0,
    resultPill: 'Live and generating enquiries',
    liveUrl: 'https://mkroadside.co.uk',
  },
]

function PortfolioCard({ card }: { card: CardData }) {
  return (
    <div
      className="portfolio-snap-card"
      style={{
        flexShrink: 0,
        scrollSnapAlign: 'start',
        width: '520px',
        height: '560px',
        background: '#111118',
        borderRadius: '16px',
        border: '1px solid rgba(200,160,78,0.1)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        transition: 'border-color 0.3s ease',
        position: 'relative',
      }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(200,160,78,0.35)' }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(200,160,78,0.1)' }}
    >
      {/* Browser mockup — top 65% */}
      <div style={{ flex: '0 0 65%', overflow: 'hidden', position: 'relative' }}>
        <BrowserMockup
          domain={card.domain}
          screenshot={card.screenshot}
          heroBackground={card.heroBackground}
          heroContent={card.heroContent}
          ctaColor={card.ctaColor}
        />
      </div>

      {/* Card info — bottom 35% */}
      <div
        style={{
          flex: '0 0 35%',
          background: '#0a0a0f',
          padding: '18px 22px',
          display: 'flex',
          flexDirection: 'column',
          gap: '6px',
          borderTop: '1px solid rgba(200,160,78,0.08)',
        }}
      >
        {/* Trade tag */}
        <div>
          <span
            style={{
              background: 'rgba(200,160,78,0.1)',
              border: '1px solid rgba(200,160,78,0.22)',
              color: '#c8a04e',
              fontSize: '9px',
              fontWeight: 700,
              letterSpacing: '0.12em',
              padding: '2px 8px',
              borderRadius: '20px',
              textTransform: 'uppercase',
              fontFamily: 'var(--font-outfit)',
            }}
          >
            {card.trade}
          </span>
        </div>

        {/* Client name */}
        <p
          style={{
            fontSize: '20px',
            fontWeight: 600,
            color: '#e8e4dc',
            lineHeight: 1.2,
            fontFamily: 'var(--font-outfit)',
            margin: 0,
          }}
        >
          {card.clientName}
        </p>

        {/* Location + stars */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '13px', color: '#8a8680', fontFamily: 'var(--font-outfit)', fontWeight: 300 }}>
            {card.metaText}
          </span>
          <span style={{ fontSize: '13px', color: '#3a3835' }}>·</span>
          <StarRating rating={card.rating} size={11} />
          <span style={{ fontSize: '13px', color: '#8a8680' }}>{card.rating.toFixed(1)}</span>
        </div>

        {/* Result pill — always visible */}
        <div
          style={{
            background: 'rgba(200,160,78,0.08)',
            border: '1px solid rgba(200,160,78,0.22)',
            color: '#c8a04e',
            borderRadius: '20px',
            fontSize: '12px',
            padding: '4px 12px',
            display: 'inline-block',
            fontFamily: 'var(--font-outfit)',
            fontWeight: 400,
            alignSelf: 'flex-start',
          }}
        >
          {card.resultPill}
        </div>

        {/* View live link */}
        <a
          href={card.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          style={{
            fontSize: '13px',
            color: '#c8a04e',
            fontFamily: 'var(--font-outfit)',
            fontWeight: 500,
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            marginTop: '2px',
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.textDecoration = 'underline' }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.textDecoration = 'none' }}
        >
          View Live Site
          <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path d="M1 11L11 1M11 1H4M11 1v7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </div>
  )
}

export default function PortfolioPreview() {
  const headerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(headerRef, { once: true, amount: 0.2 })
  const stripRef = useRef<HTMLDivElement>(null)

  // Mouse drag-to-scroll
  useEffect(() => {
    const strip = stripRef.current
    if (!strip) return

    let isDragging = false
    let startX = 0
    let scrollLeft = 0

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true
      startX = e.pageX - strip.offsetLeft
      scrollLeft = strip.scrollLeft
      strip.classList.add('dragging')
    }

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return
      e.preventDefault()
      const x = e.pageX - strip.offsetLeft
      const walk = (x - startX) * 1.2
      strip.scrollLeft = scrollLeft - walk
    }

    const onMouseUp = () => {
      isDragging = false
      strip.classList.remove('dragging')
    }

    strip.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)
    strip.addEventListener('mouseleave', onMouseUp)

    return () => {
      strip.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
      strip.removeEventListener('mouseleave', onMouseUp)
    }
  }, [])

  return (
    <section
      id="portfolio-preview"
      className="relative py-24 sm:py-28 overflow-hidden"
      style={{ background: '#0a0a0f' }}
      aria-labelledby="portfolio-heading"
    >
      <div className="absolute top-0 inset-x-0 h-px pointer-events-none" style={{ background: 'linear-gradient(90deg, transparent, rgba(200,160,78,0.2), transparent)' }} aria-hidden="true" />
      <div className="absolute bottom-0 inset-x-0 h-px pointer-events-none" style={{ background: 'linear-gradient(90deg, transparent, rgba(200,160,78,0.1), transparent)' }} aria-hidden="true" />

      {/* Header */}
      <div ref={headerRef} className="max-w-6xl mx-auto px-4 sm:px-6 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3"
        >
          <div>
            <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.15em', color: '#c8a04e', textTransform: 'uppercase', marginBottom: '10px', fontFamily: 'var(--font-outfit)' }}>
              Our Work
            </p>
            <h2
              id="portfolio-heading"
              style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 400, color: '#e8e4dc', lineHeight: 1.1 }}
            >
              Sites out there winning work.
            </h2>
            {/* Mobile: swipe hint below headline */}
            <p className="sm:hidden mt-3 text-center" style={{ fontSize: '14px', color: '#8a8680', fontStyle: 'italic', fontFamily: 'var(--font-outfit)', fontWeight: 300 }}>
              Swipe to see more →
            </p>
          </div>
          {/* Desktop: swipe hint right-aligned */}
          <p className="hidden sm:block" style={{ fontSize: '14px', color: '#8a8680', fontStyle: 'italic', fontFamily: 'var(--font-outfit)', fontWeight: 300, flexShrink: 0 }}>
            Swipe to see more →
          </p>
        </motion.div>
      </div>

      {/* Scroll strip */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      >
        <div
          ref={stripRef}
          className="portfolio-strip"
        >
          {cards.map((card) => (
            <PortfolioCard key={card.id} card={card} />
          ))}
        </div>
      </motion.div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-10">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
            padding: '18px 0',
            borderTop: '1px solid rgba(200,160,78,0.1)',
            borderBottom: '1px solid rgba(200,160,78,0.1)',
          }}
        >
          {/* Stats */}
          <div style={{ display: 'flex', alignItems: 'stretch', gap: 0, flexWrap: 'wrap' }}>
            {[
              { value: '7', label: 'Live trade sites' },
              { value: '5★', label: 'Average rating' },
              { value: '5 days', label: 'Average build time' },
            ].map((stat, i) => (
              <div
                key={stat.label}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  paddingRight: i < 2 ? '24px' : 0,
                  marginRight: i < 2 ? '24px' : 0,
                  borderRight: i < 2 ? '1px solid rgba(200,160,78,0.15)' : 'none',
                }}
              >
                <span style={{ fontSize: '22px', fontWeight: 700, color: '#c8a04e', fontFamily: 'var(--font-outfit)' }}>{stat.value}</span>
                <span style={{ fontSize: '12px', color: '#8a8680', fontFamily: 'var(--font-outfit)', fontWeight: 300, lineHeight: 1.3 }}>{stat.label}</span>
              </div>
            ))}
          </div>

          {/* View all link */}
          <Link
            href="/portfolio"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '14px', color: '#c8a04e', fontFamily: 'var(--font-outfit)', fontWeight: 500, flexShrink: 0, textDecoration: 'none' }}
          >
            View all work
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>

      <style>{`
        .portfolio-strip {
          display: flex;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          gap: 16px;
          padding-left: max(24px, calc((100vw - 1100px) / 2));
          padding-right: max(80px, calc((100vw - 1100px) / 2 + 80px));
          cursor: grab;
          user-select: none;
        }
        .portfolio-strip::-webkit-scrollbar {
          display: none;
        }
        .portfolio-strip.dragging {
          cursor: grabbing;
          scroll-snap-type: none;
        }
        .portfolio-snap-card {
          scroll-snap-align: start;
        }
        @media (max-width: 767px) {
          .portfolio-snap-card {
            width: 85vw !important;
            height: 480px !important;
          }
        }
      `}</style>
    </section>
  )
}
