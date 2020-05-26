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

const users={}

const rooms={}

io.on('connection', socket => {
  console.log('server connected',socket.id)
  console.log(socket)
  
  socket.on('video-room', (roomID) =>{
    console.log('user has join video', roomID)
    socket.join(roomID)
    socket.eventRoom = roomID
    if(rooms[roomID]){
      rooms[roomID].push(socket.id)
    }else{
      rooms[roomID] = [socket.id]
    }
    
    let isPartnerHere = rooms[roomID] > 1 ? true : false
    
    io.to(roomID).emit('is-partner-here', isPartnerHere)
  })

  // if (!users[socket.id]) {
  //   users[socket.id] = socket.id
  // }
  socket.emit('yourID', socket.id)
  
  socket.on('disconnect', () => {
    const room = rooms[socket.eventRoom]
    
    room.splice(room.indexOf(socket.id),1)
    console.log('id removed')
  })

  socket.on('callUser', (data) => {
    io.to(data.userToCall).emit('call', { signal: data.signalData, from: data.from })
  })

  socket.on('acceptCall', (data) => {
    io.to(data.to).emit('callAccepted', data.signal)
  })
  
  socket.on('disconnect', (data) => {
    console.log('user left', data)
    // socket.brodcast.emit('user left', data)
  })
})

// io.on('connection', (socket) => {

//   socket.to('video-room', (room) => {
//     console.log('video-room', room)
//     socket.room = room
//     socket.join(room)
//   })

//   socket.on('signal', (data) => {
//     console.log('Signal from Peer', socket.id)
//     io.to(socket.room).emit('signal', data)
//   })

// })

app.get('/', (req, res) => res.send('Hello World'))

server.listen(port,process.env.HOST_NAME, () => console.log(`Listening on port ${port} `))
