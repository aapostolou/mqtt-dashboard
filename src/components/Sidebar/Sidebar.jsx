import { Drawer, Toolbar } from '@mui/material'

import { styles } from './Sidebar.styles'

const Sidebar = () => (
  <Drawer variant="permanent" sx={styles.drawer}>
    <Toolbar sx={styles.toolbar} />
  </Drawer>
)

export default Sidebar
