import Link from 'next/link'

const footerLinks = [
  { href: '/', label: 'Home' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
]

function StackwellLogoSmall() {
  return (
    <div className="flex items-center gap-3">
      <svg
        width="28"
        height="24"
        viewBox="0 0 32 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="footerGrad1" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#7a5f2a" />
            <stop offset="100%" stopColor="#b08838" />
          </linearGradient>
          <linearGradient id="footerGrad2" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#9a7a3a" />
            <stop offset="100%" stopColor="#c8a04e" />
          </linearGradient>
          <linearGradient id="footerGrad3" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#c8a04e" />
            <stop offset="100%" stopColor="#e8c96e" />
          </linearGradient>
        </defs>
        <rect x="6" y="0" width="20" height="7" rx="2" fill="url(#footerGrad1)" />
        <rect x="3" y="10" width="26" height="7" rx="2" fill="url(#footerGrad2)" />
        <rect x="0" y="21" width="32" height="7" rx="2" fill="url(#footerGrad3)" />
      </svg>
      <div className="flex flex-col leading-none">
        <span className="font-sans font-light tracking-widest text-xs text-text-primary">STACKWELL</span>
        <span className="font-sans font-light tracking-[0.2em] text-[8px] text-text-muted uppercase mt-0.5">CREATIVE</span>
      </div>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="bg-bg-surface border-t border-gold/10 mt-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <StackwellLogoSmall />
            <p className="font-sans text-sm text-text-muted leading-relaxed max-w-xs">
              Custom websites for UK tradesmen. Built to get you found on Google and bring in paying customers.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-sans text-xs font-medium tracking-widest text-text-dim uppercase mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-text-muted hover:text-gold transition-colors duration-200 cursor-pointer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-sans text-xs font-medium tracking-widest text-text-dim uppercase mb-4">
              Get in Touch
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/447305226059"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 font-sans text-sm text-text-muted hover:text-gold transition-colors duration-200 cursor-pointer group"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="flex-shrink-0 text-success group-hover:text-gold transition-colors"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp Us
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@stackwellcreative.com"
                  className="flex items-center gap-2.5 font-sans text-sm text-text-muted hover:text-gold transition-colors duration-200 cursor-pointer"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-shrink-0"
                    aria-hidden="true"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  hello@stackwellcreative.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="gold-line mt-10 mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-sans text-xs text-text-dim">
            © 2026 Stackwell Creative. All rights reserved.
          </p>
          <p className="font-sans text-xs text-text-dim">
            Based in Northern Ireland · Serving businesses across the UK
          </p>
        </div>
      </div>
    </footer>
  )
}
