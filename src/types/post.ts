import { z } from "astro:content";

const postSchema = z.object({
  title: z.string(),
  publishedAt: z.date(),
  description: z.string(),
  isPublished: z.boolean(),
  isDraft: z.boolean().default(false),
  featured: z.boolean().default(false),
});
type Post = z.infer<typeof postSchema>;

export { postSchema };
export type { Post };
