module.exports = {
  development: {
      client: 'pg',
      connection: {
        database: "trainerApp",
        host: "localhost",
        user: 'administrator',
        password: 'RelsonGracie77'

      },
      migrations: {
          directory: __dirname + '/db/migrations',
        },
      seeds: {
          directory: __dirname + '/db/seeds',
        },
    },
  production: {
      client: 'pg',
      connection: process.env.DATABASE_URL,
      migrations: {
          directory: __dirname + '/db/migrations',
        },
      seeds: {
          directory: __dirname + '/db/seeds/production',
        },
    },
};
