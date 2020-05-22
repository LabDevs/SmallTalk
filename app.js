require('dotenv').config()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const userRouter = require('./routes/user')
const authenticate = require('./middleware/authenticate')
const rsvpRouter = require('./routes/rsvp')
const eventRouter = require('./routes/event')
const categoryRouter = require('./routes/category')

const app = require('express')()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const port = process.env.PORT || 8000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())

app.use(userRouter)
app.use(authenticate)
app.use(rsvpRouter)
app.use(categoryRouter)
app.use(eventRouter)


io.on('connection', (socket) => {
  socket.on('signal', (data) => {
    console.log('Signal from Peer', socket.id)
    socket.broadcast.emit('signal', data)
  })

  // socket.on('go-rivate', (data) => {
  //   console.log('Message from peer: %s', data);
  //   socket.broadcast.emit('peer-msg', data)
  // })
})

app.get('/', (req, res) => res.send('Hello World'))

server.listen(port,process.env.HOST_NAME, () => console.log(`Listening on port ${port} `))
