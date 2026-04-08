import Link from 'next/link'

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 text-center"
      style={{ paddingTop: '80px' }}
    >
      {/* Glow */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 50% 40%, rgba(200,160,78,0.05) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-md mx-auto">
        {/* Logo mark */}
        <div className="flex justify-center mb-8">
          <svg width="48" height="42" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <defs>
              <linearGradient id="nf1" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#7a5f2a" />
                <stop offset="100%" stopColor="#b08838" />
              </linearGradient>
              <linearGradient id="nf2" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#9a7a3a" />
                <stop offset="100%" stopColor="#c8a04e" />
              </linearGradient>
              <linearGradient id="nf3" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#c8a04e" />
                <stop offset="100%" stopColor="#e8c96e" />
              </linearGradient>
            </defs>
            <rect x="6" y="0" width="20" height="7" rx="2" fill="url(#nf1)" />
            <rect x="3" y="10" width="26" height="7" rx="2" fill="url(#nf2)" />
            <rect x="0" y="21" width="32" height="7" rx="2" fill="url(#nf3)" />
          </svg>
        </div>

        <p className="font-sans text-xs font-medium tracking-widest text-gold uppercase mb-5">
          404 — Page not found
        </p>

        <h1 className="font-sans text-4xl sm:text-5xl font-semibold text-text-primary mb-4 leading-tight">
          Looks like this page<br />doesn&apos;t exist.
        </h1>

        <p className="font-sans text-base text-text-muted font-light leading-relaxed mb-10">
          But we do — and we&apos;d love to help.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-bg-primary font-sans font-medium text-sm tracking-wide rounded hover:bg-gold-bright transition-colors duration-200 cursor-pointer"
          >
            Go to Homepage
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 border border-gold/30 text-text-primary font-sans font-light text-sm tracking-wide rounded hover:border-gold/60 hover:text-gold transition-colors duration-200 cursor-pointer"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </div>
  )
}
