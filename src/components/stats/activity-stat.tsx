import { VStack, Text } from "@chakra-ui/layout"
import { HiOutlinePresentationChartLine } from "react-icons/hi"

import IconSquare from "components/icon-square"
import StatContainer from "./stat-container"

const ActivityStat = () => (
  <StatContainer
    leftChildren={
      <VStack align='flex-start'>
        <Text fontWeight='semibold' color='#7E8B9F'>
          Total Activity
        </Text>

        <Text fontSize='4xl' fontWeight='bold'>
          123.321
        </Text>
      </VStack>
    }
    rightChildren={<IconSquare icon={HiOutlinePresentationChartLine} />}
  />
)

export default ActivityStat
