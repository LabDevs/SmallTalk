const jwt = require('jsonwebtoken')
const User = require('../models/User')

const authenticate = async (req, res, next) => {
  console.log('This is the cookie:', req.cookies.userToken)

  if (!req.cookies.userToken) return res.sendStatus(401)
  try {
    const payload = await jwt.verify(req.cookies.userToken, process.env.JWT_KEY)
    if (!payload) return res.sendStatus(403)

    const { username } = payload
    const user = await User.getByUserName(username)
    req.body.userId = user.id
    if (user) return next()
  } catch (err) {
    console.log(err)
    return res.sendStatus(500)
  }
}

module.exports = authenticate
