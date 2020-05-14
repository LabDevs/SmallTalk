const RSVP = require('../models/RSVP')

const add = (req, res) => {
  const { userId, eventId } = req.body
  console.log(userId, eventId)
  RSVP.add(userId, eventId)
    .then((res) => res.sendStatus(200))
    .catch((err) => {
      console.log(err)
      res.sendStatus(500)
    })
}

const getByUser = (req, res) => {
  const { userId } = req.body
  console.log(userId)
  RSVP.getByUser(userId)
    .then((res) => res.sendStatus(200))
    .catch((err) => {
      console.log(err)
      res.sendStatus(500)
    })
}

module.exports = {
  add,
  getByUser
}
