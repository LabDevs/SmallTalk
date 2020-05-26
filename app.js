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
  // console.log(socket)
  
  socket.on('video-room', (roomID) =>{
    console.log('user has join video room', roomID)
    socket.join(roomID)
    socket.eventRoom = roomID
    console.log('socket Event Room',socket.eventRoom)

    if(rooms[roomID]){
      rooms[roomID].push(socket.id)
    }else{
      rooms[roomID] = [socket.id]
    }
    
    let isPartnerHere = rooms[roomID] > 1 ? true : false
    
    io.to(roomID).emit('is-partner-here', isPartnerHere)
  })

  socket.on('signal', (data) => {
    socket.to('video-room').emit('signal',data)
  })
  
  socket.on('disconnect', () => {
    const room = rooms[socket.eventRoom]
    room.splice(room.indexOf(socket.id),1)
    console.log('id removed')
  })
})


app.get('/', (req, res) => res.send('Hello World'))

server.listen(port,process.env.HOST_NAME, () => console.log(`Listening on port ${port} `))
