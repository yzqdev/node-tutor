import Fastify, { FastifyInstance } from "fastify";
import * as path from "path";
import serveIndex from "serve-index";
import fp from "fastify-plugin";
import fastifyStatic from "@fastify/static";
const fastify: FastifyInstance = Fastify({
  logger: { level: "trace" },
});
let port = 3500;

function index( ) {
  serveIndex("/public", { icons: true });

}

fastify.register(fastifyStatic, {
  root: path.join(__dirname, "public"),
  prefix: "/public/",
  prefixAvoidTrailingSlash: true,
});

fastify.get("/", async (request, reply) => {
  return { hello: "world" };
});

/**
 * Run the server!
 */
const start = async () => {
  try {
    await fastify.listen({ port: port });
    console.log(`http://localhost:${port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
