import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About — Stackwell Creative',
  description:
    'We build websites for UK tradesmen. Based in Northern Ireland, serving businesses across the UK.',
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
