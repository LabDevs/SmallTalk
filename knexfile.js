require('dotenv').config()
const path = require('path')

module.exports = {
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
