const RSVP = require('../models/RSVP')

const add = (req, res) => {
  const { userId, eventId } = req.body
  RSVP.add(userId, eventId)
    .then(() => res.sendStatus(200))
    .catch(err => {
      console.log(err)
      res.sendStatus(500)
    })
}

const getByUser = (req, res) => {
  const { userId } = req.body
  RSVP.getByUser(userId)
    .then(response => res.status(200).json(response))
    .catch(err => {
      console.log(err)
      res.sendStatus(500)
    })
}

const cancel = (req, res) => {
  const { rsvpId } = req.body
  RSVP.cancel(rsvpId)
    .then(() => res.status(200).json({ message: 'Removed RSVP.' }))
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Could not remove RSVP.' })
    })
}

module.exports = {
  add,
  getByUser,
  cancel
}
