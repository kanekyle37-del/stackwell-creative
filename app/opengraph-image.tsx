import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Stackwell Creative — Websites That Win Work'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0f1117',
          position: 'relative',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        {/* Top gold line */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, transparent, #c8a04e, #e8c96e, #c8a04e, transparent)',
          }}
        />

        {/* Background glow */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '800px',
            height: '400px',
            background: 'radial-gradient(ellipse, rgba(200,160,78,0.12) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />

        {/* Logo mark */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', marginBottom: '28px' }}>
          <div style={{ width: '120px', height: '14px', background: 'linear-gradient(90deg, #7a5f2a, #b08838)', borderRadius: '3px' }} />
          <div style={{ width: '156px', height: '14px', background: 'linear-gradient(90deg, #9a7a3a, #c8a04e)', borderRadius: '3px' }} />
          <div style={{ width: '192px', height: '14px', background: 'linear-gradient(90deg, #c8a04e, #e8c96e)', borderRadius: '3px' }} />
        </div>

        {/* Brand name */}
        <div
          style={{
            fontSize: '18px',
            fontWeight: 400,
            letterSpacing: '0.25em',
            color: 'rgba(200,160,78,0.7)',
            textTransform: 'uppercase',
            marginBottom: '20px',
          }}
        >
          STACKWELL CREATIVE
        </div>

        {/* Main headline */}
        <div
          style={{
            fontSize: '72px',
            fontWeight: 700,
            color: '#e8e4dc',
            textAlign: 'center',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            marginBottom: '24px',
            maxWidth: '900px',
          }}
        >
          Websites That{' '}
          <span style={{ color: '#c8a04e' }}>Win Work</span>
        </div>

        {/* Subheadline */}
        <div
          style={{
            fontSize: '26px',
            fontWeight: 300,
            color: '#6a6660',
            textAlign: 'center',
            maxWidth: '700px',
            lineHeight: 1.5,
            marginBottom: '40px',
          }}
        >
          Professional websites for UK tradesmen. Built to get you found on Google and bring in paying customers.
        </div>

        {/* Trust badges */}
        <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          {['Live in 5 days', 'From £299', '30-day guarantee'].map((badge) => (
            <div
              key={badge}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '16px',
                color: '#5a5854',
                fontWeight: 300,
              }}
            >
              <div
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: '#c8a04e',
                }}
              />
              {badge}
            </div>
          ))}
        </div>

        {/* URL */}
        <div
          style={{
            position: 'absolute',
            bottom: '28px',
            fontSize: '16px',
            color: 'rgba(200,160,78,0.4)',
            letterSpacing: '0.05em',
          }}
        >
          stackwellcreative.com
        </div>

        {/* Bottom gold line */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '2px',
            background: 'linear-gradient(90deg, transparent, rgba(200,160,78,0.4), transparent)',
          }}
        />
      </div>
    ),
    { ...size }
  )
}
