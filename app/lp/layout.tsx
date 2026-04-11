import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Stackwell Creative — Websites for UK Tradesmen',
  description:
    'We build custom websites for UK tradesmen in 5 days. Show up on Google. Get more calls. From £299.',
  robots: { index: false, follow: false }, // Don't index ad landing pages
}

export default function LPLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
