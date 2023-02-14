import { createContext, useContext } from 'react'

import { io } from 'socket.io-client'

const Context = createContext()

const useSocket = () => useContext(Context)

const SocketProvider = ({ children }) => {
  const socket = io(process.env.REACT_APP_NODE_SERVER_URL)

  socket.on('connect', () => {
    console.log('Socket connected')
  })

  socket.on('disconnect', () => {
    console.log('Socket disconnected')
  })

  // Logger
  socket.on('message', (payload) => {
    console.log(payload)
  })

  return <Context.Provider value={socket}>{children}</Context.Provider>
}

export default SocketProvider

export { useSocket }
