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
const p2p = require('socket.io-p2p-server').Server
const port = process.env.PORT || 8000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())

app.use(userRouter)
app.use(authenticate)
app.use(rsvpRouter)
app.use(categoryRouter)
app.use(eventRouter)
io.use(p2p)


io.on('connection', (socket) =>{
  
  socket.on('peer-msg', (data) => {
    console.log('Message from Peer: %s', data)
    socket.broadcast.emit('peer-msg', data)
  })
  
  // socket.on('go-rivate', (data) => {
  //   console.log('Message from peer: %s', data);
  //   socket.broadcast.emit('peer-msg', data)
  // })
  
})



app.get('/', (req, res) => res.send('Hello World'))

server.listen(port, () => console.log(`Listening on port ${port} `))
