import { useTopicProps } from './hooks/useTopicProps'

import { TopicSettings, useTopics } from '..'
import { Box, Paper, Stack } from '@mui/material'

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

  if (variant === 'display') {
    console.log({ topic, variant, componentProps })
  }

  return (
    <Paper elevation={4} sx={styles.paper}>
      <Stack direction="row" alignItems="center" spacing={1} sx={styles.header}>
        <Icon sx={styles.icon} />
        <Box sx={styles.title}>{topic}</Box>
        <TopicSettings id={id} topic={topic} {...properties} />
      </Stack>

      <Component {...componentProps} />
    </Paper>
  )
}

export default Topic
