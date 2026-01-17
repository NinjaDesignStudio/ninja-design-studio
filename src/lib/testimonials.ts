/**
 * Testimonials
 * 
 * Client testimonials and reviews.
 * Used on homepage, about page, and testimonial components.
 */

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
  projectId?: string; // Links to a project if applicable
  featured: boolean;
  category: 'brand' | 'website' | 'ui-ux' | 'pitch-deck' | 'nft' | 'retainer';
  rating?: number; // 1-5 stars
}

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    quote: 'Ninja Design Studio transformed our brand identity completely. They understand Web3 culture and delivered designs that resonated with our community from day one.',
    author: 'Alex Chen',
    role: 'Founder',
    company: 'DeFi Protocol',
    featured: true,
    category: 'brand',
    rating: 5,
  },
  {
    id: 'testimonial-2',
    quote: 'The team delivered our pitch deck in record time and it looked incredible. We closed our seed round two weeks later. Highly recommend for any crypto startup.',
    author: 'Sarah Kim',
    role: 'CEO',
    company: 'Web3 Startup',
    featured: true,
    category: 'pitch-deck',
    rating: 5,
  },
  {
    id: 'testimonial-3',
    quote: 'Working with Ninja was seamless. They get crypto, they get design, and they deliver fast. Our dApp UI is now one of the most intuitive in the space.',
    author: 'Marcus Thompson',
    role: 'Product Lead',
    company: 'NFT Marketplace',
    featured: true,
    category: 'ui-ux',
    rating: 5,
  },
  {
    id: 'testimonial-4',
    quote: 'Finally, a design team that doesn\'t need hand-holding on blockchain concepts. They came prepared and delivered beyond expectations.',
    author: 'Jennifer Liu',
    role: 'Marketing Director',
    company: 'L2 Network',
    featured: false,
    category: 'brand',
    rating: 5,
  },
  {
    id: 'testimonial-5',
    quote: 'Our website went from dated to cutting-edge in just 3 weeks. The attention to detail and Web3-native aesthetic was exactly what we needed.',
    author: 'David Park',
    role: 'Co-founder',
    company: 'Yield Protocol',
    featured: true,
    category: 'website',
    rating: 5,
  },
  {
    id: 'testimonial-6',
    quote: 'They designed our entire NFT collection — 10K pieces with 200+ traits. The art style is unique and our floor price speaks for itself.',
    author: 'Maya Rodriguez',
    role: 'Creative Director',
    company: 'PFP Project',
    featured: false,
    category: 'nft',
    rating: 5,
  },
  {
    id: 'testimonial-7',
    quote: 'Having Ninja on retainer has been a game-changer. Fast turnarounds, consistent quality, and they truly feel like an extension of our team.',
    author: 'Kevin O\'Brien',
    role: 'Head of Marketing',
    company: 'DEX Platform',
    featured: true,
    category: 'retainer',
    rating: 5,
  },
  {
    id: 'testimonial-8',
    quote: 'The UI/UX redesign increased our daily active users by 40%. They understood our complex DeFi mechanics and made them accessible.',
    author: 'Lisa Wang',
    role: 'Product Manager',
    company: 'Lending Protocol',
    featured: false,
    category: 'ui-ux',
    rating: 5,
  },
  {
    id: 'testimonial-9',
    quote: 'From brand strategy to final website, they handled everything. One team, one vision, zero miscommunication. That\'s rare in this space.',
    author: 'James Mitchell',
    role: 'Founder',
    company: 'DAO Tooling',
    featured: false,
    category: 'brand',
    rating: 5,
  },
  {
    id: 'testimonial-10',
    quote: 'We\'ve worked with 5 different design agencies. Ninja is the only one that actually understood what we were building without lengthy explanations.',
    author: 'Emma Wilson',
    role: 'CEO',
    company: 'Bridge Protocol',
    featured: false,
    category: 'website',
    rating: 5,
  },
];

/**
 * Get featured testimonials for homepage
 */
export function getFeaturedTestimonials(): Testimonial[] {
  return testimonials.filter(t => t.featured);
}

/**
 * Get testimonial by ID
 */
export function getTestimonial(id: string): Testimonial | undefined {
  return testimonials.find(t => t.id === id);
}

/**
 * Get testimonials by category
 */
export function getTestimonialsByCategory(category: Testimonial['category']): Testimonial[] {
  return testimonials.filter(t => t.category === category);
}

/**
 * Get all unique categories
 */
export function getTestimonialCategories(): Testimonial['category'][] {
  return [...new Set(testimonials.map(t => t.category))];
}

/**
 * Category labels for display
 */
export const categoryLabels: Record<Testimonial['category'], string> = {
  'brand': 'Brand Identity',
  'website': 'Website',
  'ui-ux': 'UI/UX Design',
  'pitch-deck': 'Pitch Deck',
  'nft': 'NFT Collection',
  'retainer': 'Retainer',
};
