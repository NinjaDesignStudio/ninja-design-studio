import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        excerpt: z.string(),
        date: z.string(),
        category: z.string(),
        image: z.string().optional(),
        author: z.string().default('Ninja Design Studio'),
        tags: z.array(z.string()).optional(),
    }),
});

export const collections = {
    'blog': blogCollection,
};
