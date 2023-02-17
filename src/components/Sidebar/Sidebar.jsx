import useMediaQuery from '@mui/material/useMediaQuery'

import {
  Box,
  Container,
  Drawer,
  IconButton,
  Stack,
  Toolbar,
} from '@mui/material'
import { TopicAddNew } from 'components'
import Fields from './Fields'

import CloseIcon from '@mui/icons-material/Close'

import { styles } from './Sidebar.styles'

const Sidebar = ({ open, onClose }) => {
  const isDesktop = useMediaQuery((theme) => theme.breakpoints.up('lg'))

  const drawerVariant = isDesktop ? 'permanent' : 'temporary'

  return (
    <>
      {isDesktop && <Box sx={styles.placeholder} />}
      <Drawer
        variant={drawerVariant}
        open={open}
        onClose={onClose}
        sx={styles.drawer}
      >
        <Toolbar sx={styles.toolbar}>
          {!isDesktop && (
            <IconButton onClick={onClose} sx={styles.closeButton}>
              <CloseIcon />
            </IconButton>
          )}
        </Toolbar>
        <Container sx={styles.container}>
          <Stack spacing={2}>
            <Fields />

            <TopicAddNew />
          </Stack>
        </Container>
      </Drawer>
    </>
  )
}

export default Sidebar
