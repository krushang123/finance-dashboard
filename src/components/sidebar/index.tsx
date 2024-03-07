import { Box, List, Stack } from "@chakra-ui/layout"

import { sidebarIcons } from "constants/sidebar-icons"
import SidebarItem from "./sidebar-item"

interface SidebarProps {
  sidebarWidth: string
}

const Sidebar = (props: SidebarProps) => {
  const { sidebarWidth } = props

  return (
    <Stack
      as='aside'
      aria-label='Dashboard Sidebar'
      spacing={10}
      textAlign='center'
      pos='sticky'
      top={0}
      bottom={0}
      left={0}
      zIndex='banner'
      w={sidebarWidth}
      minH='100vh'
      py={2}
      boxShadow='2xl'
      bgColor='#002874'
    >
      <Box as='nav' aria-label='Dashboard Navigation'>
        <List>
          {sidebarIcons.map((item) => (
            <SidebarItem key={item.label} item={item} />
          ))}
        </List>
      </Box>
    </Stack>
  )
}

export default Sidebar
