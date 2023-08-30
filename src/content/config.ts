import { defineCollection, z } from 'astro:content';

const music = defineCollection({
	// Type-check frontmatter using a schema
	type: 'content',
	schema: z.object({
		title: z.string(),
		category: z.string(),
		description: z.string().optional(),
		// Transform string to Date object
		pubDate: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
		updatedDate: z
			.string()
			.optional()
			.transform((str) => (str ? new Date(str) : undefined)),
		previewImage: z.string().optional(),
	}),
});

export const collections = { music };
