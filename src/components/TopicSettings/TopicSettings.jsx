import { useState } from 'react'

import {
  Button,
  Container,
  Dialog,
  DialogTitle,
  IconButton,
  Stack,
  TextField,
} from '@mui/material'

import { useTopics } from '..'

import SettingsIcon from '@mui/icons-material/Settings'

import { styles } from './TopicSettings.styles'

const TopicSettings = ({ id, topic, ...properties }) => {
  const { updateTopicProperty, deleteTopic } = useTopics()

  const [open, setOpen] = useState(false)

  const toggleOpen = () => {
    setOpen(!open)
  }

  const onPropertyChange = (key) => (e) => {
    const value = e.target.value

    updateTopicProperty(id)(key)(value)
  }

  const handleDeleteTopic = () => {
    if (window.confirm('Delete this Topic ?')) {
      deleteTopic(id)
    }
  }

  return (
    <>
      <IconButton onClick={toggleOpen} sx={styles.button}>
        <SettingsIcon />
      </IconButton>

      <Dialog open={open} onClose={toggleOpen}>
        <DialogTitle>Topic: {topic}</DialogTitle>
        <Container sx={styles.container}>
          <Stack spacing={2}>
            {Object.keys(properties).map((property, i) => (
              <TextField
                label={property}
                defaultValue={properties[property]}
                onChange={onPropertyChange(property)}
                key={i}
              />
            ))}
            <Button
              variant="contained"
              color="error"
              onClick={handleDeleteTopic}
            >
              Delete
            </Button>
          </Stack>
        </Container>
      </Dialog>
    </>
  )
}

export default TopicSettings
