import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '@chakra-ui/theme'
import { mode } from "@chakra-ui/theme-tools"

function MyApp({ Component, pageProps }) {
  return <ChakraProvider theme={theme}>
    <Component {...pageProps} />
  </ChakraProvider>
}

export default MyApp
