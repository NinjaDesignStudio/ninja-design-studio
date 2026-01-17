# CLAUDE.md

This file provides guidance to Claude Code when working with code in this repository.

## Project Overview

**Ninja Design Studio** - A premium Web3 design agency website built with Astro. Static site with modern component architecture.

## Commands

```bash
npm install         # Install dependencies
npm run dev         # Start dev server at localhost:4321
npm run build       # Build static site to dist/
npm run preview     # Preview production build locally
```

## Architecture

**Astro 5** static site with component-based architecture.

```
src/
├── components/         # Reusable UI components
│   ├── ui/             # Generic UI components
│   │   ├── Button.astro
│   │   ├── Card.astro
│   │   ├── Section.astro
│   │   ├── SectionHeader.astro
│   │   ├── TwoColumn.astro
│   │   └── PullQuote.astro
│   ├── Header.astro           # Main navigation
│   ├── HeaderTransparent.astro # For dark hero pages
│   ├── Footer.astro           # Site footer
│   ├── Hero.astro             # Homepage hero
│   ├── BlogCard.astro         # Blog post cards (3 variants)
│   ├── ClientLogos.astro      # Client logo grid
│   ├── StatsBanner.astro      # Statistics display
│   └── ...                    # Other components
├── content/            # Markdown/MDX content
│   └── blog/           # Blog posts
├── layouts/            # Page layout templates
│   ├── BaseLayout.astro       # Standard pages
│   └── DarkHeroLayout.astro   # Pages with dark hero
├── lib/                # Utilities, data, helpers
│   ├── stats.ts        # Social proof numbers
│   ├── navigation.ts   # Navigation config
│   ├── services.ts     # Service offerings
│   ├── projects.ts     # Portfolio projects
│   ├── testimonials.ts # Client testimonials
│   └── faqs.ts         # FAQ content
├── pages/              # File-based routing
└── styles/             # CSS files
```

## Key Patterns

### Centralized Data
All repeated content is centralized in `src/lib/`:

```typescript
// Import stats
import { stats, displayStats } from '../lib/stats';

// Import navigation
import { mainNavigation, socialLinks, isCTA } from '../lib/navigation';

// Import services
import { services, pricingTiers } from '../lib/services';

// Import projects
import { projects, getFeaturedProjects, clientLogos } from '../lib/projects';

// Import testimonials
import { testimonials, getFeaturedTestimonials } from '../lib/testimonials';

// Import FAQs
import { faqs, getFAQsByCategory } from '../lib/faqs';
```

### Layout System

**BaseLayout** - Standard pages with solid header
```astro
<BaseLayout title="Services">
  <Section>Content here</Section>
</BaseLayout>
```

**DarkHeroLayout** - Pages with dark hero sections (transparent → solid header)
```astro
<DarkHeroLayout title="Our Work">
  <section class="hero-dark">Dark hero content</section>
  <Section>Rest of page</Section>
</DarkHeroLayout>
```

### UI Components

**Section** - Consistent page sections
```astro
<Section bg="dark" spacing="lg" width="narrow">
  <SectionHeader title="Our Services" eyebrow="What We Do" />
  <p>Content</p>
</Section>
```

**Button** - Buttons with variants
```astro
<Button href="/contact" variant="primary" size="lg">Get Started</Button>
<Button variant="outline" type="submit">Submit</Button>
```

**Card** - Card containers
```astro
<Card variant="glass" padding="lg" hover>
  <h3>Title</h3>
  <p>Content</p>
</Card>
```

**TwoColumn** - Two-column layouts
```astro
<TwoColumn reverse>
  <Fragment slot="content">
    <h2>Title</h2>
    <p>Text content</p>
  </Fragment>
  <Fragment slot="media">
    <img src="/image.jpg" alt="Description" />
  </Fragment>
</TwoColumn>
```

