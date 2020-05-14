const db = require('../db')

class RSVP {
  static add (userId, eventId) {
    const queryText = 'INSERT INTO rsvp (user_id, event_id) VALUES ($1, $2);'
    return db.query(queryText, [userId, eventId])
  }

  static getByUser (userId) {
    const queryText = 'SELECT * FROM rsvp WHERE user_id=$1;'
    return db.query(queryText, [userId]).then(response => response.rows)
  }
}

module.exports = RSVP
