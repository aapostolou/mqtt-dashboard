import { createContext, useContext, useState } from 'react'

import { useSocket } from '.'

import { SOCKET } from '../constants'

const Context = createContext()

const useTopics = () => useContext(Context)

const TopicsProvider = ({ initialState = [], children }) => {
  const [topics, setTopics] = useState(initialState)

  const socket = useSocket()

  socket.on(SOCKET.TOPICS_INIT, ({ topics }) => {
    setTopics(topics)
  })

  socket.on(SOCKET.TOPIC_ADD, ({ topic }) => {
    setTopics({ ...topics, topic })
  })

  socket.on(SOCKET.TOPIC_UPDATE, ({ id, properties }) => {
    const newTopics = topics.map((entry) => {
      if (entry.id !== id) {
        return entry
      }

      return { ...entry, properties }
    })

    setTopics(newTopics)
  })

  socket.on(SOCKET.TOPIC_DELETE, ({ id }) => {
    const newTopics = topics.filter((entry) => entry.id !== id)

    setTopics(newTopics)
  })

  socket.on(SOCKET.TOPIC_MESSAGE, ({ topic, message }) => {
    const newTopics = topics.map((entry) => {
      if (entry.topic !== topic) {
        return entry
      }

      return { ...entry, message }
    })

    setTopics(newTopics)
  })

  const sendMessage = (topic) => (message) => {
    socket.emit(SOCKET.TOPIC_MESSAGE, { topic, message })
  }

  const addTopic = (topic) => {
    socket.emit(SOCKET.TOPIC_ADD, { topic })
  }

  const updateTopicProperty = (id) => (properties) => {
    socket.emit(SOCKET.TOPIC_UPDATE, { id, properties })
  }

  const deleteTopic = (id) => {
    socket.emit(SOCKET.TOPIC_DELETE, { id })
  }

  const value = {
    topics,
    sendMessage,
    addTopic,
    updateTopicProperty,
    deleteTopic,
  }

  return <Context.Provider value={value}>{children}</Context.Provider>
}

export default TopicsProvider

export { useTopics }
