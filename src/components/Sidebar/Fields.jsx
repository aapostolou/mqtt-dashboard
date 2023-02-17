import { Box, Stack, Typography } from '@mui/material'

import { fields } from '../.'

const Fields = () => (
  <Stack spacing={2}>
    <Typography variant="h5">Components</Typography>

    {Object.keys(fields).map((key, i) => {
      const field = fields[key]

      const Icon = field.icon

      return (
        <Stack direction="row" spacing={2} key={i}>
          <Icon color="primary" />
          <Box>{field.label}</Box>
        </Stack>
      )
    })}
  </Stack>
)

export default Fields
