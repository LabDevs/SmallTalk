require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const userRouter = require('./routes/user')
const authenticate = require('./middleware/authenticate')
const rsvpRouter = require('./routes/rsvp')
const eventRouter = require('./routes/event')
const categoryRouter = require('./routes/category')
// const socketIO = require('socket.io')
// const http = require('http')

const app = express()
// const server = http.createServer(app)
// const io = socketIO(app)

const port = process.env.PORT || 8000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())

app.use(userRouter)
app.use(authenticate)
app.use(rsvpRouter)
app.use(categoryRouter)
app.use(eventRouter)

// const users = {}
// console.log(io)

// io.on('server connected', socket => {
//   console.log('callback socket', socket)
//   if(!users[socket.id]){
//     users[socket.id] = socket.id
//   }
//   socket.emit('yourID', socket.id)
//   io.sockets.emit('allUsers', users)
//   socket.on('connection remove', () => {
//     delete users[socket.id]
//   })
  
//   socket.on('callUser', (data) => {
//     console.log('callUser data', data)
//     io.to(data.userToCall).emit('Paul Calling', {signal: data.signalData, from: data.from})
//   })
  
//   socket.on('acceptCall', (data) => {
//     console.log('acceptCall data', data)
//     io.to(data.to).emit('callAccepted' ,data.signal);

//   })
  
// })

app.get('/', (req, res) => res.send('Hello World'))


app.listen(port,process.env.HOST_NAME, () => console.log(`Listening on port ${port} `))
