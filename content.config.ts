import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection } from "astro:content";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    tagline: z.string().optional(),
    description: z.string().optional(),
    author: z.string().optional(),
    date: z.coerce.date().optional(),
    published: z.date().optional(),
    tags: z.array(z.string()).default([]),
    coverImage: z.string().optional(),
    image: z.string().optional(),
    featured: z.boolean().optional(),
    latest: z.boolean().optional(),
  }),
});

const formations = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/formations" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    description: z.string(),
    duration: z.string(),
    format: z.string(),
    audience: z.string(),
    price: z.string().default("Sur devis"),
    priceMeta: z.string().optional(),
    primaryCtaLabel: z.string().default("Demander un devis"),
    primaryCtaHref: z.string().default("/contact"),
    secondaryCtaLabel: z.string().default("Planifier un échange"),
    secondaryCtaHref: z.string().default("/contact"),
    order: z.number().default(0),
    featured: z.boolean().default(false),
  }),
});

const informationsPratiques = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/informations-pratiques",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string().default("Information pratique"),
    order: z.number().default(0),
    updatedAt: z.string().optional(),
  }),
});

export const collections = { blog, formations, informationsPratiques };
