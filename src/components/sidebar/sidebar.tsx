import { useState } from "react"

import { Box, List, Stack } from "@chakra-ui/layout"
import { useBreakpointValue } from "@chakra-ui/react"

import { sidebarIcons } from "constants/sidebar-icons"
import Logo from "components/logo"
import UserProfileWithInfo from "components/avatar/user-profile-with-info"
import SidebarItem from "./sidebar-item"

interface SidebarProps {
  sidebarWidth?: string
}

const Sidebar = (props: SidebarProps) => {
  const { sidebarWidth } = props

  const [expanded, setExpanded] = useState<boolean>(false)

  const isDesktop = Boolean(
    useBreakpointValue({ base: false, lg: true }, { ssr: false }),
  )

  return (
    <Stack
      as='aside'
      aria-label='Dashboard Sidebar'
      spacing={10}
      textAlign='center'
      pos={{ base: "static", lg: "sticky" }}
      top={0}
      bottom={0}
      left={0}
      zIndex={{ base: "auto", lg: "banner" }}
      w={{ base: "full", lg: expanded ? "230px" : sidebarWidth }}
      h={{ base: "auto", lg: "fit-content" }}
      minH={{ base: "100vh", lg: "100vh" }}
      py={6}
      boxShadow={{ base: "none", lg: "xl" }}
      bgColor='#002874'
      align='center'
      justify='space-between'
      onMouseEnter={() => {
        setExpanded((prevState) => !prevState)
      }}
      onMouseLeave={() => {
        setExpanded((prevState) => !prevState)
      }}
    >
      <Stack w='full' align='center' spacing={14}>
        <Logo />

        <Box w='full' as='nav' aria-label='Dashboard Navigation'>
          <List>
            {sidebarIcons.map((item) => (
              <SidebarItem key={item.label} item={item} expanded={expanded} />
            ))}
          </List>
        </Box>
      </Stack>

      <UserProfileWithInfo expanded={expanded} isDesktop={isDesktop} />
    </Stack>
  )
}

export default Sidebar
