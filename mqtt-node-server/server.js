const { createServer } = require('http')
const { Server } = require('socket.io')
const Broker = require('./mock-broker')

const { SOCKET } = require('./constants')

const PORT = 8000

const httpServer = createServer()

const io = new Server(httpServer, {
  cors: {
    origin: '*',
  },
})

const broker = new Broker(io)

io.on('connection', (socket) => {
  socket.emit(SOCKET.TOPICS_INIT, { topics: broker.state })

  socket.on(SOCKET.TOPIC_MESSAGE, broker.onMessage)
  socket.on(SOCKET.TOPIC_ADD, broker.onAdd)
  socket.on(SOCKET.TOPIC_UPDATE, broker.onUpdate)
  socket.on(SOCKET.TOPIC_DELETE, broker.onDelete)

  socket.onAny((event, payload, ...rest) => {
    console.log('Socket Event', { event, payload, ...rest })
  })
})

httpServer.listen(PORT, () => {
  console.log('Server started on port: ' + PORT)
})
