'use client'

import { useState, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef } from 'react'

type FormState = 'idle' | 'loading' | 'success' | 'error'

const trades = [
  'Roofer',
  'Plasterer',
  'Painter & Decorator',
  'Joiner / Carpenter',
  'Plumber',
  'Landscaper',
  'Other',
]

const tradeHint: Record<string, string> = {
  'Roofer': "We've built sites for roofers across the UK — check out Warwick Roofing and Hollyfield Roofing in our portfolio.",
  'Plasterer': "We work with plasterers just like you. Sites built around your work, your reviews, your area.",
  'Painter & Decorator': "See what we built for Spires Decorating — a gallery-focused site showcasing real work.",
}

export default function ContactForm() {
  const ref = useRef<HTMLDivElement>(null)
  const successRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const [formState, setFormState] = useState<FormState>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    trade: '',
  })

  // Scroll success message into view
  useEffect(() => {
    if (formState === 'success') {
      setTimeout(() => {
        successRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }, 150)
    }
  }, [formState])

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim()) newErrors.name = 'Please enter your name'
    if (!formData.phone.trim()) newErrors.phone = 'Please enter your phone number'
    if (!formData.trade) newErrors.trade = 'Please select your trade'
    return newErrors
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setFormState('loading')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? '',
          botcheck: '',
          name: formData.name,
          phone: formData.phone,
          trade: formData.trade,
          subject: `New callback request from ${formData.name} (${formData.trade}) — Stackwell Creative`,
          from_name: 'Stackwell Creative',
        }),
      })

      const data = await res.json()

      if (data.success) {
        setFormState('success')
        setFormData({ name: '', phone: '', trade: '' })
        if (typeof window !== 'undefined' && (window as any).fbq) {
          ;(window as any).fbq('track', 'Lead')
        }
      } else {
        setFormState('error')
      }
    } catch {
      setFormState('error')
    }
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-24 overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(200,160,78,0.06) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <p className="font-sans text-xs font-medium tracking-widest text-gold uppercase mb-4">
              Get in Touch
            </p>
            <h2
              id="contact-heading"
              className="font-sans text-4xl sm:text-5xl font-semibold text-text-primary mb-6 leading-tight"
            >
              Leave your number.{' '}
              <span className="text-gold-gradient italic">We&apos;ll do the rest.</span>
            </h2>
            <p className="font-sans text-text-muted text-base leading-relaxed mb-8 font-light">
              Drop your name and number and we&apos;ll call you back for a quick 10-minute chat.
              No commitment, no pressure. Just a straight conversation about whether a website
              makes sense for your business.
            </p>

            {/* What happens next */}
            <div className="space-y-4">
              {[
                { step: '1', text: 'You leave your number' },
                { step: '2', text: 'We call you back within a few hours' },
                { step: '3', text: "If it's a fit, we get started. If not, no worries." },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full border border-gold/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="font-sans text-xs text-gold">{item.step}</span>
                  </div>
                  <p className="font-sans text-sm text-text-muted font-light leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            {/* WhatsApp + Call alternatives */}
            <div className="mt-10 pt-8 border-t border-gold/10 space-y-4">
              <p className="font-sans text-sm text-text-muted font-light">
                Prefer to contact us directly?
              </p>
              <a
                href="https://wa.me/447305226059"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-5 py-3 rounded-lg border border-gold/20 bg-gold/5 hover:bg-gold/10 hover:border-gold/40 transition-all duration-200 cursor-pointer group"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span className="font-sans text-sm font-medium text-text-primary group-hover:text-gold transition-colors duration-200">
                  Message us on WhatsApp
                </span>
              </a>
              <div>
                <p className="font-sans text-sm text-text-dim font-light mb-1">Or call us directly</p>
                <a
                  href="tel:07305226059"
                  className="font-sans text-base font-medium text-gold hover:text-gold-bright transition-colors duration-200 cursor-pointer"
                >
                  07305 226059
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <AnimatePresence mode="wait">
              {formState === 'success' ? (
                <motion.div
                  ref={successRef}
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="glass-card rounded-xl p-10 text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-success/10 border border-success/30 flex items-center justify-center mx-auto mb-6">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4aba7a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <h3 className="font-sans text-2xl font-semibold text-text-primary mb-3">
                    We&apos;ll be in touch soon
                  </h3>
                  <p className="font-sans text-sm text-text-muted leading-relaxed">
                    Thanks for leaving your number. We&apos;ll give you a call within a few hours for a quick chat.
                    If you need us sooner, message us on WhatsApp.
                  </p>
                  <a
                    href="https://wa.me/447305226059"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-6 text-sm font-sans text-gold hover:text-gold-bright transition-colors cursor-pointer"
                  >
                    WhatsApp us now
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M1 11L11 1M11 1H4M11 1v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>

                  {/* While you wait */}
                  <div className="mt-8 pt-6 border-t border-gold/10">
                    <p className="font-sans text-xs font-medium tracking-widest text-text-dim uppercase mb-4">
                      While you wait
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                      <a
                        href="/portfolio"
                        className="inline-flex items-center gap-2 font-sans text-sm text-text-muted hover:text-gold transition-colors cursor-pointer group"
                      >
                        See our recent work
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="group-hover:translate-x-0.5 transition-transform" aria-hidden="true">
                          <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </a>
                      <span className="text-text-dim hidden sm:inline" aria-hidden="true">·</span>
                      <a
                        href="/pricing"
                        className="inline-flex items-center gap-2 font-sans text-sm text-text-muted hover:text-gold transition-colors cursor-pointer group"
                      >
                        Check out our pricing
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="group-hover:translate-x-0.5 transition-transform" aria-hidden="true">
                          <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <form
                    onSubmit={handleSubmit}
                    noValidate
                    className="glass-card rounded-xl p-7 sm:p-8 space-y-5"
                    aria-label="Callback request form"
                  >
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block font-sans text-xs font-medium tracking-wide text-text-muted uppercase mb-2">
                        Your Name <span className="text-gold" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        autoComplete="name"
                        placeholder="John Smith"
                        className={`w-full bg-bg-primary border rounded px-4 py-3 font-sans text-sm text-text-primary placeholder:text-text-dim focus:outline-none focus:border-gold/60 transition-colors duration-200 ${
                          errors.name ? 'border-red-500/50' : 'border-gold/20'
                        }`}
                        aria-required="true"
                        aria-describedby={errors.name ? 'name-error' : undefined}
                      />
                      {errors.name && (
                        <p id="name-error" className="font-sans text-xs text-red-400 mt-1.5" role="alert">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block font-sans text-xs font-medium tracking-wide text-text-muted uppercase mb-2">
                        Phone Number <span className="text-gold" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        autoComplete="tel"
                        placeholder="07700 900000"
                        className={`w-full bg-bg-primary border rounded px-4 py-3 font-sans text-sm text-text-primary placeholder:text-text-dim focus:outline-none focus:border-gold/60 transition-colors duration-200 ${
                          errors.phone ? 'border-red-500/50' : 'border-gold/20'
                        }`}
                        aria-required="true"
                        aria-describedby={errors.phone ? 'phone-error' : undefined}
                      />
                      {errors.phone && (
                        <p id="phone-error" className="font-sans text-xs text-red-400 mt-1.5" role="alert">
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    {/* Trade */}
                    <div>
                      <label htmlFor="trade" className="block font-sans text-xs font-medium tracking-wide text-text-muted uppercase mb-2">
                        What&apos;s Your Trade? <span className="text-gold" aria-hidden="true">*</span>
                      </label>
                      <select
                        id="trade"
                        name="trade"
                        value={formData.trade}
                        onChange={handleChange}
                        className={`w-full bg-bg-primary border rounded px-4 py-3 font-sans text-sm text-text-primary focus:outline-none focus:border-gold/60 transition-colors duration-200 cursor-pointer ${
                          errors.trade ? 'border-red-500/50' : 'border-gold/20'
                        } ${!formData.trade ? 'text-text-dim' : ''}`}
                        aria-required="true"
                        aria-describedby={errors.trade ? 'trade-error' : undefined}
                      >
                        <option value="" disabled>Select your trade…</option>
                        {trades.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                      {errors.trade && (
                        <p id="trade-error" className="font-sans text-xs text-red-400 mt-1.5" role="alert">
                          {errors.trade}
                        </p>
                      )}
                    </div>

                    {formState === 'error' && (
                      <p className="font-sans text-sm text-red-400 text-center" role="alert">
                        Something went wrong. Please try again or{' '}
                        <a href="https://wa.me/447305226059" className="underline hover:text-gold transition-colors">
                          message us on WhatsApp
                        </a>
                        .
                      </p>
                    )}

                    <motion.button
                      type="submit"
                      disabled={formState === 'loading'}
                      whileHover={formState !== 'loading' ? { scale: 1.02, boxShadow: '0 8px 30px rgba(200,160,78,0.3)' } : {}}
                      whileTap={formState !== 'loading' ? { scale: 0.98 } : {}}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                      className="w-full py-4 bg-gold text-bg-primary font-sans font-medium text-base tracking-wide rounded hover:bg-gold-bright transition-colors duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      style={{ willChange: 'transform' }}
                      aria-busy={formState === 'loading'}
                    >
                      {formState === 'loading' ? (
                        <>
                          <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        'Get My Free Quote'
                      )}
                    </motion.button>

                    <p className="font-sans text-sm text-text-muted text-center font-light">
                      We&apos;ll give you a call within a few hours. No hard sell — just a quick chat about what you need.
                    </p>

                    {/* Dynamic trade hint */}
                    <p className="font-sans text-center font-light" style={{ fontSize: '13px', color: '#5a5854', minHeight: '20px' }}>
                      {formData.trade
                        ? (tradeHint[formData.trade] ?? "We'll call you back within a few hours.")
                        : ''}
                    </p>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
