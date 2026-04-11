/* Dedicated landing page for Meta ad traffic — no navigation, single conversion goal */
'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { portfolioData } from '@/lib/portfolio-data'

// ─── Data ────────────────────────────────────────────────────────────────────

const painPoints = [
  {
    id: 'wom',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c8a04e" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .84h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.64a16 16 0 006.29 6.29l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
    text: "You're getting most of your work through word of mouth or Facebook",
  },
  {
    id: 'google',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c8a04e" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
      </svg>
    ),
    text: "Your competitors are showing up on Google and you're not",
  },
  {
    id: 'procrastinate',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c8a04e" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    text: "You've been meaning to sort a website but never got round to it",
  },
  {
    id: 'nosite',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c8a04e" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
    text: "Customers ask for your website and you don't have one to send them",
  },
]

const testimonials = [
  {
    id: 't1',
    quote: 'Kyle came across very professional and not pushy like a lot of website designers I have dealt with in the past. His prices are very reasonable and the after sales are excellent — always answers any questions or updates to my site when needed. Very happy with the service.',
    name: 'Stephen',
    trade: 'Warwick Roofing Midlands Ltd',
  },
  {
    id: 't2',
    quote: "Kyle got in touch about a website and, having had bad experiences with other companies before, I wasn't sure at first. He sent a demo over straight away, the price was fair, and from there it was easy. Communication throughout was great and the finished site looks really good. Very happy with how it all turned out.",
    name: 'Hollyfield Roofing',
    trade: 'Roofer · Blackburn',
  },
]

const trades = ['Roofer', 'Plasterer', 'Painter & Decorator', 'Joiner / Carpenter', 'Plumber', 'Landscaper', 'Other']

// ─── Small shared components ──────────────────────────────────────────────────

function Stars() {
  return (
    <div className="flex items-center gap-0.5" aria-label="Five stars">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 18 18" fill="#c8a04e" aria-hidden="true">
          <path d="M9 1.5l2.163 4.38 4.837.703-3.5 3.412.826 4.817L9 12.553l-4.326 2.259.826-4.817L2 6.583l4.837-.703L9 1.5z" />
        </svg>
      ))}
    </div>
  )
}

// ─── Contact Form ─────────────────────────────────────────────────────────────

