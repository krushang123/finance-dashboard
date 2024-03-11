import { ListItem, Text, HStack, useBreakpointValue } from "@chakra-ui/react"
import { Tooltip } from "@chakra-ui/tooltip"

import { type SidebarIcon } from "../../constants/sidebar-icons"

interface SidebarItemProps {
  item: SidebarIcon
}

const SidebarItem = (props: SidebarItemProps) => {
  const { item } = props

  const isDesktop = Boolean(
    useBreakpointValue({ base: false, lg: true }, { ssr: false }),
  )

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
        w: isActive ? "8px" : "0px",
        h: "auto",
        left: { base: "-8", lg: "-2.5" },
        top: 0,
        bottom: 0,
        bg: "#2194FF",
      }}
      opacity={isActive ? 0.8 : 1}
      bgColor={isActive ? "blue.700" : "transparent"}
    >
      <Tooltip label={item.label} placement='right' hasArrow>
        <HStack spacing={4}>
          {/* <Icon
            as={item.icon}
            fontSize={{ base: "2xl", lg: "xl", "2xl": "2xl" }}
            aria-label={item.label}
          /> */}

          <i className={item.icon} style={{ fontSize: "20px" }} />

          <Text
            w='full'
            fontSize='13px'
            textAlign={{ base: "left", lg: "center" }}
            textTransform='capitalize'
            hidden={isDesktop}
          >
            {item.label}
          </Text>
        </HStack>
      </Tooltip>
    </ListItem>
  )
}

export default SidebarItem
