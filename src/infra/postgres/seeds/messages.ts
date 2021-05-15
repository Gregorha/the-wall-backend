import * as Knex from 'knex';

export async function seed(knex: Knex): Promise<void> {
  await knex('messages').del();

  await knex('messages').insert([
    { title: 'Test title', body: 'Body content text', user_id: 1 },
    { title: 'Test title', body: 'Body content text', user_id: 2 },
    { title: 'Test title', body: 'Body content text', user_id: 2 },
  ]);
}
