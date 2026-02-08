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
    id: 'what-industries',
    question: 'What industries do you specialize in?',
    answer: 'We specialize in fintech, SaaS, and complex technical products. Our team has deep experience designing for financial platforms, data-heavy dashboards, and products where trust and usability are critical. We understand the unique challenges of making complex systems feel intuitive.',
    category: 'general',
  },
  {
    id: 'who-do-you-work-with',
    question: 'What types of projects do you work with?',
    answer: 'We work with funded startups, growth-stage companies, and enterprise teams across fintech and SaaS. Our sweet spot is projects that have secured funding and are ready to invest in professional design that matches their ambitions.',
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
    id: 'payment-terms',
    question: 'What are your payment terms?',
    answer: 'We use milestone-based payments for most projects. Typically it\'s 50% upfront to begin work, with the remaining 50% due on delivery. For retainer clients, we bill monthly. We accept bank transfer, credit card, and wire payments.',
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
    answer: 'We offer both design-only and full design + development packages. For development, we work with modern frameworks like Astro, Next.js, and React.',
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
