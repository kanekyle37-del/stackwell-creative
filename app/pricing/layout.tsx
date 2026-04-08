import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing — Stackwell Creative',
  description:
    'Simple pricing from £299. No hidden fees, no long contracts. Cancel anytime.',
}

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
