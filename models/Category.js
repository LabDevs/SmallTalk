const db = require('../db')

class Category {
  static getAll () {
    const queryText = 'SELECT * FROM categories;'
    return db.query(queryText).then(response => response.rows)
  }
  static getById (categoryId) {
    const queryText = 'SELECT name FROM categories WHERE id=$1;'
    return db.query(queryText, [categoryId]).then(response => response.rows[0])
  }
}

module.exports = Category
