import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    tags: z.array(z.string()).default([]),
    readingTime: z.string().optional(),
    coverAlt: z.string().optional()
  })
});

export const collections = { blog };
