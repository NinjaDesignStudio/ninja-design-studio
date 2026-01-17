import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ninjadesignstudio.com',
  output: 'static',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/thank-you'),
      changefreq: 'weekly',
      priority: 0.7,
      customPages: [
        'https://ninjadesignstudio.com/',
        'https://ninjadesignstudio.com/services',
        'https://ninjadesignstudio.com/work',
        'https://ninjadesignstudio.com/about',
        'https://ninjadesignstudio.com/contact',
        'https://ninjadesignstudio.com/blog',
        'https://ninjadesignstudio.com/faq',
      ],
    }),
  ],
  build: {
    assets: '_assets'
  },
  vite: {
    build: {
      cssMinify: true
    }
  }
});
