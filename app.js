const express = require('express')

const app = express()

const port = process.env.PORT || 3000

const hostName = '127.0.0.1'

app.get('/', (req, res) => res.send('Hello World'))

app.listen(port, hostName, () => console.log(`Listening on port ${port} `))
