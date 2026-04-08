'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface PricingTier {
  id: string
  name: string
  upfront: string
  monthly: string
  description: string
  features: string[]
  highlighted: boolean
  cta: string
}

const priceComparisons: Record<string, string> = {
  starter: "That's less than a tank of fuel",
  growth: 'Less than a skip hire',
  pro: "Less than one day's materials",
}

export const pricingTiers: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter',
    upfront: '£299',
    monthly: '£35',
    description: 'Everything you need to get online and start getting found.',
    features: [
      'Custom-designed website for your trade',
      'Mobile-responsive on every device',
      'Google Reviews integration',
      'Click-to-call button',
      'Contact form',
      'Hosting & maintenance included',
      'SSL certificate',
    ],
    highlighted: false,
    cta: 'Get Your Quote',
  },
  {
    id: 'growth',
    name: 'Growth',
    upfront: '£449',
    monthly: '£45',
    description: 'For tradesmen who want to show up on Google and beat the competition.',
    features: [
      'Everything in Starter',
      'SEO setup (rank on Google)',
      'Google Search Console setup',
      'Monthly performance report',
      'Priority support',
      'Faster response times',
    ],
    highlighted: true,
    cta: 'Get Your Quote',
  },
  {
    id: 'pro',
    name: 'Pro',
    upfront: '£649',
    monthly: '£70',
    description: 'The full package for tradesmen who want to dominate their local area.',
    features: [
      'Everything in Growth',
      'AI chatbot (answers enquiries 24/7)',
      'Ongoing SEO optimisation',
      'Quarterly strategy call',
      '48-hour priority build turnaround',
    ],
    highlighted: false,
    cta: 'Get Your Quote',
  },
]

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className="flex-shrink-0 text-gold"
      aria-hidden="true"
    >
      <path
        d="M3 8l3.5 3.5L13 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

interface PricingCardsProps {
  compact?: boolean // Used on homepage for preview
}

export default function PricingCards({ compact = false }: PricingCardsProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const handleGetStarted = () => {
    const el = document.getElementById('contact')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.location.href = '/#contact'
    }
  }

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
      {pricingTiers.map((tier, i) => (
        <motion.div
          key={tier.id}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: i * 0.15, ease: 'easeOut' }}
          style={{ willChange: 'transform' }}
        >
        {/* Growth card inner wrapper handles the one-time scale pulse */}
        <motion.div
          animate={tier.highlighted && isInView ? { scale: [1, 1.02, 1] } : { scale: 1 }}
          transition={{ delay: 1, duration: 0.6, ease: 'easeInOut' }}
          className={`relative flex flex-col rounded-xl overflow-hidden transition-shadow duration-300 h-full ${
            tier.highlighted
              ? 'border border-gold/40 shadow-gold bg-bg-card hover:shadow-gold'
              : 'glass-card hover:border-gold/25 hover:shadow-card-hover'
          }`}
          style={{ willChange: 'transform' }}
        >
          {/* Most popular badge */}
          {tier.highlighted && (
            <div className="absolute top-0 left-0 right-0 h-px bg-gold-gradient" aria-hidden="true" />
          )}
          {tier.highlighted && (
            <div className="flex justify-center pt-3 -mb-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold text-bg-primary text-xs font-sans font-semibold tracking-wide">
                <span className="w-1 h-1 rounded-full bg-bg-primary" aria-hidden="true" />
                Most Popular
              </span>
            </div>
          )}

          <div className={`flex flex-col gap-6 p-7 flex-1 ${tier.highlighted ? 'pt-5' : ''}`}>
            {/* Tier header */}
            <div>
              <h3 className="font-sans text-xl font-semibold text-text-primary mb-1">{tier.name}</h3>
              <p className="font-sans text-sm text-text-muted leading-relaxed font-light">
                {tier.description}
              </p>
            </div>

            {/* Pricing */}
            <div className="flex flex-col gap-0.5">
              <div className="flex items-baseline gap-1">
                <span className="font-sans text-4xl font-semibold text-gold-gradient">
                  {tier.upfront}
                </span>
                <span className="font-sans text-sm text-text-muted">upfront</span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="font-sans text-base text-text-muted">
                  then{' '}
                  <span className="font-medium text-text-primary">{tier.monthly}</span>
                  /month
                </span>
              </div>
              {priceComparisons[tier.id] && (
                <p className="font-sans text-xs italic font-light" style={{ color: '#5a5854' }}>
                  {priceComparisons[tier.id]}
                </p>
              )}
            </div>

            <div className="gold-line" aria-hidden="true" />

            {/* Features */}
            {!compact && (
              <ul className="flex flex-col gap-3 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="font-sans text-sm text-text-muted leading-snug font-light">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            )}

            {compact && (
              <ul className="flex flex-col gap-2 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <CheckIcon />
                    <span className="font-sans text-sm text-text-muted leading-snug font-light">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            )}

            {/* CTA */}
            <motion.button
              onClick={handleGetStarted}
              whileHover={{ scale: 1.03, boxShadow: tier.highlighted ? '0 8px 30px rgba(200,160,78,0.3)' : undefined }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className={`w-full py-3.5 rounded font-sans font-medium text-sm tracking-wide cursor-pointer ${
                tier.highlighted
                  ? 'bg-gold text-bg-primary hover:bg-gold-bright transition-colors duration-200'
                  : 'border border-gold/30 text-gold hover:bg-gold/10 hover:border-gold/50 transition-colors duration-200'
              }`}
              style={{ willChange: 'transform' }}
              aria-label={`${tier.cta} — ${tier.name} plan`}
            >
              {tier.cta}
            </motion.button>
          </div>
        </motion.div>
        </motion.div>
      ))}
    </div>
  )
}
