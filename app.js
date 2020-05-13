const express = require('express')
const bodyParser = require('body-parser')
const router = require('./routes/user')

const app = express()
const port = process.env.PORT || 3000
const hostName = '127.0.0.1'

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(router)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(router)

app.get('/', (req, res) => res.send('Hello World'))

app.listen(port, hostName, () => console.log(`Listening on port ${port} `))
