import { UserModel } from '@/data/models';
import * as Knex from 'knex';

export async function seed(knex: Knex): Promise<void> {
  await knex('users').del();

  await knex<UserModel>('users').insert([
    { email: 'jd@tsl.com', name: 'John Doe', password: '123456' },
    { email: 'jd2@tsl.com', name: 'Jane Doe', password: '123456' },
  ]);
}
