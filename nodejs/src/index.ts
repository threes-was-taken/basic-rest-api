import Fastify from "fastify";
import { join } from "node:path";
import fastifyAutoLoad from "@fastify/autoload";
import { TypeBoxTypeProvider } from "@fastify/type-provider-typebox";

const app = Fastify({ logger: true }).withTypeProvider<TypeBoxTypeProvider>();

// register all plugins in the plugins folder
app.register(fastifyAutoLoad, {
  dir: join(__dirname, "plugins"),
  ignorePattern: /.*(test|spec).ts/,
});

// register all routes in the routes folder
app.register(fastifyAutoLoad, {
  dir: join(__dirname, "routes"),
  ignorePattern: /.*(test|spec).ts/,
});

const start = async () => {
  try {
    await app.ready();
    app.swagger;
    await app.listen({ port: 3000 });
    console.log("🚀 Server running at http://localhost:3000");
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
