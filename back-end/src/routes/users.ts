import { FastifyInstance } from 'fastify';
import { knex } from '../database';
import { z } from 'zod';
import crypto from 'node:crypto';

export async function usersRoutes(app: FastifyInstance) {
  app.get('/', async request => {
    const users = await knex('users').select('*');

    return { users };
  });

  app.post('/', async (request, reply) => {
    const createUsersBodySchema = z.object({
      name: z.string(),
    });

    const { name } = createUsersBodySchema.parse(request.body);

    await knex('users').insert({
      id: crypto.randomUUID(),
      name,
    });

    return reply.status(201).send();
  });
}
