import { defineCollection, z } from 'astro:content';
import { postSchema } from '@/types/post';

const postsCollection = defineCollection({
  type: 'content',
  schema: postSchema,
});

export const collections = { posts: postsCollection };
