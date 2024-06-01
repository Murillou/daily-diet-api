import { checkSessionIdExists } from '../middlewares/check-session-id-exists';
import { z } from 'zod';
import { FastifyInstance } from 'fastify';
import { knex } from '../database';

export async function dietsRoutes(app: FastifyInstance) {
  app.get(
    '/',
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
    '/',
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
}
