require('dotenv').config()
const path = require('path')

module.exports = {
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, 'migrations')
    },
    seeds: {
      directory: path.join(__dirname, 'seeds')
    },
    useNullAsDefault: true
  },
  development: {
    client: 'pg',
    connection: {
      user: process.env.USER,
      host: process.env.HOST,
      database: process.env.DATABASE,
      port: process.env.DB_PORT
    }
  },
  migrations: {
    directory: path.join(__dirname, 'migrations')
  },
  seeds: {
    directory: path.join(__dirname, 'seeds')
  }
}
