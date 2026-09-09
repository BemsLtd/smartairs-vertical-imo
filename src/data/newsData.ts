import {
  galleryPage1,
  galleryPage3,
  galleryPage4,
  galleryPage5,
  galleryPage6,
  newsArticle6,
} from '@/assets/images'

export interface NewsArticle {
  id: string
  slug: string
  title: string
  date: string
  image: string
  bannerImage?: string
  category: string
  excerpt: string
  content: string[]
}

export const featuredArticle: NewsArticle = {
  id: 'featured-1',
  slug: 'imo-state-moves-towards-a-smarter-waste-system',
  title: 'Imo State Moves Towards a Smarter, More Transparent Waste Management System',
  date: 'September 14, 2025.',
  image: galleryPage1,
  bannerImage: galleryPage3,
  category: 'Policy & Technology',
  excerpt:
    "Waste management is an essential part of keeping communities healthy, organised and liveable. As Imo State continues to strengthen its waste management system, technology is playing an increasingly important role in how services are delivered and monitored. Through EWAMAC's digital waste service, residents, businesses, government and private waste collectors will have access to a more connected system for managing waste services.",
  content: [
    'Imo State is taking a step towards a more organised and transparent approach to waste management with the introduction of a digital waste service designed to make essential waste services easier to access, manage and monitor. The initiative, led by the Eastern Waste Management Corporation (EWAMAC), brings digital technology into key areas of the waste management process, including premises registration, billing, payment, private waste collector licensing and service monitoring.',
    'For residents and households, the new system is designed to provide a simpler way to register their premises, manage their waste service and make payments through convenient channels. Businesses and institutions can also access services suited to their operational needs, while private waste collectors will have a structured digital process for applying for and renewing their licences.',
    'Beyond convenience, transparency is at the centre of the new approach. Digital records can provide clearer visibility into registrations, payments, collections and other service activities, helping to strengthen accountability across the waste management network.',
    'The programme also recognises that effective waste management goes beyond technology. Behind the digital platform are the people, collection teams, vehicles, field operations and networks responsible for delivering waste services across communities.',
    'By connecting these physical operations with digital systems, EWAMAC aims to create a waste management service that is easier to understand, easier to access and easier to monitor. The initiative reflects a broader commitment to supporting a cleaner Imo State through better systems, improved service delivery and greater accountability.',
    'With residents, businesses, government and waste collectors all connected through the same ecosystem, the goal is to make waste management work better for everyone. A cleaner Imo State starts with a better waste management system, and everyone has a role to play.',
  ],
}

export const newsArticles: NewsArticle[] = [
  {
    id: 'news-1',
    slug: 'smart-waste-billing-premises-registration',
    title: 'Smart Waste Billing: How Premises Registration Protects You From Overcharging',
    date: 'September 10, 2025.',
    image: galleryPage4,
    category: 'Billing & Compliance',
    excerpt:
      'Modern waste management involves much more than collection trucks and disposal sites. Behind an effective waste service are processes for registering premises, billing fairly and keeping track of service delivery.',
    content: [
      'Modern waste management involves much more than collection trucks and disposal sites. Behind an effective waste service are processes for registering premises, billing fairly and keeping track of service delivery.',
      'Under the new framework, premises are classified according to objective criteria, ensuring fair assessments rather than arbitrary charges.',
      'Residents can easily verify their billing history online or at local collection points, preventing dispute and ensuring peace of mind.',
    ],
  },
  {
    id: 'news-2',
    slug: 'private-waste-collector-licensing',
    title: 'Private Waste Collectors: Strengthening Standards and Accountable Partnerships',
    date: 'August 28, 2025.',
    image: galleryPage5,
    category: 'Operations',
    excerpt:
      'Private operators play a key role in the overall waste management network across local government areas. Clear digital licensing standards ensure safety and accountability.',
    content: [
      'Private operators play a key role in the overall waste management network across local government areas. Clear digital licensing standards ensure safety and accountability.',
      'Through the new licensing portal, operators can submit compliance documents, register disposal trucks, and receive digitized permits.',
      'This public-private collaboration ensures that waste collection coverage extends efficiently into every community while meeting high environmental standards.',
    ],
  },
  {
    id: 'news-3',
    slug: 'community-cleanliness-initiatives',
    title: 'Community Cleanliness Drives: Working Together Across 27 LGAs in Imo State',
    date: 'August 15, 2025.',
    image: galleryPage6,
    category: 'Community',
    excerpt:
      'Grassroots environmental participation is crucial for clean and liveable communities. Environmental task forces work hand-in-hand with neighborhood leaders.',
    content: [
      'Grassroots environmental participation is crucial for clean and liveable communities. Environmental task forces work hand-in-hand with neighborhood leaders.',
      'Regular community cleanups and youth sensitization drives are scheduled alongside daily municipal waste operations.',
      'Community leaders can report unauthorized waste dump locations for prompt intervention by field cleanup units.',
    ],
  },
  {
    id: 'news-4',
    slug: 'smartairs-payment-integration',
    title: 'SmartAIRS Integration: How Verified Digital Receipts Eliminate Fraud',
    date: 'July 30, 2025.',
    image: galleryPage3,
    category: 'Technology',
    excerpt:
      'Payment convenience and revenue transparency go hand-in-hand. The SmartAIRS digital billing framework ensures every collection is traceable and confirmed.',
    content: [
      'Payment convenience and revenue transparency go hand-in-hand. The SmartAIRS digital billing framework ensures every collection is traceable and confirmed.',
      'Citizens paying through authorized field agents receive instant SMS validation and thermal receipts bearing unique verification QR codes.',
      'This technology ensures that 100% of revenue collected is directly accounted for and invested back into municipal sanitation equipment.',
    ],
  },
  {
    id: 'news-5',
    slug: 'route-optimization-fleet-tracking',
    title: 'GPS Fleet Tracking and Route Optimization for Efficient Weekly Pickups',
    date: 'July 12, 2025.',
    image: newsArticle6,
    category: 'Logistics',
    excerpt:
      'Advanced telemetry and GPS sensors fitted to municipal waste compactors ensure scheduled collections happen on time and transfer stations operate efficiently.',
    content: [
      'Advanced telemetry and GPS sensors fitted to municipal waste compactors ensure scheduled collections happen on time and transfer stations operate efficiently.',
      'Route planning algorithms help minimize fuel consumption while ensuring residential zones receive weekly scheduled pickups without delay.',
      'Supervisors monitor truck locations in real time on a centralized command dashboard.',
    ],
  },
  {
    id: 'news-6',
    slug: 'sanitation-health-monitoring',
    title: 'Public Health and Sanitation Oversight in Commercial Centers',
    date: 'June 25, 2025.',
    image: galleryPage1,
    category: 'Health',
    excerpt:
      'Proactive monitoring of high-density markets, food establishments and retail clusters ensures health guidelines are upheld throughout the state.',
    content: [
      'Proactive monitoring of high-density markets, food establishments and retail clusters ensures health guidelines are upheld throughout the state.',
      'Dedicated health inspection units conduct scheduled reviews and assist market associations with proper bulk bin placement.',
      'Together, these steps safeguard environmental health across commercial centers in Owerri and beyond.',
    ],
  },
]

export function getArticleBySlug(slug: string): NewsArticle | undefined {
  if (slug === featuredArticle.slug) return featuredArticle
  return newsArticles.find((a) => a.slug === slug)
}

export function getRelatedArticles(currentSlug: string): NewsArticle[] {
  return [featuredArticle, ...newsArticles].filter((a) => a.slug !== currentSlug).slice(0, 2)
}
