import { z } from 'zod';

const bookSchema = z.object({
  title: z.string().min(1, { message: 'Title is required' }),
  authorId: z.string().uuid({ message: 'Invalid UUID format' }),
  publicationYear: z
    .number()
    .int()
    .min(1500, { message: 'Publication year must be after 1500' })
    .max(new Date().getFullYear(), { message: 'Publication year cannot be in the future' }),
  genre: z.string().optional(),
  summary: z.string().optional(),
});

const bookWithIdSchema = bookSchema.extend({
  id: z.string().uuid({ message: 'Invalid UUID format' }),
});

type Book = z.infer<typeof bookWithIdSchema>;
type BookCreation = z.infer<typeof bookSchema>;
type BookUpdate = Partial<BookCreation>;
type BookResponse = z.infer<typeof bookWithIdSchema>;

export { bookSchema, bookWithIdSchema, type Book, type BookCreation, type BookResponse, type BookUpdate };
