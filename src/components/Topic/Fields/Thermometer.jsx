import { Box } from '@mui/material'
import { Thermometer } from 'components'

import { styles } from './Fields.styles'

const ThermometerField = ({ message, sendMessage, ...props }) => (
  <Box {...props} sx={styles.container}>
    <Thermometer {...props} value={message} />
  </Box>
)

export default ThermometerField
