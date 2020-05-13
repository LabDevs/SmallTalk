const bcrypt = require('bcrypt')
const User = require('../models/User')
const jwt = require('jsonwebtoken')

const register = (req, res) => {
  try {
    const { userName, password, avatar } = req.body
    const saltRounds = 8
    bcrypt.hash(password, saltRounds)
      .then((hashedPassword) => User.create(userName, hashedPassword, avatar))
      .then(() => res.send('User successfully registered'))
  } catch (err) {
    console.log(err)
    res.sendStatus(500)
  }
}

const login = async (req, res) => {
  const { userName, password } = req.body
  try {
    const user = await User.getByUserName(userName)

    // equivalent to res.status(404).send('Not Found')
    if (!user) return res.sendStatus(404)

    const verify = await bcrypt.compare(password, user.password)

    // equivalent to res.status(404).send('Not Found')
    if (!verify) return res.sendStatus(403)

    const payload = {
      userName, password, userId: user.user_id, expiresIn: '2hr'
    }
    // will change to a env variable just put this for testing
    return jwt.sign(payload, 'secret', (err, encryptedPayload) => {
      if (err) return res.sendStatus(500)
      res.cookie('userToken', encryptedPayload)
      res.send('Logged In')
    })
  } catch (err) {
    // equivalent to res.status(500).send('Internal Server Error')
    console.log(err)
    return res.sendStatus(500)
  }
}

const logout = (req, res) => {
  res.clearCookie('userToken')
  res.redirect('/login')
}

const authenticate = async (req, res, next) => {
  if (!req.cookies.userToken) return res.sendStatus(401)
  try {
    const payload = await jwt.verify(req.cookies.userToken, 'secret')
    if (!payload) return res.sendStatus(403)

    const { userName, password } = payload
    const user = await User.getByUserName(userName)
    const verify = await bcrypt.compare(password, user.password)
    req.body.userId = user.user_id
    if (verify) return next()
  } catch (err) {
    console.log(err)
    return res.sendStatus(500)
  }
}

const registerPage = async (req, res) => {
  res.send('Register Page')
}

const loginPage = (req, res) => {
  res.send('Login Page')
}

module.exports = {
  register,
  registerPage,
  login,
  loginPage,
  logout,
  authenticate
}
