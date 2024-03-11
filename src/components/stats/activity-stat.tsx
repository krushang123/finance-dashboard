import { VStack, Text } from "@chakra-ui/layout"

import IconSquare from "components/icon-square"
import StatContainer from "./stat-container"

const ActivityStat = () => (
  <StatContainer
    leftChildren={
      <VStack align='flex-start'>
        <Text fontSize='14px' fontWeight='semibold' color='#7E8B9F'>
          Total Activity
        </Text>

        <Text fontSize='26px' fontWeight='bold'>
          123.321
        </Text>
      </VStack>
    }
    rightChildren={<IconSquare icon='icon-activity' />}
  />
)

export default ActivityStat
