const { mockState } = require('./mockState')

const { SOCKET } = require('../constants')

function Broker(io, initialState = mockState) {
  this.state = initialState

  this.onMessage = ({ topic, message }) => {
    this.state = this.state.map((entry) => {
      if (entry.topic !== topic) {
        return entry
      }

      return { ...entry, message }
    })
    io.emit(SOCKET.TOPIC_MESSAGE, { topic, message })
  }

  this.onAdd = ({ topic }) => {
    const id = 0
  }

  this.onUpdate = ({ id, properties }) => {
    this.state = this.state.map((entry) => {
      if (entry.id !== id) {
        return entry
      }

      return {
        ...entry,
        properties,
      }
    })

    io.emit(SOCKET.TOPIC_UPDATE, { id, properties })
  }

  this.onDelete = ({ id }) => {
    this.state = this.state.filter((entry) => entry.id !== id)

    io.emit(SOCKET.TOPIC_DELETE, { id })
  }
}

module.exports = Broker
