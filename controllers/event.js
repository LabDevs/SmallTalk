const Event = require('../models/Event')

const getAllByCategory = (req, res) => {
  Event.getAllByCategory()
    .then(response => res.status(200).json(response))
    .catch(() =>
      res.status(500).json({ message: 'Could not get all events by category.' })
    )
}

const getAllByUser = (req, res) => {
  const { userId } = req.body

  Event.getAllByUser(userId)
    .then(response => res.status(200).json(response))
    .catch(() =>
      res.status(500).json({
        message: 'Could not get all events that the user made.'
      })
    )
}

const add = (req, res) => {
  const { userId, categoryId, title, description } = req.body

  Event.add(userId, categoryId, title, description)
    .then(() => res.status(200).json({ message: 'Successfully added.' }))
    .catch(err => {
      console.log(err)
      res.status(500).json({
        message: 'Could not add event.'
      })
    })
}

const update = (req, res) => {
  const { eventId, userId, title, description } = req.body

  Event.update(eventId, userId, title, description)
    .then(() => res.status(200).json({ message: 'Successfully updated.' }))
    .catch(() => res.status(500).json({ message: 'Could not add event.' }))
}

const show = (req, res) => {
  const { eventId } = req.body

  Event.show(eventId)
    .then(response => res.status(200).json(response))
    .catch(() => res.staus(500).json({ message: 'Cannot show event.' }))
}

const remove = (req, res) => {
  const { eventId, userId } = req.body

  Event.remove(eventId, userId)
    .then(() => res.status(200).json({ message: 'Successfully removed.' }))
    .catch(() => res.status(500).json({ message: 'Could not remove event.' }))
}

module.exports = {
  getAllByCategory,
  getAllByUser,
  add,
  update,
  show,
  remove
}
