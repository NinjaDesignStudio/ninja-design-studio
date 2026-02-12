/**
 * Navigation Configuration
 * 
 * Centralized navigation for header, footer, and mobile menu.
 * Edit this file to update navigation across the entire site.
 */

// =============================================================================
// Types
// =============================================================================

export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface NavDropdown {
  label: string;
  href?: string;
  type: 'dropdown';
  children: NavLink[];
}

export interface NavCTA {
  label: string;
  href: string;
  type: 'cta';
  variant: 'primary' | 'secondary' | 'dark';
}

export type NavItem = NavLink | NavDropdown | NavCTA;

// =============================================================================
// Main Navigation
// =============================================================================

export const mainNavigation: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { 
    label: 'Get Started', 
    href: '/contact', 
    type: 'cta', 
    variant: 'primary' 
  },
];

// =============================================================================
// Footer Navigation
// =============================================================================

export interface FooterSection {
  title: string;
  links: NavLink[];
}

export const footerNavigation: FooterSection[] = [
  {
    title: 'Services',
    links: [
      { label: 'Brand Identity', href: '/services/brand-identity' },
      { label: 'UI/UX Design', href: '/services/ui-ux' },
      { label: 'Websites', href: '/services/website' },
      { label: 'Pitch Decks', href: '/services/pitch-deck' },
      { label: 'Get Estimate', href: '/estimate' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Work', href: '/work' },
      { label: 'Testimonials', href: '/testimonials' },
      { label: 'Blog', href: '/blog' },
      { label: 'FAQ', href: '/faq' },
    ],
  },
];

// =============================================================================
// Social Links
// =============================================================================

export interface SocialLink {
  name: string;
  href: string;
  icon: 'instagram' | 'telegram' | 'twitter' | 'dribbble' | 'behance';
}

export const socialLinks: SocialLink[] = [
  { name: 'Instagram', href: 'https://www.instagram.com/ninjadesignstudio/', icon: 'instagram' },
  { name: 'Telegram', href: 'https://t.me/ninjaguy', icon: 'telegram' },
];

// =============================================================================
// Helper Functions
// =============================================================================

export function isDropdown(item: NavItem): item is NavDropdown {
  return (item as NavDropdown).type === 'dropdown';
}

export function isCTA(item: NavItem): item is NavCTA {
  return (item as NavCTA).type === 'cta';
}

export function isLink(item: NavItem): item is NavLink {
  return !('type' in item) || item.type === undefined;
}
