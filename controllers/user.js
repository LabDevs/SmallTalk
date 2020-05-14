const bcrypt = require('bcrypt')
const User = require('../models/User')
const jwt = require('jsonwebtoken')

const register = (req, res) => {
<<<<<<< HEAD
  const { userName, password } = req.body
  const saltRounds = 8
  bcrypt
    .hash(password, saltRounds)
    .then(hashedPassword => User.create(userName, hashedPassword))
    .then(() => res.send('User successfully registered'))
=======
  const { username, password } = req.body
  const saltRounds = 8
  bcrypt
    .hash(password, saltRounds)
    .then(hashedPassword => User.create(username, hashedPassword))
    .then(() => res.send(200).json({ message: 'User registered.' }))
    .catch(() => res.send(500).json({ message: 'Cannot register user.' }))
>>>>>>> abc9d87cdd1bfda549986e6c79c18381b72da136
}

const login = async (req, res) => {
  const { username, password } = req.body
  try {
    const user = await User.getByUserName(username)

    // equivalent to res.status(404).send('Not Found')
    if (!user) return res.sendStatus(404)

    const verify = await bcrypt.compare(password, user.password)

    // equivalent to res.status(404).send('Not Found')
    if (!verify) return res.sendStatus(403)

    const payload = {
<<<<<<< HEAD
      userName,
=======
      username,
>>>>>>> abc9d87cdd1bfda549986e6c79c18381b72da136
      password,
      userId: user.user_id,
      expiresIn: '2hr'
    }
    return jwt.sign(payload, process.env.JWT_KEY, (err, encryptedPayload) => {
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

module.exports = {
  register,
  login,
  logout
}
