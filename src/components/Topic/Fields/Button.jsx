import { Button } from '@mui/material'

import { styles } from './Fields.styles'

const ButtonTopic = ({ id, label, value }) => {
  const handleClick = () => {
    console.log({
      topic: id,
      message: value,
    })
  }

  return (
    <Button variant="contained" onClick={handleClick} sx={styles.container}>
      {label}
    </Button>
  )
}

export default ButtonTopic
