import { zValidator } from '@hono/zod-validator';
import { Hono } from 'hono';
import { describeRoute } from 'hono-openapi';
import { resolver } from 'hono-openapi/zod';
import type { RequestIdVariables } from 'hono/request-id';
import { bookWithIdSchema } from '../models/book.model.ts';
import { errorResponseSchema } from '../schemas/error.schema.ts';
import { idValidationSchema } from '../schemas/validation.schema.ts';
import { BookService } from '../services/book.service.ts';

const bookRouter = new Hono<{ Variables: RequestIdVariables }>();
const bookService = new BookService();

bookRouter.get(
  '/',
  describeRoute({
    tags: ['BOOKS'],
    description: 'Returns a list of all books',
    summary: 'Get all books',
    responses: {
      200: {
        description: 'List of books',
        content: {
          'application/json': {
            schema: resolver(bookWithIdSchema),
          },
        },
      },
    },
  }),
  async (c) => {
    const books = await bookService.getAllBooks();

    return c.json(books);
  }
);

bookRouter.get(
  '/:id',
  describeRoute({
    tags: ['BOOKS'],
    description: "Returns a book by it's ID",
    summary: 'Get a book by ID',
    parameters: [
      {
        name: 'id',
        in: 'path',
      },
    ],
    responses: {
      200: {
        description: 'Book found',
        content: {
          'application/json': {
            schema: resolver(bookWithIdSchema),
          },
        },
      },
      400: {
        description: 'Invalid request',
        content: {
          'application/json': {
            schema: resolver(errorResponseSchema),
          },
        },
      },
      404: {
        description: 'Book not found',
        content: {
          'application/json': {
            schema: resolver(errorResponseSchema),
          },
        },
      },
    },
  }),
  zValidator('param', idValidationSchema),
  async (c) => {
    const id = c.req.valid('param');

    if (!id) {
      return c.json({ error: 'ID parameter is required' }, 400);
    }

    const book = await bookService.getBookById(id);

    if (!book) {
      return c.json({ error: 'Book not found' }, 404);
    }

    return c.json(book);
  }
);

bookRouter.post('/', async (c) => {
  const book = await c.req.json();

  if (!book) {
    return c.json({ error: 'Book data is required' }, 400);
  }

  const newBook = await bookService.createBook(book);

  return c.json(newBook);
});

bookRouter.put('/:id', async (c) => {
  const id = c.req.param('id');
  const updatedBook = await c.req.json();

  if (!id) {
    return c.json({ error: 'ID parameter is required' }, 400);
  }

  if (!updatedBook) {
    return c.json({ error: 'Updated book data is required' }, 400);
  }

  const book = await bookService.updateBook(id, updatedBook);

  if (!book) {
    return c.json({ error: 'Book not found' }, 404);
  }

  return c.json(book);
});

bookRouter.delete('/:id', async (c) => {
  const id = c.req.param('id');
  if (!id) {
    return c.json({ error: 'ID parameter is required' }, 400);
  }

  const bookDeleted = await bookService.deleteBook(id);

  return c.json({ success: bookDeleted });
});

bookRouter.get('/search', async (c) => {
  const query = c.req.query('query');

  if (!query) {
    return c.json({ error: 'Query parameter is required' }, 400);
  }

  const searchResults = await bookService.searchBooks(query);

  return c.json(searchResults);
});

export default bookRouter;
