import { type ReactNode } from "react"

import { Provider as ReduxProvider } from "react-redux"
import { ChakraProvider } from "@chakra-ui/react"

import { store } from "app/store"
import theme from "./theme"

interface ProviderProps {
  children: ReactNode
}

function Providers(props: ProviderProps) {
  const { children } = props

  return (
    <ReduxProvider store={store}>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </ReduxProvider>
  )
}

export default Providers
