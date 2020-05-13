const { Pool } = require('pg')

const pool = new Pool({
  user: 'seal125',
  host: '/var/run/postgresql',
  database: 'smalltalk',
  port: 5432
})

module.exports = {
  query (text, params) {
    return pool.query(text, params)
  }
}
