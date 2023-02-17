import { useEffect, useState } from 'react'

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
import { TopicAddNewProperty } from 'components'

import { useTopics } from '..'

import SettingsIcon from '@mui/icons-material/Settings'
import DeleteIcon from '@mui/icons-material/Delete'

import { styles } from './TopicSettings.styles'

const TopicSettings = ({ id, topic, value, ...properties }) => {
  const [propertiesToUpdate, setPropertiesToUpdate] = useState({
    value,
    ...properties,
  })

  const { updateTopicProperty, deleteTopic } = useTopics()

  const [open, setOpen] = useState(false)
  const [openNewProperty, setOpenNewProperty] = useState(false)

  const toggleOpen = () => {
    setOpen(!open)
  }

  const toggleOpenNewProperty = () => {
    setOpenNewProperty(!openNewProperty)
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
      return value.trim()
    }
  }

  const onPropertyChange = (key) => (e) => {
    const value = e.target.value

    setPropertiesToUpdate({ ...propertiesToUpdate, [key]: valueCleanup(value) })
  }

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

  const handleAddNewProperty = ({ name, value }) => {
    toggleOpenNewProperty()

    setPropertiesToUpdate({
      ...propertiesToUpdate,
      [name]: valueCleanup(value),
    })
  }

  const handleDeleteProperty = (key) => () => {
    const { [key]: removed, ...rest } = propertiesToUpdate

    setPropertiesToUpdate(rest)
  }

  const hasProperties = Object.keys(propertiesToUpdate).length > 0

  useEffect(() => {
    setPropertiesToUpdate({
      ...propertiesToUpdate,
      value,
    })
  }, [value])

  return (
    <>
      <IconButton onClick={toggleOpen} sx={styles.button}>
        <SettingsIcon />
      </IconButton>

      <Dialog open={open} onClose={toggleOpen}>
        <DialogTitle>Topic: {topic}</DialogTitle>

        <Container>
          <Stack spacing={2}>
            {Object.keys(propertiesToUpdate).map((property, i) => (
              <Stack direction="row" alignItems="center" key={i}>
                <TextField
                  label={property}
                  defaultValue={getPropertyValue(propertiesToUpdate[property])}
                  onChange={onPropertyChange(property)}
                />
                <IconButton
                  color="error"
                  onClick={handleDeleteProperty(property)}
                >
                  <DeleteIcon />
                </IconButton>
              </Stack>
            ))}

            <Button variant="outlined" onClick={toggleOpenNewProperty}>
              Add Property
            </Button>
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

      <TopicAddNewProperty
        open={openNewProperty}
        properties={Object.keys(properties)}
        onSubmit={handleAddNewProperty}
        onClose={toggleOpenNewProperty}
      />
    </>
  )
}

export default TopicSettings
