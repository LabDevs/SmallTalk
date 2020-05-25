const db = require('../db')

class RSVP {
  static add (userId, eventId) {
    const queryText = 'INSERT INTO rsvp (user_id, event_id) VALUES ($1, $2);'
    return db.query(queryText, [userId, eventId])
  }

  static getByUser (userId) {
    const queryText =
      'SELECT rsvp.id, rsvp.event_id, rsvp.user_id, events.title, events.description, events.date, categories.name FROM rsvp JOIN events ON rsvp.event_id = events.id JOIN categories ON events.category_id = categories.id WHERE rsvp.user_id=$1;'
    return db.query(queryText, [userId]).then(response => response.rows)
  }

  static cancel (rsvpId) {
    const queryText = 'DELETE FROM rsvp WHERE id=$1;'
    return db.query(queryText, [rsvpId])
  }
}

module.exports = RSVP
