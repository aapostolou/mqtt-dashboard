import {
  CustomThemeProvider,
  Layout,
  SocketProvider,
  TopicsProvider,
} from './components'

const App = () => (
  <CustomThemeProvider>
    <SocketProvider>
      <TopicsProvider>
        <Layout />
      </TopicsProvider>
    </SocketProvider>
  </CustomThemeProvider>
)

export default App
