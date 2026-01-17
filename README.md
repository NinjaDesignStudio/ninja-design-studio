# Ninja Design Studio - Astro Website

A multi-page website built with [Astro](https://astro.build) for Ninja Design Studio.

## 🚀 Project Structure

```
ninja-design-studio/
├── public/
│   └── images/           # Static images (copy from your repo)
│       ├── hero/         # Hero character images
│       ├── clients/      # Client logos
│       ├── nds-logo.jpg
│       ├── tailsbnb.jpg
│       ├── ezo.jpg
│       ├── moon-wanderlust.jpg
│       ├── avalanche.jpg
│       └── og-image.jpg
├── src/
│   ├── components/       # Reusable Astro components
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── ServiceCard.astro
│   │   ├── WorkItem.astro
│   │   ├── TestimonialCard.astro
│   │   ├── FAQItem.astro
│   │   ├── ContactForm.astro
│   │   ├── ProjectModal.astro
│   │   ├── PageLoader.astro
│   │   └── BackToTop.astro
│   ├── content/
│   │   └── blog/         # Markdown blog posts
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro   # Home page
│   │   ├── services.astro
│   │   ├── work.astro
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   └── blog/
│   │       ├── index.astro
│   │       └── [slug].astro  # Dynamic blog posts
│   └── styles/
│       ├── global.css
│       ├── hero.css
│       ├── sections.css
│       └── pages.css
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## 📦 Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Copy your images:**
   Copy your existing images folder from your current repo into `public/images/`:
   ```
   public/images/
   ├── hero/
   │   ├── cap.png
   │   ├── cat.png
   │   ├── character.png
   │   ├── cyber-head.png
   │   ├── drink.png
   │   └── katana.png
   ├── clients/
   │   ├── avalanche.png
   │   ├── binamon.png
   │   ├── ezo.png
   │   ├── hkac.png
   │   ├── kaddex.png
   │   ├── kadena.png
   │   ├── narutosushi.png
   │   ├── pinksale.png
   │   ├── pokemoon.png
   │   ├── rugdoc.png
   │   └── vsystems.png
   ├── nds-logo.jpg
   ├── tailsbnb.jpg
   ├── ezo.jpg
   ├── moon-wanderlust.jpg
   ├── avalanche.jpg
   └── og-image.jpg
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview production build:**
   ```bash
   npm run preview
   ```

## 📝 Adding Blog Posts

Create new markdown files in `src/content/blog/`:

```markdown
---
title: "Your Post Title"
excerpt: "A brief description for the blog listing page."
date: "2025-01-15"
category: "Design"
image: "/images/blog/your-image.jpg"  # optional
author: "Ninja Design Studio"
---

Your markdown content here...
```

## 🎨 Customization

### Colors (in `src/styles/global.css`)
```css
:root {
    --neon-pink: #ff006e;
    --neon-cyan: #00f5ff;
    --neon-purple: #bf00ff;
    --dark: #0a0a0f;
    --darker: #050508;
}
```

### Contact Form
The contact form uses [Web3Forms](https://web3forms.com/). Update the access key in `src/components/ContactForm.astro` if needed.

## 🚀 Deployment

### Netlify / Vercel
Just connect your GitHub repo - both platforms auto-detect Astro projects.

### Manual
```bash
npm run build
# Upload the `dist/` folder to your hosting
```

## 📄 Pages

| Page | URL | Description |
|------|-----|-------------|
| Home | `/` | Main landing page with hero, services, work, testimonials |
| Services | `/services` | Full services listing with pricing tiers |
| Work | `/work` | Portfolio/case studies |
| About | `/about` | Studio story and values |
| Contact | `/contact` | Contact form and info |
| Blog | `/blog` | Blog listing |
| Blog Post | `/blog/[slug]` | Individual blog posts |

## 🔧 Tech Stack

- **Astro** - Static site generator
- **CSS** - Custom CSS with CSS variables
- **Web3Forms** - Form handling
- **Fonts** - Outfit + Space Mono (Google Fonts)

## 📱 Features

- ✅ Fully responsive design
- ✅ Page loading animation
- ✅ Scroll reveal animations
- ✅ Custom cursor (desktop only)
- ✅ Mobile menu
- ✅ Project modals
- ✅ FAQ accordions
- ✅ Contact form with validation
- ✅ Blog with Markdown support
- ✅ SEO optimized with Open Graph tags
- ✅ Scroll progress indicator
- ✅ Back to top button

---

Built with ❤️ by Ninja Design Studio
