'use client'

import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { Quote, Star } from 'lucide-react'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'

const testimonials = [
  {
    id: 1,
    name: 'Stephen',
    company: 'Warwick Roofing Midlands Ltd',
    rating: 5,
    content:
      'Kyle came across very professional and not pushy like a lot of website designers I have dealt with in the past. His prices are very reasonable and the after sales are excellent — always answers any questions or updates to my site when needed. Very happy with the service.',
  },
  {
    id: 2,
    name: 'Hollyfield Roofing',
    company: 'Roofer · Blackburn',
    rating: 5,
    content:
      "Kyle got in touch about a website and, having had bad experiences with other companies before, I wasn't sure at first. He sent a demo over straight away, the price was fair, and from there it was easy. Communication throughout was great and the finished site looks really good. Very happy with how it all turned out.",
  },
  {
    id: 3,
    name: 'Jai',
    company: 'Sapphire Spray Coatings · Mansfield',
    rating: 5,
    content:
      "Kyle reached out to me about building a site for my business as I didn't have one and normally I wouldn't bother with these calls but I'm so glad I gave him a chance. His responses were informative and prompt, the turnaround on the site was fast and even though I went back to him with tweaks and changes a few times nothing was too much hassle for him. He's gone above my expectations, the colour scheme, how professional it all looks, the details. I'd 100% recommend him to anyone thinking of getting a site made.",
  },
  {
    id: 4,
    name: 'Brad',
    company: 'C&B Joinery · Barrow-in-Furness',
    rating: 5,
    content:
      "Kyle recently reached out to us as we were without a website. There was no hard selling and he was respectful that we are running a business so can't always talk. Very clear instructions as to what the process required — literally needed minutes of my time. We had a drafted website the same day, any amendments were made straight away. Very quick responses to any questions we had. Kyle is a genuine guy who's happy to help. Many thanks.",
  },
]

const AUTO_ROTATE_MS = 6000

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  const controls = useAnimation()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
  }
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  }

  useEffect(() => {
    if (isInView) controls.start('visible')
  }, [isInView, controls])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(i => (i + 1) % testimonials.length)
    }, AUTO_ROTATE_MS)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-24 sm:py-28 overflow-hidden"
      style={{ background: '#0f1117' }}
      aria-labelledby="testimonials-heading"
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 40%, rgba(200,160,78,0.04) 0%, transparent 65%)' }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-14 lg:gap-24 items-center"
        >
          {/* Left: heading + navigation */}
          <motion.div variants={itemVariants} className="flex flex-col justify-center">
            <p className="font-sans text-xs font-medium tracking-widest uppercase mb-4" style={{ color: '#c8a04e' }}>
              What Tradesmen Say
            </p>
            <h2
              id="testimonials-heading"
              className="font-sans text-4xl sm:text-5xl font-semibold mb-5"
              style={{ color: '#e8e4dc' }}
            >
              Real results,
              <br />real trades
            </h2>
            <p className="font-sans text-base font-light leading-relaxed mb-8 max-w-sm" style={{ color: '#6a6660' }}>
              Don&apos;t take our word for it — here&apos;s what our clients say.
            </p>

            {/* Dot navigation */}
            <div className="flex items-center gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  aria-label={`View testimonial ${i + 1}`}
                  className="h-2.5 rounded-full transition-all duration-300 cursor-pointer"
                  style={{
                    width: activeIndex === i ? '40px' : '10px',
                    background: activeIndex === i ? '#c8a04e' : 'rgba(200,160,78,0.2)',
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Right: animated testimonial card */}
          <motion.div variants={itemVariants} className="relative min-h-[340px] sm:min-h-[380px]">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                className="absolute inset-0"
                initial={{ opacity: 0, x: 80 }}
                animate={{
                  opacity: activeIndex === i ? 1 : 0,
                  x: activeIndex === i ? 0 : 80,
                  scale: activeIndex === i ? 1 : 0.95,
                }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                style={{ zIndex: activeIndex === i ? 10 : 0 }}
              >
                <div
                  className="rounded-xl p-7 sm:p-8 h-full flex flex-col"
                  style={{
                    background: '#111118',
                    border: '1px solid rgba(200,160,78,0.18)',
                    boxShadow: '0 8px 40px rgba(0,0,0,0.4)',
                  }}
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-5">
                    {Array(t.rating).fill(0).map((_, si) => (
                      <Star key={si} size={16} className="fill-gold text-gold" style={{ color: '#c8a04e' }} />
                    ))}
                  </div>

                  {/* Quote */}
                  <div className="relative mb-5 flex-1">
                    <Quote
                      size={28}
                      className="absolute -top-1 -left-1 rotate-180"
                      style={{ color: 'rgba(200,160,78,0.15)' }}
                    />
                    <p className="relative z-10 font-sans text-base font-light leading-relaxed" style={{ color: '#9a9490' }}>
                      &ldquo;{t.content}&rdquo;
                    </p>
                  </div>

                  <Separator className="my-4" />

                  {/* Author */}
                  <div className="flex items-center gap-3 mt-1">
                    <Avatar
                      className="h-10 w-10 flex-shrink-0"
                      style={{
                        background: 'rgba(200,160,78,0.1)',
                        border: '1px solid rgba(200,160,78,0.25)',
                      } as React.CSSProperties}
                    >
                      <AvatarFallback>
                        <span className="font-sans font-semibold text-sm" style={{ color: '#c8a04e' }}>
                          {t.name.charAt(0)}
                        </span>
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-sans text-sm font-medium" style={{ color: '#e8e4dc' }}>{t.name}</p>
                      <p className="font-sans text-xs font-light mt-0.5" style={{ color: '#5a5854' }}>{t.company}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Decorative corners */}
            <div
              className="absolute -bottom-5 -left-5 h-20 w-20 rounded-xl pointer-events-none"
              style={{ background: 'rgba(200,160,78,0.04)' }}
              aria-hidden="true"
            />
            <div
              className="absolute -top-5 -right-5 h-20 w-20 rounded-xl pointer-events-none"
              style={{ background: 'rgba(200,160,78,0.04)' }}
              aria-hidden="true"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
