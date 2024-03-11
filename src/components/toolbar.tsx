import { Flex, HStack } from "@chakra-ui/layout"
import { Button } from "@chakra-ui/button"

import IconButtonWithTooltip from "./icon-button-with-tooltip"

const Toolbar = () => (
  <Flex
    direction={{ base: "column-reverse", sm: "row" }}
    gap={4}
    w='full'
    justify='space-between'
    bgColor='white'
    p={8}
  >
    <Button leftIcon={<i className='icon-gears-arrows-rotate' />}>
      Operational (9)
    </Button>

    <HStack justify={{ base: "space-between" }}>
      <IconButtonWithTooltip
        icon={<i className='icon-ellipsis' />}
        label='More Options'
      />
      <IconButtonWithTooltip
        icon={<i className='icon-filter' />}
        label='Filters'
      />
      <IconButtonWithTooltip
        icon={<i className='icon-grid-plus-2' />}
        label='Widgets'
      />
    </HStack>
  </Flex>
)

export default Toolbar
