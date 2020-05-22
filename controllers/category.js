const Category = require('../models/Category')

const getAll = (req, res) => {
  Category.getAll()
    .then(response => res.json(response))
    .catch(() =>
      res.sendStatus(500).json({ message: 'Could not get all categories.' })
    )
}

const getById = (req, res) => {
  const { id } = req.params

  Category.getById(id)
    .then(response => res.json(response))
    .catch(err =>
      res.sendStatus(500).json({ message: 'Could not get category by id.' })
    )
}

module.exports = {
  getAll,
  getById
}
