import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import HowItWorks from '@/components/HowItWorks'
import PortfolioPreview from '@/components/PortfolioPreview'
import Testimonials from '@/components/Testimonials'
import SoundFamiliar from '@/components/SoundFamiliar'
import PlatformTrustStrip from '@/components/PlatformTrustStrip'
import PricingCards from '@/components/PricingCards'
import FinalCTA from '@/components/FinalCTA'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Stackwell Creative — Websites That Win Work',
  description:
    'Professional websites for UK tradesmen. Built to get you found on Google and bring in paying customers.',
}

function PricingPreviewSection() {
  return (
    <section className="relative py-24 overflow-hidden bg-bg-surface" aria-labelledby="pricing-preview-heading">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(200,160,78,0.05) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="font-sans text-xs font-medium tracking-widest text-gold uppercase mb-4">
            Pricing
          </p>
          <h2
            id="pricing-preview-heading"
            className="font-sans text-4xl sm:text-5xl font-semibold text-text-primary"
          >
            One investment. A system that fills your diary.
          </h2>
          <p className="font-sans text-text-muted mt-4 max-w-lg mx-auto text-base leading-relaxed font-light">
            No hidden fees. No surprises. One job won from your site pays for the first year.
          </p>
          <p className="font-sans text-sm mt-3 max-w-md mx-auto font-light" style={{ color: '#c8a04e' }}>
            Most clients see their first enquiry within the first week.
          </p>
        </div>

        <PricingCards compact={true} />

        {/* Guarantee block */}
        <div
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
        </div>

        <div className="text-center mt-8">
          <a
            href="/pricing"
            className="inline-flex items-center gap-2 font-sans text-sm text-gold hover:text-gold-bright transition-colors duration-200 cursor-pointer group"
          >
            See full pricing details
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover:translate-x-0.5" aria-hidden="true">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <SoundFamiliar />
      <HowItWorks />
      <PortfolioPreview />
      <Testimonials />
      <PlatformTrustStrip />
      <PricingPreviewSection />
      <FinalCTA />
      <ContactForm />
    </>
  )
}
