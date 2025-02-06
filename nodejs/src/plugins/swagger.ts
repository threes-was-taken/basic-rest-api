import { FastifyPluginAsync } from "fastify";
import Swagger from "@fastify/swagger";
import SwaggerUI from "@fastify/swagger-ui";

const swaggerPlugin: FastifyPluginAsync = async (fastify) => {
  fastify.register(Swagger, {
    openapi: {
      openapi: "3.0.0",
      info: {
        title: "NodeJS REST API best practices project",
        description: "Maintainable, scalable, and secure REST API with NodeJS",
        version: "0.1.0",
      },
      servers: [
        {
          url: "http://localhost:3000",
          description: "Development server",
        },
      ],
      tags: [{ name: "Users", description: "User related end-points" }],
    },
  });

  fastify.register(SwaggerUI, {
    routePrefix: "/docs",
    uiConfig: {
      docExpansion: "full",
      deepLinking: false,
    },
    uiHooks: {
      onRequest: function (request, reply, next) {
        next();
      },
      preHandler: function (request, reply, next) {
        next();
      },
    },
    staticCSP: true,
    transformStaticCSP: (header) => header,
    transformSpecification: (swaggerObject, request, reply) => {
      return swaggerObject;
    },
    transformSpecificationClone: true,
  });
};

export default swaggerPlugin;
