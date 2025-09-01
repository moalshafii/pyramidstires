import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const pages = defineCollection({
	loader: glob({ base: 'src/content/pages', pattern: '**/*.{md,mdx}' }),
	schema: () =>
		z.object({
			slug:z.string(),
			title:z.string(),
			description:z.string(),	
			image:z.string().optional(),
			keywords: z.array(z.string()).optional(),
			language:z.string().default('en').optional(),
		}),
});

const products = defineCollection({
	loader: glob({ base: 'src/content/products', pattern: '**/*.{md,mdx}' }),
	schema: () =>
		z.object({
			slug:z.string(),
			title:z.string(),
			description:z.string(),	
			category:z.string(),
			image:z.string().optional(),
      		tags: z.array(z.string()).optional(),
			keywords: z.array(z.string()).optional(),
			language:z.string().default('en').optional(),
		}),
});



export const collections = { pages, products };
