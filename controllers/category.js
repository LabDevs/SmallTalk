const Category = require('../models/Category')

const getAll = (req, res) => {
  Category.getAll()
    .then(response => res.sendStatus(200).json(response))
    .catch(() =>
      res.sendStatus(500).json({ message: 'Could not get all categories.' })
    )
}

module.exports = getAll
