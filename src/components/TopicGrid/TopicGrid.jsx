import { Box } from '@mui/material'

import { Topic, useTopics } from '..'

import { styles } from './TopicGrid.styles'

const TopicGrid = () => {
  const { topics } = useTopics()

  return (
    <Box sx={styles.container}>
      {topics.map((topic, i) => (
        <Topic {...topic} key={topic.id} />
      ))}
    </Box>
  )
}

export default TopicGrid
