export interface PortfolioItem {
  id: string
  clientName: string
  niche: string
  meta: string          // "Roofer · Warwick" style label shown on cards
  location: string
  url: string
  description: string
  tags: string[]
  imagePlaceholder: string
  googleRating: number
}

export const portfolioData: PortfolioItem[] = [
  {
    id: 'spires-decorating',
    clientName: 'Spires Decorating',
    niche: 'Painter & Decorator',
    meta: 'Painter & Decorator · Northampton',
    location: 'Northampton, England',
    url: 'https://spiresdecorating.com',
    description:
      'Specialist decorators with 20+ years in the trade. Gallery-focused site showcasing real work.',
    tags: ['Decorating', 'Portfolio Gallery', 'Reviews'],
    imagePlaceholder: '/images/portfolio-spires-decorating.jpg',
    googleRating: 4.5,
  },
  {
    id: 'warwick-roofing',
    clientName: 'Warwick Roofing',
    niche: 'Roofer',
    meta: 'Roofer · Warwick',
    location: 'Warwick, England',
    url: 'https://warwickroofingmidlandsltd.com/',
    description:
      'Built for a family roofing business with 30+ years experience. Live and ranking on Google.',
    tags: ['Roofing', 'Local SEO', 'Lead Generation'],
    imagePlaceholder: '/images/portfolio-warwick-roofing.jpg',
    googleRating: 5.0,
  },
  {
    id: 'hollyfield-roofing',
    clientName: 'Hollyfield Roofing',
    niche: 'Roofer',
    meta: 'Roofer · Blackburn',
    location: 'Blackburn, England',
    url: 'https://hollyfieldroofings.com',
    description:
      'Emergency roofing specialists. Site went live in 4 days with reviews and click-to-call front and centre.',
    tags: ['Roofing', 'Mobile-First', 'Trust Building'],
    imagePlaceholder: '/images/portfolio-hollyfield-roofing.jpg',
    googleRating: 5.0,
  },
  // Add more clients here — just copy an object above and update the fields
]
