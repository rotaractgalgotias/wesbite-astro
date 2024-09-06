import { defineCollection, z } from "astro:content";

const eventCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    image: z.string().optional(),
    images: z.string().optional(),
  }),
});

const teamCollection = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    photo: z.string(),
    position: z.string(),
    rid: z.string().optional(),
    dob: z.date().optional(),
    instagram: z.string().optional(),
    twitter: z.string().optional(),
    linkedin: z.string().optional(),
    whatsapp: z.string().optional()
  }),
});

const domainCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

const projectCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    image: z.string().optional(),
    images: z.array(z.string()).optional(),
  }),
});


export const collections = {
  events: eventCollection,
  team: teamCollection,
  domain: domainCollection,
  projects: projectCollection,
};
