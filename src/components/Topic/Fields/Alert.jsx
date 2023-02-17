import { useEffect, useState } from 'react'

import { Box } from '@mui/material'

import { styles } from './Fields.styles'

const Alert = ({
  message,
  sendMessage,
  label,
  value,
  alertMessage,
  date,
  ...props
}) => {
  console.log(date)

  useEffect(() => {
    if (message === value) {
      alert(alertMessage)
    }
  }, [message, value, alertMessage, date])

  return (
    <Box {...props} sx={styles.container}>
      {label}
    </Box>
  )
}

export default Alert
