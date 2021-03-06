const bcrypt = require('bcrypt')
const User = require('../models/User')
const jwt = require('jsonwebtoken')

const register = async (req, res) => {
  try {
    const saltRounds = 8
    const { username, email, password } = req.body
    const encryptedPassword = await bcrypt.hash(password, saltRounds)
    const user = await User.create(username, email, encryptedPassword)
    const payload = {
      username,
      email,
      userId: user.id,
      expiresIn: '2hr'
    }

    return jwt.sign(payload, process.env.JWT_KEY, (err, encryptedPayload) => {
      if (err) return res.sendStatus(500)
      res.cookie('userToken', encryptedPayload)
      res.redirect('/dash')
    })
  } catch (err) {
    console.log(err)
    res.sendStatus(500)
  }
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
      if (err) {
        console.log(err)
        return res.sendStatus(500)
      }
      res.cookie('userToken', encryptedPayload)
      res.redirect('/dash')
    })
  } catch (err) {
    console.log(err)
    return res.sendStatus(500)
  }
}

const logout = (req, res) => {
  res.clearCookie('userToken')
  res.clearCookie('io')
  res.redirect('/login')
}

module.exports = {
  register,
  login,
  logout
}
