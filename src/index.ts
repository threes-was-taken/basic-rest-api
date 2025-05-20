import { serve } from '@hono/node-server';
import { Scalar } from '@scalar/hono-api-reference';
import { Hono } from 'hono';
import { openAPISpecs } from 'hono-openapi';
import { cors } from 'hono/cors';
import { prettyJSON } from 'hono/pretty-json';
import type { RequestIdVariables } from 'hono/request-id';
import { requestId } from 'hono/request-id';
import authorRouter from './routers/author.router.ts';
import bookRouter from './routers/book.router.ts';
import { Logger } from './util/logger.util.ts';

const app = new Hono<{ Variables: RequestIdVariables }>();
const logger = Logger.getInstance('api:root');

app.use(cors());
app.use(
  prettyJSON({
    space: 2,
  })
);
app.use(requestId());

app.get('health', (c) => {
  logger.info('Health check');
  c.status(200);
  return c.json({ status: 'ok' });
});

app.route('/books', bookRouter);
app.route('/authors', authorRouter);

app.get(
  'openapi',
  openAPISpecs(app, {
    documentation: {
      info: {
        title: 'Bookstore API - OpenAPI 3.1.0',
        description:
          'A simple API for managing books and authors. This API allows you to create, read, update, and delete books and authors.',
        version: '1.0.0',
      },
      servers: [
        {
          url: 'http://localhost:3000',
          description: 'Local server',
        },
      ],
    },
  })
);

app.get('/docs', Scalar({ url: '/openapi', version: '3.1.0' }));

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
