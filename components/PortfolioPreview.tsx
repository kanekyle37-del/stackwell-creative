'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { portfolioData } from '@/lib/portfolio-data'
import StarRating from '@/components/StarRating'

interface MockupConfig {
  url: string
  heroText: string
  brandColor: string
  resultPill: string
}

const mockupConfig: Record<string, MockupConfig> = {
  'hollyfield-roofing': {
    url: 'hollyfieldroofings.com',
    heroText: "BLACKBURN'S TRUSTED FAMILY ROOFERS",
    brandColor: '#e8621a',
    resultPill: 'Live in 4 days · Ranking on Google',
  },
  'cb-joinery': {
    url: 'cbjoineryltd.com',
    heroText: "BARROW'S TRUSTED JOINERS",
    brandColor: '#c8a04e',
    resultPill: 'Live same day · 5★ rated',
  },
  'warwick-roofing': {
    url: 'warwickrooftop.co.uk',
    heroText: "WARWICK'S MOST TRUSTED ROOFERS",
    brandColor: '#e8621a',
    resultPill: 'Ranking locally on Google',
  },
  'spires-decorating': {
    url: 'spiresdecorating.com',
    heroText: 'Spires Decorating',
    brandColor: '#c8a04e',
    resultPill: '20+ years of work showcased',
  },
  'sapphire-spray-coatings': {
    url: 'sapphirespraycoatings.co.uk',
    heroText: 'Home. No fuss needed.',
    brandColor: '#3b82f6',
    resultPill: '3 enquiries in first 30 days',
  },
  'mk-roadside': {
    url: 'mkroadside.co.uk',
    heroText: 'MK Roadside Solutions',
    brandColor: '#c8a04e',
    resultPill: 'Live and generating enquiries',
  },
}

// Grid positions: featured, tall (spans all rows), then 4 smalls
const gridPositions = [
  { column: '1 / 3', row: '1' },
  { column: '3', row: '1 / 4' },
  { column: '1', row: '2' },
  { column: '2', row: '2' },
  { column: '1', row: '3' },
  { column: '2', row: '3' },
]

