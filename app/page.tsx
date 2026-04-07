import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import HowItWorks from '@/components/HowItWorks'
import PortfolioPreview from '@/components/PortfolioPreview'
import PricingCards from '@/components/PricingCards'
import FinalCTA from '@/components/FinalCTA'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Stackwell Creative — Websites That Win Work',
  description:
    'We build websites for UK tradesmen that turn Google searches into paying customers. Custom sites for roofers, plasterers, painters, joiners and more. From £299.',
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
            Straightforward pricing
          </h2>
          <p className="font-sans text-text-muted mt-4 max-w-lg mx-auto text-base leading-relaxed font-light">
            No hidden fees. No surprises. You know exactly what you&apos;re paying.
          </p>
        </div>

        <PricingCards compact={true} />

        <div className="text-center mt-10">
          <a
            href="/pricing"
            className="inline-flex items-center gap-2 font-sans text-sm text-gold hover:text-gold-bright transition-colors duration-200 cursor-pointer group"
          >
            See full pricing details
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover:translate-x-0.5" aria-hidden="true">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <p className="font-sans text-xs text-text-dim mt-3">
            Not sure which plan is right? Get in touch and we&apos;ll help you choose.
          </p>
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
      <HowItWorks />
      <PortfolioPreview />
      <PricingPreviewSection />
      <FinalCTA />
      <ContactForm />
    </>
  )
}
