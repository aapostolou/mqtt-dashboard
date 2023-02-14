import { useCallback, useMemo } from 'react'

import { Button } from '@mui/material'

import { styles } from './Fields.styles'

const SwitchField = ({ label, message, value, color, onMessage, ...props }) => {
  const buttonColor = useMemo(() => {
    if (typeof color === 'string') {
      return color
    }

    if (typeof color === 'object') {
      return color?.[message] ?? color?.fallback
    }
  }, [message, color])

  const handleClick = useCallback(() => {
    const index = value.indexOf(message)

    const newValue = value[index + 1] ?? value?.[0]

    onMessage(newValue)
  }, [message, value])
  return (
    <Button
      variant="contained"
      color={buttonColor}
      {...props}
      onClick={handleClick}
      sx={styles.container}
    >
      {label}
    </Button>
  )
}

export default SwitchField
