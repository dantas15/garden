import { defineCollection, z } from 'astro:content';

const postSchema = z.object({
  title: z.string(),
  publishedAt: z.date(),
  description: z.string(),
  isPublished: z.boolean(),
  isDraft: z.boolean().default(false),
});

const postsCollection = defineCollection({
  type: 'content',
  schema: postSchema,
});

export const collections = { posts: postsCollection };
export type Post = z.infer<typeof postSchema>;
