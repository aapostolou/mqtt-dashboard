import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material/'

import { useTheme } from '../configuration'

const CustomThemeProvider = ({ themeOverrides = {}, children }) => {
  const theme = useTheme(themeOverrides)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

export default CustomThemeProvider
