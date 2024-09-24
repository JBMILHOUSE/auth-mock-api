import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import users from "../../users.json"

interface CheckCredentialsRequest {
 Querystring: {
   username: string;
   password: string;
 }
}

export async function authenticateUser(app: FastifyInstance) {
  app.get('/login', async (request: FastifyRequest<CheckCredentialsRequest>, reply: FastifyReply) => {
    const { username, password } = request.query;

    if (!username || !password) {
      return reply.status(400).send({ message: 'Usuário e senha são obrigatórios' });
    }

    // verifica se o username e senha correspondem
    const user = users.find(user => user.username === username);

    if(!user) {
      return reply.status(401).send({ message: 'Usuário não existe' });
    } 
    if(user.password !== password) {
      return reply.status(401).send({ message: 'Senha incorreta' });
    }

    return reply.status(200).send({ message: 'Credenciais válidas'})
  });
}