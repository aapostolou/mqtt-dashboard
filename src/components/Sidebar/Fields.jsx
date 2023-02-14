import { Box, Stack } from '@mui/material'

import TvIcon from '@mui/icons-material/Tv'
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked'
import RotateRightIcon from '@mui/icons-material/RotateRight'

const fields = [
  {
    icon: TvIcon,
    label: 'Display',
  },
  {
    icon: RadioButtonCheckedIcon,
    label: 'Button',
  },
  {
    icon: RotateRightIcon,
    label: 'Switch',
  },
  {
    icon: () => <></>,
    label: 'Thermometer',
  },
]

const Fields = () => (
  <Stack spacing={2}>
    {fields.map((field, i) => {
      const Icon = field.icon

      return (
        <Stack direction="row" spacing={1} key={i}>
          <Icon />
          <Box>{field.label}</Box>
        </Stack>
      )
    })}
  </Stack>
)

export default Fields
