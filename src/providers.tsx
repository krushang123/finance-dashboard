import { type ReactNode } from "react"

import { ChakraProvider } from "@chakra-ui/react"

import theme from "./theme"

interface ProviderProps {
  children: ReactNode
}

function Providers(props: ProviderProps) {
  const { children } = props

  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}

export default Providers
