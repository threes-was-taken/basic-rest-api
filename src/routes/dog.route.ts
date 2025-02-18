import { FastifyInstance } from "fastify";
import { getDogsHandler } from "../controllers/dog.controller";

export async function dogRoutes(fastify: FastifyInstance) {
  fastify.get("/", getDogsHandler);
}
