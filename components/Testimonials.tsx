'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const testimonials = [
  {
    id: 'testimonial-1',
    quote:
      'Kyle came across very professional and not pushy like a lot of website designers I have dealt with in the past. His prices are very reasonable and the after sales are excellent — always answers any questions or updates to my site when needed. Very happy with the service.',
    name: 'Stephen',
    trade: 'Warwick Roofing Midlands Ltd',
  },
  {
    id: 'testimonial-2',
    quote:
      "Kyle got in touch about a website and, having had bad experiences with other companies before, I wasn't sure at first. He sent a demo over straight away, the price was fair, and from there it was easy. Communication throughout was great and the finished site looks really good. Very happy with how it all turned out.",
    name: 'Hollyfield Roofing',
    trade: 'Roofer · Blackburn',
  },
  {
    id: 'testimonial-3',
    quote:
      "Kyle reached out to me about building a site for my business as I didn't have one and normally I wouldn't bother with these calls but I'm so glad I gave him a chance. His responses were informative and prompt, the turnaround on the site was fast and even though I went back to him with tweaks and changes a few times nothing was too much hassle for him. He's gone above my expectations, the colour scheme, how professional it all looks, the details. I'd 100% recommend him to anyone thinking of getting a site made.",
    name: 'Jai',
    trade: 'Sapphire Spray Coatings · Mansfield',
  },
]

function StarRow() {
  return (
    <div className="flex items-center gap-0.5" aria-label="Five stars">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 18 18" fill="none" aria-hidden="true">
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

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: (typeof testimonials)[0]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="glass-card rounded-xl p-7 flex flex-col gap-5"
      style={{ willChange: 'transform' }}
    >
      <StarRow />

      <blockquote className="flex-1">
        <p className="font-sans text-sm leading-relaxed font-light" style={{ color: '#9a9490' }}>
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </blockquote>

      <div className="flex items-center gap-3">
        {/* Avatar placeholder */}
        <div
          className="flex-shrink-0 flex items-center justify-center rounded-full"
          style={{
            width: '38px',
            height: '38px',
            background: 'rgba(200,160,78,0.1)',
            border: '1px solid rgba(200,160,78,0.25)',
          }}
          aria-hidden="true"
        >
          <span
            className="font-sans font-semibold text-sm"
            style={{ color: '#c8a04e' }}
          >
            {testimonial.name.charAt(0)}
          </span>
        </div>
        <div className="flex flex-col gap-0.5">
          <p className="font-sans text-sm font-medium text-text-primary leading-none">
            {testimonial.name}
          </p>
          <p className="font-sans text-xs text-text-dim leading-none mt-0.5">
            {testimonial.trade}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default function Testimonials() {
  const headerRef = useRef<HTMLDivElement>(null)
  const headerInView = useInView(headerRef, { once: true, amount: 0.3 })

  return (
    <section
      className="relative py-24 sm:py-28 overflow-hidden"
      style={{ background: '#0f1117' }}
      aria-labelledby="testimonials-heading"
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 40%, rgba(200,160,78,0.04) 0%, transparent 65%)',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14 sm:mb-16"
        >
          <p className="font-sans text-xs font-medium tracking-widest text-gold uppercase mb-4">
            What Tradesmen Say
          </p>
          <h2
            id="testimonials-heading"
            className="font-sans text-4xl sm:text-5xl font-semibold text-text-primary mb-4"
          >
            Real results, real trades
          </h2>
          <p className="font-sans text-base text-text-muted font-light leading-relaxed max-w-lg mx-auto">
            Don&apos;t take our word for it — here&apos;s what our clients say.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.id} testimonial={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
