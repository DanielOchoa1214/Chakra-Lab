import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import Header from './components/Header'

function App() {

  return (
    <ChakraProvider>
      <Header w="100vw" btnDir="row"/>
      <Header w="30vw" btnDir="column"/>
    </ChakraProvider>
  )
}

export default App
