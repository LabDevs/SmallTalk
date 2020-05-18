const path = require('path')
require('dotenv').config()

module.exports = {
  development: {
    client: 'pg',
    connection: {
      user: process.env.USER,
      host: process.env.HOST,
      database: process.env.DATABASE,
      port: process.env.DB_PORT
    }
  }
}
