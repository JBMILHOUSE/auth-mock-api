import fastify from "fastify"
import { authenticateUser } from "./routes/login"

const app = fastify()

app.register(authenticateUser)

app.listen({ port: 3333 }).then(() => console.log('Server running!'))