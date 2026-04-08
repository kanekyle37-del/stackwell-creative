import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Work — Stackwell Creative',
  description:
    'Real websites built for real tradesmen across the UK. See our live client sites.',
}

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
