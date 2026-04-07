'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { portfolioData } from '@/lib/portfolio-data'

export default function PortfolioPreview() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.15 })

  const featured = portfolioData.slice(0, 3)

  return (
    <section
      id="portfolio-preview"
      ref={ref}
      className="relative py-24 sm:py-28 overflow-hidden"
      style={{ background: '#111320' }}
      aria-labelledby="portfolio-heading"
    >
      {/* Top divider */}
      <div
        className="absolute top-0 inset-x-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(200,160,78,0.2), transparent)' }}
        aria-hidden="true"
      />
      {/* Background radial */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 40% at 50% 0%, rgba(200,160,78,0.05) 0%, transparent 60%)' }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
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

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {featured.map((item, i) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.25, ease: 'easeOut' } }}
              className="group flex flex-col rounded-xl overflow-hidden cursor-default"
              style={{
                background: '#0f1117',
                border: '1px solid rgba(200,160,78,0.1)',
                transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                willChange: 'transform',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget
                el.style.borderColor = 'rgba(200,160,78,0.3)'
                el.style.boxShadow = '0 12px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(200,160,78,0.15)'
                const scrollEl = el.querySelector('[data-scroll-wrapper]') as HTMLElement | null
                if (scrollEl) scrollEl.style.transform = 'translateY(-20%)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget
                el.style.borderColor = 'rgba(200,160,78,0.1)'
                el.style.boxShadow = 'none'
                const scrollEl = el.querySelector('[data-scroll-wrapper]') as HTMLElement | null
                if (scrollEl) scrollEl.style.transform = 'translateY(0)'
              }}
            >
              {/* Screenshot — fixed height, hover scroll */}
              <div className="relative overflow-hidden" style={{ height: '420px' }}>
                {/* Scroll wrapper — translates on hover to reveal below-fold content */}
                <div
                  data-scroll-wrapper
                  className="absolute top-0 left-0 right-0"
                  style={{
                    height: '155%',
                    transition: 'transform 3000ms ease-in-out',
                  }}
                >
                  <Image
                    src={item.imagePlaceholder}
                    alt={`${item.clientName} website`}
                    fill
                    sizes="(max-width: 768px) 100vw, 1280px"
                    quality={92}
                    className="object-cover object-top"
                  />
                </div>

                {/* Niche badge — top left of screenshot */}
                <div
                  className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded"
                  style={{
                    background: 'rgba(8,9,14,0.75)',
                    backdropFilter: 'blur(6px)',
                    border: '1px solid rgba(200,160,78,0.2)',
                  }}
                >
                  <span className="font-sans text-xs font-medium text-gold">{item.niche}</span>
                </div>

                {/* Bottom gradient — blends screenshot into card body */}
                <div
                  className="absolute bottom-0 inset-x-0 pointer-events-none"
                  style={{ height: '64px', background: 'linear-gradient(to bottom, transparent, #0f1117)' }}
                  aria-hidden="true"
                />
              </div>

              {/* Card body */}
              <div className="flex flex-col gap-3 px-5 pb-6 pt-1 flex-1">
                {/* Meta */}
                <p className="font-sans text-xs text-text-dim tracking-wide">{item.meta}</p>

                {/* Client name */}
                <h3
                  className="font-sans text-lg font-semibold text-text-primary leading-snug"
                  style={{ transition: 'color 0.2s ease' }}
                >
                  {item.clientName}
                </h3>

                {/* Description */}
                <p className="font-sans text-sm font-light leading-relaxed flex-1" style={{ color: '#6a6660' }}>
                  {item.description}
                </p>

                {/* CTA */}
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-sans text-sm font-medium text-gold hover:text-gold-bright transition-colors duration-200 cursor-pointer group/link mt-1"
                  aria-label={`Visit ${item.clientName} live site (opens in new tab)`}
                  onClick={e => e.stopPropagation()}
                >
                  View Live Site
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="transition-transform group-hover/link:translate-x-0.5" aria-hidden="true">
                    <path d="M1 11L11 1M11 1H4M11 1v7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
