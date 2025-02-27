import { FastifyReply, FastifyRequest } from "fastify";
import { getDogs } from "../services/dog.service";

export async function getDogsHandler(req: FastifyRequest, reply: FastifyReply) {
  try {
    const dogs = await getDogs();

    if (!dogs.length) {
      return reply
        .status(404)
        .send({ success: false, message: "No dogs found" });
    }

    return reply.send({ success: true, data: dogs });
  } catch (error) {
    return reply
      .status(500)
      .send({ success: false, message: (error as Error).message });
  }
}
