import { useTopicProps } from './hooks/useTopicProps'

import { TopicSettings, useSocket } from '..'
import { ButtonField, Display, SwitchField, Thermometer } from './Fields'

import { Paper } from '@mui/material'

import { styles } from './Topic.styles'

const fields = {
  button: ButtonField,
  display: Display,
  switch: SwitchField,
  thermometer: Thermometer,
}

const Topic = ({ id, topic, message, variant, properties }) => {
  const socket = useSocket()

  const onMessage = (message) => {
    socket.emit('message', { topic, message })
  }

  const Component = fields[variant]

  const componentProps = {
    ...useTopicProps({ message, ...properties }),
    onMessage,
  }

  return (
    <Paper elevation={4} sx={styles.paper}>
      <TopicSettings id={id} topic={topic} {...properties} />

      <Component {...componentProps} />
    </Paper>
  )
}

export default Topic
