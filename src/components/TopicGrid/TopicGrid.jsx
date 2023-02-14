import { Box } from '@mui/material'

import { Topic } from '..'

import { styles } from './TopicGrid.styles'

const TopicGrid = ({ topics = [] }) => (
  <Box sx={styles.container}>
    {topics.map((topic, i) => (
      <Topic {...topic} key={i} />
    ))}
  </Box>
)

export default TopicGrid
