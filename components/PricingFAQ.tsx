'use client'

import { useState } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { useRef } from 'react'

const faqs = [
  {
    q: 'How long does it take to build my site?',
    a: "Most sites are live within 5 days of receiving everything we need from you. We move fast because we know you're busy and you want results quickly.",
  },
  {
    q: 'Do I need to provide content?',
    a: "No. We pull your Google Reviews, grab photos from your social media or existing pages, and write the copy ourselves. All we need is a quick 15-minute call to understand your services, prices, and the type of work you want more of.",
  },
  {
    q: 'Can I update my site later?',
    a: "Yes. If you want anything changed — new photos, updated pricing, a new service added — just send it over and we'll sort it. No extra charge for small updates.",
  },
  {
    q: "What if I want to cancel?",
    a: "No long contracts. Monthly plans can be cancelled any time with 30 days notice. You keep full ownership of your site.",
  },
  {
    q: 'Do you work with businesses outside the UK?',
    a: "We currently work exclusively with UK-based trades businesses. This means we understand your market, your customers, and how to get you found in local searches.",
  },
]

function FAQItem({ question, answer, isOpen, onClick }: {
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void
}) {
  return (
    <div className="border-b border-gold/10 last:border-0">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-5 text-left cursor-pointer group"
        aria-expanded={isOpen}
      >
        <span className="font-sans text-base font-light text-text-primary group-hover:text-gold transition-colors duration-200 pr-4">
          {question}
        </span>
        <span
          className={`flex-shrink-0 w-6 h-6 rounded-full border border-gold/25 flex items-center justify-center text-gold transition-all duration-300 ${
            isOpen ? 'bg-gold/10 rotate-45' : ''
          }`}
          aria-hidden="true"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path
              d="M6 2v8M2 6h8"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="font-sans text-sm text-text-muted leading-relaxed font-light pb-5">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      ref={ref}
      className="py-20"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="font-sans text-xs font-medium tracking-widest text-gold uppercase mb-3">
            FAQ
          </p>
          <h2
            id="faq-heading"
            className="font-sans text-4xl font-semibold text-text-primary"
          >
            Questions you probably have
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-card rounded-xl px-6 sm:px-8"
        >
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              question={faq.q}
              answer={faq.a}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
