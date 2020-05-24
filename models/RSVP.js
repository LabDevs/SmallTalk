const db = require('../db')

class RSVP {
  static add (userId, eventId) {
    const queryText = 'INSERT INTO rsvp (user_id, event_id) VALUES ($1, $2);'
    return db.query(queryText, [userId, eventId])
  }

  static getByUser (userId) {
    const queryText =
      'SELECT rsvp.id, rsvp.event_id, rsvp.user_id, events.title FROM rsvp JOIN events ON rsvp.event_id = events.id WHERE rsvp.user_id=$1;'
    return db.query(queryText, [userId]).then(response => response.rows)
  }

  static remove (userId, eventId) {
    const queryText = 'DELETE FROM rsvp WHERE user_id=$1 AND event_id=$2;'
    return db.query(queryText, [userId, eventId])
  }
}

module.exports = RSVP
