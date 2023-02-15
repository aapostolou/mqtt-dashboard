import useMediaQuery from '@mui/material/useMediaQuery'

import { AppBar, Box, IconButton, Stack, Toolbar } from '@mui/material'

import MenuIcon from '@mui/icons-material/Menu'

import { styles } from './Header.styles'

const Header = ({ toggleSidebar }) => {
  const isDesktop = useMediaQuery((theme) => theme.breakpoints.up('lg'))

  return (
    <AppBar position="sticky" sx={styles.appbar}>
      <Toolbar>
        <Stack direction="row" alignItems="center" spacing={2}>
          {!isDesktop && (
            <IconButton color="inherit" onClick={toggleSidebar}>
              <MenuIcon />
            </IconButton>
          )}
          <Box>MQTT Dashboard</Box>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default Header
