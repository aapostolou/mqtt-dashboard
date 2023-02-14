import { createTheme } from '@mui/material'
import { merge } from 'lodash'

const theme = {}

export const useTheme = (themeOverrides = {}) =>
  createTheme(merge(themeOverrides, theme))
