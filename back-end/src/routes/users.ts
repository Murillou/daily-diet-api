import { FastifyInstance } from 'fastify';
import { knex } from '../database';
import { z } from 'zod';
import crypto from 'node:crypto';
import { checkSessionIdExists } from '../middlewares/check-session-id-exists';

export async function usersRoutes(app: FastifyInstance) {
  app.get(
    '/',
    { preHandler: [checkSessionIdExists] },
    async (request, reply) => {
      const sessionId = request.cookies.sessionId;

      const users = await knex('users')
        .where('session_id', sessionId)
        .select('*');

      return reply.status(200).send(users);
    }
  );

  app.get(
    '/:diet',
    { preHandler: [checkSessionIdExists] },
    async (request, reply) => {
      const sessionId = request.cookies.sessionId;

      const diets = await knex('diets')
        .where('session_id', sessionId)
        .select('*');

      return { diets };
    }
  );

  app.post(
    '/:diet',
    { preHandler: [checkSessionIdExists] },
    async (request, reply) => {
      const createDietBodySchema = z.object({
        name: z.string(),
        description: z.string(),
        time_diet: z.string(),
        diet_or_no: z.string(),
      });

      const { name, description, time_diet, diet_or_no } =
        createDietBodySchema.parse(request.body);

      const sessionId = request.cookies.sessionId;

      await knex('diets').insert({
        id: crypto.randomUUID(),
        name,
        description,
        time_diet,
        diet_or_no,
        session_id: sessionId,
      });

      return reply.status(201).send();
    }
  );

  app.post('/', async (request, reply) => {
    const createUsersBodySchema = z.object({
      name: z.string(),
    });

    const { name } = createUsersBodySchema.parse(request.body);

    let sessionId = request.cookies.sessionId;

    if (!sessionId) {
      sessionId = crypto.randomUUID();

      reply.cookie('sessionId', sessionId, {
        path: '/',
        maxAge: 60 * 60 * 24 * 7, // 7 days
      });
    }

    await knex('users').insert({
      id: crypto.randomUUID(),
      name,
      session_id: sessionId,
    });

    return reply.status(201).send();
  });
}
