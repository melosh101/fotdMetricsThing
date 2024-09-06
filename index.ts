import Fastify from "fastify"
import { z } from "zod";

const fastify = Fastify({
    logger: true
});

const insertSchema = z.object({
    server: z.string(),
    count: z.number(),
    totalCount: z.number(),
    shardId: z.number(),
})

fastify.post("/server_count", (req, res) => {
    const data = insertSchema.safeParse(req.body);
})



fastify.listen({port: 3000}, (err, address) => {
    if(err) {
        fastify.log.error(err)
        process.exit(1);
    }
    console.log(`server is running at ${address}`)
})