export interface PortfolioItem {
  id: string
  clientName: string
  niche: string
  meta: string
  location: string
  url: string
  description: string
  tags: string[]
  imagePlaceholder: string
  googleRating: number
}

export const portfolioData: PortfolioItem[] = [
  // Order matches bento grid: featured, tall, small×4
  {
    id: 'hollyfield-roofing',
    clientName: 'Hollyfield Roofing',
    niche: 'Roofer',
    meta: 'Roofer · Blackburn',
    location: 'Blackburn, England',
    url: 'https://hollyfieldroofings.com',
    description:
      'Live in 4 days. Emergency roofers now showing up on Google when customers need them most — reviews and click-to-call front and centre.',
    tags: ['Roofing', 'Mobile-First', 'Trust Building'],
    imagePlaceholder: '/images/portfolio-hollyfield-roofing.jpg',
    googleRating: 5.0,
  },
  {
    id: 'cb-joinery',
    clientName: 'C&B Joinery',
    niche: 'Joiner',
    meta: 'Joiner · Barrow-in-Furness',
    location: 'Barrow-in-Furness, England',
    url: 'https://cbjoineryltd.com',
    description:
      'Brand new online presence for a joinery business with zero previous web presence. Live within the week.',
    tags: ['Joinery', 'New Online Presence', 'Lead Generation'],
    imagePlaceholder: '/images/portfolio-cb-joinery.jpg',
    googleRating: 5.0,
  },
  {
    id: 'warwick-roofing',
    clientName: 'Warwick Roofing',
    niche: 'Roofer',
    meta: 'Roofer · Warwick',
    location: 'Warwick, England',
    url: 'https://warwickroofingmidlandsltd.com/',
    description:
      'Live and ranking on Google. Family roofing business with 30+ years experience now getting found by customers searching locally.',
    tags: ['Roofing', 'Local SEO', 'Lead Generation'],
    imagePlaceholder: '/images/portfolio-warwick-roofing.jpg',
    googleRating: 5.0,
  },
  {
    id: 'spires-decorating',
    clientName: 'Spires Decorating',
    niche: 'Painter & Decorator',
    meta: 'Painter & Decorator · Northampton',
    location: 'Northampton, England',
    url: 'https://spiresdecorating.com',
    description:
      'Ranking on Google within weeks of going live. Showcases 20+ years of real work and pulls in local enquiries.',
    tags: ['Decorating', 'Portfolio Gallery', 'Reviews'],
    imagePlaceholder: '/images/portfolio-spires-decorating.jpg',
    googleRating: 4.5,
  },
  {
    id: 'sapphire-spray-coatings',
    clientName: 'Sapphire Spray Coatings',
    niche: 'Painter & Decorator',
    meta: 'Painter & Decorator · Mansfield',
    location: 'Mansfield, England',
    url: 'https://sapphirespraycoatings.co.uk',
    description:
      'Spray coating specialists in Mansfield now getting found online. 3 new enquiries in the first 30 days of going live.',
    tags: ['Decorating', 'Spray Coatings', 'Reviews'],
    imagePlaceholder: '/images/portfolio-sapphire-spray-coatings.jpg',
    googleRating: 5.0,
  },
  {
    id: 'mk-roadside',
    clientName: 'MK Roadside Solutions',
    niche: 'Breakdown',
    meta: 'Breakdown · Milton Keynes',
    location: 'Milton Keynes, England',
    url: 'https://mkroadside.co.uk',
    description:
      'Live and generating enquiries. Roadside assistance business now showing up on Google when local drivers need help most.',
    tags: ['Roadside', 'Lead Generation', 'Local SEO'],
    imagePlaceholder: '/images/portfolio-mk-roadside.jpg',
    googleRating: 5.0,
  },
]
