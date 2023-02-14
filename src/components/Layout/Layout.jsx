import { Box, Container } from '@mui/material'

import { Header, Sidebar, TopicGrid } from '..'

import { styles } from './Layout.styles'

const Layout = () => (
  <Box sx={styles.container}>
    <Sidebar />
    <Box component="main" sx={styles.main}>
      <Header />
      <Container maxWidth={false} sx={styles.content}>
        <TopicGrid />
      </Container>
    </Box>
  </Box>
)

export default Layout
