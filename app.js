require('dotenv').config()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const userRouter = require('./routes/user')
const authenticate = require('./middleware/authenticate')
const rsvpRouter = require('./routes/rsvp')
const eventRouter = require('./routes/event')
const categoryRouter = require('./routes/category')
const path = require('path')

const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const port = process.env.PORT || 8000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
const staticFiles = express.static(path.join(__dirname, 'client', 'build'))
app.use(staticFiles)

app.use(userRouter)
app.get('/login', (req, res) => {
  console.log(req.url)
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
})
app.get('/dash', (req, res) => {
  console.log(req.url)
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
})
app.get('/register', (req, res) => {
  console.log(req.url)
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
})
app.get('/categories', (req, res) => {
  console.log(req.url)
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
})
app.get('/videoroom', (req, res) => {
  console.log(req.url)
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
})
app.get('/upcomingEvents', (req, res) => {
  console.log(req.url)
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
})
app.get('/categories/:categoriesId', (req, res) => {
  console.log(req.url)
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
})
app.use(authenticate)
app.use(rsvpRouter)
app.use(categoryRouter)
app.use(eventRouter)

const rooms = {}

io.on('connection', socket => {
  console.log('server connected', socket.id)
  // console.log(socket)

  socket.on('video-room', roomId => {
    console.log('user has join video room', roomId)
    socket.join(roomId)
    socket.eventRoom = roomId
    console.log('socket Event Room', socket.eventRoom)

    if (rooms[roomId]) {
      rooms[roomId].push(socket.id)
    } else {
      rooms[roomId] = [socket.id]
    }

    console.log({ rooms })

    const isPartnerHere = rooms[roomId].length > 1
    socket.emit('is-partner-here', isPartnerHere)
  })

  socket.on('signal', data => {
    socket.to(socket.eventRoom).emit('signal', data)
  })

  socket.on('disconnect', () => {
    const room = rooms[socket.eventRoom]
    if (room) {
      room.splice(room.indexOf(socket.id), 1)
    }
  })
})

server.listen(port, () => console.log(`Listening on port ${port} `))