function BrowserMockup({ url, heroText, brandColor }: MockupConfig) {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', flexDirection: 'column' }}>
      {/* Chrome bar */}
      <div style={{ flexShrink: 0, background: '#05060a', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', gap: '6px', padding: '7px 10px' }}>
        <div style={{ display: 'flex', gap: '4px', flexShrink: 0 }}>
          {(['#ff5f57', '#febc2e', '#28c840'] as const).map(c => (
            <div key={c} style={{ width: '7px', height: '7px', borderRadius: '50%', background: c }} />
          ))}
        </div>
        <div style={{ flex: 1, overflow: 'hidden', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '3px', padding: '2px 6px', fontSize: '8px', fontFamily: 'ui-monospace, monospace', color: 'rgba(255,255,255,0.28)', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
          {url}
        </div>
      </div>

      {/* Site preview */}
      <div style={{ flex: 1, background: 'linear-gradient(145deg, #0b0c14 0%, #111220 100%)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', padding: '18px 16px', gap: '10px', position: 'relative', overflow: 'hidden' }}>
        {/* Brand colour glow */}
        <div style={{ position: 'absolute', top: '-30%', right: '-5%', width: '55%', height: '180%', background: `radial-gradient(ellipse, ${brandColor}22 0%, transparent 70%)`, pointerEvents: 'none' }} aria-hidden="true" />
        {/* Nav hints */}
        <div style={{ position: 'absolute', top: '10px', right: '14px', display: 'flex', gap: '10px', zIndex: 1 }}>
          {['About', 'Services', 'Contact'].map(s => (
            <div key={s} style={{ fontSize: '6px', color: 'rgba(255,255,255,0.18)', fontWeight: 500 }}>{s}</div>
          ))}
        </div>
        {/* Hero headline */}
        <div style={{ fontWeight: 700, fontSize: '10px', color: '#e8e4dc', letterSpacing: '0.03em', lineHeight: 1.35, position: 'relative', zIndex: 1, maxWidth: '72%' }}>
          {heroText}
        </div>
        {/* CTA button */}
        <div style={{ background: brandColor, color: '#fff', fontSize: '7px', fontWeight: 600, padding: '4px 10px', borderRadius: '3px', position: 'relative', zIndex: 1, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
          Get a Free Quote
        </div>
      </div>
    </div>
  )
}

export default function PortfolioPreview() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section
      id="portfolio-preview"
      className="relative py-24 sm:py-28 overflow-hidden"
      style={{ background: '#0a0a0f' }}
      aria-labelledby="portfolio-heading"
    >
      <div className="absolute top-0 inset-x-0 h-px pointer-events-none" style={{ background: 'linear-gradient(90deg, transparent, rgba(200,160,78,0.2), transparent)' }} aria-hidden="true" />
      <div className="absolute bottom-0 inset-x-0 h-px pointer-events-none" style={{ background: 'linear-gradient(90deg, transparent, rgba(200,160,78,0.1), transparent)' }} aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div ref={ref} className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-10">
          <div>
            <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.15em', color: '#c8a04e', textTransform: 'uppercase', marginBottom: '10px', fontFamily: 'var(--font-outfit)' }}>
              Our Work
            </p>
            <h2
              id="portfolio-heading"
              style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(28px, 4vw, 38px)', fontWeight: 400, color: '#e8e4dc', lineHeight: 1.1 }}
            >
              Sites out there winning work.
            </h2>
          </div>
          <p style={{ fontSize: '14px', color: '#8a8680', fontFamily: 'var(--font-outfit)', fontWeight: 300, flexShrink: 0 }}>
            Real trade sites. Click to see them live.
          </p>
        </div>

        {/* Bento grid */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="portfolio-bento"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gridTemplateRows: '280px 200px 200px',
            gap: '10px',
          }}
        >
          {portfolioData.slice(0, 6).map((item, i) => {
            const mockup = mockupConfig[item.id]
            const pos = gridPositions[i]

            return (
              <article
                key={item.id}
                className="portfolio-card"
                style={{
                  gridColumn: pos.column,
                  gridRow: pos.row,
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '12px',
                  background: '#111118',
                  border: '1px solid rgba(200,160,78,0.12)',
                }}
              >
                {/* Browser mockup fills entire card */}
                {mockup && <BrowserMockup {...mockup} />}

                {/* Live badge */}
                <div style={{ position: 'absolute', top: '10px', left: '10px', zIndex: 20, display: 'flex', alignItems: 'center', gap: '5px', background: 'rgba(5,6,10,0.8)', backdropFilter: 'blur(6px)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: '20px', padding: '3px 9px', pointerEvents: 'none' }}>
                  <div className="pulse-live" style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e', flexShrink: 0 }} />
                  <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-outfit)', fontWeight: 400 }}>Live client site</span>
                </div>

                {/* External link — hover only */}
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-external-link"
                  onClick={e => e.stopPropagation()}
                  aria-label={`Visit ${item.clientName} live site`}
                  style={{ position: 'absolute', top: '10px', right: '10px', zIndex: 20, width: '30px', height: '30px', borderRadius: '6px', background: 'rgba(5,6,10,0.8)', backdropFilter: 'blur(6px)', border: '1px solid rgba(200,160,78,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M1 11L11 1M11 1H4M11 1v7" stroke="#c8a04e" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>

                {/* Gradient overlay */}
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '65%', background: 'linear-gradient(to top, rgba(10,10,15,0.97) 0%, rgba(10,10,15,0.6) 60%, transparent 100%)', pointerEvents: 'none', zIndex: 5 }} aria-hidden="true" />

                {/* Card info */}
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '14px 16px', zIndex: 10 }}>
                  {/* Trade tag */}
                  <div style={{ marginBottom: '5px' }}>
                    <span style={{ background: 'rgba(200,160,78,0.12)', border: '1px solid rgba(200,160,78,0.25)', color: '#c8a04e', fontSize: '9px', fontWeight: 700, letterSpacing: '0.12em', padding: '2px 8px', borderRadius: '20px', textTransform: 'uppercase', fontFamily: 'var(--font-outfit)' }}>
                      {item.niche}
                    </span>
                  </div>

                  {/* Client name */}
                  <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#e8e4dc', marginBottom: '4px', lineHeight: 1.2, fontFamily: 'var(--font-outfit)' }}>
                    {item.clientName}
                  </h3>

                  {/* Location + rating */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '11px', color: '#8a8680', fontFamily: 'var(--font-outfit)', fontWeight: 300 }}>{item.meta}</span>
                    <span style={{ fontSize: '11px', color: '#3a3835' }}>·</span>
                    <StarRating rating={item.googleRating} size={11} />
                    <span style={{ fontSize: '11px', color: '#8a8680' }}>{item.googleRating.toFixed(1)}</span>
                  </div>

                  {/* Result pill — hover only */}
                  {mockup && (
                    <div className="card-result-pill" style={{ background: 'rgba(200,160,78,0.12)', border: '1px solid rgba(200,160,78,0.3)', color: '#c8a04e', borderRadius: '20px', fontSize: '11px', padding: '4px 12px', display: 'inline-block', fontFamily: 'var(--font-outfit)', fontWeight: 400 }}>
                      {mockup.resultPill}
                    </div>
                  )}
                </div>
              </article>
            )
          })}
        </motion.div>

        {/* Stats bar */}
        <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', padding: '18px 0', borderTop: '1px solid rgba(200,160,78,0.1)', borderBottom: '1px solid rgba(200,160,78,0.1)' }}>
          <div style={{ display: 'flex', alignItems: 'stretch', gap: 0, flexWrap: 'wrap' }}>
            {[
              { value: '7', label: 'Live trade businesses' },
              { value: '5★', label: 'Rated by every client' },
              { value: '5 days', label: 'Average build time' },
            ].map((stat, i) => (
              <div key={stat.label} style={{ display: 'flex', alignItems: 'center', gap: '10px', paddingRight: i < 2 ? '24px' : 0, marginRight: i < 2 ? '24px' : 0, borderRight: i < 2 ? '1px solid rgba(200,160,78,0.15)' : 'none' }}>
                <span style={{ fontSize: '22px', fontWeight: 700, color: '#c8a04e', fontFamily: 'var(--font-outfit)' }}>{stat.value}</span>
                <span style={{ fontSize: '12px', color: '#8a8680', fontFamily: 'var(--font-outfit)', fontWeight: 300, lineHeight: 1.3 }}>{stat.label}</span>
              </div>
            ))}
          </div>

          <Link
            href="/portfolio"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: '#c8a04e', fontFamily: 'var(--font-outfit)', fontWeight: 500, flexShrink: 0, textDecoration: 'none' }}
          >
            View all work
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>

      <style>{`
        .portfolio-card {
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
          cursor: default;
        }
        .portfolio-card:hover {
          transform: translateY(-4px);
          border-color: rgba(200,160,78,0.4) !important;
          box-shadow: 0 16px 48px rgba(0,0,0,0.5);
        }
        .card-external-link {
          opacity: 0;
          transition: opacity 0.25s ease;
        }
        .portfolio-card:hover .card-external-link {
          opacity: 1;
        }
        .card-result-pill {
          opacity: 0;
          transform: translateY(8px);
          transition: opacity 0.3s ease, transform 0.3s ease;
        }
        .portfolio-card:hover .card-result-pill {
          opacity: 1;
          transform: translateY(0);
        }
        @keyframes pulse-live {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        .pulse-live {
          animation: pulse-live 2s ease-in-out infinite;
        }
        @media (max-width: 768px) {
          .portfolio-bento {
            grid-template-columns: 1fr !important;
            grid-template-rows: none !important;
          }
          .portfolio-bento > article {
            grid-column: 1 !important;
            grid-row: auto !important;
            min-height: 220px !important;
          }
        }
      `}</style>
    </section>
  )
}
