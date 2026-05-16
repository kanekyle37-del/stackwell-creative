'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const testimonials = [
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

function TestimonialCard({ t, uid }: { t: typeof testimonials[0]; uid: string }) {
  return (
    <div
      style={{
        width: '340px',
        flexShrink: 0,
        background: '#111118',
        border: '1px solid rgba(200,160,78,0.12)',
        borderRadius: '12px',
        padding: '24px',
        marginRight: '16px',
        display: 'flex',
        flexDirection: 'column',
        gap: '0',
      }}
      aria-label={`Testimonial from ${t.name}`}
    >
      {/* Stars */}
      <div style={{ display: 'flex', gap: '2px', marginBottom: '14px' }}>
        {[...Array(5)].map((_, i) => (
          <svg key={i} width="14" height="14" viewBox="0 0 18 18" fill="#f59e0b" aria-hidden="true">
            <path d="M9 1.5l2.163 4.38 4.837.703-3.5 3.412.826 4.817L9 12.553l-4.326 2.259.826-4.817L2 6.583l4.837-.703L9 1.5z" />
          </svg>
        ))}
      </div>

      {/* Opening quote mark */}
      <div style={{ fontSize: '36px', color: '#c8a04e', lineHeight: 0.8, marginBottom: '8px', fontFamily: 'Georgia, serif' }}>&ldquo;</div>

      {/* Quote */}
      <p style={{ fontSize: '14px', color: '#e8e4dc', lineHeight: 1.7, fontStyle: 'italic', fontFamily: 'var(--font-outfit)', fontWeight: 300, flex: 1, marginBottom: '20px' }}>
        {t.quote}
      </p>

      {/* Author */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(200,160,78,0.15)', border: '1px solid rgba(200,160,78,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <span style={{ fontSize: '16px', fontWeight: 600, color: '#c8a04e', fontFamily: 'var(--font-outfit)' }}>{t.initial}</span>
        </div>
        <div>
          <p style={{ fontSize: '14px', fontWeight: 600, color: '#e8e4dc', lineHeight: 1.2, fontFamily: 'var(--font-outfit)', margin: 0 }}>{t.name}</p>
          <p style={{ fontSize: '12px', color: '#8a8680', marginTop: '2px', fontFamily: 'var(--font-outfit)', fontWeight: 300, margin: 0 }}>{t.company}</p>
        </div>
      </div>
    </div>
  )
}

const maskStyle: React.CSSProperties = {
  overflow: 'hidden',
  maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
  WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
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

      {/* Marquee rows */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

        {/* Row 1 — scrolls left */}
        <div className="marquee-row" style={maskStyle}>
          <div className="marquee-track-left" style={{ display: 'flex', width: 'max-content' }}>
            {[...testimonials, ...testimonials].map((t, i) => (
              <TestimonialCard key={`left-${t.id}-${i}`} t={t} uid={`left-${t.id}-${i}`} />
            ))}
          </div>
        </div>

        {/* Row 2 — scrolls right */}
        <div className="marquee-row" style={maskStyle}>
          <div className="marquee-track-right" style={{ display: 'flex', width: 'max-content' }}>
            {[...testimonials, ...testimonials].map((t, i) => (
              <TestimonialCard key={`right-${t.id}-${i}`} t={t} uid={`right-${t.id}-${i}`} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .marquee-track-left {
          animation: marquee-left 28s linear infinite;
        }
        .marquee-track-right {
          animation: marquee-right 28s linear infinite;
        }
        .marquee-row:hover .marquee-track-left,
        .marquee-row:hover .marquee-track-right {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
