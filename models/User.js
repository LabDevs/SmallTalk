const db = require('../db')

class User {
  static create (username, password) {
    const queryText = `INSERT INTO users (username,password)
    VALUES($1,$2);`
    return db.query(queryText, [username, password])
  }

  static getByUserName (username) {
    const queryText = 'SELECT * FROM users where username = $1'
    return db.query(queryText, [username]).then((data) => data.rows[0])
  }

  static getById (userId) {
    const queryText = 'SELECT * FROM users where user_id = $1'
    return db.query(queryText, [userId]).then((data) => data.rows[0])
  }
}

module.exports = User
