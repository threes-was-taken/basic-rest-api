import { FastifyInstance } from "fastify";
import { getCatsHandler } from "../controllers/cat.controller";

export async function catRoutes(fastify: FastifyInstance) {
  fastify.get("/", getCatsHandler);
}
