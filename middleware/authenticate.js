const jwt = require('jsonwebtoken')
const User = require('../models/User')

const authenticate = async (req, res, next) => {
  if (!req.cookies.userToken)
    return res.send('User was not authenticated - cookie could not be found')
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
