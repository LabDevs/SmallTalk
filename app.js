require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const userRouter = require('./routes/user')
const authenticate = require('./middleware/authenticate')
const eventRouter = require('./routes/event')

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(userRouter)
app.use(authenticate)
app.use(eventRouter)

app.get('/', (req, res) => res.send('Hello World'))

app.listen(port, () => console.log(`Listening on port ${port} `))
