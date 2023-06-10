import { z, defineCollection } from 'astro:content';

const eventCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    image: z.string().optional()
  })
});

export const collections = {
  'events': eventCollection
};