const Category = require('../models/Category')

const getAll = (req, res) => {
  Category.getAll()
    .then(response => res.send(response))
    .catch(() => res.sendStatus(500).json({ message: 'Could not get all categories.' })
  )
}

module.exports = {
getAll}
