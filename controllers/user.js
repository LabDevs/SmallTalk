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
      if (err) return res.sendStatus(500)
      res.cookie('userToken', encryptedPayload)
      res.redirect('/dash')
    })
  } catch (err) {
    console.log(err)
    return res.sendStatus(500)
  }
}

<<<<<<< HEAD
const logout = async (req, res) => {
  await res.clearCookie('userToken')
  await res.clearCookie('io')
=======
const logout = (req, res) => {
  res.clearCookie('userToken')
  res.clearCookie('io')
>>>>>>> abab09ec301d116d033ad06a9541122c55cd88ad
  res.redirect('/login')
}

// const getUsers =  (req,res) => {

//     const userId  = req.userId
//     console.log(userId)
//     User.getById(userId)
//       .then((data) => {
//       console.log(req.body)

//         res.status(200).json(data)
//       })
//       .catch((err) =>{
//         // console.log(err)
//         res.sendStatus(500)
//       })
// }

module.exports = {
  register,
  login,
  logout
  // getUsers
}
