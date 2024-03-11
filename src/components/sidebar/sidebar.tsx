import { Box, List, Stack } from "@chakra-ui/layout"
import { Avatar } from "@chakra-ui/avatar"

import { sidebarIcons } from "constants/sidebar-icons"
import SidebarItem from "./sidebar-item"

interface SidebarProps {
  sidebarWidth?: string
}

const Sidebar = (props: SidebarProps) => {
  const { sidebarWidth } = props

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
      w={{ base: "full", lg: sidebarWidth }}
      h={{ base: "auto", lg: "fit-content" }}
      minH={{ base: "100vh", lg: "100vh" }}
      py={6}
      px={{ base: 0, lg: 2 }}
      boxShadow={{ base: "none", lg: "xl" }}
      bgColor='#002874'
      align='center'
      justify='space-between'
    >
      <Box w='full' as='nav' aria-label='Dashboard Navigation'>
        <List>
          {sidebarIcons.map((item) => (
            <SidebarItem key={item.label} item={item} />
          ))}
        </List>
      </Box>

      <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
    </Stack>
  )
}

export default Sidebar
