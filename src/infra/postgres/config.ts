import knex from 'knex';
import config from './knexfile';

const nodeEnv = process.env.NODE_ENV as 'development' | 'production' | 'test';
const knexConfig = config[nodeEnv || 'development'];

export const pg = knex(knexConfig);
