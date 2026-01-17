/**
 * Frequently Asked Questions
 * 
 * FAQ content used across the site.
 * Can be filtered by category for different pages.
 */

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'pricing' | 'process' | 'services';
}

export const faqs: FAQ[] = [
  // General
  {
    id: 'what-is-web3-design',
    question: 'What makes Web3 design different?',
    answer: 'Web3 design requires deep understanding of blockchain UX patterns, crypto culture, and community expectations. We\'ve been in the space for 5+ years and speak the language natively—no learning curve, no explaining what a DEX is.',
    category: 'general',
  },
  {
    id: 'who-do-you-work-with',
    question: 'What types of projects do you work with?',
    answer: 'We work with funded protocols, DeFi platforms, NFT projects, L2s, and Web3 startups. Our sweet spot is projects that have secured funding and are ready to invest in professional design that matches their ambitions.',
    category: 'general',
  },
  
  // Pricing
  {
    id: 'typical-timeline',
    question: 'What\'s your typical timeline for a project?',
    answer: 'It depends on scope. Brand identity systems typically take 2-4 weeks, websites 2-6 weeks, and pitch decks 1-2 weeks. We can work faster for urgent deadlines—just let us know your timeline when you reach out.',
    category: 'pricing',
  },
  {
    id: 'early-stage',
    question: 'Do you work with early-stage projects?',
    answer: 'Yes, we work with projects at all stages—from pre-seed startups to established protocols. The key is having clarity on your goals and a budget that matches your ambitions. We\'re happy to discuss scope options that fit your situation.',
    category: 'pricing',
  },
  {
    id: 'token-payments',
    question: 'Do you accept token payments?',
    answer: 'We primarily work in USDC/USDT and fiat, but we\'re open to discussing token arrangements for the right projects. This is typically structured as a hybrid payment model.',
    category: 'pricing',
  },
  
  // Process
  {
    id: 'work-with-devs',
    question: 'Can you work with our existing developers?',
    answer: 'Absolutely. We provide detailed design specs, component documentation, and developer handoff files. We\'re also happy to collaborate directly with your dev team during implementation to ensure pixel-perfect results.',
    category: 'process',
  },
  {
    id: 'revisions',
    question: 'How many revisions are included?',
    answer: 'We include unlimited revisions within the agreed scope. Our goal is to get it right, not to nickel-and-dime you. That said, we\'re efficient—most projects reach final approval within 2-3 revision rounds.',
    category: 'process',
  },
  
  // Services
  {
    id: 'ongoing-support',
    question: 'Do you offer ongoing design support?',
    answer: 'Yes! Our retainer packages start at $5K/month and include dedicated design hours for marketing assets, social content, and quick-turnaround needs. It\'s perfect for projects that need consistent design output.',
    category: 'services',
  },
  {
    id: 'full-development',
    question: 'Do you build websites or just design them?',
    answer: 'We offer both design-only and full design + development packages. For development, we work with modern frameworks like Astro, Next.js, and can integrate with any Web3 stack.',
    category: 'services',
  },
];

/**
 * Get FAQs by category
 */
export function getFAQsByCategory(category: FAQ['category']): FAQ[] {
  return faqs.filter(f => f.category === category);
}

/**
 * Get all FAQs for a page (multiple categories)
 */
export function getFAQsForPage(categories: FAQ['category'][]): FAQ[] {
  return faqs.filter(f => categories.includes(f.category));
}

/**
 * Get general FAQs (most commonly displayed)
 */
export function getGeneralFAQs(): FAQ[] {
  return faqs.filter(f => f.category === 'general' || f.category === 'pricing');
}
