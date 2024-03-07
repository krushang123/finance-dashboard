import { Icon } from "@chakra-ui/icon"
import { ListItem, Flex, Text } from "@chakra-ui/react"
import { Tooltip } from "@chakra-ui/tooltip"

import { type SidebarIcon } from "../../constants/sidebar-icons"

interface SidebarItemProps {
  item: SidebarIcon
}

const SidebarItem = (props: SidebarItemProps) => {
  const { item } = props

  const isActive = item.label === "Operational"

  return (
    <ListItem
      key={item.label}
      position='relative'
      color='white'
      p={4}
      _after={{
        content: "''",
        position: "absolute",
        w: isActive ? "12px" : "0px",
        h: "auto",
        left: "-2.5",
        top: 0,
        bottom: 0,
        bg: "#2194FF",
      }}
    >
      <Tooltip label={item.label} placement='right' hasArrow>
        <Flex display='block' w='full' alignItems='center' direction='column'>
          <Icon
            w='full'
            as={item.icon}
            fontSize='2xl'
            aria-label={item.label}
          />

          <Text
            w='full'
            fontSize='xs'
            fontWeight='bold'
            textAlign='center'
            textTransform='capitalize'
            hidden
          >
            {item.label}
          </Text>
        </Flex>
      </Tooltip>
    </ListItem>
  )
}

export default SidebarItem
