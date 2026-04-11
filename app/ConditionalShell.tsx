'use client'

import { usePathname } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import FreeQuoteButton from '@/components/FreeQuoteButton'

// Pages that should render without the site chrome (nav, footer, floating buttons)
const BARE_ROUTES = ['/lp']

export default function ConditionalShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isBare = BARE_ROUTES.includes(pathname)

  if (isBare) {
    return <main>{children}</main>
  }

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <FreeQuoteButton />
      <WhatsAppButton />
    </>
  )
}
