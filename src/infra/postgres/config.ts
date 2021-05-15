import knex from 'knex';

export const development = {
  client: 'pg',
  connection: {
    database: 'tsl_the_wall',
    user: 'tsl_user',
    password: '0000',
  },
  migrations: {
    tableName: 'the_wall_migrations',
    directory: `${__dirname}/migrations`,
  },
  seeds: {
    directory: `${__dirname}/seeds`,
  },
};

export const pg = knex(development);
