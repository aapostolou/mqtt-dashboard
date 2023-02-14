import { createContext, useContext, useState } from 'react'

import { useSocket } from '.'

const Context = createContext()

const useTopics = () => useContext(Context)

const TopicsProvider = ({ initialState = [], children }) => {
  const [topics, setTopics] = useState(initialState)

  const socket = useSocket()

  socket.on('init', (topics) => {
    setTopics(topics)
  })

  socket.on('update', (topic) => {
    const newTopics = topics.map((entry) => {
      if (entry.id !== topic.id) {
        return topic
      }

      return entry
    })

    setTopics(newTopics)
  })

  socket.on('delete', ({ id }) => {
    const newTopics = topics.filter((entry) => entry.id !== id)

    setTopics(newTopics)
  })

  socket.on('message', ({ topic, message }) => {
    const newTopics = topics.map((entry) => {
      if (entry.topic !== topic) {
        return entry
      }

      return { ...entry, message }
    })

    setTopics(newTopics)
  })

  const updateTopicProperty = (id) => (key) => (value) => {
    const newTopics = topics.map((entry) => {
      if (entry.id !== id) {
        return entry
      }

      const properties = {
        ...entry.properties,
        [key]: value,
      }

      return { ...entry, properties }
    })

    setTopics(newTopics)

    socket.emit('updateProperty', { id, key, value })
  }

  const deleteTopic = (id) => {
    socket.emit('delete', { id })
  }

  const value = {
    topics,
    updateTopicProperty,
    deleteTopic,
  }

  return <Context.Provider value={value}>{children}</Context.Provider>
}

export default TopicsProvider

export { useTopics }