**BlogCard** - Blog cards (3 variants: full, compact, featured)
```astro
<BlogCard
  variant="featured"
  title="Post Title"
  excerpt="Description"
  image="/images/blog/post.jpg"
  category="Design"
  readingTime="5 min"
  href="/blog/post-slug"
/>
```

### CSS Variables
Brand colors and design tokens in `src/styles/global.css`:

```css
:root {
  --neon-pink: #ff006e;
  --neon-cyan: #00f5ff;
  --neon-purple: #bf00ff;
  --dark: #0a0a0f;
  --darker: #050508;
  --off-white: #f8f8f8;
  
  --gradient-pink: linear-gradient(135deg, #ff006e 0%, #bf00ff 100%);
  --gradient-cyan: linear-gradient(135deg, #00f5ff 0%, #0088ff 100%);
}
```

### Fonts
- **Outfit** - Primary sans-serif (headings, body)
- **Space Mono** - Monospace accent font

## Content

### Blog Posts
Located in `src/content/blog/`. Frontmatter schema:

```yaml
---
title: "Post Title"
excerpt: "Brief description"
date: "2025-01-15"
category: "Design"
image: "/images/blog/post-image.jpg"
author: "Ninja Design Studio"
---
```

### Adding New Content
1. Blog posts: Add `.md` files to `src/content/blog/`
2. Services: Edit `src/lib/services.ts`
3. Projects: Edit `src/lib/projects.ts`
4. FAQs: Edit `src/lib/faqs.ts`
5. Navigation: Edit `src/lib/navigation.ts`

## Component Reference

### Navigation Components
- `Header.astro` - Standard navigation (solid background)
- `HeaderTransparent.astro` - Transparent header for dark heroes
- `Footer.astro` - Site footer with nav and social links

### Display Components
- `Hero.astro` - Homepage animated hero
- `ClientLogos.astro` - Client logo trust section
- `StatsBanner.astro` - Statistics display bar
- `BlogCard.astro` - Blog post cards
- `ServiceCard.astro` - Service display cards
- `WorkItem.astro` - Portfolio project cards
- `TestimonialCard.astro` - Client testimonials
- `FAQItem.astro` - Accordion FAQ items
- `ProjectModal.astro` - Project detail modal

### UI Components (src/components/ui/)
- `Button.astro` - Buttons and link buttons
- `Card.astro` - Card containers
- `Section.astro` - Page section wrapper
- `SectionHeader.astro` - Section titles with eyebrow
- `TwoColumn.astro` - Two-column grid layout
- `PullQuote.astro` - Highlighted quotes

### Form Components
- `ContactForm.astro` - Web3Forms integration

## Form Handling
Contact form uses Web3Forms API:
- Access key: `710fa7dd-697e-454e-b5c8-8eb29c58f4a2`
- Client-side validation
- Success/error handling

## Images

All images go in `public/images/`:

```
public/images/
├── hero/           # Hero floating objects
├── clients/        # Client logos
├── blog/           # Blog post images
├── nds-logo.jpg    # Site logo
└── [project].jpg   # Project images
```

## Deployment

Static build - deploy `dist/` to any static host:
- Vercel
- Netlify
- Cloudflare Pages
- GitHub Pages

```bash
npm run build
# Upload dist/ folder
```

## Common Tasks

### Update Stats
Edit `src/lib/stats.ts` - changes reflect everywhere.

### Add New Service
Add to `services` array in `src/lib/services.ts`.

### Add Portfolio Project
Add to `projects` array in `src/lib/projects.ts`.

### Update Navigation
Edit `mainNavigation` or `footerNavigation` in `src/lib/navigation.ts`.

### Create Page with Dark Hero
Use `DarkHeroLayout` instead of `BaseLayout`:
```astro
---
import DarkHeroLayout from '../layouts/DarkHeroLayout.astro';
---
<DarkHeroLayout title="Page Title">
  <!-- Hero section will have transparent header -->
</DarkHeroLayout>
```
