import { Knex } from 'knex';

declare module 'knex/types/tables' {
  export interface Tables {
    users: {
      id: string;
      name: string;
      created_at: string;
      session_id?: string;
    };

    diets: {
      id: string;
      name: string;
      description: string;
      time_diet: string;
      diet_or_no: string;
      session_id?: string;
    };
  }
}
