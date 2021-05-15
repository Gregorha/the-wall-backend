import Knex from 'knex';

export const up = (knex: Knex): Promise<void> =>
  knex.schema.createTable('messages', (table: Knex.TableBuilder) => {
    table.increments('id');
    table.text('title').notNullable();
    table.text('body').notNullable();
    table
      .integer('user_id')
      .references('users.id')
      .notNullable()
      .onDelete('CASCADE');
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });

export const down = (knex: Knex): Promise<void> =>
  knex.schema.dropTable('users');
