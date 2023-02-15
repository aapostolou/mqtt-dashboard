import { Button } from '@mui/material'

import { styles } from './Fields.styles'

const ButtonField = ({ label, value, color, sendMessage, ...props }) => {
  const handleClick = () => {
    sendMessage(value)
  }

  return (
    <Button
      variant="contained"
      color={color}
      {...props}
      onClick={handleClick}
      sx={styles.container}
    >
      {label}
    </Button>
  )
}

export default ButtonField
