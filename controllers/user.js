const bcrypt = require('bcrypt')
const User = require('../models/User')
const jwt = require('jsonwebtoken')

const register = (req, res) => {
  const { username, password } = req.body
  const saltRounds = 8
  bcrypt
    .hash(password, saltRounds)
    .then(hashedPassword => User.create(username, hashedPassword))
    .then(() => res.sendStatus(200))
    .then(() => {
      const payload = {
        username,
        userId: user.id,
        expiresIn: '2hr'
      }
      return jwt.sign(payload, process.env.JWT_KEY, (err, encryptedPayload) => {
        if (err) return res.sendStatus(500)
        res.cookie('userToken', encryptedPayload)
        res.sendStatus(200)
      })
    })
    .catch(() => res.sendStatus(500))
}

const login = async (req, res) => {
  const { username, password } = req.body
  try {
    const user = await User.getByUserName(username)

    if (!user) return res.sendStatus(404)

    const verify = await bcrypt.compare(password, user.password)

    if (!verify) return res.sendStatus(403)

    const payload = {
      username,
      userId: user.user_id,
      expiresIn: '2hr'
    }
    return jwt.sign(payload, process.env.JWT_KEY, (err, encryptedPayload) => {
      if (err) return res.sendStatus(500)
      res.cookie('userToken', encryptedPayload)
      res.status(200).json(encryptedPayload)
    })
  } catch (err) {
    console.log(err)
    return res.sendStatus(500)
  }
}

const logout = async (req, res) => {
  try {
    res.clearCookie('userToken')
    res.sendStatus(200)
  } catch (err) {
    console.log(err)
    res.sendStatus(500)
  }
}

module.exports = {
  register,
  login,
  logout
}
