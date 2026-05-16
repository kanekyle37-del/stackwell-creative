'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface PricingFeature {
  title: string
  sub?: string
}

interface PricingTier {
  id: string
  name: string
  upfront: string
  monthly: string
  tagline: string
  smallPrint: string
  description: string
  features: PricingFeature[]
  highlighted: boolean
  cta: string
}

const priceComparisons: Record<string, string> = {
  starter: "That's less than a tank of fuel",
  growth: 'One job won pays for the first year',
  pro: "Less than one day's materials",
}

export const pricingTiers: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter',
    upfront: '£350',
    monthly: '£40',
    tagline: 'Get online and get found.',
    smallPrint: "That's less than a tank of fuel",
    description: 'Get online and get found.',
    features: [
      { title: 'Custom-designed trade website', sub: 'Built around your trade, your area, your reviews' },
      { title: 'Mobile-first on every device', sub: '80% of your customers search on their phone' },
      { title: 'Google Reviews integrated', sub: 'Your best social proof, front and centre' },
      { title: 'Click-to-call everywhere', sub: 'One tap and they\'re ringing you' },
      { title: 'Contact form with lead alerts', sub: 'Every enquiry lands straight in your pocket' },
      { title: 'Hosting and maintenance included', sub: 'We handle the tech. You handle the jobs' },
      { title: 'SSL certificate', sub: 'Secure, trusted, professional' },
    ],
    highlighted: false,
    cta: 'Get Your Quote',
  },
  {
    id: 'growth',
    name: 'Growth',
    upfront: '£499',
    monthly: '£149',
    tagline: 'Everything you need to get found and keep the phone ringing.',
    smallPrint: 'One job won pays for the first year',
    description: 'Everything you need to get found and keep the phone ringing.',
    features: [
      { title: 'Everything in Starter' },
      { title: 'Local SEO setup', sub: 'Rank when locals search your trade in your area' },
      { title: 'Google Business Profile setup and monthly post', sub: 'Stay active and visible on Maps' },
      { title: 'Top 20 UK trade directory listings', sub: 'More places online that send people to you' },
      { title: 'Missed call text-back', sub: 'you\'re on the job, miss a call, an automatic text goes out instantly. You don\'t lose the lead.' },
      { title: 'Automated review requests', sub: 'After every job, your customer gets a prompt to leave a Google review. More reviews, higher ranking, more calls' },
      { title: 'Monthly lead text alerts', sub: 'Every enquiry pinged straight to your phone' },
      { title: '48-hour edit turnaround', sub: 'Need something changed? Done within 2 days' },
    ],
    highlighted: true,
    cta: 'Get Your Quote',
  },
  {
    id: 'pro',
    name: 'Pro',
    upfront: '£799',
    monthly: '£249',
    tagline: 'For tradesmen who want to own their local area online.',
    smallPrint: "Less than one day's materials",
    description: 'For tradesmen who want to own their local area online.',
    features: [
      { title: 'Everything in Growth' },
      { title: 'Google Ads management', sub: 'Show up at the top of Google the day your site goes live. Paid clicks, qualified leads' },
      { title: 'Monthly performance report', sub: 'See exactly how many people found your site, called you, and enquired. Know your numbers' },
      { title: 'Quarterly strategy call', sub: '30 minutes every quarter — we review what\'s working and what to push next' },
      { title: 'Priority 24-hour build and edit turnaround', sub: 'Jump the queue. Always first' },
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
      className="flex-shrink-0 text-gold mt-0.5"
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
  compact?: boolean
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
            <div className="flex flex-col items-center pt-3 -mb-1 gap-1.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold text-bg-primary text-xs font-sans font-semibold tracking-wide">
                <span className="w-1 h-1 rounded-full bg-bg-primary" aria-hidden="true" />
                Most Popular
              </span>
              <p className="font-sans text-xs font-light" style={{ color: '#7a7672' }}>
                Most chosen by tradesmen
              </p>
            </div>
          )}

          <div className={`flex flex-col gap-6 p-7 flex-1 ${tier.highlighted ? 'pt-5' : ''}`}>
            {/* Tier header */}
            <div>
              <h3 className="font-sans text-xl font-semibold text-text-primary mb-1">{tier.name}</h3>
              <p className="font-sans text-sm text-text-muted leading-relaxed font-light">
                {tier.tagline}
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
            <ul className="flex flex-col gap-3.5 flex-1">
              {tier.features.map((feature) => (
                <li key={feature.title} className="flex items-start gap-3">
                  <CheckIcon />
                  <div className="flex flex-col gap-0.5">
                    <span className="font-sans text-sm text-text-muted leading-snug font-medium">
                      {feature.title}
                    </span>
                    {!compact && feature.sub && (
                      <span className="font-sans text-xs font-light leading-relaxed" style={{ color: '#5a5854' }}>
                        {feature.sub}
                      </span>
                    )}
                  </div>
                </li>
              ))}
            </ul>

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
