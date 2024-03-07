import { type ReactNode } from "react"

import { Container, Box } from "@chakra-ui/layout"
import { useBreakpointValue } from "@chakra-ui/react"
import { SkipNavContent, SkipNavLink } from "@chakra-ui/skip-nav"

import Sidebar from "../sidebar"

interface LayoutProps {
  children: ReactNode
}

const Layout = (props: LayoutProps) => {
  const { children } = props

  const sidebarWidth = String(
    useBreakpointValue({ base: "full", lg: "74px" }, { ssr: false }),
  )

  const headerHeight = String(
    useBreakpointValue({ base: "75px", lg: "85px" }, { ssr: false }),
  )

  return (
    <Container maxW='100vw' p={0}>
      <SkipNavLink id='skip-nav' zIndex='skipLink'>
        Skip to Content
      </SkipNavLink>

      <Box display='flex'>
        <Sidebar sidebarWidth={sidebarWidth} />

        <Box w='full'>
          {/* <Header sidebarWidth={sidebarWidth} headerHeight={headerHeight} /> */}

          <Container
            as='main'
            centerContent
            maxW={`calc(100vw - ${sidebarWidth})`}
            px={{ base: 6, lg: 10 }}
            py={8}
            minH={`cal(100vh - ${headerHeight})`}
          >
            <SkipNavContent id='skip-nav' />

            {children}
          </Container>
        </Box>
      </Box>
    </Container>
  )
}

export default Layout
