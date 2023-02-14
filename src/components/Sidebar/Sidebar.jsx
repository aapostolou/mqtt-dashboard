import { Box, Container, Drawer, Stack, Toolbar } from '@mui/material'
import Fields from './Fields'

import { styles } from './Sidebar.styles'

const Sidebar = () => (
  <>
    <Box sx={styles.placeholder} />
    <Drawer variant="permanent" sx={styles.drawer}>
      <Toolbar sx={styles.toolbar} />
      <Container sx={styles.container}>
        <Fields />
      </Container>
    </Drawer>
  </>
)

export default Sidebar
