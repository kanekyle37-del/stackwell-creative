'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
]

// Stackwell logo — stacked blocks icon + wordmark
function StackwellLogo() {
  return (
    <Link href="/" className="flex items-center gap-3 group" aria-label="Stackwell Creative — Home">
      {/* Stacked blocks SVG icon */}
      <svg
        width="32"
        height="28"
        viewBox="0 0 32 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="flex-shrink-0"
      >
        <defs>
          <linearGradient id="blockGrad1" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#7a5f2a" />
            <stop offset="100%" stopColor="#b08838" />
          </linearGradient>
          <linearGradient id="blockGrad2" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#9a7a3a" />
            <stop offset="100%" stopColor="#c8a04e" />
          </linearGradient>
          <linearGradient id="blockGrad3" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#c8a04e" />
            <stop offset="100%" stopColor="#e8c96e" />
          </linearGradient>
        </defs>
        {/* Top bar — darkest */}
        <rect x="6" y="0" width="20" height="7" rx="2" fill="url(#blockGrad1)" />
        {/* Middle bar */}
        <rect x="3" y="10" width="26" height="7" rx="2" fill="url(#blockGrad2)" />
        {/* Bottom bar — brightest */}
        <rect x="0" y="21" width="32" height="7" rx="2" fill="url(#blockGrad3)" />
      </svg>

      {/* Wordmark */}
      <div className="flex flex-col leading-none">
        <span className="font-sans font-light tracking-widest text-sm text-text-primary transition-colors duration-200 group-hover:text-gold">
          STACKWELL
        </span>
        <span className="font-sans font-light tracking-[0.2em] text-[9px] text-text-muted uppercase mt-0.5">
          CREATIVE
        </span>
      </div>
    </Link>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  const handleGetQuote = () => {
    if (pathname === '/') {
      const el = document.getElementById('contact')
      el?.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.location.href = '/#contact'
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-bg-primary/90 backdrop-blur-md border-b border-gold/10 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <StackwellLogo />

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-sans text-sm font-light tracking-wide transition-colors duration-200 relative group ${
                  pathname === link.href
                    ? 'text-gold'
                    : 'text-text-muted hover:text-text-primary'
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute -bottom-1 left-0 right-0 h-px bg-gold" />
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {/* CTA button — desktop */}
            <button
              onClick={handleGetQuote}
              className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-gold text-bg-primary font-sans font-medium text-sm tracking-wide rounded hover:bg-gold-bright transition-all duration-200 cursor-pointer"
            >
              Get a Quote
            </button>

            {/* Hamburger — mobile */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              <span
                className={`block w-5 h-0.5 bg-text-primary transition-all duration-300 origin-center ${
                  mobileOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-text-primary transition-all duration-300 ${
                  mobileOpen ? 'opacity-0 scale-x-0' : ''
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-text-primary transition-all duration-300 origin-center ${
                  mobileOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-bg-primary md:hidden flex flex-col"
          >
            <div className="flex items-center justify-between px-4 py-5 border-b border-gold/10">
              <StackwellLogo />
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 text-text-muted hover:text-text-primary transition-colors cursor-pointer"
                aria-label="Close menu"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path
                    d="M4 4L16 16M16 4L4 16"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            <nav className="flex flex-col px-6 py-8 gap-6" aria-label="Mobile navigation">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <Link
                    href={link.href}
                    className={`font-sans text-3xl font-light transition-colors duration-200 ${
                      pathname === link.href ? 'text-gold' : 'text-text-primary hover:text-gold'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="mt-4"
              >
                <button
                  onClick={() => {
                    setMobileOpen(false)
                    handleGetQuote()
                  }}
                  className="w-full py-4 bg-gold text-bg-primary font-sans font-medium text-base tracking-wide rounded hover:bg-gold-bright transition-all duration-200 cursor-pointer"
                >
                  Get Your Free Website Preview
                </button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
