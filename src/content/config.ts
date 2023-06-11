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

const teamCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    photo: z.string()
  })
});

export const collections = {
  'events': eventCollection,
  'team' : teamCollection
};