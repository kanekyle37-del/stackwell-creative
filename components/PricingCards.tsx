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
  closingLine?: string
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
      { title: 'Custom-designed trade website', sub: 'Built around your trade, your area, and your real Google reviews. Not a template.' },
      { title: 'Mobile-first on every device', sub: '80% of your customers search on their phone. It works perfectly on every screen.' },
      { title: 'Google Reviews integrated', sub: 'Your best social proof shown front and centre. Builds trust before they even call.' },
      { title: 'Click-to-call everywhere', sub: 'Every phone number on the site is one tap away from ringing you directly.' },
      { title: 'Contact form with lead alerts', sub: 'Every enquiry lands straight in your pocket the moment it comes in.' },
      { title: 'Hosting and maintenance included', sub: 'We handle the technical side. You handle the jobs.' },
      { title: 'SSL certificate', sub: 'Secure, trusted, and professional from day one.' },
    ],
    closingLine: 'Everything you need to get online and start being found.',
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
      { title: 'Everything in Starter', sub: 'All seven features above, included as standard.' },
      { title: 'Local SEO setup', sub: 'When someone nearby searches your trade, your name comes up. That\'s what this does.' },
      { title: 'Google Business Profile setup and monthly post', sub: 'We set it up and keep it active. Google Maps sends you customers when it\'s maintained.' },
      { title: 'Top 20 UK trade directory listings', sub: '20 more places online with your name and number. More routes for customers to find you.' },
      { title: 'Missed call text-back', sub: 'You\'re on the job and miss a call. An automatic text goes out within seconds. You don\'t lose the lead.' },
      { title: 'Automated review requests', sub: 'After every job, your customer gets a prompt to leave a Google review. More reviews mean higher rankings mean more calls.' },
      { title: 'Monthly lead text alerts', sub: 'Every enquiry pinged straight to your phone the moment it comes in.' },
      { title: '48-hour edit turnaround', sub: 'Need something changed? Send us a message. Done within two days, no chasing needed.' },
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
      { title: 'Everything in Growth', sub: 'The complete Growth package included. Every feature, every month.' },
      { title: 'Google Ads management', sub: 'Show up at the very top of Google the day your site goes live. Paid clicks, qualified leads, managed for you.' },
      { title: 'Monthly performance report', sub: 'Every month you see exactly how many people found your site, called you, and enquired. You always know your numbers.' },
      { title: 'Quarterly strategy call', sub: '30 minutes every quarter. We go through what\'s working, what to push next, and where the next jobs are coming from.' },
      { title: 'Priority 24-hour build and edit turnaround', sub: 'You\'re always first in the queue. Anything you need changed is done within 24 hours.' },
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
                      <span className="font-sans text-xs leading-relaxed" style={{ color: '#8a8680', marginTop: '2px', display: 'block' }}>
                        {feature.sub}
                      </span>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            {/* Closing line — Starter only */}
            {!compact && tier.closingLine && (
              <p className="font-sans text-xs italic text-center" style={{ color: '#8a8680', lineHeight: 1.5 }}>
                &ldquo;{tier.closingLine}&rdquo;
              </p>
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
