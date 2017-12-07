module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './database/posts.db'
    },
    migrations: {
      tableName: 'migrations'
    },
    useNullAsDefault: true
  },
  production: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      database: 'posts',
      user: 'austin',
      password: 'asdasdasd'
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
