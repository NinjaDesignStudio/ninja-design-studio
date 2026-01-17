/**
 * Portfolio Projects
 * 
 * All case studies and portfolio items.
 * Used on homepage, work page, and project modals.
 */

export interface Project {
  id: string;
  slug: string;
  title: string;
  client: string;
  category: string;
  tags: string[];
  shortDescription: string;
  fullDescription: string;
  challenge?: string;
  solution?: string;
  results?: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  images: {
    thumbnail: string;
    hero: string;
    gallery?: string[];
  };
  links?: {
    live?: string;
    behance?: string;
    dribbble?: string;
  };
  featured: boolean;
  year: number;
}

export const projects: Project[] = [
  {
    id: 'tailsbnb',
    slug: 'tailsbnb',
    title: 'TailsBnB',
    client: 'TailsBnB',
    category: 'Pet Services',
    tags: ['Branding', 'Web Design', 'UI/UX'],
    shortDescription: 'Pet sitting website for Vancouver couple',
    fullDescription: 'A complete brand and web experience for a premium pet sitting service. We created a warm, trustworthy identity that appeals to pet owners who want the best care for their furry friends.',
    challenge: 'Create a brand that feels both professional and approachable, standing out in a crowded pet services market.',
    solution: 'We developed a playful yet sophisticated visual identity with a custom illustration style that showcases the personal, caring nature of the service.',
    results: [
      '200% increase in booking inquiries',
      'Featured in local Vancouver press',
      'Expanded to 3 additional cities',
    ],
    images: {
      thumbnail: '/images/tailsbnb.jpg',
      hero: '/images/tailsbnb.jpg',
    },
    featured: true,
    year: 2024,
  },
  {
    id: 'ezo',
    slug: 'ezo',
    title: 'EZO Platform',
    client: 'EZO',
    category: 'FinTech',
    tags: ['UI/UX', 'Web Design', 'Branding'],
    shortDescription: 'All-in-one crypto payment ecosystem',
    fullDescription: 'Complete design system for a DeFi payment platform. We created an intuitive interface that makes complex crypto transactions feel simple and secure.',
    challenge: 'Design a platform that handles complex DeFi operations while remaining accessible to mainstream users.',
    solution: 'We developed a progressive disclosure interface that reveals complexity only when needed, with clear visual hierarchy and trust signals throughout.',
    results: [
      '$2M TVL within first month',
      '4.8/5 user satisfaction rating',
      'Successfully raised Series A',
    ],
    images: {
      thumbnail: '/images/ezo.jpg',
      hero: '/images/ezo.jpg',
    },
    featured: true,
    year: 2024,
  },
  {
    id: 'moon-wanderlust',
    slug: 'moon-wanderlust',
    title: 'Moon Wanderlust',
    client: 'Moon Wanderlust',
    category: 'Travel',
    tags: ['Branding', 'Web Design', 'NFT'],
    shortDescription: 'Backpacker camping community platform',
    fullDescription: 'Brand identity and community platform for a Web3-native travel community. We created an adventurous visual language that captures the spirit of exploration.',
    challenge: 'Build a brand that resonates with both crypto enthusiasts and traditional travelers.',
    solution: 'We developed a bold, adventure-focused identity with earthy tones and cosmic elements that bridge the gap between nature and technology.',
    images: {
      thumbnail: '/images/moon-wanderlust.jpg',
      hero: '/images/moon-wanderlust.jpg',
    },
    featured: true,
    year: 2023,
  },
  {
    id: 'avalanche',
    slug: 'avalanche',
    title: 'Avalanche Ecosystem',
    client: 'Avalanche',
    category: 'Blockchain',
    tags: ['Branding', 'Marketing', 'Web Design'],
    shortDescription: 'Brand refresh and marketing website',
    fullDescription: 'Marketing support and visual assets for the Avalanche ecosystem. We created campaign materials that communicate speed, security, and innovation.',
    challenge: 'Create marketing assets that stand out in the competitive L1 blockchain space.',
    solution: 'We developed a dynamic visual system with motion-forward design that emphasizes Avalanche\'s speed and efficiency.',
    images: {
      thumbnail: '/images/avalanche.jpg',
      hero: '/images/avalanche.jpg',
    },
    featured: true,
    year: 2023,
  },
];

/**
 * Client logos for trust section
 */
export interface ClientLogo {
  name: string;
  logo: string;
  href?: string;
}

export const clientLogos: ClientLogo[] = [
  { name: 'Avalanche', logo: '/images/clients/avalanche.png' },
  { name: 'Binamon', logo: '/images/clients/binamon.png' },
  { name: 'EZO', logo: '/images/clients/ezo.png' },
  { name: 'HKAC', logo: '/images/clients/hkac.png' },
  { name: 'Kaddex', logo: '/images/clients/kaddex.png' },
  { name: 'Kadena', logo: '/images/clients/kadena.png' },
  { name: 'Naruto Sushi', logo: '/images/clients/narutosushi.png' },
  { name: 'PinkSale', logo: '/images/clients/pinksale.png' },
  { name: 'Pokemoon', logo: '/images/clients/pokemoon.png' },
  { name: 'RugDoc', logo: '/images/clients/rugdoc.png' },
  { name: 'VSystems', logo: '/images/clients/vsystems.png' },
];

/**
 * Get featured projects for homepage
 */
export function getFeaturedProjects(): Project[] {
  return projects.filter(p => p.featured);
}

/**
 * Get project by slug
 */
export function getProject(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug);
}

/**
 * Get projects by category
 */
export function getProjectsByCategory(category: string): Project[] {
  return projects.filter(p => p.category === category);
}

/**
 * Get all unique categories
 */
export function getCategories(): string[] {
  return [...new Set(projects.map(p => p.category))];
}
