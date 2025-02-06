import { FastifyInstance, FastifyPluginOptions } from "fastify";
import { getUsers, createUser } from "../controllers/user.controller";

const userRoutes = async (
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) => {
  fastify.get(
    "/",
    {
      schema: {
        tags: ["Users"],
        summary: "Get all users",
        description: "Returns a list of all users",
        response: {
          200: {
            description: "Successful response",
            type: "array",
            items: {
              type: "object",
              properties: {
                id: { type: "string" },
                name: { type: "string" },
                email: { type: "string" },
              },
            },
          },
        },
      },
    },
    getUsers
  );
  fastify.post(
    "/",
    {
      schema: {
        summary: "Create a new user",
        tags: ["Users"],
        description: "Creates a new user",
        body: {
          type: "object",
          properties: {
            name: { type: "string" },
            email: { type: "string" },
          },
        },
        response: {
          201: {
            description: "Successful response",
            type: "object",
            properties: {
              id: { type: "string" },
              name: { type: "string" },
              email: { type: "string" },
            },
          },
        },
      },
    },
    createUser
  );
};

export default userRoutes;
