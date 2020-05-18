const { Pool } = require('pg')
require('dotenv').config()

const pool = new Pool({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  port: process.env.DB_PORT
})

module.exports = {
  query: (text, params) => pool.query(text, params),
  pool
}
