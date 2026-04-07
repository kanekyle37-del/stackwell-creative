'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { portfolioData, type PortfolioItem } from '@/lib/portfolio-data'
import ContactForm from '@/components/ContactForm'

function PortfolioCard({ item, index }: { item: PortfolioItem; index: number }) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
      className="group glass-card rounded-xl overflow-hidden hover:-translate-y-1 hover:shadow-card-hover transition-all duration-300 cursor-default"
    >
      {/* Screenshot */}
      <div className="relative h-60 overflow-hidden border-b border-gold/10">
        <Image
          src={item.imagePlaceholder}
          alt={`${item.clientName} website screenshot`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-7">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="inline-flex px-2.5 py-0.5 rounded-full bg-gold/10 text-gold text-xs font-sans font-medium border border-gold/20">
            {item.niche}
          </span>
          {item.tags.slice(1).map((tag) => (
            <span
              key={tag}
              className="inline-flex px-2.5 py-0.5 rounded-full bg-bg-primary/50 text-text-dim text-xs font-sans border border-gold/10"
            >
              {tag}
            </span>
          ))}
        </div>

        <h2 className="font-sans text-xl font-semibold text-text-primary mb-1 group-hover:text-gold transition-colors duration-200">
          {item.clientName}
        </h2>
        <p className="font-sans text-xs text-text-dim mb-4">{item.location}</p>
        <p className="font-sans text-sm text-text-muted leading-relaxed mb-6 font-light">
          {item.description}
        </p>

        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-5 py-2.5 border border-gold/30 text-gold rounded font-sans text-sm font-medium hover:bg-gold/10 hover:border-gold/50 transition-all duration-200 cursor-pointer group/btn"
          aria-label={`Visit ${item.clientName} live site (opens in new tab)`}
        >
          Visit Live Site
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="transition-transform group-hover/btn:translate-x-0.5" aria-hidden="true">
            <path d="M1 11L11 1M11 1H4M11 1v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </motion.article>
  )
}

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden" aria-labelledby="portfolio-page-heading">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 70% 40% at 50% -10%, rgba(200,160,78,0.12) 0%, transparent 60%)',
          }}
          aria-hidden="true"
        />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" aria-hidden="true" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="font-sans text-xs font-medium tracking-widest text-gold uppercase mb-4"
          >
            Our Work
          </motion.p>
          <motion.h1
            id="portfolio-page-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-sans text-5xl sm:text-6xl font-semibold text-text-primary mb-5"
          >
            Sites We've Built
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-sans text-text-muted text-lg max-w-xl mx-auto leading-relaxed font-light"
          >
            Every site is built from scratch for a specific trade, a specific area, and a specific goal — more enquiries.
          </motion.p>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-24" aria-label="Portfolio grid">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioData.map((item, i) => (
              <PortfolioCard key={item.id} item={item} index={i} />
            ))}
          </div>

          {portfolioData.length === 0 && (
            <p className="text-center font-sans text-text-muted py-20">
              Portfolio coming soon.
            </p>
          )}
        </div>
      </section>

      <ContactForm />
    </>
  )
}
