const { Pool } = require('pg')
const connection = {
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
}

const connectionLocal = {
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  port: process.env.DB_PORT
}

const pool = new Pool(
  process.env.NODE_ENV === 'production' ? connection : connectionLocal
)

module.exports = {
  query (text, params) {
    return pool.query(text, params)
  }
}
