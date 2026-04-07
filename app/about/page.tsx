'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'

function AnimatedSection({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden" aria-labelledby="about-heading">
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
            About
          </motion.p>
          <motion.h1
            id="about-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-sans text-5xl sm:text-6xl font-semibold text-text-primary mb-5 leading-tight"
          >
            Built for the trades.
            <br />
            <span className="text-gold-gradient italic">Not for tech companies.</span>
          </motion.h1>
        </div>
      </section>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

          {/* Left — mission (68%) */}
          <div className="lg:col-span-2 space-y-12">

            {/* The problem */}
            <AnimatedSection>
              <div className="space-y-5">
                <p className="font-sans text-xs font-medium tracking-widest text-gold uppercase">
                  The Problem
                </p>
                <h2 className="font-sans text-3xl sm:text-4xl font-semibold text-text-primary leading-snug">
                  Most tradesmen are losing jobs every week and don't know it
                </h2>
                <div className="space-y-4 font-sans text-base text-text-muted leading-relaxed font-light">
                  <p>
                    Think about it. When someone needs a roofer or a decorator, what do they do?
                    They Google it. They look at the first few results, check some reviews, and
                    ring whoever looks most trustworthy.
                  </p>
                  <p>
                    If you're not showing up on Google — or if your site looks like it was built in
                    2012 — those calls are going to someone else. Every single week.
                  </p>
                  <p>
                    Word of mouth is great when you're starting out. But it dries up. Referrals slow
                    down. You hit a ceiling. The tradesmen who keep growing are the ones with a
                    proper online presence that works for them even when they're on the tools.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <div className="gold-line" aria-hidden="true" />

            {/* Why most trade sites fail */}
            <AnimatedSection delay={0.05}>
              <div className="space-y-5">
                <h2 className="font-sans text-3xl sm:text-4xl font-semibold text-text-primary leading-snug">
                  Most websites built for tradesmen don't actually work
                </h2>
                <div className="space-y-4 font-sans text-base text-text-muted leading-relaxed font-light">
                  <p>
                    They're either a generic template with your logo slapped on it, or an expensive
                    agency job that looks nice but doesn't bring in a single lead because nobody
                    thought about SEO or what a customer actually wants to see.
                  </p>
                  <p>
                    Your customers want to see your work, read your reviews, understand what you
                    charge (roughly), and be able to get hold of you in two seconds. That's it.
                    That's what converts a visitor into a phone call.
                  </p>
                  <p>
                    That's what we build.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <div className="gold-line" aria-hidden="true" />

            {/* What makes Stackwell different */}
            <AnimatedSection delay={0.1}>
              <div className="space-y-5">
                <h2 className="font-sans text-3xl sm:text-4xl font-semibold text-text-primary leading-snug">
                  What we do differently
                </h2>
                <div className="space-y-4 font-sans text-base text-text-muted leading-relaxed font-light">
                  <p>
                    Every site we build is designed around one goal: getting you more enquiries.
                    Not winning design awards. Not impressing other web designers. Getting your phone
                    to ring with customers who are ready to book.
                  </p>
                  <p>
                    We write the copy for you in plain English that sounds like a real business, not
                    a corporate brochure. We make sure your Google Reviews are front and centre
                    because that's what people read before they call. We make it dead simple for
                    someone on their phone to get in touch with you.
                  </p>
                  <p>
                    And because we only work with trades businesses, we know your customers. We know
                    what they're worried about (will this guy show up? Will he overcharge me?), and
                    we know how to address that before they even pick up the phone.
                  </p>
                </div>

                {/* Feature highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  {[
                    { title: 'Built for mobile', desc: 'Most of your customers are searching on their phone. Your site needs to work perfectly there.' },
                    { title: 'Proper SEO', desc: 'We set your site up so Google knows what you do and where you work. No black-hat tricks.' },
                    { title: 'Real copy', desc: "No buzzwords. No filler. Copy that talks to your actual customers in language they understand." },
                    { title: 'Reviews front and centre', desc: 'Your 5-star reviews are your best sales tool. We make sure people see them.' },
                  ].map((item) => (
                    <div key={item.title} className="glass-card rounded-lg p-5" style={{ borderTop: '1px solid rgba(154,122,58,0.3)' }}>
                      <h3 className="font-sans text-sm font-medium text-text-primary mb-2">{item.title}</h3>
                      <p className="font-sans text-sm text-text-muted font-light leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right — personal story (32%) */}
          <div className="space-y-8">
            {/* Personal card */}
            <AnimatedSection delay={0.15}>
              <div className="glass-card rounded-xl p-7 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-px bg-gold-gradient" aria-hidden="true" />

                {/* Avatar placeholder */}
                <div
                  className="w-16 h-16 rounded-full mb-5 flex items-center justify-center border border-gold/30"
                  style={{
                    background: 'linear-gradient(135deg, #1c1e2e 0%, #161822 100%)',
                  }}
                  aria-label="Kyle — founder of Stackwell Creative"
                >
                  <span className="font-serif text-2xl font-light text-gold">K</span>
                </div>

                <h2 className="font-sans text-2xl font-semibold text-text-primary mb-1">
                  Kyle
                </h2>
                <p className="font-sans text-xs text-text-dim mb-5 tracking-wide uppercase">
                  Founder, Stackwell Creative · Northern Ireland
                </p>

                <div className="space-y-4 font-sans text-sm text-text-muted leading-relaxed font-light">
                  <p>
                    I started Stackwell Creative after spending time helping local businesses
                    near where I'm from get online properly. Not just a website — a site that
                    actually brought them work.
                  </p>
                  <p>
                    What struck me was how many brilliant tradesmen were out there doing
                    excellent work, but their online presence made them look like they'd just
                    started up. Meanwhile their competitors, who were sometimes doing worse
                    work, were getting all the calls because they showed up on Google.
                  </p>
                  <p>
                    That felt wrong. So I focused on fixing it.
                  </p>
                  <p>
                    We're small enough that every client gets my personal attention. You're not
                    dealing with an account manager — you're dealing with the person who built
                    your site.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Stats card */}
            <AnimatedSection delay={0.2}>
              <div className="glass-card rounded-xl p-7">
                <h3 className="font-sans text-xs font-medium tracking-widest text-text-dim uppercase mb-5">
                  By the numbers
                </h3>
                <div className="space-y-5">
                  {[
                    { value: '3+', label: 'Sites launched' },
                    { value: '5★', label: 'Average review score' },
                    { value: '5', label: 'Days average build time' },
                    { value: '100%', label: 'UK trades focus' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-baseline justify-between pb-4 last:pb-0" style={{ borderBottom: '1px solid rgba(200,160,78,0.1)' }}>
                      <span className="font-sans text-sm text-text-muted font-light">{item.label}</span>
                      <span className="font-sans text-2xl font-bold text-gold">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* CTA card */}
            <AnimatedSection delay={0.25}>
              <div
                className="rounded-xl p-7 text-center"
                style={{
                  background: 'linear-gradient(135deg, rgba(200,160,78,0.1) 0%, rgba(200,160,78,0.05) 100%)',
                  border: '1px solid rgba(200,160,78,0.25)',
                }}
              >
                <p className="font-sans text-sm text-text-muted mb-4 font-light leading-relaxed">
                  Want to find out if we're a good fit? Have a look at our work first.
                </p>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 font-sans text-sm font-medium text-gold hover:text-gold-bright transition-colors duration-200 cursor-pointer group"
                >
                  See the portfolio
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" className="transition-transform group-hover:translate-x-0.5" aria-hidden="true">
                    <path d="M2 7h9M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      <ContactForm />
    </>
  )
}
