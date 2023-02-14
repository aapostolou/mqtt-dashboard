const { createServer } = require('http')
const { Server } = require('socket.io')
const Broker = require('./mock-broker')

const PORT = 8000

const httpServer = createServer()

const io = new Server(httpServer, {
  cors: {
    origin: '*',
  },
})

const broker = new Broker(io)

io.on('connection', (socket) => {
  socket.emit('init', broker.state)

  socket.on('message', broker.onMessage)
  socket.on('update', broker.onUpdate)
  socket.on('delete', broker.onDelete)
})

httpServer.listen(PORT, () => {
  console.log('Server started on port: ' + PORT)
})
