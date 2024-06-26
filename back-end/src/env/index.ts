import { config } from 'dotenv';
import z from 'zod';

if (process.env.NODE_ENV === 'teste') {
  config({ path: '.env.teste' });
} else {
  config();
}

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test']),
  DATABASE_URL: z.string(),
  PORT: z.number().default(3333),
});

const _env = envSchema.safeParse(process.env);

if (_env.success === false) {
  console.error('^ invalid enviroment variables', _env.error.format());
  throw new Error('^ invalid enviroment variables');
}
export const env = _env.data;
