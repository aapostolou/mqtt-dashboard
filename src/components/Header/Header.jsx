import { AppBar, Box, Toolbar } from '@mui/material'

import { styles } from './Header.styles'

const Header = () => (
  <AppBar position="sticky" sx={styles.appbar}>
    <Toolbar>
      <Box>Header</Box>
    </Toolbar>
  </AppBar>
)

export default Header
