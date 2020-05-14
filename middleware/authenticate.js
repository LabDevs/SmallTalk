const jwt = require('jsonwebtoken')
const User = require('../models/User')
const bcrypt = require('bcrypt')

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

module.export = authenticate
