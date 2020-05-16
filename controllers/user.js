const bcrypt = require('bcrypt')
const User = require('../models/User')
const jwt = require('jsonwebtoken')

const register = (req, res) => {
  const { username, password } = req.body
  console.log(username, password)
  const saltRounds = 8
  bcrypt
    .hash(password, saltRounds)
    .then(hashedPassword => User.create(username, hashedPassword))
    .then(() => res.sendStatus(200))
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
    console.log(payload)
    return jwt.sign(payload, process.env.JWT_KEY, (err, encryptedPayload) => {
      if (err) return res.sendStatus(500)
      res.cookie('userToken', encryptedPayload)
      res.sendStatus(200)
    })
  } catch (err) {
    console.log(err)
    return res.sendStatus(500)
  }
}

const logout = (req, res) => {
  res.clearCookie('userToken')
  res.redirect('/login')
}

module.exports = {
  register,
  login,
  logout
}
