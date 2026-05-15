'use client'

import { motion } from 'framer-motion'
import PricingCards from '@/components/PricingCards'
import PricingFAQ from '@/components/PricingFAQ'
import ContactForm from '@/components/ContactForm'

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-16 overflow-hidden" aria-labelledby="pricing-page-heading">
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
            Pricing
          </motion.p>
          <motion.h1
            id="pricing-page-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-sans text-5xl sm:text-6xl font-semibold text-text-primary mb-5"
          >
            What it costs
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-sans text-text-muted text-lg max-w-xl mx-auto leading-relaxed font-light"
          >
            No hidden fees. No surprises. One job won from your site pays for the first year. Most clients see their first enquiry within the first week.
          </motion.p>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="pb-10 overflow-hidden" aria-label="Pricing plans">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <PricingCards compact={false} />

          {/* Guarantee block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 rounded-xl px-8 py-8 text-center w-full"
            style={{ border: '1px solid rgba(200,160,78,0.35)', background: '#0a0a0f' }}
          >
            <div className="flex items-center justify-center gap-2.5 mb-3">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c8a04e" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span className="font-sans text-sm font-semibold tracking-widest uppercase" style={{ color: '#c8a04e' }}>The 30-Day Guarantee</span>
            </div>
            <p className="font-sans text-sm text-text-muted font-light leading-relaxed max-w-xl mx-auto">
              If your site doesn&apos;t generate an enquiry in the first 30 days, we pause your monthly until it does.
              We only take on 5 new clients a month — so when we take you on, we&apos;re committed to making it work.
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center font-sans text-sm text-text-dim mt-8"
          >
            Not sure which plan is right?{' '}
            <button
              onClick={() => {
                const el = document.getElementById('contact')
                el?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="text-gold hover:text-gold-bright transition-colors cursor-pointer underline underline-offset-2"
            >
              Get in touch and we&apos;ll help you choose.
            </button>
          </motion.p>
        </div>
      </section>

      {/* What's included callout */}
      <section className="py-16" aria-label="What's included">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="glass-card rounded-xl p-8 sm:p-10 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gold-gradient" aria-hidden="true" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h2 className="font-sans text-2xl font-semibold text-text-primary mb-4">
                  What every plan includes
                </h2>
                <ul className="space-y-3">
                  {[
                    'Custom-designed (not a template)',
                    'Built to work on mobile first',
                    'Google Reviews displayed prominently',
                    'Click-to-call so customers ring you directly',
                    'Contact form for enquiries',
                    'Hosting, security, and maintenance',
                    'SSL certificate (padlock in the browser)',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5 text-gold" aria-hidden="true">
                        <path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="font-sans text-sm text-text-muted font-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="font-sans text-2xl font-semibold text-text-primary mb-4">
                  How payment works
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      title: 'Upfront fee',
                      desc: "The one-off fee covers the design and build of your site. We'll send you a payment link once we're ready to get started.",
                    },
                    {
                      title: 'Monthly fee',
                      desc: 'Covers your hosting, SSL, ongoing maintenance, and any small updates you need. Cancel any time with 30 days notice.',
                    },
                    {
                      title: 'No long contracts',
                      desc: "You're not locked in. If you want to leave, give us 30 days notice and that's it.",
                    },
                  ].map((item) => (
                    <div key={item.title}>
                      <p className="font-sans text-sm font-medium text-text-primary mb-1">{item.title}</p>
                      <p className="font-sans text-sm text-text-muted font-light leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <PricingFAQ />

      {/* Contact */}
      <ContactForm />
    </>
  )
}
