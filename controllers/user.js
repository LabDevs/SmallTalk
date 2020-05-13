const bcrypt = require('bcrypt')
const User = require('../models/User')

const register = (req, res) => {
  try {
    const { userName, password, avatar } = req.body
    const saltRounds = 8
    bcrypt.hash(password, saltRounds)
      .then((hashedPassword) => User.create(userName, hashedPassword, avatar))
      .then(() => res.send('User successfully registered'))
  } catch (err) {
    console.log(err)
    res.status(500).send(err)
  }
}

module.exports = {
  register
}
