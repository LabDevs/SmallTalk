require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const userRouter = require('./routes/user')
const authenticate = require('./middleware/authenticate')
const rsvpRouter = require('./routes/rsvp')
const eventRouter = require('./routes/event')
const categoryRouter = require('./routes/category')
const socketIO = require('socket.io')
const http = require('http')

const app = express()
const server = http.Server(app)
const io = socketIO(server)

const port = process.env.PORT || 8000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())

app.use(userRouter)
app.use(authenticate)
app.use(rsvpRouter)
app.use(categoryRouter)
app.use(eventRouter)


io.on('connection', (socket) =>{
  socket.on('join', (room) =>{
    // console.log('room from callback',room)
    const client = io.sockets.adapter.rooms[room]
    console.log('client',client)
    const numClients = typeof clients !== 'undefined' ? clients.length : 0;
    if(numClients == 0){
      socket.join(room)
    }else if(numClients == 1){
      socket.join(room)
      socket.emit('ready', room);
      socket.broadcast.emit('ready', room);
    }else{
      socket.emit('full', room);
    }
  })
})

app.get('/', (req, res) => res.send('Hello World'))

server.listen(port,process.env.HOST_NAME, () => console.log(`Listening on port ${port} `))
