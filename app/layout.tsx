import type { Metadata } from 'next'
import { Cormorant_Garamond, Outfit } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import MobileCTABar from '@/components/MobileCTABar'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-outfit',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Stackwell Creative — Websites for UK Tradesmen',
    template: '%s | Stackwell Creative',
  },
  description:
    'Custom websites for roofers, plasterers, decorators and tradesmen. Live in 5 days. First enquiry within 30 days or you don\'t pay monthly. From £299.',
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
    title: 'Stackwell Creative — Websites for UK Tradesmen',
    description:
      'Custom websites for roofers, plasterers, decorators and tradesmen. Live in 5 days. First enquiry within 30 days or you don\'t pay monthly. From £299.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Stackwell Creative — Websites for UK Tradesmen',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stackwell Creative — Websites for UK Tradesmen',
    description: 'Custom websites for roofers, plasterers and tradesmen. Live in 5 days. From £299.',
    images: ['/images/og-image.jpg'],
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
        <link rel="preconnect" href="https://api.web3forms.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="bg-bg-primary text-text-primary font-sans antialiased">
        <Navbar />
        <main className="pb-16 md:pb-0">{children}</main>
        <Footer />
        <WhatsAppButton />
        <MobileCTABar />
      </body>
    </html>
  )
}
