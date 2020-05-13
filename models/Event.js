const db = require('../db')

class Event {
  static getAllByCategory (categoryId) {
    const queryText = 'SELECT * FROM events WHERE category_id=$1;'
    return db.query(queryText, [categoryId]).then(response => response.rows)
  }

  static getAllByUser (userId) {
    const queryText = 'SELECT * FROM events WHERE user_id=$1;'
    return db.query(queryText, [userId]).then(response => response.rows)
  }

  static add (userId, categoryId, title, description) {
    const queryText =
      'INSERT INTO events (user_id, category_id, title, description) VALUES ($1, $2, $3, $4);'
    return db.query(queryText, [userId, categoryId, title, description])
  }

  static update (eventId, userId, title, description) {
    const queryText =
      'UPDATE events SET title=$3, description=$4 WHERE event_id=$1 AND user_id=$2;'
    return db.query(queryText, [eventId, userId, title, description])
  }

  static show (eventId) {
    const queryText = 'SELECT * FROM events WHERE event_id=$1;'
    return db.query(queryText, [eventId]).then(response => response.rows[0])
  }

  static remove (eventId, userId) {
    const queryText = 'DELETE FROM events WHERE event_id=$1 AND user_id=$2;'
    return db.query(queryText, [eventId, userId])
  }
}

module.exports = Event
