const { mockState } = require('./mockState')

function Broker(io, initialState = mockState) {
  this.state = initialState

  this.onMessage = ({ topic, message }) => {
    this.state = this.state.map((entry) => {
      if (entry.topic !== topic) {
        return entry
      }

      return { ...entry, message }
    })

    console.log('Broker udpate', { topic, message })

    io.emit('message', { topic, message })
  }

  this.onUpdate = () => {}

  this.onDelete = ({ id }) => {
    console.log('Deleting topic', { id })

    this.state = this.state.filter((entry) => entry.id !== id)

    io.emit('delete', { id })
  }
}

module.exports = Broker
