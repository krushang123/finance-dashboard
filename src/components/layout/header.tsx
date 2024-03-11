import { Flex } from "@chakra-ui/layout"

import Logo from "components/logo"
import SidebarDrawer from "components/sidebar/sidebar-drawer"

interface HeaderProps {
  openSidebarDrawer: () => void
  closeSidebarDrawer: () => void
  isSidebarDrawerOpen: boolean
  sidebarWidth: string
  headerHeight: string
}

const Header = (props: HeaderProps) => {
  const {
    sidebarWidth,
    headerHeight,
    openSidebarDrawer,
    isSidebarDrawerOpen,
    closeSidebarDrawer,
  } = props

  return (
    <Flex
      as='header'
      h={headerHeight}
      maxW={`calc(100vw - ${sidebarWidth})`}
      pos='sticky'
      top={0}
      right={0}
      left={0}
      zIndex='sticky'
      justifyContent='space-between'
      align='center'
      px={{ base: 6, lg: 10 }}
      py={{ base: 2, lg: 6 }}
      boxShadow={{ base: "lg", lg: "none" }}
      bgColor='#002874'
    >
      <Logo />

      <SidebarDrawer
        openSidebarDrawer={openSidebarDrawer}
        isSidebarDrawerOpen={isSidebarDrawerOpen}
        closeSidebarDrawer={closeSidebarDrawer}
      />
    </Flex>
  )
}

export default Header
