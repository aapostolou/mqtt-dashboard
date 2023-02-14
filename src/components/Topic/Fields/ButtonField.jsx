import { Button } from '@mui/material'

import { styles } from './Fields.styles'

const ButtonField = ({ label, value, color, onMessage, ...props }) => {
  const handleClick = () => {
    onMessage(value)
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
