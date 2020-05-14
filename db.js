const { Pool } = require('pg')

const pool = new Pool({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  port: process.env.DBPORT
})

module.exports = {
  query (text, params) {
    return pool.query(text, params)
  }
}
