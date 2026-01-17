/**
 * Services Configuration
 * 
 * All service offerings with details, pricing tiers, and features.
 * Used on homepage, services page, and any service-related components.
 */

export interface Service {
  id: string;
  icon: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  startingPrice?: string;
  priceRange?: string;
  deliverables?: string[];
  timeline?: string;
}

export const services: Service[] = [
  {
    id: 'brand-identity',
    icon: '🎨',
    title: 'Brand Identity Systems',
    shortDescription: 'Complete visual identity that sets you apart in Web3.',
    fullDescription: 'We create comprehensive brand systems that communicate trust, innovation, and credibility. From logo design to complete brand guidelines, we build identities that resonate with crypto-native audiences.',
    features: [
      'Logo design & variations',
      'Color palette & typography',
      'Brand guidelines document',
      'Social media templates',
      'Presentation templates',
    ],
    startingPrice: '$3K',
    priceRange: '$3K - $10K',
    timeline: '2-4 weeks',
  },
  {
    id: 'ui-ux',
    icon: '📱',
    title: 'Product & Interface Design',
    shortDescription: 'DApp interfaces that users actually understand.',
    fullDescription: 'We design intuitive interfaces for DeFi protocols, NFT marketplaces, and Web3 applications. Our designs balance complexity with usability, making blockchain interactions feel natural.',
    features: [
      'User research & flows',
      'Wireframes & prototypes',
      'High-fidelity UI design',
      'Design system components',
      'Developer handoff specs',
    ],
    startingPrice: '$5K',
    priceRange: '$5K - $15K+',
    timeline: '3-6 weeks',
  },
  {
    id: 'website',
    icon: '🌐',
    title: 'Website Design & Development',
    shortDescription: 'High-converting sites that tell your story.',
    fullDescription: 'From landing pages to full marketing sites, we create web experiences that convert visitors into users and investors. Fast, responsive, and optimized for Web3 audiences.',
    features: [
      'Custom design',
      'Responsive development',
      'CMS integration',
      'SEO optimization',
      'Analytics setup',
    ],
    startingPrice: '$3K',
    priceRange: '$3K - $12K',
    timeline: '2-6 weeks',
  },
  {
    id: 'pitch-deck',
    icon: '📊',
    title: 'Pitch Decks & Presentations',
    shortDescription: 'Investor-ready decks that close rounds.',
    fullDescription: 'We design pitch decks that communicate your vision clearly and professionally. Our decks have helped clients raise from seed to Series A across DeFi, infrastructure, and gaming.',
    features: [
      'Narrative structure',
      'Custom illustrations',
      'Data visualization',
      'Presentation coaching',
      'Multiple formats (PDF, PPT)',
    ],
    startingPrice: '$2K',
    priceRange: '$2K - $6K',
    timeline: '1-2 weeks',
  },
  {
    id: 'nft',
    icon: '🖼️',
    title: 'NFT & Digital Collectibles',
    shortDescription: 'Collections that stand out in a crowded market.',
    fullDescription: 'We design NFT collections with distinctive art styles and cohesive visual systems. From PFP projects to 1/1 art, we create assets that collectors want to own.',
    features: [
      'Character design',
      'Trait system design',
      'Generative art setup',
      'Rarity distribution',
      'Marketplace assets',
    ],
    startingPrice: '$5K',
    priceRange: '$5K - $15K+',
    timeline: '3-6 weeks',
  },
  {
    id: 'social-content',
    icon: '📣',
    title: 'Social & Marketing Assets',
    shortDescription: 'Consistent content that builds community.',
    fullDescription: 'Ongoing design support for your marketing needs. We create social media graphics, announcement visuals, community assets, and everything you need to maintain a strong visual presence.',
    features: [
      'Social media templates',
      'Announcement graphics',
      'Community badges & roles',
      'Telegram sticker packs',
      'Marketing campaigns',
    ],
    startingPrice: '$2K/mo',
    priceRange: '$2K - $5K/mo',
    timeline: 'Ongoing',
  },
];

/**
 * Pricing tiers for overview display
 */
export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}

export const pricingTiers: PricingTier[] = [
  {
    name: 'Project',
    price: '$8K+',
    description: 'Single deliverable with defined scope',
    features: [
      'Brand identity OR website',
      'Pitch deck design',
      'NFT collection design',
      '2-4 week timeline',
      'Unlimited revisions',
    ],
    cta: 'Start a Project',
  },
  {
    name: 'Partnership',
    price: '$15K+',
    description: 'Comprehensive design package',
    features: [
      'Brand + website + assets',
      'Product UI/UX design',
      'Priority communication',
      'Extended support period',
      'Strategy consultation',
    ],
    cta: 'Become a Partner',
    highlighted: true,
  },
  {
    name: 'Retainer',
    price: '$5K/mo',
    description: 'Ongoing design support',
    features: [
      'Dedicated design hours',
      'Marketing assets',
      'Social content',
      'Quick turnarounds',
      'Monthly strategy call',
    ],
    cta: 'Get Retainer',
  },
];

/**
 * Get a service by ID
 */
export function getService(id: string): Service | undefined {
  return services.find(s => s.id === id);
}
