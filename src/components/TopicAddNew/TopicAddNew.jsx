import { useEffect, useMemo, useState } from 'react'

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from '@mui/material'
import { fields, useTopics } from 'components'

import { styles } from './TopicAddNew.styles'

const initialState = { type: '', topic: '' }

const TopicAddNew = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [state, setState] = useState(initialState)

  const { addTopic } = useTopics()

  const toggleIsOpen = () => {
    setIsOpen(!isOpen)
  }

  const handleChangeField = (key) => (e) => {
    const newValue = e.target.value

    setState({ ...state, [key]: newValue })
  }

  const handleSaveTopic = () => {
    addTopic({ topic: state.topic, variant: state.type })
    toggleIsOpen()
  }

  const typeError = useMemo(() => {
    if (
      !Object.keys(fields)
        .filter((f) => f !== '_fallback')
        .includes(state.type)
    ) {
      return 'Type not set'
    }
  }, [state])

  const topicError = useMemo(() => {
    if (state.topic.length < 1) {
      return 'Topic can not be blank'
    }
  }, [state])

  const isFormInvalid = !!typeError && !!topicError

  useEffect(() => {
    if (isOpen === false) {
      setTimeout(() => {
        setState(initialState)
      }, 300)
    }
  }, [isOpen])

  return (
    <>
      <Button variant="contained" onClick={toggleIsOpen}>
        Add New Topic
      </Button>

      <Dialog open={isOpen} onClose={toggleIsOpen}>
        <DialogTitle>Add New Topic</DialogTitle>

        <DialogContent sx={styles.content}>
          <Stack spacing={2}>
            <FormControl fullWidth error={!!typeError}>
              <InputLabel id="select-topic-type">Type</InputLabel>
              <Select
                labelId="select-topic-type"
                label="Type"
                value={state.type}
                onChange={handleChangeField('type')}
              >
                {Object.keys(fields)
                  .filter((f) => f !== '_fallback')
                  .map((field) => (
                    <MenuItem value={field} key={field}>
                      {field}
                    </MenuItem>
                  ))}
              </Select>
              <FormHelperText>{typeError}</FormHelperText>
            </FormControl>

            <TextField
              label="Topic"
              helperText={topicError}
              error={!!topicError}
              onChange={handleChangeField('topic')}
            />
          </Stack>
        </DialogContent>

        <DialogActions sx={styles.actions}>
          <Button
            variant="contained"
            color="primary"
            disabled={isFormInvalid}
            onClick={handleSaveTopic}
          >
            Save
          </Button>

          <Button variant="contained" color="error" onClick={toggleIsOpen}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default TopicAddNew
