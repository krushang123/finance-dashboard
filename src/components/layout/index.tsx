import { type ReactNode } from "react"

import { Container, Box } from "@chakra-ui/layout"
import { useBreakpointValue, useDisclosure } from "@chakra-ui/react"
import { SkipNavContent, SkipNavLink } from "@chakra-ui/skip-nav"

import Sidebar from "../sidebar/sidebar"
import Header from "./header"

interface LayoutProps {
  children: ReactNode
}

const Layout = (props: LayoutProps) => {
  const { children } = props

  const {
    isOpen: isSidebarDrawerOpen,
    onOpen: openSidebarDrawer,
    onClose: closeSidebarDrawer,
  } = useDisclosure()

  const sidebarWidth = String(
    useBreakpointValue({ base: "full", lg: "74px" }, { ssr: false }),
  )

  const headerHeight = String(
    useBreakpointValue({ base: "75px", lg: "85px" }, { ssr: false }),
  )

  const isDesktop = Boolean(
    useBreakpointValue({ base: false, lg: true }, { ssr: false }),
  )

  return (
    <Container maxW='100vw' p={0}>
      <SkipNavLink id='skip-nav' zIndex='skipLink'>
        Skip to Content
      </SkipNavLink>

      <Box display='flex'>
        {isDesktop && <Sidebar sidebarWidth={sidebarWidth} />}

        <Box w='full'>
          {!isDesktop && (
            <Header
              sidebarWidth={sidebarWidth}
              headerHeight={headerHeight}
              openSidebarDrawer={openSidebarDrawer}
              isSidebarDrawerOpen={isSidebarDrawerOpen}
              closeSidebarDrawer={closeSidebarDrawer}
            />
          )}

          <Container
            as='main'
            centerContent
            m={0}
            maxW='100%'
            px={{ base: 6, lg: 10 }}
            py={8}
            minH={`cal(100vh - ${headerHeight})`}
            bgColor='#F2F6FA'
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
