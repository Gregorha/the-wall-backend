import Knex from 'knex';

export const up = (knex: Knex): Promise<void> =>
  knex.schema.createTable('users', (table: Knex.TableBuilder) => {
    table.increments('id');
    table.text('name').notNullable();
    table.text('email').notNullable().unique();
    table.text('password').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });

export const down = (knex: Knex): Promise<void> =>
  knex.schema.dropTable('users');
