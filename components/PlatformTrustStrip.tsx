export default function PlatformTrustStrip() {
  return (
    <div
      className="relative py-5"
      style={{
        borderTop: '1px solid rgba(200,160,78,0.08)',
        borderBottom: '1px solid rgba(200,160,78,0.08)',
        background: 'rgba(200,160,78,0.015)',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
        <p className="font-sans text-xs tracking-widest uppercase" style={{ color: 'rgba(120,115,110,0.6)', flexShrink: 0 }}>
          Our clients&apos; sites are built to rank on
        </p>
        <div className="flex items-center gap-6 sm:gap-8">
          {/* Google */}
          <svg width="55" height="18" viewBox="0 0 74 24" fill="none" aria-label="Google" style={{ opacity: 0.3 }}>
            <path d="M29.64 12.2c0-.63-.06-1.24-.17-1.82H15.16v3.44h8.12a6.94 6.94 0 01-3.01 4.56v3.79h4.87c2.85-2.63 4.5-6.5 4.5-10z" fill="#4285F4"/>
            <path d="M15.16 23.99c4.07 0 7.49-1.35 9.98-3.66l-4.87-3.79c-1.35.9-3.07 1.44-5.11 1.44-3.93 0-7.26-2.65-8.45-6.22H1.69v3.91a15.06 15.06 0 0013.47 8.32z" fill="#34A853"/>
            <path d="M6.71 11.76a9.02 9.02 0 010-5.76V2.09H1.69a15.06 15.06 0 000 13.52l5.02-3.85z" fill="#FBBC05"/>
            <path d="M15.16 4.52a8.14 8.14 0 015.76 2.25l4.32-4.32A14.47 14.47 0 0015.16 0 15.06 15.06 0 001.69 8.32l5.02 3.85c1.19-3.57 4.52-6.22 8.45-6.65z" fill="#EA4335"/>
            <text x="34" y="17" fontFamily="Arial,sans-serif" fontSize="16" fontWeight="500" fill="#5f6368">oogle</text>
          </svg>
          {/* Google Maps text */}
          <span className="font-sans text-sm font-medium" style={{ color: 'rgba(200,160,78,0.3)', letterSpacing: '0.02em' }}>
            Google Maps
          </span>
          {/* Bing */}
          <span className="font-sans text-sm font-medium" style={{ color: 'rgba(200,160,78,0.3)', letterSpacing: '0.02em' }}>
            Bing
          </span>
        </div>
      </div>
    </div>
  )
}
