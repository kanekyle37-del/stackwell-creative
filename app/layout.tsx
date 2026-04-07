import type { Metadata } from 'next'
import { Cormorant_Garamond, Outfit } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

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
    default: 'Stackwell Creative — Websites That Win Work',
    template: '%s | Stackwell Creative',
  },
  description:
    'We build websites for UK tradesmen that turn Google searches into paying customers. Custom sites for roofers, plasterers, painters, joiners and more.',
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
    title: 'Stackwell Creative — Websites That Win Work',
    description:
      'Custom websites for UK tradesmen. Built to get you found on Google and turn visitors into paying customers.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Stackwell Creative — Websites That Win Work',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stackwell Creative — Websites That Win Work',
    description: 'Custom websites for UK tradesmen. Built to get you found on Google.',
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="bg-bg-primary text-text-primary font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
