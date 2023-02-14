import { Button, Display, Switch, Thermometer } from './Fields'

import { IconButton, Paper } from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings'

import { styles } from './Topic.styles'

const fields = {
  button: Button,
  display: Display,
  switch: Switch,
  thermometer: Thermometer,
}

const Topic = ({ variant, properties }) => {
  const Component = fields[variant]

  return (
    <Paper elevation={4} sx={styles.paper}>
      <IconButton sx={styles.settings}>
        <SettingsIcon />
      </IconButton>

      <Component {...properties} />
    </Paper>
  )
}

export default Topic