function LPForm() {
  const successRef = useRef<HTMLDivElement>(null)
  const [state, setState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [data, setData] = useState({ name: '', phone: '', trade: '' })

  useEffect(() => {
    if (state === 'success') {
      setTimeout(() => successRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' }), 150)
    }
  }, [state])

  const validate = () => {
    const e: Record<string, string> = {}
    if (!data.name.trim()) e.name = 'Please enter your name'
    if (!data.phone.trim()) e.phone = 'Please enter your phone number'
    if (!data.trade) e.trade = 'Please select your trade'
    return e
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setState('loading')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? '',
          botcheck: '',
          name: data.name,
          phone: data.phone,
          trade: data.trade,
          subject: `[LP] New callback request from ${data.name} (${data.trade}) — Stackwell Creative`,
          from_name: 'Stackwell Creative LP',
        }),
      })
      const json = await res.json()
      setState(json.success ? 'success' : 'error')
      if (json.success) setData({ name: '', phone: '', trade: '' })
    } catch { setState('error') }
  }

  if (state === 'success') {
    return (
      <div ref={successRef} className="rounded-xl p-10 text-center" style={{ background: 'rgba(22,24,34,0.9)', border: '1px solid rgba(200,160,78,0.2)' }}>
        <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5" style={{ background: 'rgba(74,186,122,0.1)', border: '1px solid rgba(74,186,122,0.3)' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4aba7a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
        </div>
        <h3 className="font-sans text-2xl font-semibold text-text-primary mb-3">Thanks — we'll call you back within a few hours.</h3>
        <p className="font-sans text-sm font-light leading-relaxed" style={{ color: '#6a6660' }}>
          If you need us sooner, message us directly on WhatsApp.
        </p>
        <a
          href="https://wa.me/447305226059"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-5 font-sans text-sm font-medium cursor-pointer"
          style={{ color: '#25D366' }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
          WhatsApp us now
        </a>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-xl p-7 sm:p-8 space-y-5" style={{ background: 'rgba(22,24,34,0.9)', border: '1px solid rgba(200,160,78,0.15)' }}>
      {/* Name */}
      <div>
        <label htmlFor="lp-name" className="block font-sans text-xs font-medium tracking-wide uppercase mb-2" style={{ color: '#8a8680' }}>
          Your Name <span style={{ color: '#c8a04e' }}>*</span>
        </label>
        <input
          id="lp-name" type="text" name="name" value={data.name} onChange={handleChange}
          autoComplete="name" placeholder="John Smith"
          className="w-full rounded px-4 py-3 font-sans text-sm focus:outline-none transition-colors duration-200"
          style={{ background: '#0f1117', border: `1px solid ${errors.name ? 'rgba(239,68,68,0.5)' : 'rgba(200,160,78,0.2)'}`, color: '#e8e4dc' }}
        />
        {errors.name && <p className="font-sans text-xs mt-1.5" style={{ color: '#f87171' }}>{errors.name}</p>}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="lp-phone" className="block font-sans text-xs font-medium tracking-wide uppercase mb-2" style={{ color: '#8a8680' }}>
          Phone Number <span style={{ color: '#c8a04e' }}>*</span>
        </label>
        <input
          id="lp-phone" type="tel" name="phone" value={data.phone} onChange={handleChange}
          autoComplete="tel" placeholder="07700 900000"
          className="w-full rounded px-4 py-3 font-sans text-sm focus:outline-none transition-colors duration-200"
          style={{ background: '#0f1117', border: `1px solid ${errors.phone ? 'rgba(239,68,68,0.5)' : 'rgba(200,160,78,0.2)'}`, color: '#e8e4dc' }}
        />
        {errors.phone && <p className="font-sans text-xs mt-1.5" style={{ color: '#f87171' }}>{errors.phone}</p>}
      </div>

      {/* Trade */}
      <div>
        <label htmlFor="lp-trade" className="block font-sans text-xs font-medium tracking-wide uppercase mb-2" style={{ color: '#8a8680' }}>
          What&apos;s Your Trade? <span style={{ color: '#c8a04e' }}>*</span>
        </label>
        <select
          id="lp-trade" name="trade" value={data.trade} onChange={handleChange}
          className="w-full rounded px-4 py-3 font-sans text-sm focus:outline-none transition-colors duration-200 cursor-pointer"
          style={{ background: '#0f1117', border: `1px solid ${errors.trade ? 'rgba(239,68,68,0.5)' : 'rgba(200,160,78,0.2)'}`, color: data.trade ? '#e8e4dc' : '#5a5854' }}
        >
          <option value="" disabled>Select your trade…</option>
          {trades.map(t => <option key={t} value={t}>{t}</option>)}
        </select>
        {errors.trade && <p className="font-sans text-xs mt-1.5" style={{ color: '#f87171' }}>{errors.trade}</p>}
      </div>

      {state === 'error' && (
        <p className="font-sans text-sm text-center" style={{ color: '#f87171' }}>
          Something went wrong. Please try again or{' '}
          <a href="https://wa.me/447305226059" className="underline">message us on WhatsApp</a>.
        </p>
      )}

      <button
        type="submit"
        disabled={state === 'loading'}
        className="w-full py-4 rounded font-sans font-semibold text-base tracking-wide cursor-pointer transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        style={{ background: '#c8a04e', color: '#0f1117' }}
      >
        {state === 'loading' ? (
          <>
            <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
            Sending…
          </>
        ) : 'Get My Free Quote'}
      </button>

      <p className="font-sans text-sm text-center font-light" style={{ color: '#5a5854' }}>
        We&apos;ll call you back within a few hours. No hard sell.
      </p>
    </form>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function LandingPage() {
  const scrollToForm = () => document.getElementById('lp-form')?.scrollIntoView({ behavior: 'smooth' })

  const WA_LINK = 'https://wa.me/447305226059'
  const WA_SVG = (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )

  return (
    <div className="min-h-screen font-sans" style={{ background: '#0f1117', color: '#e8e4dc' }}>

      {/* ── TOP BAR ──────────────────────────────────────────────────────── */}
      <header style={{ background: '#161822', borderBottom: '1px solid rgba(200,160,78,0.12)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
          {/* Logo — text only */}
          <div className="flex flex-col leading-none">
            <span className="font-sans font-semibold tracking-widest text-sm" style={{ color: '#e8e4dc', letterSpacing: '0.14em' }}>STACKWELL</span>
            <span className="font-sans font-light tracking-[0.18em] text-[9px] uppercase mt-0.5" style={{ color: 'rgba(200,160,78,0.6)' }}>CREATIVE</span>
          </div>

          {/* Right: WhatsApp + Phone */}
          <div className="flex items-center gap-3 sm:gap-5">
            <a
              href="tel:07305226059"
              className="hidden sm:flex items-center gap-2 font-sans text-sm font-medium transition-colors duration-200"
              style={{ color: '#8a8680' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .84h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.64a16 16 0 006.29 6.29l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>
              07305 226059
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg font-sans text-sm font-semibold cursor-pointer transition-opacity duration-200 hover:opacity-90"
              style={{ background: '#25D366', color: '#fff' }}
            >
              {WA_SVG}
              WhatsApp
            </a>
          </div>
        </div>
      </header>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative py-16 sm:py-24 overflow-hidden" style={{ background: 'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(200,160,78,0.1) 0%, transparent 60%)' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          {/* Pre-label */}
          <p className="font-sans text-xs font-medium tracking-widest uppercase mb-5" style={{ color: 'rgba(200,160,78,0.7)' }}>
            UK Tradesmen Only · Live in 5 Days · From £299
          </p>

          {/* Headline */}
          <h1 className="font-sans font-bold leading-tight mb-6" style={{ fontSize: 'clamp(2.2rem, 6vw, 3.8rem)', color: '#e8e4dc' }}>
            No Website?{' '}
            <span style={{ background: 'linear-gradient(135deg, #9a7a3a 0%, #c8a04e 50%, #e8c96e 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Your Competitors Are Stealing Your Jobs.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="font-sans font-light leading-relaxed mb-8 max-w-xl mx-auto" style={{ fontSize: 'clamp(1rem, 2vw, 1.15rem)', color: '#7a7672' }}>
            We build custom websites for UK tradesmen in 5 days. You show up on Google. You get the calls. They don&apos;t.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
            <button
              onClick={scrollToForm}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded font-sans font-semibold text-base tracking-wide cursor-pointer transition-opacity duration-200 hover:opacity-90"
              style={{ background: '#c8a04e', color: '#0f1117', minWidth: '220px' }}
            >
              Get My Free Quote
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded font-sans font-medium text-base cursor-pointer transition-colors duration-200"
              style={{ border: '1px solid rgba(37,211,102,0.4)', color: '#25D366', minWidth: '220px' }}
            >
              {WA_SVG}
              WhatsApp Us Now
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {['Live in 5 Days', 'No Contracts', '5★ Rated', 'UK Tradesmen Only'].map(badge => (
              <span key={badge} className="flex items-center gap-1.5 font-sans text-xs font-light" style={{ color: '#5a5854' }}>
                <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 6l2.5 2.5L10 3.5" stroke="#c8a04e" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── PAIN POINTS ──────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20" style={{ background: 'rgba(200,160,78,0.02)', borderTop: '1px solid rgba(200,160,78,0.08)', borderBottom: '1px solid rgba(200,160,78,0.08)' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-center mb-10" style={{ color: '#e8e4dc' }}>
            Sound familiar?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {painPoints.map(p => (
              <div key={p.id} className="flex items-start gap-4">
                <div className="flex-shrink-0 flex items-center justify-center rounded-full mt-0.5" style={{ width: '38px', height: '38px', background: 'rgba(200,160,78,0.07)', border: '1px solid rgba(200,160,78,0.18)' }}>
                  {p.icon}
                </div>
                <p className="font-sans text-base font-light leading-relaxed" style={{ color: '#7a7672' }}>{p.text}</p>
              </div>
            ))}
          </div>
          <p className="font-sans text-base text-center mt-8 font-medium" style={{ color: '#c8a04e' }}>
            We fix this in less than a week.
          </p>
        </div>
      </section>

      {/* ── PORTFOLIO ────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20" style={{ background: '#111320' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="font-sans text-3xl sm:text-4xl font-semibold text-center mb-3" style={{ color: '#e8e4dc' }}>
            Sites we&apos;ve built for tradesmen like you
          </h2>
          <p className="font-sans text-base font-light text-center mb-10" style={{ color: '#6a6660' }}>
            Real sites for real tradesmen. Click through to see them live.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {portfolioData.map(item => (
              <div
                key={item.id}
                className="rounded-xl overflow-hidden flex flex-col"
                style={{ background: '#0f1117', border: '1px solid rgba(200,160,78,0.1)' }}
              >
                {/* Screenshot */}
                <div className="relative overflow-hidden" style={{ height: '200px' }}>
                  <Image
                    src={item.imagePlaceholder}
                    alt={`${item.clientName} website`}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    quality={75}
                    className="object-cover object-top"
                  />
                  <div className="absolute top-2 left-2 z-10 px-2.5 py-1 rounded text-xs font-medium" style={{ background: 'rgba(8,9,14,0.8)', border: '1px solid rgba(200,160,78,0.2)', color: '#c8a04e' }}>
                    {item.niche}
                  </div>
                </div>
                {/* Body */}
                <div className="px-5 py-4 flex flex-col gap-2 flex-1">
                  <p className="font-sans text-xs" style={{ color: '#5a5854' }}>{item.meta}</p>
                  <h3 className="font-sans text-base font-semibold" style={{ color: '#e8e4dc' }}>{item.clientName}</h3>
                  {/* Stars */}
                  <div className="flex items-center gap-2">
                    <Stars />
                    <span className="font-sans text-xs font-light" style={{ color: '#6a6660' }}>{item.googleRating.toFixed(1)} on Google</span>
                  </div>
                  <p className="font-sans text-sm font-light leading-relaxed flex-1" style={{ color: '#6a6660' }}>{item.description}</p>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-sans text-sm font-medium mt-1"
                    style={{ color: '#c8a04e' }}
                  >
                    View Live Site
                    <svg width="11" height="11" viewBox="0 0 12 12" fill="none"><path d="M1 11L11 1M11 1H4M11 1v7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEWS ──────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20" style={{ background: '#0f1117' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="font-sans text-3xl sm:text-4xl font-semibold text-center mb-10" style={{ color: '#e8e4dc' }}>
            What tradesmen say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {testimonials.map(t => (
              <div key={t.id} className="rounded-xl p-6 flex flex-col gap-4" style={{ background: 'rgba(22,24,34,0.8)', border: '1px solid rgba(200,160,78,0.12)' }}>
                <Stars />
                <blockquote className="font-sans text-sm font-light leading-relaxed flex-1" style={{ color: '#8a8680' }}>
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(200,160,78,0.1)', border: '1px solid rgba(200,160,78,0.25)' }}>
                    <span className="font-sans font-semibold text-sm" style={{ color: '#c8a04e' }}>{t.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-sans text-sm font-medium" style={{ color: '#e8e4dc' }}>{t.name}</p>
                    <p className="font-sans text-xs font-light" style={{ color: '#5a5854' }}>{t.trade}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING SNAPSHOT ─────────────────────────────────────────────── */}
      <section className="py-12" style={{ background: 'rgba(200,160,78,0.03)', borderTop: '1px solid rgba(200,160,78,0.08)', borderBottom: '1px solid rgba(200,160,78,0.08)' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c8a04e" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
            <span className="font-sans text-xs font-semibold tracking-widest uppercase" style={{ color: '#c8a04e' }}>Straightforward Pricing</span>
          </div>
          <p className="font-sans text-xl sm:text-2xl font-semibold" style={{ color: '#e8e4dc' }}>
            From <span style={{ color: '#c8a04e' }}>£299 upfront</span> and <span style={{ color: '#c8a04e' }}>£35/month.</span>
          </p>
          <p className="font-sans text-base font-light mt-2" style={{ color: '#6a6660' }}>
            One job covers it for the year. No hidden fees. Cancel anytime.
          </p>
        </div>
      </section>

      {/* ── CONTACT FORM ─────────────────────────────────────────────────── */}
      <section id="lp-form" className="py-16 sm:py-24" style={{ background: '#0f1117' }}>
        <div className="max-w-xl mx-auto px-4 sm:px-6">
          {/* Heading */}
          <div className="text-center mb-8">
            <p className="font-sans text-xs font-medium tracking-widest uppercase mb-3" style={{ color: 'rgba(200,160,78,0.7)' }}>Get Started</p>
            <h2 className="font-sans text-3xl sm:text-4xl font-semibold leading-tight" style={{ color: '#e8e4dc' }}>
              Leave your number.{' '}
              <span style={{ background: 'linear-gradient(135deg, #9a7a3a 0%, #c8a04e 50%, #e8c96e 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontStyle: 'italic' }}>
                We&apos;ll call you back.
              </span>
            </h2>
            <p className="font-sans text-sm font-light mt-3" style={{ color: '#6a6660' }}>
              No commitment. No pressure. Just a quick 10-minute chat.
            </p>
          </div>

          <LPForm />

          {/* WhatsApp alternative */}
          <div className="mt-6 text-center">
            <p className="font-sans text-sm font-light mb-3" style={{ color: '#5a5854' }}>Prefer to message first?</p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-5 py-3 rounded-lg font-sans text-sm font-medium cursor-pointer transition-opacity duration-200 hover:opacity-90"
              style={{ border: '1px solid rgba(37,211,102,0.3)', background: 'rgba(37,211,102,0.05)', color: '#25D366' }}
            >
              {WA_SVG}
              Message us on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <footer className="py-6" style={{ background: '#161822', borderTop: '1px solid rgba(200,160,78,0.08)' }}>
        <p className="font-sans text-xs text-center" style={{ color: '#3a3834' }}>
          © {new Date().getFullYear()} Stackwell Creative. All rights reserved.
        </p>
      </footer>

    </div>
  )
}
