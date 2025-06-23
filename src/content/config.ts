import { defineCollection, z } from "astro:content";

const projects = defineCollection({
    schema: z.object({
        name: z.string(),
        description: z.string(),
        cover: z.string().url(),
        localization: z.string(),
        course: z.string(),
        team: z.string(),
        scale: z.string(),
    }),
});

export const collections = { projects };