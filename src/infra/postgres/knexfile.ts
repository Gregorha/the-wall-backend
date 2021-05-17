import dotenv from 'dotenv';

dotenv.config({
  path:
    process.env.NODE_ENV === 'test' || process.env.NODE_ENV === 'development'
      ? __dirname + '/../../../.env.test'
      : __dirname + '/../../../.env',
});

const config = {
  development: {
    client: 'pg',
    connection: {
      database: process.env.PG_DATABASE,
      user: process.env.PG_USER,
      password: process.env.PG_PASS,
    },
    migrations: {
      tableName: 'the_wall_migrations',
      directory: `${__dirname}/migrations`,
    },
    seeds: {
      directory: `${__dirname}/seeds`,
    },
  },
  test: {
    client: 'pg',
    connection: {
      database: process.env.PG_DATABASE,
      user: process.env.PG_USER,
      password: process.env.PG_PASS,
    },
    migrations: {
      tableName: 'the_wall_migrations',
      directory: `${__dirname}/migrations`,
    },
    seeds: {
      directory: `${__dirname}/seeds`,
    },
  },
  production: {
    client: 'pg',
    connection: {
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    },
    migrations: {
      tableName: 'the_wall_migrations',
      directory: `${__dirname}/migrations`,
    },
  },
};

export default config;
