import { Box } from '@mui/material'

import { styles } from './Fields.styles'

const Display = ({ message, onMessage, ...props }) => (
  <Box {...props} sx={styles.container}>
    {message}
  </Box>
)

export default Display
