require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const userRouter = require('./routes/user')
const authenticate = require('./middleware/authenticate')
const eventRouter = require('./routes/event')
const categoryRouter = require('./routes/category')

const app = express()
const port = process.env.PORT || 8000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())

app.use(userRouter)
app.use(authenticate)
app.use(categoryRouter)
app.use(eventRouter)

app.get('/', (req, res) => res.send('Hello World'))

app.listen(port, process.env.HOST_NAME, () => console.log(`Listening on port ${port} `))
