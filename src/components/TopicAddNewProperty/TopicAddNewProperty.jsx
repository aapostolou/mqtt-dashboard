import { useMemo, useState } from 'react'

import {
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogTitle,
  Stack,
  TextField,
} from '@mui/material'

import { styles } from './TopicAddNewProperty.styles'

const TopicAddNewProperty = ({ open, properties = [], onSubmit, onClose }) => {
  const [state, setState] = useState({ name: '', value: '' })

  const handleChange = (field) => (e) => {
    const newValue = e.target.value

    setState({ ...state, [field]: newValue })
  }

  const handleKeyDown = (e) => {
    const availableKeys = [8, 46]

    if (
      (e.keyCode < 65 || e.keyCode > 90) &&
      !availableKeys.includes(e.keyCode)
    ) {
      e.preventDefault()
    }
  }

  const handleSave = () => {
    onSubmit(state)
  }

  const nameError = useMemo(() => {
    const exists = properties.includes(state.name)
    if (exists) {
      return 'Property already exists'
    }

    const isEmpty = !state.name || state.name.length < 1
    if (isEmpty) {
      return 'Name must not be blank'
    }

    return null
  }, [state, properties])

  return (
    <Dialog open={open} onClose={onClose} sx={styles.container}>
      <DialogTitle>Add New Property</DialogTitle>

      <Container>
        <Stack spacing={2}>
          <TextField
            label="name"
            helperText={nameError}
            error={!!nameError}
            onKeyDown={handleKeyDown}
            onChange={handleChange('name')}
          />
          <TextField label="value" onChange={handleChange('value')} />
        </Stack>
      </Container>

      <DialogActions sx={styles.actions}>
        <Button
          variant="contained"
          color="primary"
          disabled={!!nameError}
          onClick={handleSave}
        >
          Save
        </Button>

        <Button variant="contained" color="error" onClick={onClose}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default TopicAddNewProperty
