import { type ReactNode } from "react"

import { ChakraProvider } from "@chakra-ui/react"

interface ProviderProps {
  children: ReactNode
}

function Providers(props: ProviderProps) {
  const { children } = props

  return <ChakraProvider>{children}</ChakraProvider>
}

export default Providers
