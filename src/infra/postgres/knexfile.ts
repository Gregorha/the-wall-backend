const config = {
  development: {
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
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true',
    migrations: {
      tableName: 'the_wall_migrations',
      directory: `${__dirname}/migrations`,
    },
  },
};

export default config;
