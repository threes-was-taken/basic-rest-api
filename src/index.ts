import Fastify from "fastify";
import { dogRoutes, catRoutes } from "./routes";

const DEFAULT_PREFIX = "/api/v1";

const fastify = Fastify({ logger: true });

fastify.register(dogRoutes, { prefix: `${DEFAULT_PREFIX}/dogs` });
fastify.register(catRoutes, { prefix: `${DEFAULT_PREFIX}/cats` });

fastify.get(`${DEFAULT_PREFIX}/ping`, async (request, reply) => {
  return { ping: "pong" };
});

async function start() {
  try {
    await fastify.listen({ port: 3000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}

start();
