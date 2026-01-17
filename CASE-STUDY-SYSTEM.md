# Case Study System for Ninja Design Studio

A complete component system for creating detailed, immersive portfolio case studies with your dark/neon Web3 aesthetic.

## Files Created

### Layout
- `src/layouts/CaseStudyLayout.astro` - Main layout with dark theme, scroll progress, and auto-styling for content

### Components (`src/components/case-study/`)
- `CaseStudyHero.astro` - Full-bleed hero with project image, metadata pills, and scroll indicator
- `ProjectMeta.astro` - Sidebar metadata (client, services, timeline, deliverables)
- `ChallengeSection.astro` - Problem/solution section with multiple layouts
- `ProcessTimeline.astro` - Design process visualization (vertical/horizontal)
- `ResultsGrid.astro` - Key metrics and outcomes display
- `ImageShowcase.astro` - Flexible image layouts (grid, comparison, full-bleed)
- `ClientTestimonial.astro` - Inline testimonial styled for case studies
- `NextProject.astro` - Navigation to next case study
- `index.ts` - Barrel export for easy imports

### Example
- `src/pages/work/phantom.astro` - Complete example demonstrating all components

## Usage

```astro
---
import CaseStudyLayout from '../../layouts/CaseStudyLayout.astro';
import {
  CaseStudyHero,
  ProjectMeta,
  ChallengeSection,
  ProcessTimeline,
  ResultsGrid,
  ImageShowcase,
  ClientTestimonial,
  NextProject,
} from '../../components/case-study';
---

<CaseStudyLayout title="Project Name" description="...">
  <CaseStudyHero
    title="Project Name"
    client="Client Name"
    heroImage="/images/hero.jpg"
    services={['Brand', 'UI/UX']}
    year="2024"
  />
  
  <!-- Add sections as needed -->
</CaseStudyLayout>
```

## Key Differences from Employer's Site

1. **Dark Theme** - Uses your `--dark`, `--darker` backgrounds with neon accents
2. **Glass Effects** - Subtle glass-morphism cards with blur and transparency
3. **Gradient Accents** - Pink-to-cyan gradients for emphasis
4. **Web3 Focused** - Terminology and sections relevant to crypto/DeFi projects
5. **More Visual** - Designed to showcase design work prominently
6. **Scroll Animations** - Reveal effects and progress indicator

## Component Variants

### ChallengeSection
- `default` - Linear layout with card-style problems
- `split` - Two-column with problems left, approach right
- `stacked` - Problems as a grid of cards

### ProcessTimeline
- `vertical` - Traditional timeline with connector lines
- `horizontal` - Card-based grid layout

### ResultsGrid
- `default` - Clean metrics display
- `cards` - Metrics in glass cards
- `minimal` - Left-border accent style

### ImageShowcase
- `full` - Full-bleed images
- `contained` - Max-width constrained
- `grid` - 2/3/4 column grid
- `asymmetric` - Large + small layout
- `comparison` - Before/after with labels
- `stacked` - Vertical stack

### ClientTestimonial
- `default` - Gradient background with border accent
- `featured` - Centered, larger text
- `minimal` - Simple left border
- `card` - Glass card style

## Customization Tips

1. **Colors** - All components use CSS variables (`--neon-pink`, `--neon-cyan`, etc.)
2. **Spacing** - Sections have 5rem padding by default, 3rem on mobile
3. **Typography** - Uses `--font-main` (Outfit) and `--font-mono` (Space Mono)
4. **Animations** - Uses reveal classes from global.css

## Adding to Your Site

1. Images go in `/public/images/work/`
2. Create new case study pages in `/src/pages/work/[project-name].astro`
3. Update your main work page to link to case studies
4. Consider adding a content collection for case studies if you have many
