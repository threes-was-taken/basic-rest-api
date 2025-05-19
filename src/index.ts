import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { cors } from 'hono/cors';
import authorRouter from './routers/author.router.ts';
import bookRouter from './routers/book.router.ts';
import { Logger } from './util/logger.util.ts';

const app = new Hono();
const logger = Logger.getInstance('api:root');

app.use(cors());

app.get('health', (c) => {
  logger.info('Health check');
  c.status(200);
  return c.json({ status: 'ok' });
});

app.route('/books', bookRouter);
app.route('/authors', authorRouter);

app.all('*', (c) => {
  logger.info('Request received', {
    method: c.req.method,
    path: c.req.path,
  });
  c.status(404);
  return c.json({ error: 'Not Found' });
});

serve(
  {
    fetch: app.fetch,
    port: 3000,
    hostname: 'localhost',
  },
  (info) => {
    logger.info(`Server is running at ${info.port}`);
  }
);
