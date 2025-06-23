import { defineCollection, z } from "astro:content";

const projects = defineCollection({
    schema: z.object({
        name: z.string(),
        description: z.string().optional(),
        cover: z.string(),
        localization: z.string(),
        course: z.string().optional(),
        team: z.string().optional(),
        scale: z.string().optional(),
    }),
});

export const collections = { projects };