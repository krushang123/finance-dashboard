import { Flex, HStack } from "@chakra-ui/layout"
import { Button } from "@chakra-ui/button"
import { RiSettings3Line } from "react-icons/ri"
import { BiDotsHorizontalRounded } from "react-icons/bi"
import { FiFilter } from "react-icons/fi"
import { MdDashboardCustomize } from "react-icons/md"

import IconButtonWithTooltip from "./icon-button-with-tooltip"

const Toolbar = () => (
  <Flex w='full' justify='space-between' bgColor='white' p={8}>
    <Button leftIcon={<RiSettings3Line />}>Operational (9)</Button>

    <HStack>
      <IconButtonWithTooltip
        icon={<BiDotsHorizontalRounded />}
        label='More Options'
      />
      <IconButtonWithTooltip icon={<FiFilter />} label='Filters' />
      <IconButtonWithTooltip icon={<MdDashboardCustomize />} label='Widgets' />
    </HStack>
  </Flex>
)

export default Toolbar
