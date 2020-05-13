const { Pool } = require('pg')

const pool = new Pool({
  user: '',
  host: '',
  database: 'smalltalk',
  port: 5432
})

module.exports = {
  query (text, params) {
    return pool.query(text, params)
  }
}
