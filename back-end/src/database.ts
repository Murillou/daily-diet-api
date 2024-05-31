import { knex as knexSetup, Knex } from 'knex';
import { env } from './env';

export const config: Knex.Config = {
  client: 'sqlite',
  connection: {
    filename: env.DATABASE_URL,
  },
  migrations: { extension: 'ts', directory: './database/migrations' },
  useNullAsDefault: true,
};

export const knex = knexSetup(config);
