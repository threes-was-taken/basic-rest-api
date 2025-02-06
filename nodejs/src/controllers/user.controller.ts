import { FastifyRequest, FastifyReply } from "fastify";
import { User } from "../schemas/user.schema";
import userService from "../services/user.service";

export const getUsers = async (req: FastifyRequest, reply: FastifyReply) => {
  const users = await userService.getAllUsers();
  return reply.send(users);
};

export const createUser = async (
  req: FastifyRequest<{ Body: User }>,
  reply: FastifyReply
) => {
  const newUser = await userService.createUser(req.body);
  return reply.status(201).send(newUser);
};
