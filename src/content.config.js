import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const schema = z.object({
  title: z.string(),
  description: z.string(),
  order: z.number().optional(),
  icon: z.string().optional(),
  toc: z.boolean().optional(),
});

export const collections = {
  brand: defineCollection({ loader: glob({ base: "./src/brand", pattern: "*.mdx" }), schema }),
};
