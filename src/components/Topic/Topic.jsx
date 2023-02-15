import { useTopicProps } from './hooks/useTopicProps'

import { TopicSettings, useTopics } from '..'
import { Paper } from '@mui/material'

import { fields } from './Fields'

import { styles } from './Topic.styles'

const Topic = ({ id, topic, message, variant, properties }) => {
  const { sendMessage } = useTopics()

  const currentField = fields?.[variant] ?? fields._fallback

  const Component = currentField?.component
  const Icon = currentField?.icon

  const componentProps = {
    ...useTopicProps({ message, ...properties }),
    sendMessage: sendMessage(topic),
  }

  return (
    <Paper elevation={4} sx={styles.paper}>
      {currentField.icon && <Icon sx={styles.icon} />}
      <TopicSettings id={id} topic={topic} {...properties} />

      <Component {...componentProps} />
    </Paper>
  )
}

export default Topic
