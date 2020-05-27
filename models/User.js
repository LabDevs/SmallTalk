const db = require('../db')

class User {
  static create (username, email, password) {
    const queryText =
      'INSERT INTO users (username, email, password) VALUES ($1, $2, $3);'
    return db.query(queryText, [username, email, password])
  }

  static getByUserName (username) {
    const queryText = 'SELECT * FROM users WHERE username = $1;'
    return db.query(queryText, [username]).then(data => data.rows[0])
  }

  static getById (userId) {
<<<<<<< HEAD
    const queryText = 'SELECT * FROM users WHERE id = $1;'
=======
    const queryText = 'SELECT * FROM users where id = $1'
>>>>>>> abab09ec301d116d033ad06a9541122c55cd88ad
    return db.query(queryText, [userId]).then(data => data.rows)
  }
}

module.exports = User
