import { useState } from 'react'

import { Box, Container } from '@mui/material'

import { Header, Sidebar, TopicGrid } from '..'

import { styles } from './Layout.styles'

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState()

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <Box sx={styles.container}>
      <Sidebar open={isSidebarOpen} onClose={toggleSidebar} />
      <Box component="main" sx={styles.main}>
        <Header toggleSidebar={toggleSidebar} />
        <Container maxWidth={false} sx={styles.content}>
          <TopicGrid />
        </Container>
      </Box>
    </Box>
  )
}

export default Layout
