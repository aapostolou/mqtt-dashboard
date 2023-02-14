import { Box, Container } from '@mui/material'

import { Header, Sidebar, TopicGrid } from '..'

import { styles } from './Layout.styles'

const topics = [
  {
    variant: 'button',
    properties: { value: 'SEND_ALERT', label: 'SEND AN ALERT' },
  },
  { variant: 'display' },
  { variant: 'switch' },
  { variant: 'thermometer' },
]

const Layout = () => (
  <Box sx={styles.container}>
    <Sidebar />
    <Box component="main" sx={styles.main}>
      <Header />
      <Container maxWidth={false} sx={styles.content}>
        <TopicGrid topics={topics} />
      </Container>
    </Box>
  </Box>
)

export default Layout
