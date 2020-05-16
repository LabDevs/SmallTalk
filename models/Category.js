const db = require('../db')

class Category {
  static getAll () {
    const queryText = 'SELECT * FROM categories;'
    return db.query(queryText).then(response => response.rows)
  }
}

module.exports = Category
