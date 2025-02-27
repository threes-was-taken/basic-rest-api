import { FastifyReply, FastifyRequest } from "fastify";
import { getCats } from "../services/cat.service";

export async function getCatsHandler(req: FastifyRequest, reply: FastifyReply) {
  try {
    const cats = await getCats();

    if (!cats.length) {
      return reply
        .status(404)
        .send({ success: false, message: "No cats found" });
    }

    return reply.send({ success: true, data: cats });
  } catch (error) {
    return reply
      .status(500)
      .send({ success: false, message: (error as Error).message });
  }
}
