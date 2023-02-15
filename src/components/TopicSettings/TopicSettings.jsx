import { useState } from 'react'

import {
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogTitle,
  IconButton,
  Stack,
  TextField,
} from '@mui/material'

import { useTopics } from '..'

import SettingsIcon from '@mui/icons-material/Settings'

import { styles } from './TopicSettings.styles'

const TopicSettings = ({ id, topic, value, ...properties }) => {
  const [propertiesToUpdate, setPropertiesToUpdate] = useState({
    value,
    ...properties,
  })

  const { updateTopicProperty, deleteTopic } = useTopics()

  const [open, setOpen] = useState(false)

  const toggleOpen = () => {
    setOpen(!open)
  }

  const getPropertyValue = (property) => {
    if (typeof property === 'object') {
      return JSON.stringify(property)
    }

    return property
  }

  const valueCleanup = (value) => {
    try {
      return JSON.parse(value)
    } catch (e) {
      return value
    }
  }

  const onPropertyChange = (key) => (e) => {
    const value = e.target.value

    setPropertiesToUpdate({ ...propertiesToUpdate, [key]: valueCleanup(value) })
  }

  const addNewProperty = () => {}

  const handleSaveTopic = () => {
    if (window.confirm('Save Topic ?')) {
      updateTopicProperty(id)(propertiesToUpdate)
    }

    toggleOpen()
  }

  const handleDeleteTopic = () => {
    if (window.confirm('Delete Topic ?')) {
      deleteTopic(id)
    }
  }

  const hasProperties = Object.keys(propertiesToUpdate).length > 1

  return (
    <>
      <IconButton onClick={toggleOpen} sx={styles.button}>
        <SettingsIcon />
      </IconButton>

      <Dialog open={open} onClose={toggleOpen}>
        <DialogTitle>Topic: {topic}</DialogTitle>

        <Container>
          <Stack spacing={2}>
            {Object.keys(properties).map((property, i) => (
              <TextField
                label={property}
                defaultValue={getPropertyValue(properties[property])}
                onChange={onPropertyChange(property)}
                key={i}
              />
            ))}

            <Button variant="outlined">Add New</Button>
          </Stack>
        </Container>

        <DialogActions sx={styles.actions}>
          {hasProperties && (
            <Button
              variant="contained"
              color="primary"
              onClick={handleSaveTopic}
            >
              Save
            </Button>
          )}

          <Button variant="contained" color="error" onClick={handleDeleteTopic}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default TopicSettings
