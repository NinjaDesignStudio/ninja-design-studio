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
    shortDescription: 'Complete visual identity that sets you apart in your market.',
    fullDescription: 'We create comprehensive brand systems that communicate trust, innovation, and credibility. From logo design to complete brand guidelines, we build identities that resonate with discerning audiences.',
    features: [
      'Logo design & variations',
      'Color palette & typography',
      'Brand guidelines document',
      'Social media templates',
      'Presentation templates',
    ],
    startingPrice: '$2K',
    priceRange: '$2K - $8K',
    timeline: '2-4 weeks',
  },
  {
    id: 'ui-ux',
    icon: '📱',
    title: 'Product & Interface Design',
    shortDescription: 'Complex products that users actually understand.',
    fullDescription: 'We design intuitive interfaces for financial platforms, SaaS products, and data-heavy applications. Our designs balance complexity with usability, making complex interactions feel natural.',
    features: [
      'User research & flows',
      'Wireframes & prototypes',
      'High-fidelity UI design',
      'Design system components',
      'Developer handoff specs',
    ],
    startingPrice: '$3K',
    priceRange: '$3K - $12K+',
    timeline: '3-6 weeks',
  },
  {
    id: 'website',
    icon: '🌐',
    title: 'Website Design & Development',
    shortDescription: 'High-converting sites that tell your story.',
    fullDescription: 'From landing pages to full marketing sites, we create web experiences that convert visitors into users and investors. Fast, responsive, and optimized for conversion.',
    features: [
      'Custom design',
      'Responsive development',
      'CMS integration',
      'SEO optimization',
      'Analytics setup',
    ],
    startingPrice: '$2K',
    priceRange: '$2K - $10K',
    timeline: '2-6 weeks',
  },
  {
    id: 'pitch-deck',
    icon: '📊',
    title: 'Pitch Decks & Presentations',
    shortDescription: 'Investor-ready decks that close rounds.',
    fullDescription: 'We design pitch decks that communicate your vision clearly and professionally. Our decks have helped clients raise from seed to Series A across fintech, SaaS, and enterprise.',
    features: [
      'Narrative structure',
      'Custom illustrations',
      'Data visualization',
      'Presentation coaching',
      'Multiple formats (PDF, PPT)',
    ],
    startingPrice: '$1K',
    priceRange: '$1K - $4K',
    timeline: '1-2 weeks',
  },
  {
    id: 'design-system',
    icon: '🧩',
    title: 'Design Systems',
    shortDescription: 'Scalable UI foundations for growing products.',
    fullDescription: 'We build comprehensive design systems that keep your product consistent as your team and codebase scale. From component libraries to design tokens, we create the foundation for efficient, beautiful product development.',
    features: [
      'Component libraries',
      'Design tokens & variables',
      'Scalable UI kits',
      'Style guides',
      'Developer handoff documentation',
    ],
    startingPrice: '$4K',
    priceRange: '$4K - $12K+',
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
      'Email campaign design',
      'Marketing campaigns',
    ],
    startingPrice: '$1K',
    priceRange: '$1K - $3K',
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
      'Design system creation',
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
