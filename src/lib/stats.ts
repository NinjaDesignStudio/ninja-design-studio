/**
 * Social Proof & Statistics
 * 
 * Centralized stats used across the site.
 * Update these values in one place to reflect everywhere.
 */

export const stats = {
  // Core metrics
  projects: '100+',
  projectsNum: 100,
  
  clients: '40+',
  clientsNum: 40,
  
  experience: '5+',
  experienceLabel: 'Years in Web3',
  
  clientFunds: '$50M+',
  clientFundsLabel: 'Raised by Clients',
  
  // For different display contexts
  brandsBuilt: '40+',
  
  // Response time
  responseTime: '24hrs',
  responseTimeLabel: 'Average Response',
};

/**
 * Display-ready stats for homepage/about sections
 */
export const displayStats = [
  { number: stats.projects, label: 'Projects Delivered' },
  { number: stats.experience, label: 'Years in Web3' },
  { number: stats.clientFunds, label: 'Raised by Clients' },
  { number: stats.brandsBuilt, label: 'Brands Built' },
];

/**
 * Compact stats for hero sections
 */
export const heroStats = [
  { number: stats.projects, label: 'Projects' },
  { number: stats.clients, label: 'Clients' },
  { number: stats.experience, label: 'Years' },
];
