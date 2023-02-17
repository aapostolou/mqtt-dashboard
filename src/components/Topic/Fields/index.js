import { default as Alert } from './Alert'
import { default as ButtonField } from './ButtonField'
import { default as Display } from './Display'
import { default as SwitchField } from './SwitchField'
import { default as Thermometer } from './Thermometer'

import TvIcon from '@mui/icons-material/Tv'
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked'
import RotateRightIcon from '@mui/icons-material/RotateRight'
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat'
import DangerousIcon from '@mui/icons-material/Dangerous'
import ReportProblemIcon from '@mui/icons-material/ReportProblem'

export const fields = {
  display: {
    component: Display,
    icon: TvIcon,
    label: 'Display',
  },
  button: {
    component: ButtonField,
    icon: RadioButtonCheckedIcon,
    label: 'Button',
  },
  switch: {
    component: SwitchField,
    icon: RotateRightIcon,
    label: 'Switch',
  },
  thermometer: {
    component: Thermometer,
    icon: DeviceThermostatIcon,
    label: 'Thermometer',
  },
  alert: {
    component: Alert,
    icon: ReportProblemIcon,
    label: 'Alert',
  },

  _fallback: {
    component: Display,
    icon: DangerousIcon,
    label: 'Unknown Field',
  },
}
