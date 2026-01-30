import { z } from 'zod'

export const createPostSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters'),
  content: z.string().optional(),
  published: z.boolean().default(false),
  authorId: z.number().int().positive(),
})

export const updatePostSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters').optional(),
  content: z.string().optional(),
  published: z.boolean().optional(),
})

export type CreatePostInput = z.infer<typeof createPostSchema>
export type UpdatePostInput = z.infer<typeof updatePostSchema>