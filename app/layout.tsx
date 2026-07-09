import type { Metadata } from 'next'
import { Cormorant_Garamond, Outfit } from 'next/font/google'
import './globals.css'
import ConditionalShell from '@/app/ConditionalShell'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-cormorant',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-outfit',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Stackwell Creative — Lead Systems for UK Tradesmen',
    template: '%s | Stackwell Creative',
  },
  description:
    'We build lead systems for UK tradesmen — site, Google profile, reviews and missed-call recovery. Live in 5 days. First enquiry in 30 days or you stop paying monthly.',
  keywords: [
    'website design for tradesmen',
    'roofer website',
    'plasterer website',
    'trades website UK',
    'web design UK',
    'Stackwell Creative',
  ],
  authors: [{ name: 'Stackwell Creative' }],
  creator: 'Stackwell Creative',
  metadataBase: new URL('https://stackwellcreative.com'),
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://stackwellcreative.com',
    siteName: 'Stackwell Creative',
    title: 'Stackwell Creative — Lead Systems for UK Tradesmen',
    description:
      'We build lead systems for UK tradesmen — site, Google profile, reviews and missed-call recovery. Live in 5 days. First enquiry in 30 days or you stop paying monthly.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stackwell Creative — Lead Systems for UK Tradesmen',
    description: 'We build lead systems for UK tradesmen — site, Google profile, reviews and missed-call recovery. Live in 5 days. First enquiry in 30 days or you stop paying monthly.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Stackwell Creative',
  description:
    'Web design agency specialising in websites for UK trades businesses including roofers, plasterers, painters and joiners.',
  url: 'https://stackwellcreative.com',
  telephone: '+447305226059',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'GB',
    addressRegion: 'Northern Ireland',
  },
  areaServed: 'United Kingdom',
  priceRange: '££',
  sameAs: [],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${outfit.variable}`}>
      <head>
        <link rel="icon" type="image/png" href="/icon.png" />
        <link rel="preconnect" href="https://api.web3forms.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Preload hero LCP image */}
        <link
          rel="preload"
          as="image"
          href="/images/portfolio-hollyfield-roofing.jpg"
          fetchPriority="high"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="bg-bg-primary text-text-primary font-sans antialiased">
        <ConditionalShell>{children}</ConditionalShell>
      </body>
    </html>
  )
}
