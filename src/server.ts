import fastify from "fastify"
// import getUser from "./routes/get-user"

const app = fastify()

// app.register(getUser)

app.listen({ port: 3333 }).then(() => console.log('Server running!'))