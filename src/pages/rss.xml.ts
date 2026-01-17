import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('blog');

  // Sort by date descending
  const sortedPosts = posts.sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
  );

  return rss({
    title: 'Ninja Design Studio Blog',
    description: 'Design insights, case studies, and tips for startups and growth-stage companies.',
    site: context.site || 'https://ninjadesignstudio.com',
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      pubDate: new Date(post.data.date),
      description: post.data.excerpt,
      link: `/blog/${post.slug}/`,
      categories: post.data.tags || [],
      author: post.data.author || 'Ninja Design Studio',
    })),
    customData: `<language>en-us</language>`,
  });
}
